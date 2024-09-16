"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/user");
        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Failed to load user", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  function logout() {
    fetch("/api/auth/logout", { method: "POST" })
      .then(() => {
        setUser(null);
        location.assign("/sign-in");
      })
      .catch(console.error);
  }

  return { user, loading, logout };
};
