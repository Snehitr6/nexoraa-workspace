
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const demoUser = {
  id: 1,
  name: "Alex Morgan",
  email: "alex@nexora.app",
  role: "Product Designer",
  avatar:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("nexora-user");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const register = async ({ name, email, phone, password }) => {
    const normalizedEmail = email.trim().toLowerCase();

    let accounts = [];

    try {
      accounts = JSON.parse(
        localStorage.getItem("nexora-accounts") || "[]"
      );
    } catch {
      accounts = [];
    }

    const exists =
      normalizedEmail === demoUser.email ||
      accounts.some((account) => account.email === normalizedEmail);

    if (exists) {
      throw new Error(
        "This email is already registered. Please sign in."
      );
    }

    const account = {
      id: Date.now(),
      name: name.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password,
      role: "Workspace member",
      avatar: demoUser.avatar,
    };

    localStorage.setItem(
      "nexora-accounts",
      JSON.stringify([...accounts, account])
    );

    return account;
  };

  const login = async (email, password, remember = true) => {
    const normalizedEmail = email.trim().toLowerCase();

    let account = null;

    if (
      normalizedEmail === demoUser.email &&
      password === "123456"
    ) {
      account = demoUser;
    } else {
      try {
        const accounts = JSON.parse(
          localStorage.getItem("nexora-accounts") || "[]"
        );

        account =
          accounts.find(
            (item) =>
              item.email === normalizedEmail &&
              item.password === password
          ) || null;
      } catch {
        account = null;
      }
    }

    if (!account) {
      throw new Error(
        "Invalid email or password. Please check your details."
      );
    }

    const safeUser = {
      id: account.id,
      name: account.name,
      email: account.email,
      phone: account.phone || "",
      role: account.role || "Workspace member",
      avatar: account.avatar || demoUser.avatar,
    };

    setUser(safeUser);

    if (remember) {
      localStorage.setItem("nexora-user", JSON.stringify(safeUser));
    } else {
      localStorage.removeItem("nexora-user");
      sessionStorage.setItem("nexora-session-user", JSON.stringify(safeUser));
    }

    return safeUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("nexora-user");
    sessionStorage.removeItem("nexora-session-user");
  };

  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates };

    setUser(updatedUser);
    localStorage.setItem("nexora-user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
