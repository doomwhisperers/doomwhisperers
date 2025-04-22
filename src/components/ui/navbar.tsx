
import { Button } from "./button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-full bg-doom-black/90 border-b border-doom-purple/30 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-white text-xl transition-colors hover:text-doom-purple"
          style={{ 
            fontFamily: '"New Rocker", cursive', 
            letterSpacing: '2px', 
            fontWeight: 'bold' 
          }}
        >
          Doom Whisperers
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-white hover:text-doom-neon-purple transition-colors font-gotisch text-base"
          >
            O nas
          </Link>
          <Link
            to="/outfit"
            className="text-white hover:text-doom-neon-purple transition-colors font-gotisch text-base"
          >
            Strój
          </Link>
        </div>
        <a
          href="https://forms.gle/k9hSFB6TkLggVe9X9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className="bg-doom-purple text-white hover:bg-white hover:text-doom-purple font-gotisch text-base px-6 py-2 rounded-lg shadow-lg border-2 border-doom-purple transition-all duration-300"
          >
            Złóż podanie
          </Button>
        </a>
      </div>
    </nav>
  );
}
