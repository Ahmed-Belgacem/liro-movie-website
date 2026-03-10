import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divi" />

      <div className="footer-inside">

        <div className="footer-log">
          <div className="footer-logo">
            <div className="footer-text">
              <span className="footer-brand">LIRO<span className="footer-brand-mix">LIRO</span></span>
              <span className="footer-sub">Watch Anywhere. Anytime.</span>
            </div>
          </div>
          <p className="desc">
            Your ultimate destination for movies, series, and anime. Unlimited entertainment, one subscription.
          </p>
          <div className="footer-socials">
            <div className="social-btn">f</div>
            <div className="social-btn">𝕏</div>
            <div className="social-btn">◎</div>
            <div className="social-btn">▶</div>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">EXPLORE</h4>
          <a href="/" className="footer-link">Home</a>
          <a href="/" className="footer-link">Movies</a>
          <a href="/" className="footer-link">TV Shows</a>
          <a href="/" className="footer-link">Anime</a>
          <a href="/" className="footer-link">New & Popular</a>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">ACCOUNT</h4>
          <a href="/" className="footer-link">My List</a>
          <a href="/" className="footer-link">Profile</a>
          <a href="/" className="footer-link">Subscription</a>
          <a href="/" className="footer-link">Billing</a>
          <a href="/" className="footer-link">Settings</a>
        </div>

        <div className="footer-links">
          <h4 className="footer-links-title">SUPPORT</h4>
          <div className="footer-contact-item">
            <span className="contact-icon">💬</span>
            <span>Live Chat Support</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">📧</span>
            <span>support@streamix.com</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">📱</span>
            <span>Available on iOS & Android</span>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">🌐</span>
            <span>Available in 190+ countries</span>
          </div>
        </div>

      </div>

      <div className="footer-divider" />

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 STREAMIX. All rights reserved.</span>
        <div className="footer-legal">
          <a href="/" className="footer-legal-link">Privacy Policy</a>
          <a href="/" className="footer-legal-link">Terms of Service</a>
          <a href="/" className="footer-legal-link">Cookie Policy</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;