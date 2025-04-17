
import { Button } from "./button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full bg-doom-black/90 border-b border-doom-purple/30 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="font-cinzel text-doom-silver text-xl hover:text-doom-neon-purple transition-colors">
          Doom Whispers
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-cinzel text-doom-silver hover:text-doom-neon-purple transition-colors">
            Strona główna
          </Link>
          <Link to="/about" className="font-cinzel text-doom-silver hover:text-doom-neon-purple transition-colors">
            O nas
          </Link>
          <Link to="/outfit" className="font-cinzel text-doom-silver hover:text-doom-neon-purple transition-colors">
            Strój
          </Link>
        </div>

        <Button 
          className="bg-doom-purple hover:bg-doom-neon-purple transition-all duration-300 text-white font-cinzel"
        >
          Złóż podanie
        </Button>
      </div>
    </nav>
  );
}
