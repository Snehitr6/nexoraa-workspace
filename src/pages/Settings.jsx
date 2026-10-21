import { useState } from "react";
import {
  Bell,
  Check,
  Moon,
  Shield,
  Sun,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { useTheme } from "../context/ThemeContext";

export default function Settings() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const { theme, setTheme } = useTheme();

  const [email, setEmail] = useState(true);
  const [desktop, setDesktop] = useState(false);

  const [securityOpen, setSecurityOpen] =
    useState(false);

  const [saved, setSaved] = useState(false);

  const saveSettings = () => {
    localStorage.setItem(
      "nexora-settings",
      JSON.stringify({
        email,
        desktop,
        theme,
      })
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  };

  return (
    <div className="app-shell">
      <Sidebar
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="main-area">
        <Navbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main className="page-content narrow">
          <div className="page-title-row">
            <div>
              <span className="eyebrow">
                PREFERENCES
              </span>

              <h2>Settings</h2>

              <p>
                Control your Nexora experience and
                notifications.
              </p>
            </div>

            <button
              className="primary-btn"
              type="button"
              onClick={saveSettings}
            >
              <Check size={16} />

              {saved
                ? "Saved"
                : "Save changes"}
            </button>
          </div>

          <div className="settings-stack">
            <section className="panel setting-section">
              <div className="setting-icon">
                <Sun size={18} />
              </div>

              <div className="setting-copy">
                <h3>Appearance</h3>

                <p>
                  Choose how Nexora looks across your
                  workspace.
                </p>

                <div className="theme-options">
                  <button
                    type="button"
                    className={
                      theme === "light"
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setTheme("light")
                    }
                  >
                    <Sun size={16} />
                    Light

                    {theme === "light" && (
                      <Check size={15} />
                    )}
                  </button>

                  <button
                    type="button"
                    className={
                      theme === "dark"
                        ? "selected"
                        : ""
                    }
                    onClick={() =>
                      setTheme("dark")
                    }
                  >
                    <Moon size={16} />
                    Dark

                    {theme === "dark" && (
                      <Check size={15} />
                    )}
                  </button>
                </div>
              </div>
            </section>

            <section className="panel setting-section">
              <div className="setting-icon">
                <Bell size={18} />
              </div>

              <div className="setting-copy">
                <h3>Notifications</h3>

                <p>
                  Choose what updates you want to
                  receive.
                </p>

                <Toggle
                  label="Email notifications"
                  text="Project updates and mentions"
                  checked={email}
                  onChange={() =>
                    setEmail((value) => !value)
                  }
                />

                <Toggle
                  label="Desktop notifications"
                  text="Important workspace alerts"
                  checked={desktop}
                  onChange={() =>
                    setDesktop((value) => !value)
                  }
                />
              </div>
            </section>

            <section className="panel setting-section">
              <div className="setting-icon">
                <Shield size={18} />
              </div>

              <div className="setting-copy">
                <h3>Privacy & security</h3>

                <p>
                  Your demo data stays in this browser
                  using local storage.
                </p>

                <button
                  className="secondary-btn"
                  type="button"
                  onClick={() =>
                    setSecurityOpen(
                      (value) => !value
                    )
                  }
                >
                  {securityOpen
                    ? "Hide security settings"
                    : "Review security settings"}
                </button>

                {securityOpen && (
                  <div className="security-panel">
                    <strong>
                      Browser-only security
                    </strong>

                    <p>
                      Your Nexora demo account and
                      preferences are stored locally
                      in this browser. No backend
                      connection is required.
                    </p>

                    <button
                      type="button"
                      className="secondary-btn"
                      onClick={() => {
                        localStorage.removeItem(
                          "nexora-settings"
                        );

                        setEmail(true);
                        setDesktop(false);
                        setTheme("light");
                      }}
                    >
                      Reset preferences
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function Toggle({
  label,
  text,
  checked,
  onChange,
}) {
  return (
    <div className="toggle-row">
      <div>
        <strong>{label}</strong>
        <span>{text}</span>
      </div>

      <button
        className={`switch ${
          checked ? "on" : ""
        }`}
        onClick={onChange}
        type="button"
        aria-label={label}
        aria-pressed={checked}
      >
        <i />
      </button>
    </div>
  );
}