import { Navbar } from "@/components/ui/navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Side - Status Buttons */}
          <div className="lg:col-span-3 flex flex-row space-x-4">
            <Button 
              variant="outline"
              className="w-full border-doom-purple hover:border-doom-neon-purple hover:animate-button-glow font-cinzel"
            >
              Przyjęci
            </Button>
            <Button 
              variant="outline"
              className="w-full border-doom-purple hover:border-doom-neon-purple hover:animate-button-glow font-cinzel"
            >
              Odrzuceni
            </Button>
          </div>

          {/* Center - Main Content */}
          <div className="lg:col-span-6 text-center">
            <h1 className="font-cinzel text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-text-glow bg-clip-text text-transparent bg-gradient-to-r from-doom-purple to-doom-neon-purple">
              Doom Whispers
            </h1>
            <p className="text-lg md:text-xl font-cinzel text-doom-silver/80 italic mb-12">
              "Szepty nie milkną. One czekają. A gdy je usłyszysz… jesteś już jednym z nich."
            </p>
          </div>

          {/* Right Side - Dark Horse Illustration */}
          <div className="lg:col-span-3">
            <div className="w-full aspect-square rounded-lg border border-doom-purple/30 overflow-hidden">
              <img 
                src="/lovable-uploads/3bc4f1ec-2bc9-4083-9f06-b121fcb7c6bc.png"
                alt="Mroczny koń z magicznymi, fioletowymi runami"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-doom-black/90 border-t border-doom-purple/30 py-4 mt-12">
        <div className="container mx-auto text-center font-cinzel text-doom-silver/60">
          Doom Whispers © 2025
        </div>
      </footer>
    </div>
  );
}

export default Index;
