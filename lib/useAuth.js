// lib/useAuth.js
"use client";

import { useState, useEffect, useRef, useCallback, createContext, useContext } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext(null);
const CHANNEL_NAME = "introsocial_auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const channelRef = useRef(null);

  // Fetch current session from the cookie
  const fetchMe = useCallback(async () => {
    try {
      const r = await fetch("/api/auth/me");
      const data = await r.json();
      setUser(data.user || null);
      return data.user || null;
    } catch {
      setUser(null);
      return null;
    }
  }, []);

  useEffect(() => {
    // Initial session load
    fetchMe().finally(() => setLoading(false));

    // Sync across tabs — BroadcastChannel is supported in all modern browsers.
    // When another tab logs in or out, update this tab's React state immediately
    // so the cookie and the UI are always in sync.
    if (typeof BroadcastChannel !== "undefined") {
      channelRef.current = new BroadcastChannel(CHANNEL_NAME);
      channelRef.current.onmessage = ({ data }) => {
        if (data.type === "LOGIN") {
          setUser(data.user);
        } else if (data.type === "LOGOUT") {
          setUser(null);
        }
      };
    }

    return () => {
      channelRef.current?.close();
    };
  }, []);

  // Call this after a successful login — sets state AND tells all other tabs
  const login = useCallback((userData) => {
    setUser(userData);
    channelRef.current?.postMessage({ type: "LOGIN", user: userData });
  }, []);

  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    // Tell all other open tabs to also log out
    channelRef.current?.postMessage({ type: "LOGOUT" });
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
