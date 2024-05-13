import {test, expect} from '@playwright/test';

test.describe('Login Feature', () => {

    test('DLogin_withValidUserCredentials_dasboardIsDisplayed', async ({page}) => {
        await page.goto('http://109.176.250.82:4200/#/auth/login');

        await page.screenshot({ path: 'playwright-report/screenshot.png' });

        await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();

    });

});
