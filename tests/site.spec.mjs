import { test, expect } from '@playwright/test';
import { routes } from '../data/site.js';

test.describe('sitemap and runtime', () => {
  for (const route of routes) {
    test(`${route} returns a usable document`, async ({ page }) => {
      const errors = [];
      const failed = [];
      page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });
      page.on('requestfailed', req => failed.push(`${req.method()} ${req.url()} ${req.failure()?.errorText}`));
      const response = await page.goto(route, { waitUntil: 'networkidle' });
      expect(response?.status(), route).toBe(200);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(errors, `console errors on ${route}`).toEqual([]);
      expect(failed.filter(x => x.startsWith('GET ') && !x.includes('favicon')), `failed GET requests on ${route}`).toEqual([]);
    });
  }

  test('unknown URL returns branded 404 and HTTP 404', async ({ page }) => {
    const response = await page.goto('/definitely-not-a-real-page/');
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { name: 'Вернёмся к проекту вашей квартиры' })).toBeVisible();
  });
});

test.describe('responsive and interactions', () => {
  for (const width of [360, 390, 430, 768, 1366, 1600]) {
    test(`home has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: width < 500 ? 800 : 900 });
      await page.goto('/');
      const sizes = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, client: document.documentElement.clientWidth }));
      expect(sizes.scroll).toBeLessThanOrEqual(sizes.client + 1);
    });
  }

  test('mobile menu, keyboard focus, calculator and form validation work', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const menu = page.getByRole('button', { name: 'Открыть меню' });
    await menu.click();
    await expect(page.getByRole('navigation', { name: 'Мобильная навигация' })).toBeVisible();
    await page.keyboard.press('Escape');
    await menu.click();
    await page.getByRole('link', { name: 'Получить расчёт' }).last().click();
    await expect(page).toHaveURL(/calculator/);
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).not.toBe('BODY');
    await page.getByRole('button', { name: /Продолжить/ }).click();
    await expect(page.getByRole('heading', { name: 'Тип объекта' })).toBeVisible();
    await page.goto('/contacts/');
    await page.getByRole('button', { name: /Подготовить запрос/ }).click();
    await expect(page.getByText('Укажите имя')).toBeVisible();
    await expect(page.getByText('Укажите телефон или мессенджер')).toBeVisible();
  });

  test('reduced motion disables hero animation', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    const duration = await page.locator('.hero-media img').evaluate(el => getComputedStyle(el).animationDuration);
    expect(parseFloat(duration)).toBeLessThanOrEqual(0.00001);
  });

  test('capture visual QA screenshots', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto('/');
    await page.screenshot({ path: 'artifacts/home-desktop.png', fullPage: true });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.screenshot({ path: 'artifacts/home-mobile.png', fullPage: true });
    await page.goto('/calculator/');
    await page.screenshot({ path: 'artifacts/calculator-mobile.png', fullPage: true });
  });
});
