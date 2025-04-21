
import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

const acceptedMembers = [
  "DarkRaven",
  "ShadowWhisper",
  "MysticDragon",
  "NightwalkerElite",
  "CrimsonMage",
  "EtherealPhantom",
  "VoidSeeker",
  "DoomHarbinger",
];

const rejectedMembers = [
  "LostSoul404",
  "ChaosBreaker",
  "StormCaller",
  "DuskWanderer",
  "SilentShade",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver font-gotisch">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Member Lists */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            <div className="w-full p-6 border-2 border-doom-purple rounded-xl bg-doom-black/70 shadow-xl transition-transform duration-200 hover:scale-105">
              <h3 className="font-new-rocker text-doom-neon-purple mb-4 text-center text-2xl">Przyjęci</h3>
              <ScrollArea className="h-56">
                <ul className="space-y-3">
                  {acceptedMembers.map((member, index) => (
                    <li key={index} className="font-gotisch text-doom-silver/80 hover:text-doom-neon-purple transition-colors text-lg">
                      {member}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
            <div className="w-full p-6 border-2 border-doom-purple rounded-xl bg-doom-black/70 shadow-xl transition-transform duration-200 hover:scale-105">
              <h3 className="font-new-rocker text-doom-neon-purple mb-4 text-center text-2xl">Odrzuceni</h3>
              <ScrollArea className="h-56">
                <ul className="space-y-3">
                  {rejectedMembers.map((member, index) => (
                    <li key={index} className="font-gotisch text-doom-silver/80 hover:text-doom-neon-purple transition-colors text-lg">
                      {member}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>

          {/* Center - Main Content */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <h1 className="font-new-rocker text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-pulse text-doom-neon-purple">
              Doom Whisperers
            </h1>
            <p className="text-xl md:text-2xl font-gotisch text-doom-silver/80 italic mb-12">
              "Szepty nie milkną. One czekają. A gdy je usłyszysz… jesteś już jednym z nich."
            </p>
          </div>

          {/* Right Side - Dark Horse Illustration */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center">
            <div className="w-full aspect-square rounded-xl border-2 border-doom-purple/40 overflow-hidden bg-doom-navy shadow-xl transition-transform duration-200 hover:scale-105">
              <img 
                src="/lovable-uploads/3bc4f1ec-2bc9-4083-9f06-b121fcb7c6bc.png"
                alt="Mroczny koń z magicznymi, fioletowymi runami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-doom-black/90 border-t border-doom-purple/30 py-6 mt-12">
        <div className="container mx-auto">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#" className="text-doom-silver hover:text-doom-neon-purple transition-colors">
              <img src="/lovable-uploads/7fb486d9-0b0f-41a4-85b6-bcf4f8e16377.png" alt="Instagram" className="w-12 h-12 object-cover" />
            </a>
            <a href="#" className="text-doom-silver hover:text-doom-neon-purple transition-colors">
              <img src="/lovable-uploads/f0928f67-b7c9-4b8f-9cfd-2a258a666ffd.png" alt="TikTok" className="w-12 h-12 object-cover" />
            </a>
            <a href="#" className="text-doom-silver hover:text-doom-neon-purple transition-colors">
              <img src="/lovable-uploads/b6b5b791-8c34-475e-95c6-887230438967.png" alt="Discord" className="w-12 h-12 object-cover" />
            </a>
          </div>
          <div className="text-center font-gotisch text-doom-silver/60">
            Doom Whisperers © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
