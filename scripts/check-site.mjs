import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "..");
const failures = [];

const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  if ([".git", "node_modules"].includes(entry.name)) return [];
  const fullPath = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(fullPath) : [fullPath];
});

const files = walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const fail = (file, message) => failures.push(`${path.relative(root, file)}: ${message}`);
const attributes = (html, name) => [...html.matchAll(new RegExp(`\\b${name}\\s*=\\s*["']([^"']+)["']`, "gi"))].map((match) => match[1]);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const ids = attributes(html, "id");
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);

  if (!/^<!doctype html>/i.test(html.trimStart())) fail(file, "missing HTML doctype");
  if (!/<html\b[^>]*\blang=["']en["']/i.test(html)) fail(file, "missing lang=\"en\"");
  if (!/<title>[^<]+<\/title>/i.test(html)) fail(file, "missing page title");
  if (!/<meta\b[^>]*\bname=["']description["']/i.test(html)) fail(file, "missing meta description");
  if (!/<link\b[^>]*\brel=["']canonical["']/i.test(html)) fail(file, "missing canonical link");
  if ((html.match(/\bid=["']main-content["']/gi) || []).length !== 1) fail(file, "main-content must occur exactly once");
  if (duplicateIds.length) fail(file, `duplicate IDs: ${[...new Set(duplicateIds)].join(", ")}`);
  if (/home address|autocomplete=["']street-address/i.test(html)) fail(file, "contact form requests a home address");

  for (const img of html.match(/<img\b[^>]*>/gi) || []) {
    if (!/\balt=["'][^"']*["']/i.test(img)) fail(file, `image missing alt text: ${img.slice(0, 90)}`);
  }

  for (const control of attributes(html, "aria-controls")) {
    if (!ids.includes(control)) fail(file, `aria-controls references missing #${control}`);
  }

  for (const block of html.match(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || []) {
    const json = block.replace(/^<script[^>]*>/i, "").replace(/<\/script>$/i, "");
    try { JSON.parse(json); } catch { fail(file, "invalid JSON-LD"); }
  }

  for (const rawReference of [...attributes(html, "href"), ...attributes(html, "src")]) {
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(rawReference)) continue;
    const [reference, fragment] = rawReference.split("#");
    const cleanReference = reference.split("?")[0];
    const target = cleanReference ? path.resolve(path.dirname(file), cleanReference) : file;
    const resolved = fs.existsSync(target) && fs.statSync(target).isDirectory() ? path.join(target, "index.html") : target;
    if (!fs.existsSync(resolved)) {
      fail(file, `missing local target: ${rawReference}`);
      continue;
    }
    if (fragment && resolved.endsWith(".html")) {
      const targetHtml = fs.readFileSync(resolved, "utf8");
      if (!attributes(targetHtml, "id").includes(fragment)) fail(file, `missing anchor target: ${rawReference}`);
    }
  }
}

for (const cssFile of files.filter((file) => file.endsWith(".css"))) {
  const css = fs.readFileSync(cssFile, "utf8");
  if (css.includes("!important")) fail(cssFile, "contains !important");
  if (css.includes(":has(")) fail(cssFile, "contains :has() without a fallback");
  if (/overflow-x\s*:\s*clip/i.test(css)) fail(cssFile, "globally hides horizontal overflow");
  for (const match of css.matchAll(/@media[^\{]*\(max-width\s*:\s*(\d+)px\)/gi)) {
    const width = Number(match[1]);
    if (![980, 760, 520, 390].includes(width)) fail(cssFile, `non-standard max-width breakpoint: ${width}px`);
  }
}

try {
  execFileSync(process.execPath, ["--check", path.join(root, "js", "main.js")], { stdio: "pipe" });
} catch (error) {
  failures.push(`js/main.js: ${error.stderr?.toString().trim() || "syntax check failed"}`);
}

if (failures.length) {
  console.error(`Site check failed with ${failures.length} issue(s):\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Site check passed: ${htmlFiles.length} HTML files, internal links, metadata, accessibility references, CSS policy and JavaScript syntax.`);
