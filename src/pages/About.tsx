
import { Navbar } from "@/components/ui/navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h2 className="font-new-rocker text-4xl md:text-5xl text-center mb-12 animate-text-glow bg-clip-text text-transparent bg-gradient-to-r from-doom-purple to-doom-neon-purple">
          O nas
        </h2>
        
        <div className="max-w-4xl mx-auto prose prose-invert prose-purple">
          <div className="bg-doom-navy/30 p-8 rounded-lg border border-doom-purple/30">
            <p className="text-lg font-im-fell mb-6">
             Na pierwszy rzut oka to tylko klub. Grupa jeźdźców, która z zewnątrz nie różni się zbytnio od innych. 
             Ale ci, którzy wejdą głębiej, szybko zrozumieją, że Doom Whisperers to coś więcej.
             Coś starszego. Potężniejszego. I mroczniejszego.
            </p>
            
            <p className="text-lg font-im-fell mb-6">
             Jego powstanie nie było przypadkiem.
            </p>
            
            <p className="text-lg font-im-fell mb-6">
             Wszystko zaczęło się od niej - dziewczyny, która nosiła w sobie dwie moce. 
             Światło Aideen i cień Pandorii. Nie znała swojego ojca, ale jego krew płynęła w niej jak zatruty strumień, 
             pełen mocy, której nie umiała nazwać.Pewnego dnia Pandoria upomniała się o nią. 
             Wciągnęła ją do siebie. I tam, w tej rozszarpanej rzeczywistości, znalazła jajo. 
             Obce, bijące niespokojnym pulsem. Nie wiedziała, czym jest. Ale nie mogła go zostawić.
            </p>
            
            <p className="text-lg font-im-fell mb-6">
             Z mocą Aideen w sercu wróciła do Jorviku. Nie była już jednak taka sama.
            </p>

            <p className="text-lg font-im-fell mb-6">
            Jajo w końcu się wykluło. I wtedy zrozumiała, że to nie był zwykły dar — to był smok. 
            Stworzenie z Pandorii, dzikie i potężne. Ale jorvicka magia zmieniła jego kształt. 
            Dała mu końską formę. Przystosowała go do tego świata… ale nie odebrała mu duszy ognia.
            </p>

            <p className="text-lg font-im-fell mb-6">
            Z tym stworzeniem u boku i ogniem we krwi, założyła Doom Whisperers — nie jako klub do zabawy, 
            ale jako miejsce dla tych, którzy czują, że nie należą do światła, ale i nie są częścią mroku. 
            Dla tych, którzy słyszą szepty. Którzy budzą się w nocy, czując, że coś ich obserwuje. Że coś na nich czeka.
            </p>

            <p className="text-lg font-im-fell mb-6">
            Nazwa przyszła sama. Doom Whisperers. Bo każdy z nas słyszy coś innego. 
            Przepowiednię. Ostrzeżenie. Przeznaczenie. Nie jesteśmy strażnikami światła. 
            Nie jesteśmy sługami cienia. Jesteśmy echem obu światów.
            </p>

            <p className="text-lg font-im-fell mb-6">
            Doom Whisperers to nie tylko jeźdźcy. To dusze rozdarte między dwoma wymiarami.
            I w tym rozdarciu znaleźliśmy moc.
            </p>

            <p className="text-lg font-im-fell">
            „Szepty nie milkną. One czekają. A gdy je usłyszysz… jesteś już jednym z nich.” — 
            zapis w nieznanym dzienniku, odnalezionym na skrajach Pandorii, pod pieczęcią zakazanej wiedzy
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
