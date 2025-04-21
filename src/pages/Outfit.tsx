
import { Navbar } from "@/components/ui/navbar";
import { SocialMediaIcons } from "@/components/ui/SocialMediaIcons";

// Dla walutowych ikon z odpowiednimi kolorami
const Coin = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#CFD4FE", fontWeight: 700 }}>{children}</span>
);
const Star = ({ children }: { children: React.ReactNode }) => (
  <span style={{ color: "#FDBB82", fontWeight: 700 }}>{children}</span>
);

export default function Outfit() {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver font-gotisch">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="doom-heading text-center mb-12">
          Strój
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="doom-card">
            <div className="text-xs md:text-sm font-gotisch space-y-3">
              <div className="mb-2 font-semibold text-doom-neon-purple header-gradient font-new-rocker text-base">Postać:</div>
              <div>
                Czarna czapka jesienne liście (<Coin>30⍟</Coin>/<Star>3000⎔</Star>)
              </div>
              <div>
                Kamizelka z fioletową koszulką (<Coin>75⍟</Coin>/<Star>6300⎔</Star>)
              </div>
              <div>
                Czarne dżinsy jesienne liście (<Coin>85⍟</Coin>/<Star>8500⎔</Star>)
              </div>
              <div>
                Buty turystyczne sunset trails (<Coin>85⍟</Coin>/<Star>8500⎔</Star>)
              </div>
              <div className="mt-5 mb-2 font-semibold text-doom-neon-purple header-gradient font-new-rocker text-base">Koń:</div>
              <div>
                Ogłowie angielskie lawendowe sny (<Coin>70⍟</Coin>/<Star>7000⎔</Star>)
              </div>
              <div>
                Czarne klasyczne siodło do skoków przez przeszkody (<Coin>110⍟</Coin>/<Star>9500⎔</Star>)
              </div>
              <div>
                Wyścigowy fioletowy czaprak (<Coin>90⍟</Coin>/<Star>9000⎔</Star>)
              </div>
              <div>
                Wstążka na ogon (fioletowa) (<Coin>79⍟</Coin>)
              </div>
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
