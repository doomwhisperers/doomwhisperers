
import { Navbar } from "@/components/ui/navbar";
import { SocialMediaIcons } from "@/components/ui/SocialMediaIcons";

export default function Outfit() {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver font-gotisch">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="header-gradient font-new-rocker text-4xl md:text-5xl text-center mb-12">
          Strój
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-doom-black/70 p-8 rounded-xl border-2 border-doom-purple shadow-xl">
            <div className="text-sm md:text-base font-gotisch space-y-3">
              <div className="mb-1 font-semibold text-doom-neon-purple header-gradient font-new-rocker text-lg">Postać:</div>
              <div>
                Czarna czapka jesienne liście
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">30</span>
                <span className="mx-2 text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-doom-silver/70">3000</span>
              </div>
              <div>
                Kamizelka z fioletową koszulką
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">75</span>
                <span className="mx-2 text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-doom-silver/70">6300</span>
              </div>
              <div>
                Czarne dżinsy jesienne liście
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">85</span>
                <span className="mx-2 text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-doom-silver/70">8500</span>
              </div>
              <div>
                Buty turystyczne sunset trails
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">85</span>
                <span className="mx-2 text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-doom-silver/70">8500</span>
              </div>
              <div className="mt-4 mb-1 font-semibold text-doom-neon-purple header-gradient font-new-rocker text-lg">Koń:</div>
              <div>
                Ogłowie angielskie lawendowe sny
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">70</span>
                <span className="mx-2 text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-doom-silver/70">7000</span>
              </div>
              <div>
                Czarne klasyczne siodło do skoków przez przeszkody
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">110</span>
                <span className="mx-2 text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-doom-silver/70">9500</span>
              </div>
              <div>
                Wyścigowy fioletowy czaprak
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">90</span>
                <span className="mx-2 text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-doom-silver/70">9000</span>
              </div>
              <div>
                Wstążka na ogon (fioletowa)
                <span className="ml-2" style={{ color: "#CFD4FE", fontWeight: 700 }}>⍟</span>
                <span className="ml-1 text-doom-silver/70">79</span>
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
