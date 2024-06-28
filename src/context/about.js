import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about: {
        heading: "Tradition and Innovation at Bylinka Tannery",
        para1: `Bylinka Tannery combines traditional craftsmanship with modern
          technologies, allowing us to achieve the highest quality leather
          tanning while maintaining all environmental standards. We take pride
          in our production processes being not only efficient but also
          environmentally friendly, reflecting our deep commitment to caring for
          local nature.`,
        para2: `Marian Siuty, known for his community engagement, has also been a
          philanthropist supporting the local football club for years. His
          charitable activities help strengthen social bonds and promote an
          active lifestyle among our community members.`,
        para3: `The team at Bylinka Tannery consists of skilled workers who have been
          creating a cohesive and well-coordinated team with Marian Siuty for
          years. Together, they share their knowledge and experience, which is
          key to our company's success. Our cooperation is not limited to local
          projects—we also have a broad base of satisfied clients both
          domestically and internationally, with whom we build lasting,
          partnership relations.`,
        para4: `Bylinka Tannery is more than a workplace—it's a place where tradition
          meets modernity, where every piece of leather is treated with respect,
          and where every client is important to us. We invite you to cooperate
          and discover how the best traditions of craftsmanship can meet the
          demands of the modern market.`,
      },
    },
  },

  pl: {
    translation: {
      about: {
        heading: "Tradycja i Innowacja w Tartaku Bylinka",
        para1:
          "Tartak Bylinka łączy tradycyjne rzemiosło z nowoczesnymi technologiami, co pozwala nam osiągać najwyższą jakość produkcji drewna, jednocześnie spełniając wszystkie normy środowiskowe. Jesteśmy dumni z tego, że nasze procesy produkcyjne są nie tylko wydajne, ale także przyjazne dla środowiska, co odzwierciedla nasze głębokie zaangażowanie w ochronę lokalnej przyrody.",
        para2:
          "Marian Siuty, znany ze swojego zaangażowania społecznego, od lat wspiera lokalny klub piłkarski jako filantrop. Jego działania charytatywne pomagają wzmacniać więzi społeczne i promować aktywny styl życia wśród członków naszej społeczności.",
        para3:
          "Zespół w Tartaku Bylinka składa się z wykwalifikowanych pracowników, którzy od lat tworzą zgrany i dobrze zorganizowany zespół z Marianem Siutym. Razem dzielą się wiedzą i doświadczeniem, które są kluczowe dla sukcesu naszej firmy. Nasza współpraca nie ogranicza się tylko do projektów lokalnych - mamy również szeroką bazę zadowolonych klientów zarówno w kraju, jak i za granicą, z którymi budujemy trwałe, partnerskie relacje.",
        para4:
          "Tartak Bylinka to więcej niż miejsce pracy - to miejsce, gdzie tradycja spotyka się z nowoczesnością, gdzie każdy kawałek drewna jest traktowany z szacunkiem, a każdy klient jest dla nas ważny. Zapraszamy do współpracy i odkrywania, jak najlepsze tradycje rzemiosła mogą sprostać wymaganiom współczesnego rynku.",
      },
    },
  },
  de: {
    translation: {
      about: {
        heading: "Tradition und Innovation bei Bylinka Tannery",
        para1:
          "Bylinka Tannery vereint traditionelles Handwerk mit modernen Technologien, um höchste Qualität bei der Ledergerbung zu erreichen und gleichzeitig alle Umweltstandards einzuhalten. Wir sind stolz darauf, dass unsere Produktionsprozesse nicht nur effizient, sondern auch umweltfreundlich sind und unser tiefes Engagement für den Schutz der lokalen Natur widerspiegeln.",
        para2:
          "Marian Siuty, bekannt für sein soziales Engagement, unterstützt seit Jahren als Philanthrop den örtlichen Fußballverein. Seine karitativen Aktivitäten helfen, soziale Bindungen zu stärken und einen aktiven Lebensstil unter unseren Gemeindemitgliedern zu fördern.",
        para3:
          "Das Team von Bylinka Tannery besteht aus qualifizierten Mitarbeitern, die seit Jahren mit Marian Siuty ein eingespieltes und gut koordiniertes Team bilden. Gemeinsam teilen sie ihr Wissen und ihre Erfahrung, die entscheidend für den Erfolg unseres Unternehmens sind. Unsere Zusammenarbeit beschränkt sich nicht nur auf lokale Projekte - wir haben auch eine breite Basis zufriedener Kunden sowohl im Inland als auch international, mit denen wir dauerhafte partnerschaftliche Beziehungen aufbauen.",
        para4:
          "Bylinka Tannery ist mehr als nur ein Arbeitsplatz - es ist ein Ort, an dem Tradition auf Moderne trifft, wo jedem Stück Leder mit Respekt begegnet wird und jeder Kunde für uns wichtig ist. Wir laden Sie ein, mit uns zusammenzuarbeiten und zu entdecken, wie die besten Traditionen des Handwerks den Anforderungen des modernen Marktes gerecht werden können.",
      },
    },
  },
  fr: {
    translation: {
      about: {
        heading: "Tradition et Innovation chez Bylinka Tannery",
        para1:
          "Bylinka Tannery allie savoir-faire traditionnel et technologies modernes, nous permettant d'atteindre la meilleure qualité de tannage du cuir tout en respectant toutes les normes environnementales. Nous sommes fiers que nos processus de production soient non seulement efficaces mais aussi respectueux de l'environnement, reflétant notre engagement profond pour la préservation de la nature locale.",
        para2:
          "Marian Siuty, connu pour son engagement communautaire, est également un philanthrope qui soutient depuis des années le club de football local. Ses activités caritatives contribuent à renforcer les liens sociaux et à promouvoir un mode de vie actif parmi les membres de notre communauté.",
        para3:
          "L'équipe de Bylinka Tannery se compose de travailleurs qualifiés qui collaborent avec Marian Siuty depuis des années pour former une équipe cohérente et bien coordonnée. Ensemble, ils partagent leurs connaissances et leur expérience, ce qui est essentiel à la réussite de notre entreprise. Notre coopération ne se limite pas aux projets locaux - nous avons également une large base de clients satisfaits tant au niveau national qu'international, avec lesquels nous construisons des relations durables et partenariales.",
        para4:
          "Bylinka Tannery est plus qu'un lieu de travail - c'est un endroit où la tradition rencontre la modernité, où chaque morceau de cuir est traité avec respect et où chaque client est important pour nous. Nous vous invitons à coopérer avec nous et à découvrir comment les meilleures traditions de l'artisanat peuvent répondre aux exigences du marché moderne.",
      },
    },
  },
  sv: {
    translation: {
      about: {
        heading: "Tradition och innovation på Bylinka Garveri",
        para1:
          "Bylinka Garveri kombinerar traditionellt hantverk med modern teknik, vilket gör det möjligt för oss att uppnå garvning av högsta kvalitet samtidigt som vi upprätthåller alla miljöstandarder. Vi är stolta över att våra produktionsprocesser inte bara är effektiva utan också miljövänliga, vilket speglar vårt djupa engagemang för att ta hand om den lokala naturen.",
        para2:
          "Marian Siuty, känd för sitt engagemang i samhället, har också varit filantrop och stöttat den lokala fotbollsklubben i många år. Hans välgörenhetsaktiviteter hjälper till att stärka sociala band och främja en aktiv livsstil bland våra gemenskapsmedlemmar.",
        para3:
          "Teamet på Bylinka Garveri består av skickliga arbetare som har bildat ett samspelt och välkoordinerat team med Marian Siuty i många år. Tillsammans delar de sin kunskap och erfarenhet, vilket är nyckeln till vår företagssuccé. Vårt samarbete begränsar sig inte bara till lokala projekt - vi har också en bred bas av nöjda kunder både nationellt och internationellt, med vilka vi bygger långvariga och partnerskapliga relationer.",
        para4:
          "Bylinka Garveri är mer än en arbetsplats - det är en plats där tradition möter modernitet, där varje bit läder behandlas med respekt och där varje kund är viktig för oss. Vi inbjuder dig att samarbeta med oss och upptäcka hur de bästa traditionerna inom hantverket kan möta kraven från den moderna marknaden.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Idioma padrão
  fallbackLng: "en", // Idioma de fallback
  interpolation: {
    escapeValue: false, // React já faz escaping
  },
});

export default i18n;
