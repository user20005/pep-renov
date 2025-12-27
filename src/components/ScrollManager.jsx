'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'; // Hooks Next.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollManager() {
  const pathname = usePathname(); // Détecte le changement de page
  const searchParams = useSearchParams(); // Détecte les paramètres (?query=...)

  useEffect(() => {
    // 1. DÉSACTIVER LA MÉMOIRE DU NAVIGATEUR
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. GESTION DU SCROLL
    const hash = window.location.hash; 

    if (hash) {
      const id = hash.replace('#', '');
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 100;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // 100ms de pause
    } else {
      window.scrollTo(0, 0);
    }

    // 3. REFRESH GSAP
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 500);

  }, [pathname, searchParams]); // Se relance à chaque changement de page ou d'URL

  return null;
}