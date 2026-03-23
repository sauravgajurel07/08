import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Showcase from './components/Showcase';
import CafeMenu from './components/Menu';
import Contact from './components/Contact';
import { Sun, Moon, Menu as MenuIcon, X } from 'lucide-react';

function App() {
    const [theme, setTheme] = useState('dark');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    return (
        <div className="app-container bg-app-bg transition-colors duration-500 min-h-screen relative">

            {/* Static Header */}
            <header className="fixed top-0 left-0 w-full p-6 md:px-12 lg:px-20 flex justify-between items-center z-50 pointer-events-auto text-app-text transition-colors duration-500 bg-app-bg/90 backdrop-blur-md border-b border-app-text-muted/20">
                <div className="text-xl md:text-2xl font-black tracking-widest uppercase cursor-pointer hover:text-app-text-muted transition-colors">
                    Aura Cafe
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
                        <li><a href="#home" className="hover:text-app-text-muted transition-colors cursor-pointer">Home</a></li>
                        <li><a href="#about" className="hover:text-app-text-muted transition-colors cursor-pointer">About</a></li>
                        <li><a href="#menu" className="hover:text-app-text-muted transition-colors cursor-pointer">Menu</a></li>
                        <li><a href="#contact" className="hover:text-app-text-muted transition-colors cursor-pointer">Contact</a></li>
                    </ul>

                    <button
                        onClick={toggleTheme}
                        className="p-3 bg-app-text text-app-bg rounded-full hover:scale-110 shadow-lg cursor-pointer flex items-center justify-center transition-all duration-300"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <button onClick={toggleTheme} className="p-2 bg-app-text text-app-bg rounded-full shadow-lg" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button onClick={toggleSidebar} className="p-2 text-app-text" aria-label="Toggle Menu">
                        <MenuIcon size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-60 transition-opacity duration-300 md:hidden flex justify-end ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={closeSidebar}
            >
                <div
                    className={`relative w-64 h-full bg-app-bg border-l border-app-text-muted/20 p-8 flex flex-col transition-transform duration-300 ease-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={e => e.stopPropagation()}
                >
                    <button onClick={closeSidebar} className="self-end p-2 mb-12 text-app-text hover:text-app-accent transition-colors">
                        <X size={28} />
                    </button>
                    <ul className="flex flex-col gap-6 text-lg font-bold uppercase tracking-widest text-app-text">
                        <li><a href="#home" onClick={closeSidebar} className="hover:text-app-accent transition-colors block">Home</a></li>
                        <li><a href="#about" onClick={closeSidebar} className="hover:text-app-accent transition-colors block">About</a></li>
                        <li><a href="#menu" onClick={closeSidebar} className="hover:text-app-accent transition-colors block">Menu</a></li>
                        <li><a href="#contact" onClick={closeSidebar} className="hover:text-app-accent transition-colors block">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* UI Overlay Layers */}
            <div className="ui-layer flex flex-col w-full overflow-hidden">
                <div className="ui-content">
                    <Hero />
                    <About />
                    <Showcase />
                    <CafeMenu />
                    <Contact />
                </div>
            </div>

            {/* Footer Element */}
            <footer className="w-full py-8 text-center text-app-text-muted text-sm font-light relative z-10 pointer-events-auto bg-app-bg/50 backdrop-blur-md transition-colors duration-500">
                © {new Date().getFullYear()} Aura Cafe. All rights reserved.
            </footer>
        </div>
    );
}

export default App;
