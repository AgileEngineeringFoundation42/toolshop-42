import {test, expect} from '@playwright/test';

test('Typo_test', async ({ page }) => {
    // Navigate to the target page
    await page.goto('https://with-bugs.practicesoftwaretesting.com/#/product/1');

    // Locate the element with text "HOME"
    const homeElement = await page.locator('text=Related');

    // Assert the element exists and is visible
    await expect(homeElement).toBeVisible();

    // Optionally, take a screenshot
    await page.screenshot({ path: 'playwright-report/Related_products.png' });
  });
