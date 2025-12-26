'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Hooks Next.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollManager() {
  const pathname = usePathname(); // Détecte le changement de page (ex: / -> /realisations)
  const searchParams = useSearchParams(); // Détecte les paramètres (?query=...)

  useEffect(() => {
    // 1. DÉSACTIVER LA MÉMOIRE DU NAVIGATEUR
    // Empêche Chrome de te remettre en bas si tu refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. GESTION DU SCROLL
    const hash = window.location.hash; // On récupère le #...

    if (hash) {
      // CAS A : Il y a une ancre (ex: #contact)
      const id = hash.replace('#', '');
      
      // Petit délai pour laisser le temps à la page Next.js de se construire
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          // Calcul intelligent pour ne pas être caché sous la Navbar
          // On prend la position de l'élément + le scroll actuel - 100px (taille navbar)
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 100;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // 100ms de pause
    } else {
      // CAS B : Pas d'ancre, on remonte tout en haut
      window.scrollTo(0, 0);
    }

    // 3. REFRESH GSAP
    // Important pour recalculer les positions de ScrollTrigger après un changement de page
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

  }, [pathname, searchParams]); // Se relance à chaque changement de page ou d'URL

  return null;
}