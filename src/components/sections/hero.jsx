"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const container = useRef(null);

  // --- ANIMATION GSAP ---
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-content > *", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: container }
  );

  // --- NETTOYAGE URL ---
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      if (window.scrollY < 50 && window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={container}>
      <div className="relative h-screen w-full overflow-hidden bg-gray-900">
        {/* --- 1. IMAGE MOBILE  --- */}
        <div className="block md:hidden absolute inset-0 w-full h-full z-0">
          <Image
            src="/pep-renov/hero-mobile-test.png"
            alt="Intérieur d'exception"
            fill
            priority
            quality={90}
            className="object-cover object-center"
          />
        </div>

        {/* --- 2. IMAGE DESKTOP --- */}
        <div className="absolute md:block hidden inset-0 w-full h-full z-0">
          <Image
            src="/pep-renov/hero-test.png"
            alt="Intérieur d'exception"
            fill
            priority
            quality={90}
            className="object-cover object-center "
          />
        </div>

        {/* --- OVERLAYS COMMUNS --- */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
        </div>

        {/* --- CONTENU --- */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-2 flex items-center">
          <div className="hero-content max-w-2xl text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-8 bg-amber-500"></div>
              <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em]">
                Architecture & Intérieur
              </span>
            </div>

            {/* Titre */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9]">
              L'Art de <br />
              <span className="italic font-light text-gray-200 ml-4">
                l'Exception
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg font-light leading-relaxed max-w-md border-l border-white/10 pl-6">
              Révélez l'essence de votre habitat avec PEP RENOVATION. Une conception
              sur-mesure, où l'élégance rencontre le confort absolu.
            </p>

            {/* Boutons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-white text-gray-900 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-500 transition-colors">
                <span className="flex items-center gap-3">
                  Votre Projet <ArrowRight size={16} />
                </span>
              </a>

              <a
                href="#portfolio"
                className="group px-8 py-4 border border-white/20 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white transition-all">
                Découvrir
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes kenburns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.15);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
