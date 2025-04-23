
import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SocialFooter } from "@/components/ui/social-footer";

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
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div className="w-full p-6 border-2 border-doom-purple rounded-xl bg-doom-black/70 shadow-xl">
              <h3 className="doom-heading mb-4 text-center text-2xl">Przyjęci</h3>
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
            <div className="w-full p-6 border-2 border-doom-purple rounded-xl bg-doom-black/70 shadow-xl">
              <h3 className="doom-heading mb-4 text-center text-2xl">Odrzuceni</h3>
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
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <h1 className="doom-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center w-full">
              Doom Whisperers
            </h1>
            <p className="text-base md:text-lg font-gotisch text-doom-silver/80 italic mb-10 truncate max-w-xl text-center">
              "Szepty nie milkną. One czekają. A gdy je usłyszysz… jesteś już jednym z nich."
            </p>
          </div>

          {/* Right Side - Dark Horse Illustration */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center">
            <div className="w-full aspect-square rounded-xl border-2 border-doom-purple/40 overflow-hidden bg-doom-navy shadow-xl">
              <img 
                src="/lovable-uploads/3bc4f1ec-2bc9-4083-9f06-b121fcb7c6bc.png"
                alt="Mroczny koń z magicznymi, fioletowymi runami"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full bg-doom-black/90 border-t border-doom-purple/30 py-6 mt-12">
        <div className="container mx-auto">
          <SocialFooter />
          <div className="text-center font-gotisch text-doom-silver/60">
            Doom Whisperers © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
