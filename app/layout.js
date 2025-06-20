import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs/dist/types/components.server";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Spendo",
  description: "Simplify Spending. Amplify Saving. Spendo.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* header */}
          <Header></Header>
          <main className="min-h-screen">{children}</main>
          {/* footer */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Crafted with care by Srishti Verma</p>
            </div>
          </footer>
          </body>
      </html>
    </ClerkProvider>
  );
}
