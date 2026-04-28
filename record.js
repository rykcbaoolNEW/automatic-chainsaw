const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });

  const context = await browser.newContext({
    recordVideo: {
      dir: 'videos/',
      size: { width: 1280, height: 720 }
    }
  });

  const page = await context.newPage();


  await page.goto('https://vsembed.ru/embed/movie/687163');

  // await page.waitForTimeout(9392000);

  await page.waitForTimeout(20000);
  
  await browser.close();

  console.log("Recording complete");
})();
