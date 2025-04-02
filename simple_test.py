const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/chromium-browser', // Path to system Chromium
            headless: true, // Run in headless mode
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.goto('https://example.com');

        const title = await page.title();
        console.log('Page Title:', title);

        await browser.close();
    } catch (error) {
        console.error('Error launching Chromium:', error);
    }
})();
