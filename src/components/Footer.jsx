import { ArrowUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-mark">
              <Zap size={16} fill="currentColor" />
            </span>

            <span>Nexora</span>
          </Link>

          <p>
            AI-powered productivity for modern teams.
            <br />
            Plan better. Work smarter. Grow faster.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div className="footer-link-group">
            <span className="footer-heading">Product</span>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Features
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("workflow")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Workflow
            </button>

            <Link to="/dashboard">Dashboard</Link>
          </div>

          <div className="footer-link-group">
            <span className="footer-heading">Workspace</span>

            <Link to="/projects">Projects</Link>
            <Link to="/tasks">Tasks</Link>
            <Link to="/profile">Profile</Link>
          </div>

          <div className="footer-link-group">
            <span className="footer-heading">Company</span>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("testimonials")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Customers
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              FAQ
            </button>

            <Link to="/settings">Settings</Link>
          </div>
        </div>

        {/* Back to top */}
        <button
          type="button"
          className="back-top"
          onClick={handleBackToTop}
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp size={15} />
        </button>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Nexora. All rights reserved.</span>

        <div className="footer-bottom-links">
          <span>React + Vite</span>
          <span className="footer-dot">•</span>
          <span>Built for modern teams</span>
        </div>
      </div>
    </footer>
  );
}