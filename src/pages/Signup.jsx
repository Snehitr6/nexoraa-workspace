
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import ThemeToggle from "../components/ThemeToggle";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const update = (key) => (event) => {
    setForm((current) => ({
      ...current,
      [key]: event.target.value,
    }));
    setError("");
  };

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    const phone = form.phone.trim();

    if (name.length < 2) {
      setError("Please enter your full name.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^\+?[\d\s()-]{8,18}$/.test(phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(form.password)) {
      setError("Include at least one letter and one number.");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    if (!accepted) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    setLoading(true);

    try {
      await register({
        name,
        email,
        phone,
        password: form.password,
      });

      setSuccess("Account created successfully! Redirecting to sign in...");

      setTimeout(() => {
        navigate("/login", {
          state: { email },
        });
      }, 900);
    } catch (err) {
      setError(err.message || "Unable to create your account.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page signup-page">
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

      <div className="login-layout signup-layout">
        <section className="login-intro signup-intro">
          <span className="pill">
            <Sparkles size={14} />
            Your next chapter starts here
          </span>

          <h1>
            Make room for
            <br />
            <span>great work.</span>
          </h1>

          <p>
            Create your free Nexora workspace and bring
            your projects, tasks, and team priorities together.
          </p>

          <div className="login-benefits">
            <div>
              <b>01</b>
              <span>
                <strong>Everything in one place</strong>
                Keep projects, tasks, and ideas connected.
              </span>
            </div>

            <div>
              <b>02</b>
              <span>
                <strong>Progress you can see</strong>
                Turn busy days into measurable progress.
              </span>
            </div>

            <div>
              <b>03</b>
              <span>
                <strong>Built around your team</strong>
                Start simple and grow at your own pace.
              </span>
            </div>
          </div>
        </section>

        <section className="login-card signup-card">
          <Link to="/" className="back-link">
            <ArrowLeft size={15} />
            Back to home
          </Link>

          <div className="login-card-head">
            <h2>Create your account</h2>
            <p>Get started with your personal workspace.</p>
          </div>

          <form onSubmit={submit} noValidate>
            <label>
              Full name
              <div className="input-wrap">
                <UserRound size={17} />
                <input
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your full name"
                  autoComplete="name"
                />
              </div>
            </label>

            <label>
              Email address
              <div className="input-wrap">
                <Mail size={17} />
                <input
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  type="email"
                  autoComplete="email"
                />
              </div>
            </label>

            <label>
              Phone number
              <div className="input-wrap">
                <Phone size={17} />
                <input
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="+91 98765 43210"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
            </label>

            <label>
              Password
              <div className="input-wrap">
                <LockKeyhole size={17} />
                <input
                  value={form.password}
                  onChange={update("password")}
                  placeholder="At least 8 characters"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>

            <label>
              Confirm password
              <div className="input-wrap">
                <LockKeyhole size={17} />
                <input
                  value={form.confirm}
                  onChange={update("confirm")}
                  placeholder="Re-enter your password"
                  type={showConfirm ? "text" : "password"}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </label>

            <label className="check-label signup-terms-check">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(event) => setAccepted(event.target.checked)}
              />
              <span>
                I agree to the{" "}
                <Link to="/signup#terms">Terms &amp; Conditions</Link>
                {" "}and Privacy Policy.
              </span>
            </label>

            {error && (
              <div className="form-error" role="alert">
                {error}
              </div>
            )}

            {success && (
              <div className="form-success" role="status">
                <CheckCircle2 size={16} />
                {success}
              </div>
            )}

            <button
              className="primary-btn login-submit"
              type="submit"
              disabled={loading || Boolean(success)}
            >
              {loading
                ? "Creating account..."
                : success
                  ? "Account created"
                  : "Create account"}
              {!loading && !success && <ArrowRight size={17} />}
            </button>
          </form>

          <div className="signup-divider">
            <span />
            or continue with
            <span />
          </div>

          <button
            type="button"
            className="signup-social"
            onClick={() =>
              setError(
                "Google sign-in requires OAuth configuration. Please register using your email."
              )
            }
          >
            <span className="google-mark">G</span>
            Continue with Google
          </button>

          <p className="signup-switch">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>

          <p className="login-terms">
            Demo accounts are stored in this browser. Production
            authentication requires a secure backend.
          </p>
        </section>
      </div>
    </main>
  );
}
