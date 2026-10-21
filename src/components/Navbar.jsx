import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Bell,
  CalendarDays,
  ChevronDown,
  Menu,
  Search,
  X,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onMenuClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const pageTitles = {
    "/dashboard": {
      title: "Dashboard",
      subtitle: "Overview",
    },
    "/projects": {
      title: "Projects",
      subtitle: "Workspace",
    },
    "/tasks": {
      title: "Tasks",
      subtitle: "Workspace",
    },
    "/profile": {
      title: "Profile",
      subtitle: "Account",
    },
    "/settings": {
      title: "Settings",
      subtitle: "Workspace",
    },
  };

  const currentPage = pageTitles[location.pathname] || {
    title: "Dashboard",
    subtitle: "Workspace",
  };

  useEffect(() => {
    setSearch("");
    setNotificationsOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setNotificationsOpen(false);
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const value = search.trim().toLowerCase();

    if (!value) return;

    if (
      value.includes("project") ||
      value.includes("projects") ||
      value.includes("app")
    ) {
      navigate("/projects");
    } else if (
      value.includes("task") ||
      value.includes("tasks") ||
      value.includes("todo")
    ) {
      navigate("/tasks");
    } else if (
      value.includes("profile") ||
      value.includes("account")
    ) {
      navigate("/profile");
    } else if (
      value.includes("setting") ||
      value.includes("settings")
    ) {
      navigate("/settings");
    } else {
      navigate("/dashboard");
    }
  };

  const clearSearch = () => {
    setSearch("");
  };

  const handleProfile = () => {
    setUserMenuOpen(false);
    navigate("/profile");
  };

  const handleSettings = () => {
    setUserMenuOpen(false);
    navigate("/settings");
  };

  const navbar = (
    <header className="app-navbar">
      <div className="nav-left">
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

        <div className="navbar-page-info">
          <span className="eyebrow">{currentPage.subtitle}</span>
          <h1>{currentPage.title}</h1>
        </div>
      </div>

      <div className="nav-actions">
        <form
          className="search-box"
          onSubmit={handleSearch}
          role="search"
        >
          <Search size={16} />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects, tasks..."
            aria-label="Search"
          />

          {search && (
            <button
              type="button"
              className="search-submit"
              onClick={clearSearch}
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          )}

          {!search && (
            <button
              type="submit"
              className="search-submit"
              aria-label="Search"
            >
              <Search size={14} />
            </button>
          )}
        </form>

        <ThemeToggle />

        <div className="notification-wrapper">
          <button
            type="button"
            className="icon-button notification-button"
            onClick={() =>
              setNotificationsOpen((current) => !current)
            }
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="notification-dot" />
          </button>

          {notificationsOpen && (
            <div className="notification-menu">
              <div className="notification-menu-head">
                <div>
                  <strong>Notifications</strong>
                  <span>Recent workspace activity</span>
                </div>

                <button
                  type="button"
                  className="notification-view"
                  onClick={() => setNotificationsOpen(false)}
                >
                  Close
                </button>
              </div>

              <button
                type="button"
                className="notification-item"
                onClick={() => {
                  setNotificationsOpen(false);
                  navigate("/tasks");
                }}
              >
                <span className="notification-bullet" />

                <span>
                  <strong>New task assigned</strong>
                  <small>
                    Finalize dashboard wireframes
                  </small>
                </span>

                <time>12m</time>
              </button>

              <button
                type="button"
                className="notification-item"
                onClick={() => {
                  setNotificationsOpen(false);
                  navigate("/projects");
                }}
              >
                <span className="notification-bullet" />

                <span>
                  <strong>Project updated</strong>
                  <small>Nexora Mobile App</small>
                </span>

                <time>38m</time>
              </button>

              <button
                type="button"
                className="notification-item"
                onClick={() => {
                  setNotificationsOpen(false);
                  navigate("/dashboard");
                }}
              >
                <span className="notification-bullet" />

                <span>
                  <strong>Weekly report ready</strong>
                  <small>Your productivity increased</small>
                </span>

                <time>1h</time>
              </button>
            </div>
          )}
        </div>

        <div className="nav-user-wrapper">
          <button
            type="button"
            className="nav-user"
            onClick={() =>
              setUserMenuOpen((current) => !current)
            }
          >
            <img
              src={
                user?.avatar ||
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
              }
              alt={user?.name || "User"}
            />

            <span className="nav-user-info">
              <strong>{user?.name || "Alex Morgan"}</strong>
              <span>{user?.role || "Product Designer"}</span>
            </span>

            <ChevronDown
              size={15}
              className={`nav-user-chevron ${
                userMenuOpen ? "open" : ""
              }`}
            />
          </button>

          {userMenuOpen && (
            <div className="user-menu">
              <div className="user-menu-profile">
                <img
                  src={
                    user?.avatar ||
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
                  }
                  alt={user?.name || "User"}
                />

                <div>
                  <strong>{user?.name || "Alex Morgan"}</strong>
                  <span>
                    {user?.email || "alex@nexora.app"}
                  </span>
                </div>
              </div>

              <div className="user-menu-divider" />

              <button
                type="button"
                className="user-menu-item"
                onClick={handleProfile}
              >
                <CalendarDays size={16} />
                <span>Profile</span>
              </button>

              <button
                type="button"
                className="user-menu-item"
                onClick={handleSettings}
              >
                <Bell size={16} />
                <span>Settings</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );

  return createPortal(navbar, document.body);
}