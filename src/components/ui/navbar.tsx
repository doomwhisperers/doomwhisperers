
import { Button } from "./button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full bg-doom-black/90 border-b border-doom-purple/30 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="doom-heading text-xl transition-colors"
          style={{ color: '#B829F7', fontFamily: '"New Rocker", cursive', letterSpacing: '2px', fontWeight: 'bold' }} // wymuszone dla bezpieczeństwa
        >
          Doom Whisperers
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="doom-heading text-base transition-colors"
          >
            O nas
          </Link>
          <Link
            to="/outfit"
            className="doom-heading text-base transition-colors"
          >
            Strój
          </Link>
        </div>
        <Button
          className="bg-doom-purple hover:bg-doom-neon-purple text-white doom-heading text-base px-6 py-2 rounded-lg shadow-lg animate-button-glow border-2 border-doom-neon-purple transition-all duration-300"
          style={{ fontFamily: '"New Rocker", cursive', letterSpacing: '2px', fontWeight: 'bold', fontSize: '1.25rem' }}
        >
          Złóż podanie
        </Button>
      </div>
    </nav>
  );
}
