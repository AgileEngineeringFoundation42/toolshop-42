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