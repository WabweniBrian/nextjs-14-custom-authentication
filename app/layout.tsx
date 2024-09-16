import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/common/theme-provider";
import BackToTopButton from "@/components/common/back-button";

export const viewport: Viewport = {
  themeColor: "#FF3A44",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Demo",
    default: "Demo",
  },
  // manifest: "/manifest.json",
  description: "Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        {/* Next top loader: Appears at the top of the page on page transition */}
        <NextTopLoader color={"#FF3A44"} zIndex={9999} />
        {/* Toaster */}
        <Toaster
          toastOptions={{
            className:
              "bg-white dark:bg-slate-800 dark:text-slate-200 z-[999999]",
            duration: 3000,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="demo-theme"
        >
          {children}
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
