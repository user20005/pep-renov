'use client';

import React, { useRef } from "react";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Avis() {
  const container = useRef(null);
  const slider = useRef(null);
  const tween = useRef(null);

  // --- ANIMATION GSAP (PC & MOBILE) ---
  useGSAP(() => {
    tween.current = gsap.to(slider.current, {
      xPercent: -50, // Déplace de 50% 
      repeat: -1,    // Infini
      duration: 40,  // Vitesse de défilement
      ease: "none",  // Vitesse linéaire
    });
  }, { scope: container });

  // --- GESTION PAUSE / PLAY (PC & MOBILE) ---
  const handlePause = () => tween.current && tween.current.pause();
  const handlePlay = () => tween.current && tween.current.play();

  // --- DONNÉES ---
  const reviews = [
    {
      name: "Jean-Philippe R.",
      location: "Paris 16ème",
      service: "Rénovation Appartement",
      text: "Une équipe d'une rare compétence. Les finitions sont impeccables et les délais ont été respectés.",
      rating: 5,
    },
    {
      name: "Sophie & Marc L.",
      location: "Saint-Germain-en-Laye",
      service: "Extension Maison",
      text: "PER-Rénovation a su nous rassurer. Le résultat dépasse nos espérances, la lumière est incroyable.",
      rating: 5,
    },
    {
      name: "Cabinet Andreu",
      location: "Boulogne-Billancourt",
      service: "Aménagement Bureaux",
      text: "Excellent partenaire pour la rénovation de nos locaux. Discrétion et propreté du chantier.",
      rating: 5,
    },
    {
      name: "Claire D.",
      location: "Versailles",
      service: "Ravalement de Façade",
      text: "Le travail de la pierre a été réalisé avec un grand respect du patrimoine.",
      rating: 4,
    },
    {
      name: "Thomas B.",
      location: "Neuilly-sur-Seine",
      service: "Suite Parentale",
      text: "Un sans-faute. Des artisans polis, un architecte à l'écoute et des matériaux nobles.",
      rating: 5,
    },
  ];

  // On triple la liste 
  const infiniteReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section ref={container} className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      
      {/* EN-TÊTE */}
      <div className="text-center mb-16 px-4 relative z-10">
        <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
          Confiance
        </span>
        <h2 className="font-serif text-4xl text-gray-900">
          Ce que disent nos{" "}
          <span className="italic text-amber-600">clients</span>
        </h2>
      </div>

      {/* ZONE DE DÉFILEMENT */}
      <div className="relative w-full">
        
        {/* Masques latéraux (Dégradé blanc pour fondre les bords) */}
        <div className="absolute top-0 left-0 z-10 h-full w-8 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-8 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        {/* CONTENEUR */}
        <div
          className="overflow-hidden w-full cursor-grab active:cursor-grabbing"
          // Événements pour la Pause
          onMouseEnter={handlePause}
          onMouseLeave={handlePlay}
          onTouchStart={handlePause}
          onTouchEnd={handlePlay}
        >
          {/* BANDE QUI BOUGE */}
          <div
            ref={slider}
            className="flex w-max" 
          >
            {infiniteReviews.map((review, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[450px] px-4 flex-shrink-0 select-none" 
              >
                <div className="bg-[#F9F9F9] p-8 md:p-10 rounded-sm h-full relative border border-transparent hover:border-amber-100 transition-colors duration-300">
                  <Quote className="absolute top-6 right-6 text-amber-900/10 w-8 h-8" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < review.rating ? "#D97706" : "none"}
                        className={i < review.rating ? "text-amber-600" : "text-gray-300"}
                      />
                    ))}
                  </div>

                  <p className="text-gray-600 font-serif italic leading-relaxed mb-8 text-sm md:text-lg">
                    &quot;{review.text}&quot;
                  </p>

                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200/60">
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900 truncate">{review.name}</p>
                      <p className="text-[10px] text-amber-700 uppercase tracking-wider font-bold truncate mt-0.5">{review.service}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avis;