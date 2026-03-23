import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.about-card', {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
        end: 'bottom border',
      }
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="min-h-screen flex items-center justify-start px-6 md:px-20 relative transition-colors duration-500">
      <div className="max-w-2xl z-10 space-y-8 pointer-events-none">
        <div className="about-card p-6 md:p-8 rounded-3xl pointer-events-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-app-accent drop-shadow-md transition-colors duration-500">Our Story</h2>
          <p className="text-lg text-app-text-muted leading-relaxed font-light mb-6 transition-colors duration-500">
            Born from a passion for both technology and the perfect roast, Aura Cafe redefines what a coffee shop can be. We source ethically, roast meticulously, and serve digitally.
          </p>
          <div className="flex items-center gap-4 text-sm font-semibold tracking-wider uppercase text-app-accent drop-shadow-md transition-colors duration-500">
            <span>Precision</span>
            <span className="w-1.5 h-1.5 rounded-full bg-app-accent transition-colors duration-500"></span>
            <span>Quality</span>
            <span className="w-1.5 h-1.5 rounded-full bg-app-accent transition-colors duration-500"></span>
            <span>Aura</span>
          </div>
        </div>
      </div>
    </section>
  );
}
