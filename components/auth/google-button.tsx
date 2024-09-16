"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner2 } from "react-icons/im";

interface GoogleButtonProps {
  callbackUrl: string;
}

const GoogleButton = ({ callbackUrl }: GoogleButtonProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setLoading(true);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_token: tokenResponse.access_token,
          callbackUrl,
        }),
      });
      setLoading(false);
      if (res.ok) {
        router.push(callbackUrl);
      } else {
        setError("Google login failed, try again");
      }
    },
    onError: () => {
      setError("Google login failed, try again");
    },
  });

  return (
    <>
      <button
        className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900 dark:focus:ring-offset-gray-950"
        disabled={loading}
        onClick={() => login()}
      >
        {loading ? (
          <ImSpinner2 className="mr-2 animate-spin" />
        ) : (
          <FcGoogle className="mr-2" />
        )}
        Continue with Google
      </button>
      {error && <p className="mt-2 !text-red-500">{error}</p>}
    </>
  );
};

export default GoogleButton;
