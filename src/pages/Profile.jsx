import { useRef, useState } from "react";
import {
  Camera,
  Mail,
  MapPin,
  Save,
} from "lucide-react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, updateUser } = useAuth();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [name, setName] = useState(
    user?.name || ""
  );

  const [role, setRole] = useState(
    user?.role || ""
  );

  const [avatar, setAvatar] = useState(
    user?.avatar || ""
  );

  const [saved, setSaved] = useState(false);

  const fileRef = useRef(null);

  const save = (e) => {
    e.preventDefault();

    updateUser({
      name,
      role,
      avatar,
    });

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 1800);
  };

  const changeAvatar = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setAvatar(imageUrl);
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
                ACCOUNT
              </span>

              <h2>Profile</h2>

              <p>
                Manage your personal workspace
                information.
              </p>
            </div>
          </div>

          <div className="profile-layout">
            <section className="panel profile-card">
              <div className="profile-cover" />

              <div className="profile-avatar-wrap">
                <img
                  src={avatar}
                  alt={name}
                />

                <button
                  type="button"
                  onClick={() =>
                    fileRef.current?.click()
                  }
                >
                  <Camera size={16} />
                </button>

                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={changeAvatar}
                />
              </div>

              <h3>{name}</h3>

              <p>{role}</p>

              <div className="profile-meta">
                <span>
                  <Mail size={15} />
                  {user?.email}
                </span>

                <span>
                  <MapPin size={15} />
                  Bengaluru, India
                </span>
              </div>
            </section>

            <section className="panel settings-form">
              <div className="panel-head">
                <div>
                  <span className="eyebrow">
                    PERSONAL INFO
                  </span>

                  <h2>Profile details</h2>
                </div>
              </div>

              <form onSubmit={save}>
                <label>
                  Full name

                  <input
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />
                </label>

                <label>
                  Email address

                  <input
                    value={user?.email || ""}
                    disabled
                  />
                </label>

                <label>
                  Role

                  <input
                    value={role}
                    onChange={(e) =>
                      setRole(e.target.value)
                    }
                  />
                </label>

                <div className="form-actions">
                  {saved && (
                    <span className="save-message">
                      Saved successfully
                    </span>
                  )}

                  <button
                    className="primary-btn"
                    type="submit"
                  >
                    <Save size={16} />
                    Save changes
                  </button>
                </div>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}