const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://github.com/honojs/middleware/tree/main/packages/esbuild-transpiler");

  const pageText = await page.evaluate(() => {
    return document.body.innerText; // Extract all text from the body
  });

  console.log(pageText); // Log all the text from the page
  await browser.close();
})();
