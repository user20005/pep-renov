"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState("");

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSolidNavbar = scrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  // Fonction pour fermer le menu mobile
  const closeMenu = () => setIsOpen(false);

  const servicesInterieur = {
    categories: [
      {
        title: "Agencement",
        items: [
          { label: "Rénovation complète (Maison/Apt)", href: "/interieure#renovation-globale" }, // Couvert par l'ensemble des lots
          { label: "Démolition intérieure", href: "/interieure#renovation-globale" }, // Activité 1.1 
          { label: "Plâtrerie & Cloisonnement", href: "/interieure#renovation-globale" }, // Activité 4.4 
          { label: "Isolation intérieure", href: "/interieure#renovation-globale" }, // Inclus dans 4.4 et 2.2 [cite: 93, 136]
          { label: "Aménagement de Combles", href: "/interieure#renovation-globale" }, // Lié à 2.4 et 3.1 
        ],
      },
      {
        title: "Sols & Finitions",
        items: [
          { label: "Carrelage & Sols durs", href: "/interieure#finitions-decoration" }, // Activité 4.9 
          { label: "Chapes & Sols coulés", href: "/interieure#finitions-decoration" }, // Activité 4.9 
          { label: "Peinture & Décoration", href: "/interieure#finitions-decoration" }, // Activité 4.7 
          { label: "Enduits décoratifs", href: "/interieure#finitions-decoration" }, // Inclus dans 4.7 [cite: 141]
          { label: "Parquet (Pose flottante/collée)", href: "/interieure#finitions-decoration" }, // Inclus dans 2.4 (structure) ou 4.9
        ],
      },
      {
        title: "Lots Techniques",
        items: [
          { label: "Électricité & Domotique", href: "/interieure#pieces-techniques" }, // Activité 5.5 
          { label: "Plomberie & Sanitaire", href: "/interieure#pieces-techniques" }, // Activité 5.1 
          { label: "Création de Salles de Bain", href: "/interieure#pieces-techniques" }, // Combinaison 5.1 + 4.9
          { label: "Cuisines (Raccordements)", href: "/interieure#pieces-techniques" }, // Plomberie/Elec
          { label: "Chauffage électrique & VMC", href: "/interieure#pieces-techniques" }, // Activité 5.5 [cite: 158]
        ],
      },
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
  };

  const servicesExterieur = {
    categories: [
      {
        title: "Gros Œuvre & Structure",
        items: [
          { label: "Maçonnerie Générale", href: "/exterieure#extensions" }, // Activité 2.2 
          { label: "Béton Armé", href: "/exterieure#extensions" }, // Activité 2.2 [cite: 89]
          { label: "Charpente Bois", href: "/exterieure#extensions" }, // Activité 2.4 
          { label: "Toiture & Couverture", href: "/exterieure#extensions" }, // Activité 3.1 
          { label: "Démolition & Gros Œuvre", href: "/exterieure#extensions" }, // Activité 1.1 [cite: 83]
        ],
      },
      {
        title: "Façade & Isolation",
        items: [
          { label: "Ravalement de Façade", href: "/exterieure#facade" }, // Activité 3.4 
          { label: "Isolation Extérieure (ITE)", href: "/exterieure#facade" }, // Activité 3.5 
          { label: "Enduits & Crépis", href: "/exterieure#facade" }, // Activité 3.4 [cite: 102]
          { label: "Menuiseries Extérieures", href: "/exterieure#facade" }, // Activité 3.9 
          { label: "Fenêtres & Baies Vitrées", href: "/exterieure#facade" }, // Inclus dans 3.9 [cite: 113]
        ],
      },
      {
        title: "Aménagements Extérieurs",
        items: [
          { label: "Terrasses & Dallages", href: "/exterieure#paysage" }, // Activité 2.2 (Dallage) et 4.9 [cite: 90, 147]
          { label: "Allées & Pavage", href: "/exterieure#paysage" }, // Activité 2.2 (Pavage) [cite: 90]
          { label: "Clôtures & Murets", href: "/exterieure#paysage" }, // Maçonnerie 2.2
          { label: "Éclairage Extérieur", href: "/exterieure#paysage" }, // Activité 5.5
          { label: "Zinguerie & Gouttières", href: "/exterieure#paysage" }, // Activité 5.1 et 3.1 [cite: 158]
        ],
      },
    ],
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2670&auto=format&fit=crop",
  };
  return (
    <>
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 border-b lg:border-none border-gray-100 py-4 ${
          isSolidNavbar
            ? "bg-white/90 backdrop-blur-md text-gray-900 shadow-md lg:py-2"
            : "bg-transparent text-white lg:bg-white/10 lg:hover:bg-white/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="flex flex-col z-50 group relative">
            <span className="text-2xl font-serif font-bold tracking-wide">
              PEP<span className="text-amber-600"> </span>RENOVATION
            </span>
          </Link>

          {/* MENU PC */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-xs uppercase tracking-widest font-bold hover:text-amber-600 transition-colors"
            >
              Accueil
            </Link>

            {/* Menu Intérieur */}
            <MegaMenuButton
              href=""
              title="Intérieur"
              data={servicesInterieur}
              scrolled={isSolidNavbar}
              onLinkClick={closeMenu}
            />

            {/* Menu Extérieur  */}
            <MegaMenuButton
              href=""
              title="Extérieur"
              data={servicesExterieur}
              scrolled={isSolidNavbar}
              onLinkClick={closeMenu}
            />

            <Link
              href="/realisation"
              className="text-xs uppercase tracking-widest font-bold hover:text-amber-600 transition-colors"
            >
              Réalisations
            </Link>
          </div>

          {/* CONTACT PC */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:0123456789"
              className="flex items-center gap-2 text-sm font-bold hover:text-amber-600 transition-colors"
            >
              <Phone size={14} /> 01 23 45 67 89
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/") {
                  window.location.href = "/#contact";
                  return;
                }
                const section = document.getElementById("contact");
                if (section) {
                  const offsetPosition =
                    section.getBoundingClientRect().top + window.scrollY - 100;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
              className={`px-6 py-3 text-xs font-bold uppercase tracking-widest border transition-all hover:bg-amber-600 hover:border-amber-600 hover:text-white ${
                !isSolidNavbar
                  ? "border-white text-white"
                  : "border-gray-900 text-gray-900"
              }`}
            >
              Devis Gratuit
            </a>
          </div>

          {/* BOUTON BURGER (MOBILE) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 z-50 relative"
          >
            {isOpen ? (
              <X size={28} className="text-gray-900" />
            ) : (
              <Menu
                size={28}
                className={!isSolidNavbar ? "text-white" : "text-gray-900"}
              />
            )}
          </button>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col pt-24 px-6 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="py-4 border-b border-gray-100 text-lg font-serif text-gray-900 block font-bold"
        >
          Accueil
        </Link>

        
        <MobileAccordion
          title="Rénovation Intérieure"
          id="interieur"
          current={mobileSubMenu}
          set={setMobileSubMenu}
          data={servicesInterieur}
          onLinkClick={closeMenu} 
        />
        <MobileAccordion
          title="Extérieur & Façade"
          id="exterieur"
          current={mobileSubMenu}
          set={setMobileSubMenu}
          data={servicesExterieur}
          onLinkClick={closeMenu}
        />

        <Link
          href="/realisation"
          className="py-4 border-b border-gray-100 text-lg font-serif text-gray-900 block font-bold"
          onClick={closeMenu}
        >
          Nos Réalisations
        </Link>
      </div>
    </>
  );
}

// COMPOSANT ACCORDÉON MOBILE
const MobileAccordion = ({ title, id, current, set, data, onLinkClick }) => (
  <div className="py-4 border-b border-gray-100">
    <button
      onClick={() => set(current === id ? "" : id)}
      className="flex justify-between items-center w-full text-lg font-serif text-gray-900 font-bold"
    >
      {title}{" "}
      <ChevronDown
        className={`transition-transform duration-300 ${
          current === id ? "rotate-180 text-amber-600" : ""
        }`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ${
        current === id ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
      }`}
    >
      <ul className="space-y-4 pl-4 border-l-2 border-amber-600">
        {data.categories.map((cat, idx) => (
          <div key={idx}>
            <p className="text-xs uppercase text-amber-600 font-bold mb-2">
              {cat.title}
            </p>
            {/* Dans MobileAccordion */}
            {cat.items.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 py-1">
                <Link 
                  href={item.href} 
                  className="block w-full"
                  onClick={onLinkClick} 
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  </div>
);

// COMPOSANT MEGA MENU (Desktop)
const MegaMenuButton = ({ title, data, scrolled, href, onLinkClick }) => {
  return (
    <div className="group static h-full flex items-center">
      {/* 1. LE LIEN PRINCIPAL  */}
      <Link
        href={href}
        onClick={onLinkClick} // Ferme le menu au clic
        className={`relative flex items-center py-8 text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-500 group-hover:text-amber-600 ${
          scrolled ? "text-gray-900" : "text-gray-900 lg:text-white"
        }`}
      >
        {title}
        <ChevronDown
          size={10}
          className="ml-2 opacity-50 group-hover:opacity-100 group-hover:-rotate-180 transition-transform duration-500"
        />
        <span className="absolute bottom-6 left-1/2 w-0 h-px bg-amber-600 -translate-x-1/2 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
      </Link>

      {/* 2. LE MEGA MENU (au survol) */}
      <div className="absolute left-0 top-full w-full bg-transparent pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-50">
        <div className="bg-white w-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] border-t border-gray-100 relative">
          {/* Ligne décorative dorée */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-amber-600"></div>

          <div className="max-w-[1400px] mx-auto flex min-h-[450px]">
            {/* Colonnes de texte */}
            <div className="flex-1 grid grid-cols-3 gap-12 p-16">
              {data.categories.map((category, index) => (
                <div key={index} className="flex flex-col space-y-8 group/column">
                  <div className="relative pb-4 border-b border-gray-100 transition-colors duration-500 group-hover/column:border-amber-200">
                    <h3 className="font-serif text-3xl text-gray-900 font-light italic">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          onClick={onLinkClick} // Ferme le menu au clic
                          className="flex items-center group/item text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-300 mr-4 transition-all duration-300 group-hover/item:bg-amber-600 group-hover/item:rotate-45"></span>
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* --- IMAGE DE DROITE  --- */}

            <Link
              href = {title === "Intérieur" ? "/interieure" : "/exterieure"} //Lien dynamique selon le menu
              onClick={onLinkClick} // Ferme le menu
              className="w-[35%] relative hidden lg:block overflow-hidden bg-gray-900 group/image cursor-pointer"
            >
              {/* L'image avec effet Zoom + Couleur au survol */}
              <Image 
                src={data.image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-out opacity-60 grayscale group-hover/image:opacity-100 group-hover/image:grayscale-0 group-hover/image:scale-105"
                fill
              />
              
              {/* Overlay dégradé */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Contenu Texte + Bouton */}
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <p className="uppercase tracking-[0.2em] text-xs font-bold mb-3 text-amber-500 translate-y-4 opacity-0 transition-all duration-500 group-hover/image:translate-y-0 group-hover/image:opacity-100">
                  Explorer
                </p>
                
                <div className="flex items-end justify-between">
                    <p className="font-serif text-4xl leading-tight translate-y-4 opacity-0 transition-all duration-500 delay-75 group-hover/image:translate-y-0 group-hover/image:opacity-100">
                      Découvrir <br/> la page.
                    </p>

                    {/* Bouton Rond qui apparaît */}
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 opacity-0 scale-0 transition-all duration-500 delay-150 group-hover/image:translate-y-0 group-hover/image:opacity-100 group-hover/image:scale-100 hover:!bg-amber-500 hover:!text-white">
                        <ArrowRight size={20} />
                    </div>
                </div>
              </div>
            </Link>
             {/* -------------------------------- */}

          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;