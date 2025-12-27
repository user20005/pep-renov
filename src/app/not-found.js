'use client';

import React from 'react';
import { Home, ArrowLeft, Construction } from 'lucide-react';
import Link from "next/link";

function NotFound() {
  return (
    <div className="relative min-h-screen w-full bg-[#0B0C10] flex items-center justify-center overflow-hidden">
      
      {/* --- FOND D'AMBIANCE --- */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-[#0B0C10] to-black opacity-80"></div>
      
      {/* Cercles flous */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- CONTENU --- */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        
        {/* Icône décorative */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-8 animate-pulse">
            <Construction className="text-amber-500" size={32} />
        </div>

        {/* Le Gros Chiffre 404 */}
        <h1 className="text-[8rem] md:text-[12rem] leading-none font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none">
          404
        </h1>

        {/* Le Message */}
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 -mt-8 md:-mt-12 relative z-20">
          Plan introuvable
        </h2>
        
        <p className="text-gray-400 text-lg font-light mb-10 max-w-lg mx-auto leading-relaxed">
          Il semblerait que nous ayons atteint un mur porteur. La page que vous cherchez a été déplacée ou n&apos;a jamais été construite.
        </p>

        {/* --- BOUTONS D'ACTION --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          {/* Bouton Retour Accueil */}
          <Link 
            href="/" 
            className="group px-8 py-4 bg-amber-600 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-500 transition-all duration-300 rounded-sm shadow-lg shadow-amber-900/20 flex items-center gap-2"
          >
            <Home size={16} />
            Retour à l&apos;accueil
          </Link>

          <button 
            onClick={() => window.history.back()} 
            className="group px-8 py-4 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/30 transition-all duration-300 rounded-sm flex items-center gap-2"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Page précédente
          </button>

        </div>
      </div>

    </div>
  );
}

export default NotFound;