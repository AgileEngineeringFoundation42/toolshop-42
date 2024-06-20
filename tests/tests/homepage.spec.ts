import {test, expect} from '@playwright/test';

test.describe('Logo test', () => {

    test('CheckLogo', async ({page}) => {
        await page.goto('http://109.176.250.87:4200/#/');

    // Locate the element
    const element = await page.$('img[src="assets/img/roysroys-logo.png"]');

    // Assert the element exists
    expect(element).not.toBeNull();
    await page.screenshot({ path: 'playwright-report/logo_screenshot.png' });
    });

});

import { test1, texts } from '@playwright/test';

const testCases = [
  { name: 'Home', text: 'Home', screenshot: 'home_element.png' },
  { name: 'Categories', text: 'Categories', screenshot: 'categories_element.png' },
  { name: 'Push', text: 'On push', screenshot: 'push_element.png' },
  { name: 'Signin', text: 'Sign in', screenshot: 'signin_element.png' },
  { name: 'Sort', text: 'hehihu', screenshot: 'sort_element.png' },
];

testCases.forEach(({ name, text, screenshot }) => {
  test(`${name}_test`, async ({ page }) => {
    try {
      // Navigate to the target page
      await page.goto('http://109.176.250.87:4200/#/');

      // Locate the element with the specified text
      const element = await page.locator(`text=${text}`);

      // Assert the element exists and is visible
      await expect(element).toBeVisible();

      console.log(`PASS: ${name}_test - Element with text "${text}" is visible`);

      // Optionally, take a screenshot
      await page.screenshot({ path: `playwright-report/${screenshot}` });

    } catch (error) {
      console.error(`FAIL: ${name}_test - Error: ${error.message}`);
      
      // Take a screenshot on failure for debugging
      await page.screenshot({ path: `playwright-report/${name}_error.png` });

      // Re-throw the error to ensure the test fails
      throw error;
    }
  });
});



/*import { test1, Home } from '@playwright/test';

test('Home_test', async ({ page }) => {
  // Navigate to the target page
  await page.goto('http://109.176.250.87:4200/#/');

  // Locate the element with text "HOME"
  const homeElement = await page.locator('text=Home');

  // Assert the element exists and is visible
  await expect(homeElement).toBeVisible();

  // Optionally, take a screenshot
  await page.screenshot({ path: 'playwright-report/home_element.png' });
});

import { test2, Categories } from '@playwright/test';

test('Categories_test', async ({ page }) => {
  // Navigate to the target page
  await page.goto('http://109.176.250.87:4200/#/');

  // Locate the element with text "Catogories"
  const homeElement = await page.locator('text=Categories');

  // Assert the element exists and is visible
  await expect(homeElement).toBeVisible();

  // Optionally, take a screenshot
  await page.screenshot({ path: 'playwright-report/home_element.png' });
});

import { test3, Push } from '@playwright/test';

test('Push_test', async ({ page }) => {
  // Navigate to the target page
  await page.goto('http://109.176.250.87:4200/#/');

  // Locate the element with text "push"
  const homeElement = await page.locator('text=On push');

  // Assert the element exists and is visible
  await expect(homeElement).toBeVisible();

  // Optionally, take a screenshot
  await page.screenshot({ path: 'playwright-report/home_element.png' });
});

import { test4, Signin } from '@playwright/test';

test('Signin_test', async ({ page }) => {
  // Navigate to the target page
  await page.goto('http://109.176.250.87:4200/#/');

  // Locate the element with text "Signin"
  const homeElement = await page.locator('text=Sign in');

  // Assert the element exists and is visible
  await expect(homeElement).toBeVisible();

  // Optionally, take a screenshot
  await page.screenshot({ path: 'playwright-report/home_element.png' });
});

import { test5, Sort } from '@playwright/test';

test('Sort', async ({ page }) => {
  // Navigate to the target page
  await page.goto('http://109.176.250.87:4200/#/');

  // Locate the element with text "sort"
  const homeElement = await page.locator('text=Sort');

  // Assert the element exists and is visible
  await expect(homeElement).toBeVisible();

  // Optionally, take a screenshot
  await page.screenshot({ path: 'playwright-report/home_element.png' });
});*/