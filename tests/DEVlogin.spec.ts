import {test, expect} from '@playwright/test';

test.describe('Login Feature', () => {

    test('DLogin_withValidUserCredentials_dasboardIsDisplayed', async ({page}) => {
        await page.goto('http://109.176.250.87:4200/#/auth/login');


        await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
        await page.locator('[data-test="password"]').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();

        await expect(page).toHaveURL("http://109.176.250.87:4200");
        await page.screenshot({ path: 'playwright-report/screenshot.png' });
    });

});

// test.describe('Profile Name Order', () => {

//     test('profile_name_order_test', async ({page}) => {
//         await page.goto('https://with-bugs.practicesoftwaretesting.com/#/account/profile');
//         await page.locator('#email').fill('customer2@practicesoftwaretesting.com');
//         await page.locator('#password').fill('welcome01');
//         await page.locator('[data-test="login-submit"]').click();

//         await page.goto('https://with-bugs.practicesoftwaretesting.com/#/account/profile');
//         const firstChild = await page.$('.col-lg-6 :first-child');
//         // Get the text of the first child element
//         if (firstChild)
//         {
//             const firstChildText = await firstChild.innerText();
//             expect(firstChildText).toBe('Last Name');
//         }
//         await page.screenshot({ path: 'playwright-report/screenshot.png' });
//     });

// });


test.describe('City Not Found', () => {

    test('city_not_found', async ({page}) => {
        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/account/profile');
        await page.locator('#email').fill('customer2@practicesoftwaretesting.com');
        await page.locator('#password').fill('welcome01');
        await page.locator('[data-test="login-submit"]').click();

        await page.goto('https://with-bugs.practicesoftwaretesting.com/#/account/profile');
        // await page.locator('#city').fill('welcome01');
        await page.locator('[data-test="nav-profile"]').click();
        const elm = await page.waitForSelector("#city");
        const value = await elm.inputValue();
        await page.screenshot({ path: 'playwright-report/screenshot.png' });
        expect(value).toBe("Berlin");
    });

});
