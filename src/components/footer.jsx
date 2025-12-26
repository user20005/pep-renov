'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';

function Footer() {
  
  // Fonction pour remonter en haut de page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Date actuelle pour le copyright
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10 border-t border-amber-900/20 relative">
      
      {/* Bouton Retour en haut (Flottant ou intégré) */}
      <button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-600 hover:bg-white hover:text-gray-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : MARQUE & RÉSEAUX */}
          <div className="space-y-6">
            <a href="#" className="flex flex-col group">
                <span className="text-2xl font-serif font-bold tracking-wide text-white">
                    PER<span className="text-amber-600">.</span>RÉNOVATION
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-gray-500">
                    L&apos;Art de Bâtir
                </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Spécialiste de la rénovation haut de gamme en Île-de-France. 
              Nous transformons vos espaces de vie avec exigence et passion.
            </p>
            
            {/* Icônes Réseaux Sociaux */}
            <div className="flex space-x-4 pt-2">
              <SocialIcon icon={<Instagram size={20} />} href="#" type="instagram" />
              <SocialIcon icon={<Linkedin size={20} />} href="#" type="linkedin" />
              <SocialIcon icon={<Facebook size={20} />} href="#" type="facebook" />
            </div>
          </div>

          {/* COLONNE 2 : INTÉRIEUR */}
          <div>
            <h4 className="font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-600"></span> Intérieur
            </h4>
            <ul className="space-y-3">
              <FooterLink text="Appartement Haussmannien" />
              <FooterLink text="Cuisine & Bain" />
              <FooterLink text="Aménagement de Combles" />
              <FooterLink text="Architecture d'intérieur" />
              <FooterLink text="Décoration & Mobilier" />
            </ul>
          </div>

          {/* COLONNE 3 : EXTÉRIEUR */}
          <div>
            <h4 className="font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-600"></span> Extérieur
            </h4>
            <ul className="space-y-3">
              <FooterLink text="Ravalement de Façade" />
              <FooterLink text="Extension Maison" />
              <FooterLink text="Surélévation" />
              <FooterLink text="Terrasse & Paysage" />
              <FooterLink text="Toiture & Zinguerie" />
            </ul>
          </div>

          {/* COLONNE 4 : CONTACT */}
          <div>
            <h4 className="font-serif text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-amber-600"></span> Contact
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-600 flex-shrink-0 mt-1" />
                <span>
                  12 Avenue des Champs-Élysées,<br/>
                  75000 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-600 flex-shrink-0" />
                <a href="tel:+33123456789" className="hover:text-white transition-colors">01 23 45 67 89</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-600 flex-shrink-0" />
                <a href="mailto:contact@per-renovation.com" className="hover:text-white transition-colors">contact@per-renovation.com</a>
              </li>
            </ul>
            
            <a href="#contact" className="mt-8 inline-block px-6 py-3 border border-gray-700 text-xs uppercase tracking-widest hover:border-amber-600 hover:text-amber-500 transition-all duration-300">
              Prendre rendez-vous
            </a>
          </div>

        </div>

        {/* BARRE DU BAS : COPYRIGHT */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {currentYear} PER-Rénovation. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-gray-400 transition-colors">CGV</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Composants utilitaires pour éviter la répétition
const FooterLink = ({ text }) => (
  <li>
    <a href="#" className="text-sm text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
      {text}
    </a>
  </li>
);

const SocialIcon = ({ icon, href, type }) => {
  const hoverClasses = {
    instagram: 'hover:bg-pink-500 hover:border-pink-500',
    linkedin: 'hover:bg-blue-700 hover:border-blue-700',
    facebook: 'hover:bg-blue-600 hover:border-blue-600'
  };

  return (
    <a 
      href={href} 
      className={`w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-800 ${hoverClasses[type] || 'hover:border-amber-600'}`}
    >
      {icon}
    </a>
  );
};

export default Footer;