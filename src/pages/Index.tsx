
import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SocialMediaIcons } from "@/components/ui/SocialMediaIcons";

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
            <div className="doom-card">
              <h3 className="header-gradient mb-4 text-center text-2xl">Przyjęci</h3>
              <ScrollArea className="h-56">
                <ul className="space-y-3">
                  {acceptedMembers.map((member, index) => (
                    <li key={index} className="font-gotisch text-doom-silver/80 hover:text-doom-neon-purple transition-colors text-lg">{member}</li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
            <div className="doom-card">
              <h3 className="header-gradient mb-4 text-center text-2xl">Odrzuceni</h3>
              <ScrollArea className="h-56">
                <ul className="space-y-3">
                  {rejectedMembers.map((member, index) => (
                    <li key={index} className="font-gotisch text-doom-silver/80 hover:text-doom-neon-purple transition-colors text-lg">{member}</li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>

          {/* Center - Main Content */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {/* Restore heading to previous style, all headings on site should be same */}
            <h1 className="doom-heading">Doom Whisperers</h1>
            {/* Make quote a single line, smaller */}
            <p className="text-xs md:text-sm font-gotisch text-doom-silver/80 italic mb-12 whitespace-nowrap text-center max-w-full overflow-x-auto" style={{ textOverflow: "ellipsis" }}>
              "Szepty nie milkną. One czekają. A gdy je usłyszysz… jesteś już jednym z nich."
            </p>
          </div>

          {/* Right Side - Dark Horse Illustration */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center">
            <div className="w-full aspect-square rounded-xl border-2 border-doom-purple/40 overflow-hidden bg-doom-navy shadow-xl">
              <img 
                src="/lovable-uploads/3bc4f1ec-2bc9-4083-9f06-b121fcb7c6bc.png"
                alt="Mroczny koń z magicznymi, fioletowymi runami"
                className="w-full h-full object-cover select-none pointer-events-none"
                draggable={false}
                /* Usunięty efekt podnoszenia przy hover */
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-doom-black/90 border-t border-doom-purple/30 py-6 mt-12">
        <div className="container mx-auto">
          <SocialMediaIcons className="mb-4" />
          <div className="text-center font-gotisch text-doom-silver/60">
            Doom Whisperers © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
