
import { Navbar } from "@/components/ui/navbar";
import { SocialFooter } from "@/components/ui/social-footer";

export default function Outfit() {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver font-gotisch">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h2 className="doom-heading text-center mb-12 text-4xl md:text-5xl">
          Strój
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-doom-black/70 p-8 rounded-xl border-2 border-doom-purple shadow-xl">
            <ul className="font-gotisch text-sm md:text-base space-y-4">
              <li className="mb-1 font-semibold text-doom-neon-purple !font-new-rocker">Postać:</li>
              <li>
                Czarna czapka jesienne liście{" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">30</span>
                <span className="mx-2 text-base text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-xs text-doom-silver/70">3000</span>
              </li>
              <li>
                Kamizelka z fioletową koszulką{" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">75</span>
                <span className="mx-2 text-base text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-xs text-doom-silver/70">6300</span>
              </li>
              <li>
                Czarne dżinsy jesienne liście{" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">85</span>
                <span className="mx-2 text-base text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-xs text-doom-silver/70">8500</span>
              </li>
              <li>
                Buty turystyczne sunset trails{" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">85</span>
                <span className="mx-2 text-base text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-xs text-doom-silver/70">8500</span>
              </li>
              <li className="mt-6 mb-1 font-semibold text-doom-neon-purple !font-new-rocker">Koń:</li>
              <li>
                Ogłowie angielskie lawendowe sny{" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">70</span>
                <span className="mx-2 text-base text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-xs text-doom-silver/70">7000</span>
              </li>
              <li>
                Czarne klasyczne siodło do skoków przez przeszkody{" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">110</span>
                <span className="mx-2 text-base text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-xs text-doom-silver/70">9500</span>
              </li>
              <li>
                Wyścigowy fioletowy czaprak{" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">90</span>
                <span className="mx-2 text-base text-doom-silver/40">/</span>
                <span className="font-bold" style={{ color: "#FDBB82" }}>⎔</span>
                <span className="ml-1 text-xs text-doom-silver/70">9000</span>
              </li>
              <li>
                Wstążka na ogon (fioletowa){" "}
                <span className="ml-1 font-bold" style={{ color: "#CFD4FE" }}>⍟</span>
                <span className="ml-1 text-xs text-doom-silver/70">79</span>
              </li>
            </ul>
          </div>
          <div className="w-full h-full rounded-xl border-2 border-doom-purple overflow-hidden bg-doom-black/70">
            <img 
              src="/lovable-uploads/1cfb86aa-54a7-485d-b24c-121669ab0273.png"
              alt="Strój klubowy Doom Whisperers"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>
        </div>
      </main>
      <footer className="w-full bg-doom-black/90 border-t border-doom-purple/30 py-6 mt-12">
        <div className="container mx-auto">
          <SocialFooter />
          <div className="text-center font-gotisch text-doom-silver/60">
            Doom Whisperers © 2025
          </div>
        </div>
      </footer>
    </div>
  );
}
