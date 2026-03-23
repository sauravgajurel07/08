import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { name: 'Espresso', price: '$3.50', desc: 'Single origin, bright and complex.' },
  { name: 'Pour Over', price: '$5.00', desc: 'Slow brewed for clarity.' },
  { name: 'Cortado', price: '$4.25', desc: 'Equal parts espresso and steamed milk.' },
  { name: 'Oat Flat White', price: '$5.50', desc: 'Smooth, creamy, dairy-free.' },
  { name: 'Matcha Latte', price: '$6.00', desc: 'Ceremonial grade, perfectly whisked.' },
];

export default function Menu() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.menu-item', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      }
    });
  }, { scope: container });

  return (
    <section id="menu" ref={container} className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative transition-colors duration-500">
      <div className="w-full max-w-5xl mx-auto z-10 pointer-events-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-app-text transition-colors duration-500">
          Our <span className="text-app-accent">Menu</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="menu-item flex flex-col border-b border-app-text-muted/30 pb-4 group hover:border-app-accent transition-colors duration-500 cursor-default">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-2xl font-semibold text-app-accent-hover group-hover:text-app-text transition-colors duration-500">{item.name}</h3>
                <span className="text-xl font-light text-app-text-muted transition-colors duration-500">{item.price}</span>
              </div>
              <p className="text-app-text-muted/70 text-sm font-light transition-colors duration-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
