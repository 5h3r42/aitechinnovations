const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = Number(process.env.PORT || 4173);
const routes = {
  "/": "index.html",
  "/ai-automation-services": "ai-automation-services.html",
  "/ai-chatbot-development": "ai-chatbot-development.html",
  "/ai-lead-generation-automation": "ai-lead-generation-automation.html",
  "/crm-automation-services": "crm-automation-services.html",
  "/appointment-booking-automation": "appointment-booking-automation.html",
  "/free-ai-audit": "free-ai-audit.html",
  "/free-strategy-call": "free-strategy-call.html",
  "/website-content-services": "website-content-services.html",
  "/ads-setup-services": "ads-setup-services.html",
  "/blog": "blog.html",
  "/blog/how-small-businesses-use-ai": "blog-how-small-businesses-use-ai.html",
  "/blog/what-is-ai-workflow-automation": "blog-what-is-ai-workflow-automation.html",
  "/blog/ai-chatbots-for-customer-service": "blog-ai-chatbots-for-customer-service.html",
  "/privacy": "privacy.html",
  "/terms": "terms.html",
};
const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

http
  .createServer((request, response) => {
    const requestUrl = new URL(request.url, `http://${request.headers.host || "localhost"}`);
    const routePath = requestUrl.pathname.replace(/\/$/, "") || "/";
    const requestedFile = routes[routePath] || routePath.replace(/^\//, "");
    const filePath = path.resolve(root, requestedFile);

    if (!filePath.startsWith(`${root}${path.sep}`) && filePath !== path.join(root, "index.html")) {
      response.writeHead(403).end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, content) => {
      if (error) {
        response.writeHead(error.code === "ENOENT" ? 404 : 500, { "Content-Type": "text/plain; charset=utf-8" });
        response.end(error.code === "ENOENT" ? "Not found" : "Server error");
        return;
      }

      response.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
      response.end(content);
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`Static site available at http://127.0.0.1:${port}`);
  });
