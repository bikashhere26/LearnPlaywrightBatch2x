import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="primary-header"] span')).toContainText('TTACart');
  await expect(page.locator('[data-test="title"]')).toContainText('Products');
  await page.locator('[data-test="open-menu"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});