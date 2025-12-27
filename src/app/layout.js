import "./globals.css"; 
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/components/ScrollManager";
import { Suspense } from "react";


export const metadata = {
  title: "PER-Rénovation",
  description: "Rénovation et architecture d'intérieur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased bg-gray-50">
        <Suspense fallback={null}>
          <ScrollManager />
        </Suspense>
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}