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

/*import {test, expect} from '@playwright/test';

test.describe('sort test', () => {

    test('Checksort', async ({page}) => {
        await page.goto('http://109.176.250.87:4200/#/');

    // Locate the element
    const element = await page.$('<option _ngcontent-bxg-c76="" value="" ng-reflect-value=""></option><option _ngcontent-bxg-c76="" value="name,desc" ng-reflect-value="name,desc">Name (A - Z)</option><option _ngcontent-bxg-c76="" value="name,asc" ng-reflect-value="name,asc">Name (Z - A)</option><option _ngcontent-bxg-c76="" value="price,asc" ng-reflect-value="price,asc">Price (High - Low)</option><option _ngcontent-bxg-c76="" value="price,desc" ng-reflect-value="price,desc">Price (Low - High)</option>');

    // Assert the element exists
    expect(element).not.toBeNull();
    await page.screenshot({ path: 'playwright-report/logo_screenshot.png' });
    });

});*/