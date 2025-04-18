import { Navbar } from "@/components/ui/navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Instagram, TikTok, MessageSquare } from "lucide-react";

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
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Member Lists */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-4">
            <div className="w-full p-4 border border-doom-purple rounded-lg bg-doom-black/50">
              <h3 className="font-cinzel text-doom-neon-purple mb-4 text-center">Przyjęci</h3>
              <ScrollArea className="h-48">
                <ul className="space-y-2">
                  {acceptedMembers.map((member, index) => (
                    <li key={index} className="font-cinzel text-doom-silver/80 hover:text-doom-neon-purple transition-colors text-sm">
                      {member}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
            <div className="w-full p-4 border border-doom-purple rounded-lg bg-doom-black/50">
              <h3 className="font-cinzel text-doom-neon-purple mb-4 text-center">Odrzuceni</h3>
              <ScrollArea className="h-48">
                <ul className="space-y-2">
                  {rejectedMembers.map((member, index) => (
                    <li key={index} className="font-cinzel text-doom-silver/80 hover:text-doom-neon-purple transition-colors text-sm">
                      {member}
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </div>
          </div>

          {/* Center - Main Content */}
          <div className="lg:col-span-6 text-center">
            <h1 className="font-new-rocker text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-pulse text-doom-neon-purple">
              Doom Whisperers
            </h1>
            <p className="text-lg md:text-xl font-im-fell text-doom-silver/80 italic mb-12">
              "Szepty nie milkną. One czekają. A gdy je usłyszysz… jesteś już jednym z nich."
            </p>
          </div>

          {/* Right Side - Dark Horse Illustration */}
          <div className="lg:col-span-3">
            <div className="w-full aspect-square rounded-lg border border-doom-purple/30 overflow-hidden">
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
              <Instagram size={24} />
            </a>
            <a href="#" className="text-doom-silver hover:text-doom-neon-purple transition-colors">
              <TikTok size={24} />
            </a>
            <a href="#" className="text-doom-silver hover:text-doom-neon-purple transition-colors">
              <MessageSquare size={24} />
            </a>
          </div>
          <div className="text-center font-im-fell text-doom-silver/60">
            Doom Whisperers © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
