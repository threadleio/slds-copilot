import "../styles/globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <main className="mx-auto max-w-7xl p-6">{children}</main>
      </body>
    </html>
  );
}
