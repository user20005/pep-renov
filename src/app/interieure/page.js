'use client'; // Indispensable pour utiliser GSAP et les interactions

import React, { useRef } from 'react';
import Link from 'next/link'; // Le bon Link pour Next.js
import Image from 'next/image'; // Image optimisée
import { ArrowRight, ArrowDown } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Enregistrement du plugin ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Interieur() {
  const container = useRef(null);

  // --- ANIMATIONS ---
  useGSAP(() => {
    // Animation d'apparition du Hero
    const tl = gsap.timeline();
    tl.from(".hero-badge", { y: -20, opacity: 0, duration: 0.8, ease: "power2.out" })
      .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.4")
      .from(".hero-desc", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6");

    // Animation au scroll pour chaque section
    const sections = gsap.utils.toArray('.content-section');
    sections.forEach((section) => {
      gsap.from(section.querySelector('.section-content'), {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      });
    });
  }, { scope: container });

  // --- DONNÉES ---
  const sectionsData = [
    {
      id: "01",
      category: "Rénovation Globale",
      title: "Restructuration d'Espaces",
      text: "Nous ne faisons pas que rénover, nous redéfinissons les volumes. Supprimer un mur porteur, créer une mezzanine, ouvrir une façade... Tout est possible pour métamorphoser votre lieu de vie.",
      tags: ["Maison & Villa", "Appartement Haussmannien", "Loft Atypique"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
    },
    {
      id: "02",
      category: "Pièces Techniques",
      title: "Cuisines & Bains d'Exception",
      text: "L'alliance parfaite entre ergonomie et esthétique. Marbre veiné, robinetterie laiton, menuiserie sur-mesure... Ces pièces deviennent les joyaux de votre habitation.",
      tags: ["Cuisine Haut de Gamme", "Suite Parentale", "Spa Privé"],
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2670&auto=format&fit=crop"
    },
    {
      id: "03",
      category: "Finitions & Décoration",
      title: "L'Art du Détail",
      text: "La perfection ne supporte pas l'à-peu-près. Moulures, parquets point de Hongrie, éclairage architectural... Nous soignons chaque millimètre pour une signature unique.",
      tags: ["Peinture & Matières", "Sols Nobles", "Domotique"],
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2670&auto=format&fit=crop"
    }
  ];

  return (
    <div ref={container} className="bg-[#0B0C10] text-white min-h-screen selection:bg-amber-600 selection:text-white">
      
      {/* --- HERO SECTION IMMERSIVE --- */}
      <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Fond Image */}
        <div className="absolute inset-0 z-0">
            {/* Utilisation de <img> simple pour le fond car next/image en 'fill' demande une config domaine spécifique */}
            <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" 
                alt="Architecture Intérieure" 
                className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_infinite_alternate]" // Simple animation CSS pour remplacer slow-zoom
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#0B0C10]"></div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
            <div className="overflow-hidden mb-6">
                <span className="hero-badge inline-block text-amber-500 text-sm font-bold uppercase tracking-[0.3em]">
                    Expertise
                </span>
            </div>
            <h1 className="hero-title font-serif text-6xl md:text-8xl lg:text-9xl leading-tight mb-8">
                L'Intérieur <br/> <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Réinventé</span>
            </h1>
            <p className="hero-desc text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Une approche architecturale sans compromis. Nous transformons vos espaces en lieux de vie d'exception.
            </p>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400">
            <ArrowDown size={24} />
        </div>
      </div>


      {/* --- SECTIONS STICKY --- */}
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block z-0"></div>

        {sectionsData.map((section, index) => (
            <section key={index} className="content-section sticky top-0 min-h-screen flex items-center bg-[#0B0C10] border-t border-white/5 overflow-hidden py-20 z-10">
                
                <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center relative z-20">
                    
                    {/* COLONNE GAUCHE (Texte) */}
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

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                            {section.tags.map((tag, i) => (
                                <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-wider text-gray-300 hover:border-amber-500 hover:text-amber-500 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="pt-8">
                           {/* Lien vers la page d'accueil section contact */}
                           <Link 
                              href="/#contact" 
                              className="group inline-flex items-center gap-4 text-white font-bold uppercase tracking-widest hover:text-amber-500 transition-colors"
                           >
                                Démarrer un projet <ArrowRight className="group-hover:translate-x-2 transition-transform"/>
                           </Link>
                        </div>
                    </div>

                    {/* COLONNE DROITE (Image) */}
                    <div className={`relative h-[500px] md:h-[70vh] w-full ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                         <div className="absolute inset-0 bg-gray-800 rounded-sm overflow-hidden group shadow-2xl shadow-black/50">
                            <img 
                                src={section.image} 
                                alt={section.title} 
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        </div>
                        <div className="absolute -inset-4 border border-amber-600/30 -z-10 rounded-sm"></div>
                    </div>

                </div>

            </section>
        ))}
      </div>

      {/* --- CTA FINAL --- */}
      <section className="h-[50vh] flex flex-col items-center justify-center bg-amber-700 text-white relative overflow-hidden z-20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          
          <div className="relative z-10 text-center px-6">
            <h2 className="font-serif text-4xl md:text-6xl mb-8">Votre vision, notre expertise.</h2>
            <Link 
                href="/#contact"
                className="inline-block bg-gray-900 text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
                Prendre Rendez-vous
            </Link>
          </div>
      </section>

    </div>
  );
}

export default Interieur;