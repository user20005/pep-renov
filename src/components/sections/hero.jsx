'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'; // Import correct

// Pas besoin de registerPlugin() vide, c'est automatique pour le core

function Hero() {
  const container = useRef(null);

  // ANIMATION GSAP
  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. La ligne verticale descend
    tl.from(".hero-line", { height: 0, opacity: 0, duration: 1, ease: "power3.out" })
    
    // 2. Le petit badge apparait
      .from(".hero-badge", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
    
    // 3. Le Titre monte
      .from(".hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.6")
    
    // 4. Le Texte monte
      .from(".hero-desc", { y: 30, opacity: 0, duration: 1 }, "-=0.8")
    
    // 5. Les Boutons apparaissent
      .from(".hero-btns", { y: 20, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.8");

  }, { scope: container });


  // Nettoyage URL (ton code existant)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleScroll = () => {
      if (window.scrollY < 50 && window.location.hash ) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
     <section ref={container}>
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        {/* FOND (On peut garder l'anim CSS pour le zoom lent c'est plus léger) */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] scale-100 hover:scale-110" // Simple transition CSS ou garde ta classe animate-slow-zoom si tu as fait la config
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop')",
              animation: "pulse 20s infinite alternate" // Ou utilise une classe standard
            }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>

        {/* CONTENU */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          
          {/* Ligne verticale (Classe 'hero-line') */}
          <div className="hero-line h-24 w-px bg-gradient-to-b from-transparent to-amber-500 mb-6"></div>

          {/* Badge (Classe 'hero-badge') */}
          <div className="hero-badge">
            <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-white/90 text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium backdrop-blur-sm">
              Design & Rénovation
            </span>
          </div>

          {/* Titre (Classe 'hero-title') */}
          <h1 className="hero-title mt-6 text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-tight">
            L'ART DE <br />
            <span className="italic font-light text-amber-50 relative inline-block">
              SUBLIMER
              <span className="absolute bottom-2 left-0 w-full h-1 bg-amber-600/60 blur-sm transform -skew-x-12"></span>
            </span>
          </h1>

          {/* Description (Classe 'hero-desc') */}
          <p className="hero-desc mt-8 text-gray-200 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            PER-Rénovation transforme l'ordinaire en exceptionnel.
            <span className="hidden md:inline"> De la conception des plans aux finitions haute couture, nous orchestrons votre projet intérieur et extérieur.</span>
          </p>

          {/* Boutons (Classe 'hero-btns') - Note le wrapper pour l'anim groupée */}
          <div className="hero-btns mt-10 flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const section = document.getElementById("contact");
                if (section) {
                  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: sectionTop - 100, behavior: "smooth" });
                }
              }}
              className="group relative px-8 py-4 bg-white text-gray-900 text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-amber-600 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
              <span className="relative flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                Démarrer un projet <ArrowRight size={16} />
              </span>
            </a>

            <a
              href="#portfolio"
              className="group px-8 py-4 border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-gray-900 transition-all duration-300 hover:border-white backdrop-blur-sm"
            >
              Voir la galerie
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;