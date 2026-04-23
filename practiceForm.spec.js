const { test, expect } = require('@playwright/test');

test('Submit practice form', async ({ page }) => {
  // Go to the site
  await page.goto('https://demoqa.com/automation-practice-form');

  // Filling out the text inputs
  await page.fill('#firstName', 'John');
  await page.fill('#lastName', 'Doe');
  await page.fill('#userEmail', 'john@test.com');
  await page.fill('#userNumber', '1234567890');

  // Selecting choices
  await page.locator('label[for="gender-radio-1"]').click();
  await page.locator('label[for="hobbies-checkbox-1"]').click();

  // Submitting
  const btn = page.locator('#submit');
  await btn.scrollIntoViewIfNeeded();
  await btn.click();
  
  //AB
  // Check if it worked
  const result = page.locator('.modal-content');
  await expect(result).toBeVisible();
});