module.exports = {
  ci: {
    collect: {
      startServerCommand: "npx http-server . -p 4173 -c-1",
      startServerReadyPattern: "Available on",
      url: [
        "http://127.0.0.1:4173/",
        "http://127.0.0.1:4173/about.html",
        "http://127.0.0.1:4173/services.html",
        "http://127.0.0.1:4173/contact.html"
      ],
      numberOfRuns: 1
    },
    assert: {
      assertions: {
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "categories:best-practices": ["warn", { "minScore": 0.85 }],
        "categories:performance": ["warn", { "minScore": 0.8 }],
        "categories:seo": ["error", { "minScore": 0.9 }]
      }
    },
    upload: {
      target: "filesystem",
      outputDir: "./lighthouse-reports"
    }
  }
};
