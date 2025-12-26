import "./globals.css"; // Ton ancien index.css renommé
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollManager from "@/components/ScrollManager";

// Configuration des polices (Optimisation Next.js)
import { Montserrat, Playfair_Display } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-sans' 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-serif' 
});

export const metadata = {
  title: "PER-Rénovation",
  description: "Rénovation et architecture d'intérieur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased bg-gray-50">
        <ScrollManager />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}