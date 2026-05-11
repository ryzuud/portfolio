from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)

    # Test 1: Mobile menu escape key
    context_mobile = browser.new_context(viewport={'width': 375, 'height': 812})
    page_mobile = context_mobile.new_page()

    # Use domcontentloaded because of the canvas particles animation that might block full network idle
    page_mobile.goto("http://localhost:8000", wait_until="domcontentloaded")

    # Wait for the mobile toggle to be visible
    page_mobile.wait_for_selector('#nav-toggle')

    # Click to open menu
    page_mobile.click('#nav-toggle')

    # Wait a bit for the transition
    page_mobile.wait_for_timeout(500)

    # Verify it's open
    expanded = page_mobile.get_attribute('#nav-toggle', 'aria-expanded')
    print(f"Mobile menu opened, aria-expanded: {expanded}")
    assert expanded == 'true'

    # Press Escape
    page_mobile.keyboard.press('Escape')

    # Wait a bit for the transition
    page_mobile.wait_for_timeout(500)

    # Verify it's closed
    expanded_after = page_mobile.get_attribute('#nav-toggle', 'aria-expanded')
    print(f"Mobile menu closed via Escape, aria-expanded: {expanded_after}")
    assert expanded_after == 'false'

    context_mobile.close()

    # Test 2: Scrollspy aria-current sync
    context_desktop = browser.new_context(viewport={'width': 1280, 'height': 800})
    page_desktop = context_desktop.new_page()
    page_desktop.goto("http://localhost:8000", wait_until="domcontentloaded")

    # Initial state (should be hero or nothing active)
    # Scroll down to #experience
    print("Scrolling to #experience...")
    page_desktop.evaluate("document.getElementById('experience').scrollIntoView()")

    # The scroll event listener triggers on scroll, we need to dispatch a scroll event if scrollIntoView doesn't trigger it smoothly in headless
    page_desktop.evaluate("window.dispatchEvent(new Event('scroll'))")
    page_desktop.wait_for_timeout(500)

    # Find the link for #experience
    aria_current_exp = page_desktop.get_attribute('a[href="#experience"]', 'aria-current')
    print(f"#experience link aria-current: {aria_current_exp}")
    assert aria_current_exp == 'page'

    # Find the link for #about (should not have it)
    aria_current_about = page_desktop.get_attribute('a[href="#about"]', 'aria-current')
    print(f"#about link aria-current: {aria_current_about}")
    assert aria_current_about is None

    print("All tests passed successfully!")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
