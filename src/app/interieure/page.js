'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Interieur() {
  const container = useRef(null);

  // --- ANIMATIONS GSAP ---

  useGSAP(() => {
    // 1. Hero Animation 
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.8, ease: "power2.out" })
      .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.4")
      .from(".hero-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");



    // 2. Animation des Sections (PARALLAXE + REVEAL)
    const sections = gsap.utils.toArray('.content-section');

    sections.forEach((section) => {
      const image = section.querySelector('.parallax-image');
      const text = section.querySelector('.section-content');

      // A. Effet Parallaxe sur l'image
      // L'image commence décalée vers le haut (-15%) et finit vers le bas (15%) pendant le scroll
      if (image) {
        gsap.fromTo(image,
          { yPercent: -55, scale: 1.5 }, // On zoom un peu pour éviter les bords blancs
          {
            yPercent: 5,  // Déplacement vertical
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom", // Commence quand le haut de la section entre en bas de l'écran
              end: "bottom top",   // Finit quand le bas de la section sort en haut
              scrub: true,        // L'animation suit le scroll

            }
          }
        );
      }

      // B. Apparition du Texte 
      if (text) {
        gsap.from(text, {
          y: 200, // Vient de plus bas
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse" // Rejoue l'anim si on remonte
          }
        });
      }
    });

  }, { scope: container });

  // --- GESTION URL SIMPLE ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100 && window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- DONNÉES ---
  const sectionsData = [
    {
      id: "01",
      category: "Expertise",
      title: "Agencement & Rénovation", // Titre aligné Navbar
      anchor: "renovation-globale", // ID pour le scroll
      text: "Nous redessinons les volumes pour révéler le potentiel de votre bien. De la démolition structurelle à l'isolation performante, nous créons des espaces de vie fluides, lumineux et parfaitement optimisés.",
      tags: [ // Tags alignés assurance
        "Rénovation complète",
        "Démolition intérieure",
        "Plâtrerie & Cloisonnement",
        "Isolation intérieure",
        "Aménagement de Combles"
      ],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
    },
    {
      id: "02",
      category: "Signature",
      title: "Sols & Finitions", // Titre aligné Navbar
      anchor: "finitions-decoration", // ID pour le scroll
      text: "L'élégance réside dans le détail. Pose de parquets massifs, carrelages grands formats ou enduits décoratifs : nous apportons la touche finale et les textures qui donneront son caractère unique à votre intérieur.",
      tags: [ // Tags alignés assurance
        "Carrelage & Sols durs",
        "Chapes & Sols coulés",
        "Peinture & Décoration",
        "Enduits décoratifs",
        "Parquet"
      ],
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: "03",
      category: "Savoir-Faire",
      title: "Lots Techniques", // Titre aligné Navbar
      anchor: "pieces-techniques", // ID pour le scroll
      text: "Le confort invisible mais essentiel. Électricité connectée, plomberie de précision et chauffage performant : nous orchestrons les réseaux techniques pour garantir la pérennité et la modernité de votre habitat.",
      tags: [ // Tags alignés assurance
        "Électricité & Domotique",
        "Plomberie & Sanitaire",
        "Création de Salles de Bain",
        "Cuisines",
        "Chauffage électrique & VMC"
      ],
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <div ref={container} className="bg-[#0B0C10] text-white min-h-screen selection:bg-amber-600 selection:text-white">

      {/* HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center z-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pep-renov/interieure/interieure.png"
            alt="Architecture Intérieure"
            fill
            priority
            quality={100} 
            className="object-cover scale-105 contrast-[1.15] brightness-[0.95] saturate-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <div className="overflow-hidden mb-6">
            <span className="hero-badge inline-block text-amber-500 text-sm font-bold uppercase tracking-[0.3em]">
              Savoir-Faire
            </span>
          </div>
          <h1 className="hero-title font-serif text-6xl md:text-8xl lg:text-9xl leading-tight mb-8">
            L'Intérieur <br /> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Sublimé</span>
          </h1>
          <p className="hero-desc text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Chaque espace raconte une histoire. Nous transformons vos intérieurs en œuvres d'art fonctionnelles, où chaque détail est pensé pour inspirer et émerveiller.
          </p>
        </div>
      </div>

      {/* SECTIONS DÉTAILLÉES */}
      <div className="relative z-10">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block z-0"></div>

        {sectionsData.map((section, index) => (
          <section
            key={index}
            className="content-section relative min-h-screen flex items-center bg-[#0B0C10] border-t border-white/5 overflow-hidden py-20 w-full"
          >
            {/* Ancre invisible décalée */}
            <span id={section.anchor} className="absolute top-[-100px] left-0"></span>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center relative z-20">

              {/* COLONNE TEXTE */}
              <div className={`section-content space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-baseline gap-4 text-amber-600 font-serif text-6xl opacity-30">
                  {section.id}
                </div>
                <div>
                  <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                    {section.category}
                  </span>
                  <h2 className="font-serif text-4xl md:text-6xl leading-tight text-white mb-6">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                    {section.text}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {section.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-wider text-gray-300 hover:border-amber-500 hover:text-amber-500 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-8">
                  <Link href="/#contact" className="group inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest hover:text-amber-500 transition-colors">
                    Demander une étude <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* COLONNE IMAGE */}
              <div className={`relative h-[500px] md:h-[70vh] w-full ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                {/* Container avec overflow hidden pour le masque */}
                <div className="absolute inset-0 bg-gray-800 rounded-sm overflow-hidden group shadow-2xl shadow-black/50">
                  {/* J'ai ajouté la classe 'parallax-image' ici pour que GSAP la cible */}
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="parallax-image object-cover" // Pas de transition CSS ici, GSAP gère tout
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </div>
                <div className="absolute -inset-4 border border-amber-600/30 -z-10 rounded-sm"></div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA FINAL */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden">

        {/* 1. IMAGE DE FOND (Intérieur) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop"
            alt="Projet Intérieur"
            fill
            className="object-cover"
          />
          {/* Overlay Noir pour le contraste */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* 2. CONTENU */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-6 block">
            Votre futur espace
          </span>

          <h2 className="font-serif text-5xl md:text-7xl text-white mb-10 leading-tight">
            Prêt à sublimer <br /> votre intérieur ?
          </h2>

          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-4 px-12 py-5 overflow-hidden border border-white/30 hover:border-amber-500 transition-colors duration-300"
          >
            {/* Fond qui glisse au survol */}
            <div className="absolute inset-0 bg-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>

            <span className="relative z-10 text-white text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
              Démarrer la transformation
            </span>
            <ArrowRight className="relative z-10 text-white w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Interieur;