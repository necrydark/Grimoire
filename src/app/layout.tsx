import AppSidebar from "@/components/app-sidebar";
import Footer from "@/components/footer";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Grimoire",
    default: "Grimoire",
  },
  description:
    "Grimoire is the comprehensive database for The Seven Deadly Sins: Origins. We are not affiliated with Netmarble.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="bg-[#202836] p-2 pb-0">
            <SidebarTrigger className="text-white hover:bg-card hover:text-white transition-all duration-300" />
            <main className="pt-6 flex-1 overflow-auto">{children}</main>
            <Footer />
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

// Platypi,Noto Sans,Malgun Gothic,Apple SD Gothic Neo,sans-serif
