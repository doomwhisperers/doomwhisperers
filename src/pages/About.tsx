
import { Navbar } from "@/components/ui/navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="font-cinzel text-4xl md:text-5xl text-center mb-12 animate-text-glow bg-clip-text text-transparent bg-gradient-to-r from-doom-purple to-doom-neon-purple">
          O nas
        </h2>
        
        <div className="max-w-4xl mx-auto prose prose-invert prose-purple">
          <div className="bg-doom-navy/30 p-8 rounded-lg border border-doom-purple/30">
            <p className="text-lg font-cinzel mb-6">
              W cieniu starożytnych murów, gdzie echo przeszłości splata się z szeptami magii, narodził się klub Doom Whispers. 
              Nasza historia sięga czasów, gdy smoki przemierzały nocne niebo, a ich cienie tańczyły na powierzchni srebrnego księżyca.
            </p>
            
            <p className="text-lg font-cinzel mb-6">
              Legenda głosi, że pierwszy z nas usłyszał Szept podczas pełni, gdy ostatni ze Starożytnych Smoków przekazał swoją mądrość 
              wybranym śmiertelnikom. Od tego momentu, staliśmy się strażnikami tej wiedzy, łącznikami między światem światła a krainą cieni.
            </p>

            <p className="text-lg font-cinzel">
              Dziś, jako Doom Whispers, kultywujemy te tradycje, łącząc w sobie moc dawnych smoków z duchem współczesności. 
              Każdy z nas nosi w sobie iskrę tej pradawnej magii, która objawia się w naszej pasji i oddaniu.
            </p>
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

export default About;
