import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Image, Float } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const img1Url = "https://media.istockphoto.com/id/2163016527/photo/coffee-cup-and-coffee-beans-on-gray-background-black-coffee-cup-aromatic.webp?b=1&s=612x612&w=0&k=20&c=UWQ5L87_NCBt-mfhomX9emDJq-u28ssgiTmi_quuD3A=";
const img2Url = "https://www.shutterstock.com/image-photo/iced-coffee-cream-on-black-600nw-2470148255.jpg";

function AnimatedGallery() {
  const img1Ref = useRef();
  const img2Ref = useRef();
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!img1Ref.current || !img2Ref.current) return;

      const mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        let { isDesktop } = context.conditions;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.app-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1.5,
          }
        });

        // 1. Scroll to About Section -> Image 1 flies left and spins 180!
        tl.to(img1Ref.current.position, {
          x: isDesktop ? -3 : 0,        
          y: isDesktop ? 0 : 2,      
          z: isDesktop ? -1 : -2,
          ease: "power2.inOut"
        }, 0)
        .to(img1Ref.current.rotation, {
          x: 0.1, y: Math.PI, z: -0.1, // Does a 180 degree spin
          ease: "power2.inOut"
        }, 0);

        // Image 2 is hidden way low. Bring it up slightly, but stay out of frame
        tl.to(img2Ref.current.position, {
          y: -4, ease: "power2.inOut"
        }, 0);

        // 2. Scroll to Showcase/Menu Section -> Image 1 flies UP and AWAY. Image 2 swoops in majestically!
        tl.to(img1Ref.current.position, {
          y: 8, x: -5, z: -5, // Fly out perfectly
          ease: "power2.inOut"
        }, 1)
        .to(img1Ref.current.rotation, {
          y: Math.PI * 1.5,
          ease: "power2.inOut"
        }, 1);

        // Image 2 crashes the party in the center of the screen!
        tl.to(img2Ref.current.position, {
          x: 0, y: isDesktop ? 0.5 : 1, z: isDesktop ? 1 : 0, 
          ease: "power2.inOut"
        }, 1)
        .to(img2Ref.current.rotation, {
          x: 0, y: Math.PI * 2, z: 0.05, // Spin fully around to face camera
          ease: "power2.inOut"
        }, 1);


        // 3. Scroll to Contact Section -> Image 2 settles back for the layout
        tl.to(img2Ref.current.position, {
          x: 0, y: isDesktop ? -1 : -2, z: -2,       
          ease: "power2.inOut"
        }, 2)
        .to(img2Ref.current.rotation, {
          x: -0.5, y: Math.PI * 2.2, z: -0.1, // Tilt dynamically backwards
          ease: "power2.inOut"
        }, 2);
      });
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Image 
          ref={img1Ref} 
          url={img1Url} 
          position={[2.5, 0, 0]} 
          rotation={[0, -0.2, 0.05]} 
          scale={[4, 3]} 
          fit="contain" // Perfectly maintains full aspect ratio without cropping
          transparent 
        />
      </Float>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Image 
          ref={img2Ref} 
          url={img2Url} 
          position={[0, -10, -5]} // Starts massively hidden below screen
          rotation={[0.5, -Math.PI, -0.2]} 
          scale={[6, 4]} 
          fit="contain" // Perfectly maintains full aspect ratio without cropping
          transparent
        />
      </Float>
    </>
  );
}

export default function BaseScene() {
  return (
    <Canvas
      shadows={false}
      dpr={[1, 2]} // Support high-res displays beautifully
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <AnimatedGallery />
      </Suspense>
    </Canvas>
  );
}
