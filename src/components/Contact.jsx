import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, MapPin, Coffee } from 'lucide-react';

export default function Contact() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.contact-item', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%'
      }
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="min-h-[80vh] flex flex-col justify-center px-6 md:px-20 relative transition-colors duration-500">
      <div className="w-full max-w-4xl mx-auto z-10 pointer-events-none">
        
        <div className="contact-item text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-app-text transition-colors duration-500">
            Get in <span className="text-app-accent drop-shadow-md">Touch</span>
          </h2>
          <p className="mt-4 text-app-text-muted text-lg transition-colors duration-500 max-w-2xl mx-auto">
            Have questions about our brewing process, wholesale beans, or want to say hello? Drop us an email.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 pointer-events-auto">
          {/* Contact Form */}
          <form 
            className="contact-item flex-1 bg-app-bg/50 backdrop-blur-md border border-app-text-muted/20 p-8 rounded-3xl flex flex-col gap-6"
            onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully!"); }}
          >
             <h3 className="text-2xl font-bold text-app-text transition-colors duration-500 mb-2">Send a Message</h3>
             
             <div className="flex flex-col gap-2">
               <label className="text-sm text-app-text-muted font-bold uppercase tracking-wider transition-colors duration-500">Name</label>
               <input type="text" className="w-full bg-transparent border-b border-app-text-muted/50 focus:border-app-accent outline-none text-app-text py-2 transition-colors duration-300 placeholder:text-app-text-muted/50" placeholder="John Doe" required />
             </div>
             
             <div className="flex flex-col gap-2 mt-2">
               <label className="text-sm text-app-text-muted font-bold uppercase tracking-wider transition-colors duration-500">Email Address</label>
               <input type="email" className="w-full bg-transparent border-b border-app-text-muted/50 focus:border-app-accent outline-none text-app-text py-2 transition-colors duration-300 placeholder:text-app-text-muted/50" placeholder="john@example.com" required />
             </div>
             
             <div className="flex flex-col gap-2 mt-2">
               <label className="text-sm text-app-text-muted font-bold uppercase tracking-wider transition-colors duration-500">Queries / Suggestions</label>
               <textarea rows="4" className="w-full bg-transparent border-b border-app-text-muted/50 focus:border-app-accent outline-none text-app-text py-2 transition-colors duration-300 placeholder:text-app-text-muted/50 resize-none" placeholder="What's on your mind?" required></textarea>
             </div>
             
             <button type="submit" className="mt-4 px-8 py-4 bg-app-accent text-app-bg font-bold uppercase tracking-widest rounded-full hover:bg-app-accent-hover transition-colors shadow-lg shadow-app-accent/20">
               Submit
             </button>
          </form>

          {/* Location & Info Card */}
          <div className="contact-item w-full md:w-1/3 flex flex-col gap-8">
            <div className="group p-8 rounded-3xl border border-app-text-muted/20 bg-app-bg h-full flex flex-col items-center justify-center text-center hover:border-app-accent transition-colors duration-500 cursor-default">
              
              <div className="w-16 h-16 rounded-full bg-app-accent/10 flex items-center justify-center mb-6 text-app-accent transition-colors duration-500">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-app-text mb-2 transition-colors duration-500">Visit Us</h3>
              <p className="text-app-text-muted font-light transition-colors duration-500 mb-10">123 Espresso Lane<br/>Digital City, Web 00100</p>
              
              <div className="w-16 h-16 rounded-full bg-app-accent/10 flex items-center justify-center mb-6 text-app-accent transition-colors duration-500">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold text-app-text mb-2 transition-colors duration-500">Email Us</h3>
              <p className="text-app-text-muted font-light transition-colors duration-500">hello@auracafe.com</p>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
