"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState("");

  const pathname = usePathname();
  // On considère qu'on est sur la home si pathname est "/"
  const isHomePage = pathname === "/";
  // La navbar est solide si on scroll OU si on n'est pas sur la home
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

  const servicesInterieur = {
    categories: [
      {
        title: "Rénovation Globale",
        items: [
          "Maison & Villa",
          "Appartement Haussmannien",
          "Loft & Surface Atypique",
          "Réagencement complet",
          "Transformation de bureaux",
        ],
      },
      {
        title: "Pièces Techniques",
        items: [
          "Cuisines Haut de Gamme",
          "Salles de Bain & Spa",
          "Suite Parentale & Dressing",
          "Création de trémies & Escaliers",
          "Aménagement de Combles",
        ],
      },
      {
        title: "Finitions & Décoration",
        items: [
          "Peinture & Enduits décoratifs",
          "Sols (Parquet, Marbre, Béton)",
          "Menuiserie sur mesure",
          "Isolation & Cloisonnement",
          "Électricité & Domotique",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
  };

  const servicesExterieur = {
    categories: [
      {
        title: "Architecture & Façade",
        items: [
          "Ravalement de Façade",
          "Isolation Extérieure (ITE)",
          "Traitement de la Pierre",
          "Toiture & Zinguerie",
          "Fenêtres & Baies Vitrées",
        ],
      },
      {
        title: "Extensions & Structures",
        items: [
          "Extension Maison & Garage",
          "Surélévation de toiture",
          "Véranda & Pergola Bio",
          "Maçonnerie Générale",
          "Démolition & Gros Œuvre",
        ],
      },
      {
        title: "Paysage & Aménagement",
        items: [
          "Terrasses (Bois, Pierre, Carrelage)",
          "Piscine & Bassin",
          "Allées & Pavage",
          "Clôtures & Portails",
          "Éclairage Extérieur",
        ],
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
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
              PER<span className="text-amber-600">.</span>RÉNOVATION
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

            {/* Menu Intérieur AVEC lien */}
            <MegaMenuButton
              href="/interieur"
              title="Intérieur"
              data={servicesInterieur}
              scrolled={isSolidNavbar}
            />

            {/* Menu Extérieur SANS lien direct (exemple) */}
            <MegaMenuButton
              href="#" // Mettez le lien que vous voulez ou laissez vide
              title="Extérieur"
              data={servicesExterieur}
              scrolled={isSolidNavbar}
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
          onClick={() => setIsOpen(false)}
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
        />
        <MobileAccordion
          title="Extérieur & Façade"
          id="exterieur"
          current={mobileSubMenu}
          set={setMobileSubMenu}
          data={servicesExterieur}
        />

        <Link
          href="/realisation"
          className="py-4 border-b border-gray-100 text-lg font-serif text-gray-900 block font-bold"
          onClick={() => setIsOpen(false)}
        >
          Nos Réalisations
        </Link>
      </div>
    </>
  );
}

// COMPOSANT ACCORDÉON MOBILE
const MobileAccordion = ({ title, id, current, set, data }) => (
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
            {cat.items.map((item, i) => (
              <li key={i} className="text-sm text-gray-600 py-1">
                {item}
              </li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  </div>
);

// COMPOSANT MEGA MENU (Desktop)
const MegaMenuButton = ({ title, data, scrolled, href }) => {
  return (
    <div className="group static h-full flex items-center">
      {/* 1. LE LIEN PRINCIPAL (Bouton du menu) */}
      {/* Si un href est fourni, on met un Link. Sinon, une simple div. */}
      {href ? (
        <Link
          href={href}
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
      ) : (
        <div
          className={`relative flex items-center py-8 text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-500 group-hover:text-amber-600 cursor-pointer ${
            scrolled ? "text-gray-900" : "text-gray-900 lg:text-white"
          }`}
        >
          {title}
          <ChevronDown
            size={10}
            className="ml-2 opacity-50 group-hover:opacity-100 group-hover:-rotate-180 transition-transform duration-500"
          />
          <span className="absolute bottom-6 left-1/2 w-0 h-px bg-amber-600 -translate-x-1/2 transition-all duration-500 group-hover:w-full opacity-0 group-hover:opacity-100"></span>
        </div>
      )}

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
                          href="#"
                          className="flex items-center group/item text-sm text-gray-500 hover:text-gray-900 transition-colors duration-300"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-300 mr-4 transition-all duration-300 group-hover/item:bg-amber-600 group-hover/item:rotate-45"></span>
                          <span>{item}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Image de droite */}
            <div className="w-[35%] relative hidden lg:block group/image overflow-hidden">
              <img
                src={data.image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover/image:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <p className="uppercase tracking-[0.2em] text-xs font-bold mb-2">
                  Réalisations
                </p>
                <p className="font-serif text-3xl">Découvrir la galerie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;