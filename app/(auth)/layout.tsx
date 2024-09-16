"use client";

import GoogleButton from "@/components/auth/google-button";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showGoogleSignIn = pathname === "/sign-in" || pathname === "/sign-up";

  const searchParams = useSearchParams();

  const callbackUrl = searchParams?.get("callbackUrl") || "/dashboard";

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-yellow-300 to-brand px-2">
        <div className="my-4 w-full max-w-md rounded-lg border-2 border-yellow-500 bg-white p-4 shadow-xl dark:bg-gray-950">
          {showGoogleSignIn && (
            <>
              <h2 className="mb-4 text-center text-2xl font-bold">
                {pathname === "/sign-in" ? "Login to Auth" : "Register to Auth"}
              </h2>
              <div className="mt-4">
                <GoogleButton callbackUrl={callbackUrl} />
              </div>
              <div className="mb-4 mt-6 flex-center-center">
                <hr className="h-[1px] w-full border-gray-300 dark:border-gray-700" />
                <span className="absolute bg-background text-lg text-muted-foreground">
                  or
                </span>
              </div>
            </>
          )}
          <div className="mt-4">
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default AuthLayout;
