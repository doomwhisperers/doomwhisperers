
import { Navbar } from "@/components/ui/navbar";
import { SocialFooter } from "@/components/ui/social-footer";

const aboutContent = `
Na pierwszy rzut oka to tylko klub. Grupa jeźdźców, która z zewnątrz nie różni się zbytnio od innych. Ale ci, którzy wejdą głębiej, szybko zrozumieją, że Doom Whisperers to coś więcej. Coś starszego. Potężniejszego. I mroczniejszego.

Jego powstanie nie było przypadkiem.

Wszystko zaczęło się od niej - dziewczyny, która nosiła w sobie dwie moce. Światło Aideen i cień Pandorii. Nie znała swojego ojca, ale jego krew płynęła w niej jak zatruty strumień, pełen mocy, której nie umiała nazwać. Pewnego dnia Pandoria upomniała się o nią. Wciągnęła ją do siebie. I tam, w tej rozszarpanej rzeczywistości, znalazła jajo. Obce, bijące niespokojnym pulsem. Nie wiedziała, czym jest. Ale nie mogła go zostawić.

Z mocą Aideen w sercu wróciła do Jorviku. Nie była już jednak taka sama.

Jajo w końcu się wykluło. I wtedy zrozumiała, że to nie był zwykły dar — to był smok. Stworzenie z Pandorii, dzikie i potężne. Ale jorvicka magia zmieniła jego kształt. Dała mu końską formę. Przystosowała go do tego świata… ale nie odebrała mu duszy ognia.

Z tym stworzeniem u boku i ogniem we krwi, założyła Doom Whisperers — nie jako klub do zabawy, ale jako miejsce dla tych, którzy czują, że nie należą do światła, ale i nie są częścią mroku. Dla tych, którzy słyszą szepty. Którzy budzą się w nocy, czując, że coś ich obserwuje. Że coś na nich czeka.

Nazwa przyszła sama. Doom Whisperers. Bo każdy z nas słyszy coś innego. Przepowiednię. Ostrzeżenie. Przeznaczenie.
Nie jesteśmy strażnikami światła. Nie jesteśmy sługami cienia.
Jesteśmy echem obu światów.

Doom Whisperers to nie tylko jeźdźcy. To dusze rozdarte między dwoma wymiarami.
I w tym rozdarciu znaleźliśmy moc.
„Szepty nie milkną. One czekają. A gdy je usłyszysz… jesteś już jednym z nich.” — zapis w nieznanym dzienniku, odnalezionym na skrajach Pandorii, pod pieczęcią zakazanej wiedzy.
`;

export default function About() {
  return (
    <div className="min-h-screen bg-doom-black bg-opacity-95 text-doom-silver font-gotisch">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h2 className="doom-heading text-center mb-12 text-4xl md:text-5xl">
          O nas
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-doom-black/70 p-8 rounded-xl border-2 border-doom-purple shadow-xl">
            <div className="text-base md:text-lg font-gotisch whitespace-pre-line leading-relaxed">
              {aboutContent}
            </div>
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
