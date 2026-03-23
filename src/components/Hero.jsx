import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  const container = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    // Text animations
    gsap.from('.hero-text', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power4.out',
      delay: 0.2
    });

    // Intense 3D-like float entry for image
    gsap.fromTo(imgRef.current, {
       opacity: 0,
       scale: 0.2,
       rotationY: 45,
       rotationX: 20,
       y: 150
    }, {
       opacity: 1,
       scale: 1,
       rotationY: 0,
       rotationX: 0,
       y: 0,
       duration: 2.5,
       ease: "elastic.out(1, 0.75)",
       delay: 0.4
    });

    // CSS 3D scroll parallax effect
    gsap.to(imgRef.current, {
       y: -150,
       rotationZ: -10,
       scale: 1.1,
       ease: "none",
       scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5
       }
    });

  }, { scope: container });

  const hotCoffeeImg = "https://media.istockphoto.com/id/2163016527/photo/coffee-cup-and-coffee-beans-on-gray-background-black-coffee-cup-aromatic.webp?b=1&s=612x612&w=0&k=20&c=UWQ5L87_NCBt-mfhomX9emDJq-u28ssgiTmi_quuD3A=";

  return (
    <section id="home" ref={container} className="min-h-screen flex items-center justify-between px-6 md:px-20 pt-32 pb-16 text-app-text overflow-hidden relative transition-colors duration-500" style={{ perspective: "1000px" }}>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10">
        
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h1 className="hero-text text-5xl md:text-8xl font-extrabold uppercase tracking-tighter leading-tight">
            Sip the <br/> <span className="text-app-accent transition-colors duration-500">Digital</span> Brew.
          </h1>
          <p className="hero-text mx-auto md:mx-0 mt-6 text-lg md:text-xl max-w-lg text-app-text-muted font-light transition-colors duration-500">
            Experience an immersive blend of specialty coffee and cutting-edge web design. 
            Welcome to Aura Cafe, where every drop tells a story.
          </p>
          <div className="hero-text mt-10">
            <a href="#menu" className="inline-block px-8 py-4 bg-app-accent text-app-bg font-bold uppercase tracking-widest rounded-full hover:bg-app-accent-hover transition-colors duration-500 shadow-lg shadow-app-accent/20">
              Explore Menu
            </a>
          </div>
        </div>

        {/* Right Column: Dynamic Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end min-h-[400px]">
           <img 
              ref={imgRef}
              src={hotCoffeeImg}
              alt="Hot Coffee"
              className="w-full max-w-[500px] h-[50vh] object-contain drop-shadow-2xl rounded-3xl"
              style={{ transformStyle: "preserve-3d" }}
           />
        </div>

      </div>
    </section>
  );
}
