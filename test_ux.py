import asyncio
from playwright.async_api import async_playwright

async def run_test():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Test 1: Desktop - aria-current sync
        page = await browser.new_page()
        # Navigate and wait for DOM load
        await page.goto('http://localhost:8000', wait_until='domcontentloaded')

        # Check initial state (Hero section is active initially in most templates, but let's scroll to about)
        await page.evaluate("window.scrollTo(0, document.getElementById('about').offsetTop)")
        await page.wait_for_timeout(500) # wait for scroll event

        about_link = page.locator('a[href="#about"]')
        aria_current = await about_link.get_attribute('aria-current')
        print(f"About link aria-current: {aria_current}")
        assert aria_current == 'true'

        await page.evaluate("window.scrollTo(0, document.getElementById('experience').offsetTop)")
        await page.wait_for_timeout(500)

        exp_link = page.locator('.nav-link[href="#experience"]')
        aria_current_exp = await exp_link.get_attribute('aria-current')
        print(f"Experience link aria-current: {aria_current_exp}")
        assert aria_current_exp == 'true'

        aria_current_about = await about_link.get_attribute('aria-current')
        print(f"About link aria-current after scroll: {aria_current_about}")
        assert aria_current_about is None

        await page.close()

        # Test 2: Mobile - Escape key closes menu
        context = await browser.new_context(viewport={'width': 375, 'height': 812})
        mobile_page = await context.new_page()
        await mobile_page.goto('http://localhost:8000', wait_until='domcontentloaded')

        toggle = mobile_page.locator('#nav-toggle')
        menu = mobile_page.locator('#nav-links')

        # Open menu
        await toggle.click()
        await mobile_page.wait_for_timeout(500) # Wait for animation

        is_active = await menu.evaluate("el => el.classList.contains('active')")
        print(f"Menu is active after click: {is_active}")
        assert is_active is True

        # Press Escape
        await mobile_page.keyboard.press('Escape')
        await mobile_page.wait_for_timeout(500) # Wait for animation

        is_active_after_esc = await menu.evaluate("el => el.classList.contains('active')")
        print(f"Menu is active after Escape: {is_active_after_esc}")
        assert is_active_after_esc is False

        # Check focus
        focused_id = await mobile_page.evaluate("document.activeElement.id")
        print(f"Focused element ID after Escape: {focused_id}")
        assert focused_id == 'nav-toggle'

        await browser.close()
        print("All tests passed!")

asyncio.run(run_test())
