import {
  BarChart3,
  CheckSquare,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Settings,
  UserRound,
  X,
  Zap,
} from "lucide-react";

import {
  NavLink,
  useNavigate,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const links = [
  ["Dashboard", "/dashboard", LayoutDashboard],
  ["Projects", "/projects", FolderKanban],
  ["Tasks", "/tasks", CheckSquare],
];

const workspace = [
  ["Profile", "/profile", UserRound],
  ["Settings", "/settings", Settings],
];

export default function Sidebar({
  mobileOpen,
  onClose,
}) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${
          mobileOpen ? "show" : ""
        }`}
        onClick={onClose}
      />

      <aside
        className={`sidebar ${
          mobileOpen ? "mobile-open" : ""
        }`}
      >
        <div className="sidebar-top">
          <NavLink
            to="/dashboard"
            className="brand"
            onClick={onClose}
          >
            <span className="sidebar-logo-mark">
              <Zap size={17} />
            </span>

            <span>Nexora</span>
          </NavLink>

          <button
            className="mobile-close icon-btn"
            onClick={onClose}
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        <div className="workspace-label">
          MAIN MENU
        </div>

        <nav className="side-nav">
          {links.map(([label, to, Icon]) => (
            <NavLink
              key={label}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `side-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>

              {label === "Tasks" && (
                <b>5</b>
              )}
            </NavLink>
          ))}

          <button
            type="button"
            className="side-link"
            onClick={() => {
              navigate("/dashboard");
              onClose?.();
            }}
          >
            <BarChart3 size={18} />
            <span>Analytics</span>
          </button>
        </nav>

        <div className="workspace-label">
          WORKSPACE
        </div>

        <nav className="side-nav">
          {workspace.map(([label, to, Icon]) => (
            <NavLink
              key={label}
              to={to}
              onClick={onClose}
              className={({ isActive }) =>
                `side-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-spacer" />

        <div className="upgrade-card">
          <div className="upgrade-icon">
            <Zap size={17} />
          </div>

          <strong>Upgrade workspace</strong>

          <p>
            Unlock advanced analytics and AI tools.
          </p>

          <button
            type="button"
            onClick={() => navigate("/settings")}
          >
            Upgrade now
          </button>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
          type="button"
        >
          <LogOut size={18} />
          <span>Log out</span>
        </button>

        <div className="sidebar-version">
          Nexora v1.0.0
        </div>
      </aside>
    </>
  );
}