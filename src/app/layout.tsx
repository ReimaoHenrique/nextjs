"use client";

import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import AuthHandler from "@/components/AuthHandler";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AuthHandler>{children}</AuthHandler>
        </AuthProvider>
      </body>
    </html>
  );
}
