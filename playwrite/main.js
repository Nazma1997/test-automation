const playwright = require('playwright');

// IIFE function
(async () => {
    //Code execution happens within in here
    const browser = await playwright["chromium"].launch({ headless: false });
    //Context
    const context = await browser.newContext();
    //page
    const page = await context.newPage();
    //navigate to the page
     await page.goto("https://fancy-babka-7c74fd.netlify.app")

})()