'use client';

import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Send } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function Contact() {
  const container = useRef(null);

  useGSAP(() => {
    // Animation Colonne Gauche (Infos)
    gsap.from(".contact-info-item", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%", // On déclenche un peu plus tôt (75% de l'écran)
        toggleActions: "play none none reverse" 
      }
    });

    // Animation Colonne Droite (Formulaire)
    gsap.from(".form-input-group", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15, // Stagger plus serré pour les champs du formulaire
      delay: 0.2, // Petit délai pour que ça arrive après le texte
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 45%",
        toggleActions: "play none none reverse" // Idem ici pour le rejeu
      }
    });
  }, { scope: container });

  return (
    <section 
        id="contact" 
        ref={container} 
        className="relative bg-[#050608] text-white py-24 lg:py-32 overflow-hidden"
    >
        {/* Décoration de fond subtile */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* --- COLONNE GAUCHE : INFOS --- */}
            <div className="space-y-12">
                <div className="contact-info-item">
                    <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                        Parlons de votre projet
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl leading-tight">
                        Une vision ? <br/> <span className="text-gray-500 italic">Concrétisons-la.</span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {/* Item 1 */}
                    <div className="contact-info-item flex items-start gap-6 group">
                        <div className="p-4 rounded-full border border-white/10 text-amber-500 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                            <Phone size={20} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Téléphone</p>
                            <p className="text-xl font-serif">01 23 45 67 89</p>
                            <p className="text-sm text-gray-500 mt-1">Du Lundi au Vendredi, 9h-18h</p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="contact-info-item flex items-start gap-6 group">
                         <div className="p-4 rounded-full border border-white/10 text-amber-500 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email</p>
                            <a href="mailto:contact@pep-renov.fr" className="text-xl font-serif hover:text-amber-500 transition-colors">
                                contact@pep-renov.fr
                            </a>
                            <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="contact-info-item flex items-start gap-6 group">
                         <div className="p-4 rounded-full border border-white/10 text-amber-500 group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600 transition-all duration-300">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Siège Social</p>
                            <p className="text-xl font-serif">Paris & Île-de-France</p>
                            <p className="text-sm text-gray-500 mt-1">Déplacement sur site pour devis</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- COLONNE DROITE : FORMULAIRE  --- */}
            <form className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/10 rounded-sm backdrop-blur-sm">
                
                {/* Champ Nom */}
                <div className="form-input-group relative">
                    <input 
                        type="text" 
                        id="name"
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300"
                        placeholder="Votre Nom"
                    />
                    <label 
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-amber-500 peer-focus:text-sm"
                    >
                        Votre Nom & Prénom
                    </label>
                </div>

                {/* Champ Email & Tel */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="form-input-group relative">
                        <input 
                            type="email" 
                            id="email"
                            className="peer w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300"
                            placeholder="Email"
                        />
                        <label 
                            htmlFor="email"
                            className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-amber-500 peer-focus:text-sm"
                        >
                            Email
                        </label>
                    </div>
                    <div className="form-input-group relative">
                        <input 
                            type="tel" 
                            id="tel"
                            className="peer w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300"
                            placeholder="Téléphone"
                        />
                        <label 
                            htmlFor="tel"
                            className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-amber-500 peer-focus:text-sm"
                        >
                            Téléphone
                        </label>
                    </div>
                </div>

                {/* Champ Message */}
                <div className="form-input-group relative">
                    <textarea 
                        id="message"
                        rows="4"
                        className="peer w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder-transparent focus:border-amber-500 focus:outline-none transition-colors duration-300 resize-none"
                        placeholder="Message"
                    ></textarea>
                    <label 
                        htmlFor="message"
                        className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-amber-500 peer-focus:text-sm"
                    >
                        Parlez-nous de votre projet...
                    </label>
                </div>

                {/* Bouton d'envoi  */}
                <div className="form-input-group pt-4">
                    <button 
                        type="submit"
                        className="group w-full bg-white text-black py-5 px-8 font-bold uppercase tracking-[0.2em] hover:bg-amber-600 hover:text-white transition-all duration-500 flex items-center justify-center gap-4"
                    >
                        <span>Envoyer la demande</span>
                        <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>

            </form>
        </div>
    </section>
  );
}

export default Contact;