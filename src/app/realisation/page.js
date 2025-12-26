'use client';

import React, { useState } from 'react';
import { ArrowRight, MapPin, Filter } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- DONNÉES (Portfolio) ---
const projectsData = [
  {
    id: 1,
    title: "Villa Montmorency",
    category: "Maison",
    location: "Paris 16e",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 2,
    title: "Loft Marais",
    category: "Appartement",
    location: "Paris 3e",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 3,
    title: "Hôtel Particulier",
    category: "Maison",
    location: "Neuilly-sur-Seine",
    image: "https://images.unsplash.com/photo-1600596542815-3ad19ebb8125?q=80&w=2670&auto=format&fit=crop",
    year: "2022"
  },
  {
    id: 4,
    title: "Bureaux Haussmanniens",
    category: "Commercial",
    location: "Paris 8e",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop",
    year: "2024"
  },
  {
    id: 5,
    title: "Duplex Vue Tour Eiffel",
    category: "Appartement",
    location: "Paris 7e",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2670&auto=format&fit=crop",
    year: "2023"
  },
  {
    id: 6,
    title: "Extension Contemporaine",
    category: "Maison",
    location: "Saint-Cloud",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    year: "2022"
  }
];

// Liste des filtres disponibles
const filters = ["Tous", "Appartement", "Maison", "Commercial"];

function Realisations() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  // Logique de filtrage
  const filteredProjects = activeFilter === "Tous" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen pt-20"> {/* pt-20 pour compenser la Navbar fixe */}

      {/* --- HEADER DE PAGE --- */}
      <div className="bg-[#0B0C10] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-4 block animate-fade-in-up">
                Portfolio
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mb-6 animate-fade-in-up">
                Nos <span className="italic text-amber-500">Signatures</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg animate-fade-in-up">
                Découvrez une sélection de nos projets les plus emblématiques, où l&apos;exigence technique rencontre l&apos;élégance architecturale.
            </p>
        </div>
      </div>

      {/* --- BARRE DE FILTRES --- */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                        activeFilter === filter 
                        ? 'bg-gray-900 text-white border-gray-900 shadow-lg' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-gray-900 hover:text-gray-900'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>
      </div>

      {/* --- GRILLE DES PROJETS --- */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {filteredProjects.map((project) => (
                <div key={project.id} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    
                    {/* Image avec effet zoom */}
                    <div className="relative h-[300px] overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        
                        {/* Badge Catégorie */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gray-900 rounded-sm">
                            {project.category}
                        </div>
                    </div>

                    {/* Contenu de la carte */}
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="font-serif text-2xl text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
                                    <MapPin size={14} className="text-amber-500"/>
                                    {project.location} • {project.year}
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                            <span className="text-xs font-bold text-gray-900 uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
                                Voir le projet
                            </span>
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-amber-600 group-hover:text-white transition-all">
                                <ArrowRight size={14} />
                            </div>
                        </div>
                    </div>

                </div>
            ))}

        </div>

        {/* Message si aucun projet (optionnel) */}
        {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                Aucun projet ne correspond à ce filtre pour le moment.
            </div>
        )}

      </div>

      {/* --- CTA FINAL --- */}
      <section className="bg-amber-600 py-20 px-6 text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Un projet similaire en tête ?</h2>
          <p className="mb-8 text-white/80 max-w-xl mx-auto">
              Chaque projet est unique. Discutons de vos envies et transformons votre espace.
          </p>
          <Link 
             href="./#contact" // Retour vers l'ancre contact de la home (ou une page contact dédiée)
            className="inline-flex items-center gap-3 bg-white text-amber-900 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gray-100 transition-colors shadow-xl"
          >
              Demander une étude <ArrowRight size={16}/>
          </Link>
      </section>

    </div>
  );
}

export default Realisations;