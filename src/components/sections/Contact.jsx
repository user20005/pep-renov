'use client';

import React, { useState, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// On enregistre le plugin pour qu'il soit dispo
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stepsData = [
  { id: 1, title: "Faisons connaissance", subtitle: "Votre identité est le point de départ.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2670&auto=format&fit=crop" },
  { id: 2, title: "Votre vision", subtitle: "Quel est l'objectif de ce projet ?", image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2670&auto=format&fit=crop" },
  { id: 3, title: "Les détails", subtitle: "Précisez vos attentes et contraintes.", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, title: "Contact", subtitle: "Où pouvons-nous vous joindre ?", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2670&auto=format&fit=crop" }
];

function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const container = useRef(null);
  
  const totalSteps = stepsData.length;
  const activeData = stepsData[currentStep - 1];
  const progress = (currentStep / totalSteps) * 100;

  // --- ANIMATION DE TRANSITION ENTRE LES QUESTIONS ---
  const changeStep = (direction) => {
    // 1. On fait sortir le contenu actuel
    gsap.to(".step-content", {
      x: direction === 'next' ? -20 : 20,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        // 2. On change l'état (les données)
        if (direction === 'next') setCurrentStep(prev => prev + 1);
        else setCurrentStep(prev => prev - 1);

        // 3. On fait entrer le nouveau contenu
        gsap.fromTo(".step-content", 
          { x: direction === 'next' ? 20 : -20, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.4 }
        );
      }
    });
  };

  // --- ANIMATION D'APPARITION DE LA SECTION ---
  useGSAP(() => {
    gsap.from(".contact-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-24 bg-[#F5F5F0] relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Fond décoratif */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 lg:px-8 relative z-10 w-full">
        
        {/* LA CARTE PRINCIPALE */}
        <div className="contact-card bg-white rounded-sm shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
            
            {/* COLONNE GAUCHE : VISUEL */}
            <div className="lg:w-5/12 relative bg-gray-900 overflow-hidden h-64 lg:h-auto">
                {stepsData.map((step) => (
                    <div key={step.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${currentStep === step.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <img 
                          src={step.image} 
                          alt="" 
                          className="w-full h-full object-cover transition-transform duration-[3000ms] ease-out"
                          style={{ transform: currentStep === step.id ? 'scale(1.0)' : 'scale(1.1)' }}
                        />
                    </div>
                ))}
                
                <div className="absolute bottom-10 left-10 right-10 z-20 text-white">
                    <div className="flex items-center gap-3 mb-4">
                       <span className="h-px w-8 bg-amber-500"></span>
                       <span className="text-xs font-bold uppercase tracking-widest opacity-80">Étape {currentStep}/{totalSteps}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl leading-tight">{activeData.title}</h3>
                </div>
            </div>

            {/* COLONNE DROITE : FORMULAIRE INTERACTIF */}
            <div className="lg:w-7/12 p-8 md:p-12 lg:p-16 flex flex-col relative">
                {/* Numéro géant en fond */}
                <div className="absolute top-6 right-8 text-9xl font-serif font-bold text-gray-50 select-none -z-10">
                  0{currentStep}
                </div>
                
                <div className="flex-1 flex flex-col justify-center step-content">
                    <div className="mb-8">
                        <p className="text-gray-500 font-light text-xl">{activeData.subtitle}</p>
                    </div>

                    <div className="min-h-[200px]">
                        {currentStep === 1 && (
                          <div className="space-y-8">
                              <InputGroup label="Votre Nom & Prénom" type="text" focus />
                              <InputGroup label="Email Professionnel" type="email" />
                          </div>
                        )}

                        {currentStep === 2 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* On passe des props simples */}
                              <RadioBox label="Rénovation Globale" name="type" />
                              <RadioBox label="Architecture Int." name="type" />
                              <RadioBox label="Extension" name="type" />
                              <RadioBox label="Cuisine / Bain" name="type" />
                          </div>
                        )}

                        {currentStep === 3 && (
                          <div className="h-full">
                              <textarea 
                                className="w-full h-40 border-b border-gray-200 py-4 text-xl text-gray-900 placeholder-gray-300 font-serif focus:outline-none focus:border-amber-600 resize-none bg-transparent" 
                                placeholder="Surface, budget approximatif, style souhaité..."
                              ></textarea>
                          </div>
                        )}

                        {currentStep === 4 && (
                          <div className="space-y-8">
                              <InputGroup label="Téléphone" type="tel" focus />
                              <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-sm flex gap-4 text-amber-900 text-sm">
                                  <CheckCircle2 size={20} className="shrink-0 text-amber-600"/>
                                  <span>Un expert étudiera votre demande et vous recontactera sous 24h.</span>
                              </div>
                          </div>
                        )}
                    </div>
                </div>

                {/* BOUTONS DE NAVIGATION */}
                <div className="mt-12 flex items-center justify-between pt-8 border-t border-gray-100">
                    <div>
                        {currentStep > 1 && (
                          <button onClick={() => changeStep('prev')} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors py-3">
                            <ArrowLeft size={14}/> Retour
                          </button>
                        )}
                    </div>
                    
                    {currentStep < totalSteps ? (
                      <button onClick={() => changeStep('next')} className="bg-gray-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-700 transition-all duration-300 shadow-xl flex items-center gap-3 group rounded-sm">
                        Continuer <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                      </button>
                    ) : (
                      <button className="bg-amber-600 text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-500 transition-all duration-300 shadow-xl flex items-center gap-3 rounded-sm animate-pulse">
                        Envoyer
                      </button>
                    )}
                </div>

                {/* BARRE DE PROGRESSION */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-100">
                  <div 
                    className="h-full bg-amber-600 transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

// --- SOUS-COMPOSANTS ---
const InputGroup = ({ label, type, focus }) => (
  <div className="relative group pt-4">
    <input 
      type={type} 
      autoFocus={focus} 
      className="peer w-full border-b border-gray-300 py-2 text-gray-900 focus:border-amber-600 focus:outline-none bg-transparent transition-colors text-xl font-serif placeholder-transparent" 
      placeholder={label} 
    />
    <label className="absolute left-0 -top-0 text-xs text-gray-400 transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 peer-focus:-top-0 peer-focus:text-xs peer-focus:text-amber-600 pointer-events-none uppercase tracking-wider font-bold">
      {label}
    </label>
  </div>
);

const RadioBox = ({ label, name }) => (
  <label className="flex items-center p-4 border border-gray-200 rounded-sm cursor-pointer hover:border-amber-500 hover:bg-[#FDFBF7] transition-all group has-[:checked]:border-amber-600 has-[:checked]:bg-[#FDFBF7]">
    <input type="radio" name={name} className="hidden" />
    <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 group-has-[:checked]:text-gray-900 uppercase tracking-wide">
      {label}
    </span>
  </label>
);

export default Contact;