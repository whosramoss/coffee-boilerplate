import type { Metadata } from "next";
import AppProvider from "@providers/AppProvider";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { openDefaultMetada } from "@shared/meta";
import { fontNeueMontreal } from "@shared/fonts";
import CustomCursor from "@components/Cursor";
import CTA from "@components/CTA";
import ThemeButton from "@components/buttons/ThemeButton";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import AlertButton from "@components/buttons/AlertButton";
import "@styles/global.css";

export const metadata: Metadata = {
  ...openDefaultMetada.default,
  ...openDefaultMetada.robots,
  // ...openDefaultMetada.graph
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontNeueMontreal.className}>
        <AppProvider>
          <CustomCursor />
          <div className="relative flex flex-col">
            <Navbar />
            {children}
            <CTA />
            <Footer />
            <ThemeButton />
            <AlertButton
              title={"Alert"}
              alertTitle={"Coffee is good"}
              alertDescription={"right ?"}
              alertActions={[{ title: "Close" }, { title: "Show" }]}
            />
          </div>
        </AppProvider>
        <VercelAnalytics />
      </body>
    </html>
  );
}
