from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    # Emulate mobile viewport to make sure mobile menu is active
    context = browser.new_context(viewport={'width': 375, 'height': 812})
    page = context.new_page()

    page.goto('http://localhost:8000')

    # Wait for the nav toggle to be visible
    page.wait_for_selector('#nav-toggle')

    # Check that menu is initially closed
    assert not page.evaluate("document.getElementById('nav-links').classList.contains('active')")
    assert page.evaluate("document.getElementById('nav-toggle').getAttribute('aria-expanded')") == "false"

    # Click to open
    page.click('#nav-toggle')
    page.wait_for_function("document.getElementById('nav-links').classList.contains('active')")
    assert page.evaluate("document.getElementById('nav-toggle').getAttribute('aria-expanded')") == "true"

    # Press Escape
    page.keyboard.press('Escape')

    # Check that menu is closed
    page.wait_for_function("!document.getElementById('nav-links').classList.contains('active')")
    assert page.evaluate("document.getElementById('nav-toggle').getAttribute('aria-expanded')") == "false"

    # Check focus
    focus_id = page.evaluate("document.activeElement.id")
    assert focus_id == "nav-toggle", f"Expected focus on nav-toggle, got {focus_id}"

    print("Test passed successfully!")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
