
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";

import ThemeToggle from "../components/ThemeToggle";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      await login(email, password, remember);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to sign in.");
    } finally {
      setLoading(false);
    }
  };

  const useDemoAccount = () => {
    setEmail("alex@nexora.app");
    setPassword("123456");
    setError("");
    setMessage("");
  };

  const forgotPassword = () => {
    setError("");
    setMessage(
      email.trim()
        ? `Password reset requires a connected backend. Reset instructions cannot be sent from this demo.`
        : "Enter your email address first. Password reset requires a connected backend."
    );
  };

  return (
    <main className="login-page">
      <div className="login-decoration">
        <div className="login-grid" />
        <div className="login-glow" />
      </div>

      <header className="login-top">
        <Link to="/" className="login-brand">
          <span className="login-brand-icon">
            <Zap size={18} />
          </span>
          <span className="login-brand-name">Nexora</span>
        </Link>

        <div className="login-theme">
          <ThemeToggle />
        </div>
      </header>

      <div className="login-layout">
        <section className="login-intro">
          <span className="pill">
            <Sparkles size={14} />
            Welcome back
          </span>

          <h1>
            Work smarter.
            <br />
            <span>Ship faster.</span>
          </h1>

          <p>
            Pick up where you left off and keep your team
            moving with one focused workspace.
          </p>

          <div className="login-benefits">
            <div>
              <b>01</b>
              <span>
                <strong>One workspace</strong>
                Projects, tasks and team context together.
              </span>
            </div>

            <div>
              <b>02</b>
              <span>
                <strong>AI-assisted planning</strong>
                Turn goals into practical next steps.
              </span>
            </div>

            <div>
              <b>03</b>
              <span>
                <strong>Built for focus</strong>
                Less noise, more meaningful progress.
              </span>
            </div>
          </div>
        </section>

        <section className="login-card">
          <Link to="/" className="back-link">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <div className="login-card-head">
            <h2>Sign in to Nexora</h2>
            <p>Welcome back! Enter your account details.</p>
          </div>

          <form onSubmit={submit} noValidate>
            <label>
              Email address
              <div className="input-wrap">
                <Mail size={17} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                    setMessage("");
                  }}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
            </label>

            <label>
              Password
              <div className="input-wrap">
                <LockKeyhole size={17} />
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                    setMessage("");
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  onClick={() => setShow((value) => !value)}
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>

            <div className="form-row">
              <label className="check-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot"
                onClick={forgotPassword}
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="form-error" role="alert">
                {error}
              </div>
            )}

            {message && (
              <div className="form-success" role="status">
                {message}
              </div>
            )}

            <button
              className="primary-btn login-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
              {!loading && <ArrowRight size={17} />}
            </button>
          </form>

          <button
            type="button"
            className="demo-btn"
            onClick={useDemoAccount}
          >
            Use demo account
            <span>alex@nexora.app / 123456</span>
          </button>

          <p className="signup-switch login-switch">
            New to Nexora? <Link to="/signup">Create an account</Link>
          </p>

          <p className="login-terms">
            By continuing, you agree to Nexora's Terms and Privacy Policy.
          </p>
        </section>
      </div>
    </main>
  );
}
