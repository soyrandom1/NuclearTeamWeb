import React from "react";
import { Button } from "./ButtonComponent";
import SpriteAnimation from "./SpriteAnimation";
import { FaInstagram, FaTiktok } from 'react-icons/fa';

export default function OpChoriLanding() {
  return (
    <div className="py-4 min-h-screen bg-gradient-to-b from-purple-950 to-purple-900 text-white">
      <main className="flex flex-col items-center text-center px-4 relative z-10">
        <section className="max-w-4xl">
          <h1 className="text-7xl font-bold italic font-russo tracking-[0.03em] relative">
            <span className="relative inline-block bevel-effect">
              OP. C.H.O.R.I.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mt-8 mb-12 text-purple-100 font-medium max-w-3xl mx-auto">
            Run & Gun lleno de humor ácido, recorriendo una Argentina caricaturesca.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <a href="https://www.instagram.com/nuclearteam1/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <FaInstagram size={20} />
                Instagram
              </Button>
            </a>
            <a href="https://www.tiktok.com/@nuclear.team1" target="_blank" rel="noopener noreferrer">
              <Button className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                <FaTiktok size={20} />
                TikTok
              </Button>
            </a>
          </div>
        </section>
        <div className="flex items-center justify-center p-6 relative z-10">
            <img 
              src="/nuclearLogo.png" 
              alt="Nuclear Logo"
              className="w-28 h-28 object-contain filter drop-shadow-glow hover:animate-breath transition-all"
            />
          </div>
        <section className="py-20 w-full bg-purple-900/30">
          <h4 className="text-4xl font-bold mb-12 font-russo text-purple-300 tracking-tight">
            Estamos trabajando...
          </h4>

          <div className="max-w-6xl mx-auto px-4">
            <SpriteAnimation 
              src="/Jorge-9.png" 
              rows={8} 
              cols={8} 
              fps={10}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
