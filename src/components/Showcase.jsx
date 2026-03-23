import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Showcase() {
  const container = useRef();
  const imgRef = useRef();

  useGSAP(() => {
    // Epic cinematic scale-up and focus reveal
    gsap.fromTo(imgRef.current, {
      scale: 0.5,
      opacity: 0,
      rotationY: -15,
      filter: "blur(20px)"
    }, {
      scale: 1.1,
      opacity: 1,
      rotationY: 0,
      filter: "blur(0px)",
      ease: "power3.out",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "center center",
        scrub: 1.5
      }
    });

    // Parallax out
    gsap.to(imgRef.current, {
       y: -150,
       ease: "none",
       scrollTrigger: {
          trigger: container.current,
          start: "center center",
          end: "bottom top",
          scrub: 1.5
       }
    });

  }, { scope: container });

  const imageUrl = "https://www.shutterstock.com/image-photo/iced-coffee-cream-on-black-600nw-2470148255.jpg";

  return (
    <section ref={container} className="min-h-[80vh] w-full flex flex-col items-center justify-center relative mt-20 mb-20 px-6 overflow-hidden">
      
      <h2 className="text-4xl md:text-7xl font-black text-app-text uppercase tracking-widest mb-10 transition-colors duration-500 text-center z-10 w-full relative drop-shadow-lg">
        Ice Cold.
      </h2>

      <div className="w-full max-w-5xl h-[60vh] flex justify-center items-center z-20 pointer-events-none" style={{ perspective: "1500px" }}>
        <img 
          ref={imgRef}
          src={imageUrl} 
          alt="Iced Coffee Splash"
          className="w-full h-full object-contain drop-shadow-2xl rounded-[3rem]"
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

    </section>
  );
}
