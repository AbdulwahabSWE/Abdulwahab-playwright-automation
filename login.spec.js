const { test, expect } = require('@playwright/test');

test.describe('Login Functionality', () => {

  // Test Case 1: Positive LogIn test
  test('Positive LogIn test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'Password123');
    await page.click('#submit');
    await expect(page).toHaveURL(/.*logged-in-successfully/);
  });

  // Test Case 2: Negative username test
  test('Negative username test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'incorrectUser');
    await page.fill('#password', 'Password123');
    await page.click('#submit');
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your username is invalid!');
  });

  //Test Case 3: Negative password test
  test('Negative password test', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.fill('#username', 'student');
    await page.fill('#password', 'incorrectPassword');
    await page.click('#submit');
    const errorMessage = page.locator('#error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Your password is invalid!');
  });

});