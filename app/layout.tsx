import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";

const notoGeorgian = Noto_Sans_Georgian({ 
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-georgian",
});

export const metadata: Metadata = {
  title: "თეატრის რეცენზიები - Georgian Theater Reviews",
  description: "თბილისის თეატრების სპექტაკლების რეცენზიები და შეფასებები",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className={`${notoGeorgian.variable} antialiased bg-gray-50`}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <footer className="bg-[#0d3f53] text-white py-8 mt-16">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2025 თეატრის რეცენზიები. ყველა უფლება დაცულია.</p>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
