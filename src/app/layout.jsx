// Main CSS File
import "@/styles/globals.css";

// Components
import ToastProvider from "@/components/layout/ToastsProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";

// Application Fonts
import { Playfair_Display, Inter } from "next/font/google";
import { Suspense } from "react";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "RecipeVault",
  description: "The best recipes website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-secondary">
        <ToastProvider>
          <Suspense fallback={<Loader />}>
            <Header />
          </Suspense>
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
