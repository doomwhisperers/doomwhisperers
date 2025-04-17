
import { Navbar } from "@/components/ui/navbar";

const Outfit = () => {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="font-cinzel text-4xl md:text-5xl text-center mb-12 animate-text-glow bg-clip-text text-transparent bg-gradient-to-r from-doom-purple to-doom-neon-purple">
          Strój
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-doom-navy/30 p-8 rounded-lg border border-doom-purple/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="font-cinzel text-2xl text-doom-neon-purple mb-4">
                  Oficjalny Strój Klubowy
                </h3>
                <p className="text-lg font-cinzel">
                  Nasz strój odzwierciedla esencję Doom Whispers - połączenie mroku z magicznym blaskiem.
                  Dominują w nim głębokie czernie i fiolety, uzupełnione subtelnymi, świetlistymi akcentami.
                </p>
                <ul className="space-y-3 text-doom-silver/80">
                  <li className="font-cinzel">• Czarna szata z fioletowymi obszyciami</li>
                  <li className="font-cinzel">• Srebrne runy na rękawach</li>
                  <li className="font-cinzel">• Emblemat smoka na piersi</li>
                  <li className="font-cinzel">• Fioletowa poświata w detalach</li>
                </ul>
              </div>
              
              <div className="w-full aspect-square bg-doom-navy rounded-lg border border-doom-purple/30 animate-button-glow flex items-center justify-center">
                <span className="text-doom-silver/50">Ilustracja stroju</span>
              </div>
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

export default Outfit;
