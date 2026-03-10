// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

const FILE_URL = 'file://' + path.resolve(__dirname, '../index.html');

test.beforeEach(async ({ page }) => {
  await page.goto(FILE_URL);
});

// ─── Page basics ────────────────────────────────────────────
test('page has correct title', async ({ page }) => {
  await expect(page).toHaveTitle('Vibe Coding for Product Designers');
});

// ─── Navigation ─────────────────────────────────────────────
test('main nav is fixed to top of screen', async ({ page }) => {
  const nav = page.locator('#main-nav');
  const position = await nav.evaluate(el => getComputedStyle(el).position);
  expect(position).toBe('fixed');
});

test('main nav has correct top offset', async ({ page }) => {
  const nav = page.locator('#main-nav');
  const top = await nav.evaluate(el => getComputedStyle(el).top);
  expect(top).toBe('0px');
});

test('nav logo links to #hero', async ({ page }) => {
  const logo = page.locator('.nav-logo');
  await expect(logo).toHaveAttribute('href', '#hero');
});

test('nav links point to correct section anchors', async ({ page }) => {
  const expectedHrefs = ['#what', '#tools', '#steps', '#projects', '#mindset'];
  const links = page.locator('.nav-links a');
  const count = await links.count();
  expect(count).toBe(expectedHrefs.length);
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toHaveAttribute('href', expectedHrefs[i]);
  }
});

test('nav gains scrolled class after scrolling down', async ({ page }) => {
  const nav = page.locator('#main-nav');
  await expect(nav).not.toHaveClass(/scrolled/);
  await page.evaluate(() => window.scrollTo(0, 100));
  await expect(nav).toHaveClass(/scrolled/);
});

// ─── Footer nav not sticky ───────────────────────────────────
test('footer-links nav is not fixed or sticky', async ({ page }) => {
  const footerNav = page.locator('.footer-links');
  const position = await footerNav.evaluate(el => getComputedStyle(el).position);
  expect(position).not.toBe('fixed');
  expect(position).not.toBe('sticky');
});

test('footer-links is positioned static', async ({ page }) => {
  const footerNav = page.locator('.footer-links');
  const position = await footerNav.evaluate(el => getComputedStyle(el).position);
  expect(position).toBe('static');
});

// ─── Sections ────────────────────────────────────────────────
test('all five sections are present', async ({ page }) => {
  for (const id of ['hero', 'what', 'tools', 'steps', 'projects', 'mindset']) {
    await expect(page.locator(`#${id}`)).toBeVisible();
  }
});

// ─── Footer ──────────────────────────────────────────────────
test('footer contains three resource links', async ({ page }) => {
  const links = page.locator('.footer-links a');
  await expect(links).toHaveCount(3);
});

test('footer links open in new tab', async ({ page }) => {
  const links = page.locator('.footer-links a');
  const count = await links.count();
  for (let i = 0; i < count; i++) {
    await expect(links.nth(i)).toHaveAttribute('target', '_blank');
    await expect(links.nth(i)).toHaveAttribute('rel', 'noopener');
  }
});

// ─── Hero ────────────────────────────────────────────────────
test('hero heading is visible', async ({ page }) => {
  await expect(page.locator('#hero-heading')).toBeVisible();
});

test('hero fade-in elements are visible on load (no scroll needed)', async ({ page }) => {
  const heroFadeIns = page.locator('#hero .fade-in');
  const count = await heroFadeIns.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    await expect(heroFadeIns.nth(i)).toHaveClass(/visible/);
  }
});

// ─── Tools section ───────────────────────────────────────────
test('tools section has two tool cards', async ({ page }) => {
  await expect(page.locator('.tool-card')).toHaveCount(2);
});

// ─── Steps section ───────────────────────────────────────────
test('steps section has five steps', async ({ page }) => {
  await expect(page.locator('.step')).toHaveCount(5);
});

// ─── Projects section ────────────────────────────────────────
test('projects section has four project cards', async ({ page }) => {
  await expect(page.locator('.project-card')).toHaveCount(4);
});

// ─── Mindset section ─────────────────────────────────────────
test('mindset section has five tips', async ({ page }) => {
  await expect(page.locator('.tip')).toHaveCount(5);
});
