'use client'; 

import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link'; // 👈 Changement pour Next.js

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Villa Montmorency",
      category: "Rénovation Globale",
      location: "Paris 16e",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
      size: "col-span-1 md:col-span-2 row-span-2" // Grande image
    },
    {
      id: 2,
      title: "Loft Marais",
      category: "Architecture Intérieure",
      location: "Paris 3e",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
      size: "col-span-1 md:col-span-1 row-span-1" // Carré
    },
    {
      id: 3,
      title: "Hôtel Particulier",
      category: "Extension & Paysage",
      location: "Neuilly-sur-Seine",
      image: "https://images.unsplash.com/photo-1600596542815-3ad19ebb8125?q=80&w=2670&auto=format&fit=crop",
      size: "col-span-1 md:col-span-1 row-span-1" // Carré
    }
  ];

  return (
    <section className="py-24 bg-[#0B0C10] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* EN-TÊTE : Titre + Bouton "Voir tout" alignés */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                    Portfolio
                </span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                    Nos dernières <span className="italic text-amber-500">signatures</span>
                </h2>
            </div>
            

            <Link href="/realisations" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b border-gray-700 pb-2 hover:border-amber-500 hover:text-amber-500 transition-all">
                Voir tous les projets
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
        </div>

        {/* GRILLE BENTO (Layout asymétrique) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {projects.map((project) => (
                <div 
                    key={project.id} 
                    className={`group relative overflow-hidden rounded-sm cursor-pointer ${project.size}`}
                >
                    {/* Image avec Zoom lent */}
                    {/* Note: Pour optimiser encore plus, tu pourras utiliser <Image /> de Next.js plus tard */}
                    <div className="absolute inset-0 bg-gray-800">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                    </div>

                    {/* Overlay Noir dégradé (toujours visible un peu en bas) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* Contenu (Texte qui remonte) */}
                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        
                        {/* Ligne décorative */}
                        <div className="w-12 h-[1px] bg-amber-500 mb-4 scale-0 group-hover:scale-100 origin-left transition-transform duration-500 delay-100"></div>
                        
                        <p className="text-amber-500 text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {project.category}
                        </p>
                        
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 group-hover:text-amber-50 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-xs font-light">
                                    {project.location}
                                </p>
                            </div>
                            
                            {/* Flèche icône */}
                            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-amber-500 hover:border-amber-500 hover:text-black">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;