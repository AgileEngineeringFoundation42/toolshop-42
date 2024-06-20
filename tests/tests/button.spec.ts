import { test, expect } from '@playwright/test';

test.describe('Increment and Decrement Button Test', () => {
  test('should increment and decrement the value correctly', async ({ page }) => {
    // Navigate to the target page
    await page.goto('https://practicesoftwaretesting.com');
     
    // Wait for the image element to be present and visible
    const imageSelector = 'img[src="assets/img/products/pliers01.jpeg"]';
    await page.waitForSelector(imageSelector);
    const imageElement = page.locator(imageSelector);
    
    // Ensure the image element is visible
    const isImageVisible = await imageElement.isVisible();
    if (!isImageVisible) {
      throw new Error('Image element not visible');
    }

    // Click the image element
    await imageElement.click();

    // Locate the elements
    const incrementButton = page.locator('#btn-increase-quantity'); // Replace with the actual selector
    const decrementButton = page.locator('#btn-decrease-quantity'); // Replace with the actual selector
    const valueElement = page.locator('#quantity-input'); // Replace with the actual selector

    // Wait for the increment and decrement buttons to be present
    await page.waitForSelector('#btn-increase-quantity');
    await page.waitForSelector('#btn-decrease-quantity');
    await page.waitForSelector('#quantity-input');

    // Function to get the value as a number
    const getValue = async () => {
      const valueText = await valueElement.inputValue();
      return valueText !== null ? parseInt(valueText) : NaN;
    };

    // Get the initial value
    const initialValueNumber = await getValue();
    expect(isNaN(initialValueNumber)).toBe(false); // Ensure initial value is a valid number

    // Click the increment button and check the value
    await incrementButton.click();
    const incrementedValueNumber = await getValue();
    expect(incrementedValueNumber).toBe(initialValueNumber + 1);

    // Click the decrement button and check the value
    await decrementButton.click();
    const decrementedValueNumber = await getValue();
    expect(decrementedValueNumber).toBe(initialValueNumber);

    // Optionally, take a screenshot after each action
    await page.screenshot({ path: 'playwright-report/after_increment.png' });
    await page.screenshot({ path: 'playwright-report/after_decrement.png' });
  });
});

