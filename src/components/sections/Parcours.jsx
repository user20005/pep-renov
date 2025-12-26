'use client';


import React, { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ChevronsLeftRight,
  CheckCircle2,
  Link,
} from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Parcours() {
  const container = useRef(null);

  useGSAP(
    () => {
      // 1. On force ScrollTrigger à recalculer les positions après le chargement
      ScrollTrigger.refresh();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // TITRE : On utilise fromTo pour forcer l'état initial
      tl.fromTo(
        ".anim-left",
        { x: -50, opacity: 0 }, // DÉPART
        { x: 0, opacity: 1, duration: 1, ease: "power1.out" } // ARRIVÉE
      );

      // ÉTAPES : fromTo + stagger
      tl.fromTo(
        ".step-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.3,
          ease: "back.out(0.7)",
        },
        "-=.75"
      );

      // SLIDER : fromTo
      tl.fromTo(
        ".slider-container",
        { scale: 0.8, opacity: 0, y: -50 },
        { y: 0, scale: 1, opacity: 1, duration: 1, ease: "back.out" },
        "-=.5"
      );
    },
    { scope: container }
  );

  const steps = [
    {
      id: "01",
      title: "Prise de contact",
      description:
        "Tout commence par une vision. Estimation budgétaire sous 48h.",
    },
    {
      id: "02",
      title: "Visite Technique",
      description:
        "Analyse des contraintes, métrés précis et devis détaillé ferme.",
    },
    {
      id: "03",
      title: "Réalisation",
      description: "Un chef de projet dédié orchestre les artisans.",
    },
    {
      id: "04",
      title: "Livraison",
      description:
        "Finitions, nettoyage complet et remise des clés de votre nouvel espace.",
    },
  ];

  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    const clientX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };
  const handleMouseDown = () => setIsDragging(true);

  useEffect(() => {
    const handleGlobalMove = (e) => {
      if (isDragging) handleMove(e);
    };
    const handleGlobalUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener("mousemove", handleGlobalMove);
      window.addEventListener("mouseup", handleGlobalUp);
      window.addEventListener("touchmove", handleGlobalMove);
      window.addEventListener("touchend", handleGlobalUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleGlobalMove);
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchmove", handleGlobalMove);
      window.removeEventListener("touchend", handleGlobalUp);
    };
  }, [isDragging]);

  return (
    <section
      ref={container}
      id="process"
      className="min-h-screen pt-32 pb-24 flex flex-col justify-center bg-[#F9F5F0] text-gray-800 overflow-hidden relative">
      {/* Fond subtil */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-100/40 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* --- COLONNE 1 : INFOS (Sticky) --- */}
          <div className="lg:w-4/12 lg:sticky lg:top-32 anim-left opacity-0">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.25em] mb-6 block border-l-2 border-amber-600 pl-4">
              Méthodologie
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.15] mb-8 text-gray-900">
              L&apos;Excellence <br />
              <span className="italic text-amber-700 font-light">
                étape par étape
              </span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed font-light text-lg">
              Une rénovation réussie repose sur une organisation sans faille.
              Nous avons modélisé un parcours client qui élimine l&apos;imprévu.
            </p>

            <div className="flex flex-col gap-5 border-t border-amber-900/10 pt-8">
              <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                <CheckCircle2 size={18} className="text-amber-600" /> Respect
                absolu des délais
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                <CheckCircle2 size={18} className="text-amber-600" /> Prix ferme
                et définitif
              </div>
              <div className="flex items-center gap-3 text-sm font-medium text-gray-600">
                <CheckCircle2 size={18} className="text-amber-600" />{" "}
                Interlocuteur unique dédié
              </div>
            </div>

            <div className="mt-12">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("contact");
                  if (section) {
                    // 1. On calcule la position de la section par rapport au haut de la page
                    const sectionTop =
                      section.getBoundingClientRect().top + window.scrollY;

                    // 2. On retire 100px (la taille de ta Navbar) pour ne pas être caché dessous
                    const offsetPosition = sectionTop - 100;

                    // 3. On scrolle manuellement à cette position exacte
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="group inline-flex items-center px-10 py-5 bg-[#1a1a1a] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-700 transition-all duration-500 shadow-2xl hover:shadow-amber-900/20 rounded-sm cursor-pointer">
                Lancer mon projet
                <ArrowRight
                  size={16}
                  className="ml-3 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* --- COLONNE 2 : TIMELINE --- */}
          <div className="lg:w-4/12 flex flex-col relative pt-4">
            <div className="absolute left-[27px] top-6 bottom-20 w-[2px] bg-gradient-to-b from-amber-600/30 via-amber-400/20 to-transparent"></div>
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="step-card flex gap-8 relative group opacity-0 cursor-default">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-14 h-14 bg-[#FAF9F6] shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex items-center justify-center rounded-full border border-amber-100/50 group-hover:border-amber-600 group-hover:scale-110 transition-all duration-500 ease-out">
                      <span className="font-serif text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {step.id}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 pb-8 border-b border-amber-900/5 group-last:border-none w-full transition-transform duration-500 group-hover:translate-x-2">
                    <h3 className="font-serif text-2xl text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- COLONNE 3 : SLIDER --- */}
          <div className="lg:w-4/12 w-full hidden lg:block relative h-[650px] lg:sticky lg:top-32 slider-container opacity-0">
            <div
              ref={containerRef}
              className={`relative w-full h-full rounded-[4px] overflow-hidden select-none shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] border-[8px] border-white ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              onClick={handleMove}>
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop"
                alt="Après"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white rounded-sm shadow-lg z-10">
                Après
              </div>
              <div
                className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop"
                  alt="Avant"
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-90"
                />
                <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-white rounded-sm shadow-lg z-20">
                  Avant
                </div>
              </div>
              <div
                className="absolute top-0 bottom-0 w-[1px] bg-white/80 z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl text-gray-900 border border-gray-100 transition-transform duration-300"
                  style={{
                    transform: `translate(-50%, -50%) scale(${
                      isDragging ? 1.15 : 1
                    })`,
                  }}>
                  <ChevronsLeftRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parcours;
