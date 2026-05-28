// app/layout.js
import "./globals.css";
import { AuthProvider } from "@/lib/useAuth";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";
import { ToastProvider } from "@/components/Toast";

export const metadata = {
  title: "Introsocial",
  description: "Private memories for your people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <ToastProvider>
            <ClientLayoutWrapper>
              {children}
            </ClientLayoutWrapper>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
