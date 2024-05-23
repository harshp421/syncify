import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ClerkProvider} from '@clerk/nextjs'
import { ThemeProvider } from "@/provider/theme-provider";
import ModalProvider from "@/provider/model-provider";
import { Toaster } from "@/components/ui/sonner";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syncify",
  description: "A centralized hub where different platforms converge for seamless synchronization and management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
    <html lang="en" suppressHydrationWarning>

      <body className={font.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
            {children}
            <Toaster />
            </ModalProvider>
          </ThemeProvider>
          </body>
    </html>
    </ClerkProvider>
  );
}
