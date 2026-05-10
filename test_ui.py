from playwright.sync_api import sync_playwright
import time

def test_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile view for menu toggle testing
        context = browser.new_context(viewport={'width': 375, 'height': 812})
        page = context.new_page()

        page.goto('http://localhost:8000', wait_until='commit')
        time.sleep(1) # wait for render

        # Test 1: aria-hidden
        typewriter = page.locator('.hero-typewriter')
        assert typewriter.get_attribute('aria-hidden') == 'true', "typewriter should be hidden"

        visual = page.locator('.contact-visual')
        assert visual.get_attribute('aria-hidden') == 'true', "contact visual should be hidden"

        # Test 2: mobile menu
        toggle = page.locator('#nav-toggle')
        assert toggle.get_attribute('aria-expanded') == 'false', "menu should be closed"

        toggle.click()
        time.sleep(0.5)
        assert toggle.get_attribute('aria-expanded') == 'true', "menu should be open"
        assert page.locator('#nav-links').evaluate("el => el.classList.contains('active')"), "links should be active"

        # hit escape
        page.keyboard.press('Escape')
        time.sleep(0.5)

        assert toggle.get_attribute('aria-expanded') == 'false', "menu should be closed by esc"
        assert not page.locator('#nav-links').evaluate("el => el.classList.contains('active')"), "links should not be active"

        # Test 3: scrollspy
        page.evaluate("window.scrollTo(0, document.querySelector('#experience').offsetTop)")
        time.sleep(1)

        nav_exp = page.locator('.nav-link[href="#experience"]')
        assert nav_exp.get_attribute('aria-current') == 'page', "experience should be active page"

        print("All UI tests passed successfully!")
        browser.close()

if __name__ == "__main__":
    test_ui()
