// Shared nav HTML
const NAV_HTML = `
<nav>
  <a class="nav-logo" href="/index.html">
    <img src="/Saral_rojgar_Icon_1__2_.png" alt="Saral Rojgar Logo"/>
    <span>Saral Rojgar</span>
  </a>
  <div class="nav-links">
    <a href="/index.html" id="nl-home">Home</a>
    <a href="/about.html" id="nl-about">About Us</a>
    <a href="/blog.html" id="nl-blog">Blog</a>
    <a href="/contact.html" id="nl-contact">Contact Us</a>
    <a href="https://play.google.com/store/apps/details?id=com.ratnawnai.RatNawnAI" target="_blank" class="nav-app-btn">
      <svg viewBox="0 0 24 24"><path d="M3.18 23.76c.3.17.63.24.97.21l12.92-11.88L13.42 8.4 3.18 23.76zm17.29-10.9L17.6 11.4l-3.5 3.22 3.5 3.22 2.91-1.59a1.67 1.67 0 0 0 0-3.4zM3 .27a1.65 1.65 0 0 0-.82 1.46v20.54c0 .62.31 1.14.82 1.43l.13.08 11.5-10.58v-.25L3.13.2 3 .27zm8.72 11.85L3.13 3.5v16.99l8.6-7.89-.01-.48z"/></svg>
      Download App
    </a>
  </div>
  <div class="hamburger" onclick="toggleMenu()"><span></span><span></span><span></span></div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="/index.html">Home</a>
  <a href="/about.html">About Us</a>
  <a href="/blog.html">Blog</a>
  <a href="/contact.html">Contact Us</a>
  <a href="https://play.google.com/store/apps/details?id=com.ratnawnai.RatNawnAI" target="_blank" class="nav-app-btn">Download App</a>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <div class="footer-brand">
        <img src="/Saral_rojgar_Icon_1__2_.png" alt="Saral Rojgar"/>
        <p>Simple jobs, real opportunities. Connecting India's workforce with small & medium businesses.</p>
      </div>
      <div class="footer-col">
        <h4>Pages</h4>
        <ul>
          <li><a href="/index.html">Home</a></li>
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/blog.html">Blog</a></li>
          <li><a href="/contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="/privacy.html">Privacy Policy</a></li>
          <li><a href="/terms.html">Terms & Conditions</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Download</h4>
        <ul>
          <li><a href="https://play.google.com/store/apps/details?id=com.ratnawnai.RatNawnAI" target="_blank">Google Play Store</a></li>
        </ul>
        <p style="font-size:.8rem;opacity:.5;margin-top:.75rem;">© 2025 Saral Rojgar Pvt. Ltd.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Made with ❤️ for Bharat</span>
      <div class="footer-links">
        <a href="/privacy.html">Privacy Policy</a>
        <a href="/terms.html">Terms & Conditions</a>
      </div>
    </div>
  </div>
</footer>`;

function initPage(activeId) {
  document.getElementById('nav-placeholder').innerHTML = NAV_HTML;
  document.getElementById('footer-placeholder').innerHTML = FOOTER_HTML;
  if (activeId) {
    const el = document.getElementById(activeId);
    if (el) el.classList.add('active');
  }
}
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
