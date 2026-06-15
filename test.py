from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    page.goto('http://localhost:3000', wait_until='domcontentloaded')

    # Take screenshot of the hero section
    hero = page.locator('#hero')
    hero.screenshot(path='hero.png')

    # Scroll to and take screenshot of the contact section (with terminal)
    contact = page.locator('#contact')
    contact.scroll_into_view_if_needed()
    contact.screenshot(path='contact.png')

    browser.close()
