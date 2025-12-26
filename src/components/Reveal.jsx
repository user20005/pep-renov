'use client'; 

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// On active le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

function Reveal({ children, width = "100%", delay = 0, duration = 1.2, y = 60 }) {
  const ref = useRef(null);

  useGSAP(() => {
    const element = ref.current;

    // Animation : Du bas (y: 60) vers sa position (y: 0)
    gsap.fromTo(
      element,
      {
        y: y,
        opacity: 0,
        scale: 0.98 
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: ref });

  return (
    <div ref={ref} style={{ width, opacity: 0 }}>
      {children}
    </div>
  );
}

export default Reveal;