import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "HOME",
        services: "SERVICES",
        servicesMenu: {
          sheep: "SHEEP SKIN",
          deer: "DEER SKIN",
          reindeer: "REINDEER SKIN",
          medical: "MEDICAL GRADE",
        },
        about: "ABOUT",
      },
      carousel: {
        heading: "Bylinka Tannery!",
        description1: `
            We warmly welcome you to the official website of Bylinka Tannery - a
            place where tradition meets modernity in the art of leather tanning.`,
        description2: `We are proud to continue the craftsmanship that has been our
              passion for generations.`,
      },
      banner: {
        sheep: {
          heading: "Sheep",
          description1: "Wrap Yourself in Natural Comfort",
          description2: " Discover Luxurious Sheepskin Today!",
          see: "See More",
        },
        deer: {
          heading: "Deer",
          description1: "Wrap Yourself in Natural Comfort",
          description2: " Discover Luxurious Sheepskin Today!",
          see: "See More",
        },
        reindeer: {
          heading: "Reindeer",
          description1: "Embrace Nordic Elegance",
          description2: "Discover the Timeless Beauty of Reindeer Skin.",
          see: "See More",
        },
      },
      contact: {
        heading: "Contact",
        tagline: "Get in Touch with Us Today!",
        description: `Have questions or need assistance? Our team is here to help with any
        inquiries about our products or your orders. Reach out to us today,
        and we'll get back to you promptly!`,
        chat: "Chat Now",
      },
      touch: {
        get: "Get in",
        touch: "Touch",
      },
      contactgrids: {
        phone: "Phone",
        email: "Email",
        info: "Info",
        address: "Address",
        street:
          "123 Maple Street, Greenwood City, Meadowshire, MS 12345, United States",
      },
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
      gallery: "Gallery",
      aboutus: {
        about: "About Us",
        heading: "ABOUT US - BYLINKA TANNERY",
        description: `At the heart of our operations stands Marian Siuty, owner of Bylinka Tannery, who has shaped his extensive experience in leather tanning over more than 40 years. He took over the craft from his father, continuing the family's artisan traditions. Marian began his journey in the challenging times of Communist Poland, where this activity was often restricted. Over the years, thanks to his perseverance and passion, he has transformed a small family business into one of the largest tanneries in the region.`,
        read: "Read More",
      },
      faq: {
        heading: "Frequently Asked Questions",
        q1: "What types of skins do you offer?",
        a1: `
        We offer four main types of skins: Sheep Skin, Deer Skin, Reindeer Skin,
        and Medical Grade Skins. Each type has unique qualities and uses.`,
        q2: `How do I choose the right type of skin for my needs?`,
        a2: `
        Consider the specific qualities and intended use of each type of skin.
        Sheep Skin is soft and versatile, Deer Skin is known for its durability
        and suppleness, Reindeer Skin offers unique aesthetics and warmth, and
        Medical Grade Skins are specifically designed for therapeutic use.`,
        q3: `What are the benefits of Sheep Skin?`,
        a3: `Sheep Skin is renowned for its luxurious softness, natural warmth, and
        durability. It’s perfect for creating cozy blankets, stylish apparel, or
        enhancing home decor.`,
        q4: `What are the unique features of Reindeer Skin?`,
        a4: `Reindeer Skin is known for its distinctive appearance, warmth, and
        softness. It’s often used for decorative purposes, such as rugs or wall
        hangings.`,
        q5: `Are your skins ethically sourced?`,
        a5: `Yes, all our skins are sourced from ethical and sustainable practices.
        We prioritize animal welfare and environmental responsibility in our
        sourcing processes.`,
        q6: `Do you offer customization options?`,
        a6: `Yes, we offer customization options for certain products. Please contact
        us with your specific requirements, and we will do our best to
        accommodate your needs.`,
      },
      achievement: {
        heading: `Our Achievements`,
        description: `Proudly serving our customers with premium quality skins`,
        sheep: `Sheep Skins Sold`,
        deer: `Deer Skins Sold`,
        reindeer: `Reindeer Skins Sold`,
        medical: `Medical Grade Skins Sold`,
      },
    },
  },

  pl: {
    translation: {
      navbar: {
        home: "STRONA GŁÓWNA",
        services: "USŁUGI",
        servicesMenu: {
          sheep: "SKÓRA OWCZA",
          deer: "SKÓRA JELENIA",
          reindeer: "SKÓRA RENIFERA",
          medical: "KLASA MEDYCZNA",
        },
        about: "O NAS",
      },
      carousel: {
        heading: "Bylinka Garbarnia!",
        description1: `
        Serdecznie witamy na oficjalnej stronie internetowej Garbarni Bylinka -
        miejscu, gdzie tradycja spotyka się z nowoczesnością w sztuce garbowania skór.`,
        description2: `Jesteśmy dumni, że możemy kontynuować rzemiosło, które jest naszą
        pasją od pokoleń.`,
        description: `We warmly welcome you to the official website of Bylinka Tannery -
              a place where tradition meets modernity in the art of leather
              tanning. We are proud to continue the craftsmanship that has been
              our passion for generations.`,
      },
      banner: {
        sheep: {
          heading: "Owca",
          description1: "Owiń się w naturalny komfort",
          description2: "Odkryj luksusowe owcze skóry już dziś!",
          see: "Zobacz więcej",
        },
        deer: {
          heading: "Jeleń",
          description1: "Owiń się w naturalny komfort",
          description2: "Odkryj luksusowe owcze skóry już dziś!",
          see: "Zobacz więcej",
        },
        reindeer: {
          heading: "Renifer",
          description1: "Przyjmij nordycką elegancję",
          description2: "Odkryj ponadczasowe piękno skóry renifera.",
          see: "Zobacz więcej",
        },
      },
      contact: {
        heading: "Kontakt",
        tagline: "Skontaktuj się z nami już dziś!",
        description: `Masz pytania lub potrzebujesz pomocy? Nasz zespół jest tutaj, aby pomóc 
    w każdej sprawie dotyczącej naszych produktów lub Twoich zamówień. Skontaktuj się z 
    nami już dziś, a my odpowiemy szybko!`,
        chat: "Czat teraz",
      },
      touch: {
        get: "Skontaktuj się",
        touch: "z nami",
      },
      contactgrids: {
        phone: "Telefon",
        email: "E-mail",
        info: "Informacje",
        address: "Adres",
        street:
          "123 Maple Street, Greenwood City, Meadowshire, MS 12345, Stany Zjednoczone",
      },
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
      gallery: "Galeria",
      aboutus: {
        about: "O nas",
        heading: "O NAS - GARBATY WARKOCZ",
        description:
          "W sercu naszej działalności stoi Marian Siuty, właściciel Garbatego Warkocza, który kształtuje swoje bogate doświadczenie w garbowaniu skóry od ponad 40 lat. Przejął rzemiosło po swoim ojcu, kontynuując rodzinne tradycje rzemieślnicze. Marian rozpoczął swoją podróż w trudnych czasach komunistycznej Polski, gdzie ta działalność często była ograniczana. Z biegiem lat, dzięki swojej wytrwałości i pasji, przekształcił mały rodzinny biznes w jeden z największych zakładów garbarskich w regionie.",
        read: "Czytaj więcej",
      },
      faq: {
        heading: "Często Zadawane Pytania",
        q1: "Jakie rodzaje skór oferujecie?",
        a1: `
    Oferujemy cztery główne rodzaje skór: Skóra Owcza, Skóra Jeleni, Skóra Reniferów,
    i Skóry Medyczne. Każdy rodzaj ma unikalne cechy i zastosowania.`,
        q2: "Jak wybrać odpowiedni rodzaj skóry do moich potrzeb?",
        a2: `
    Rozważ specyficzne cechy i zamierzone zastosowanie każdego rodzaju skóry.
    Skóra Owcza jest miękka i wszechstronna, Skóra Jeleni jest znana z trwałości
    i elastyczności, Skóra Reniferów oferuje unikalną estetykę i ciepło, a
    Skóry Medyczne są specjalnie zaprojektowane do celów terapeutycznych.`,
        q3: "Jakie są zalety Skóry Owczej?",
        a3: `Skóra Owcza jest znana ze swojej luksusowej miękkości, naturalnego ciepła i
    trwałości. Jest idealna do tworzenia przytulnych koców, stylowej odzieży lub
    wzbogacania wystroju wnętrz.`,
        q4: "Jakie są unikalne cechy Skóry Reniferów?",
        a4: `Skóra Reniferów jest znana ze swojego charakterystycznego wyglądu, ciepła i
    miękkości. Często jest używana do celów dekoracyjnych, takich jak dywany lub
    ozdoby ścienne.`,
        q5: "Czy Wasze skóry pochodzą z etycznych źródeł?",
        a5: `Tak, wszystkie nasze skóry pochodzą z etycznych i zrównoważonych praktyk.
    Priorytetem dla nas jest dobro zwierząt i odpowiedzialność ekologiczna w naszych
    procesach zaopatrzenia.`,
        q6: "Czy oferujecie opcje dostosowywania produktów?",
        a6: `Tak, oferujemy opcje dostosowywania niektórych produktów. Prosimy o kontakt
    w celu przekazania swoich specyficznych wymagań, a zrobimy wszystko, co w naszej
    mocy, aby spełnić Twoje potrzeby.`,
      },
      achievement: {
        heading: "Nasze Osiągnięcia",
        description:
          "Dumnie obsługujemy naszych klientów, oferując skóry najwyższej jakości",
        sheep: "Sprzedane Skóry Owcze",
        deer: "Sprzedane Skóry Jeleni",
        reindeer: "Sprzedane Skóry Reniferów",
        medical: "Sprzedane Skóry Medyczne",
      },
    },
  },
  de: {
    translation: {
      navbar: {
        home: "STARTSEITE",
        services: "DIENSTLEISTUNGEN",
        servicesMenu: {
          sheep: "SCHAFSFELL",
          deer: "HIRSCHLEDER",
          reindeer: "RENTIERLEDER",
          medical: "MEDIZINISCHE QUALITÄT",
        },
        about: "ÜBER UNS",
      },
      carousel: {
        heading: "Bylinka Gerberei!",
        description1: `
        Wir heißen Sie herzlich willkommen auf der offiziellen Website der Bylinka Gerberei -
        einem Ort, an dem Tradition auf Moderne in der Kunst der Ledergerbung trifft.`,
        description2: `Wir sind stolz darauf, das Handwerk fortzuführen, das seit Generationen unsere
        Leidenschaft ist.`,
      },
      banner: {
        sheep: {
          heading: "Schaf",
          description1: "Hüllen Sie sich in natürlichen Komfort",
          description2: "Entdecken Sie luxuriöse Schaffelle noch heute!",
          see: "Mehr sehen",
        },
        deer: {
          heading: "Hirsch",
          description1: "Hüllen Sie sich in natürlichen Komfort",
          description2: "Entdecken Sie luxuriöse Schaffelle noch heute!",
          see: "Mehr sehen",
        },
        reindeer: {
          heading: "Rentier",
          description1: "Umarme nordische Eleganz",
          description2: "Entdecken Sie die zeitlose Schönheit der Rentierhaut.",
          see: "Mehr sehen",
        },
      },
      contact: {
        heading: "Kontakt",
        tagline: "Kontaktieren Sie uns noch heute!",
        description: `Haben Sie Fragen oder benötigen Sie Hilfe? Unser Team steht Ihnen für 
    alle Anfragen zu unseren Produkten oder Ihren Bestellungen zur Verfügung. 
    Kontaktieren Sie uns noch heute, und wir melden uns umgehend bei Ihnen!`,
        chat: "Jetzt chatten",
      },
      touch: {
        get: "Kontaktieren",
        touch: "Sie uns",
      },
      contactgrids: {
        phone: "Telefon",
        email: "E-Mail",
        info: "Info",
        address: "Adresse",
        street:
          "123 Maple Street, Greenwood City, Meadowshire, MS 12345, Vereinigte Staaten",
      },
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
      gallery: "Galerie",
      aboutus: {
        about: "Über uns",
        heading: "ÜBER UNS - BYLINKA GERBEREI",
        description:
          "Im Herzen unseres Betriebs steht Marian Siuty, Inhaber der Bylinka Gerberei, der seine umfangreiche Erfahrung in der Ledergerbung seit mehr als 40 Jahren geprägt hat. Er übernahm das Handwerk von seinem Vater und setzte die familiären Handwerkstraditionen fort. Marian begann seine Reise in den schwierigen Zeiten des kommunistischen Polens, wo diese Tätigkeit oft eingeschränkt war. Im Laufe der Jahre hat er dank seiner Ausdauer und Leidenschaft aus einem kleinen Familienbetrieb eine der größten Gerbereien der Region gemacht.",
        read: "Mehr lesen",
      },

      faq: {
        heading: "Häufig Gestellte Fragen",
        q1: "Welche Arten von Häuten bieten Sie an?",
        a1: `
    Wir bieten vier Hauptarten von Häuten an: Schafshaut, Hirschhaut, Rentierhaut
    und medizinische Häute. Jede Art hat einzigartige Eigenschaften und Verwendungen.`,
        q2: "Wie wähle ich die richtige Haut für meine Bedürfnisse?",
        a2: `
    Berücksichtigen Sie die spezifischen Eigenschaften und den beabsichtigten Gebrauch jeder Hautart.
    Schafshaut ist weich und vielseitig, Hirschhaut ist bekannt für ihre Haltbarkeit
    und Geschmeidigkeit, Rentierhaut bietet eine einzigartige Ästhetik und Wärme, und
    medizinische Häute sind speziell für therapeutische Zwecke entwickelt.`,
        q3: "Was sind die Vorteile von Schafshaut?",
        a3: `Schafshaut ist bekannt für ihre luxuriöse Weichheit, natürliche Wärme und
    Haltbarkeit. Sie ist perfekt für die Herstellung von gemütlichen Decken, stilvoller Kleidung oder
    zur Verschönerung der Wohnungseinrichtung.`,
        q4: "Was sind die einzigartigen Eigenschaften von Rentierhaut?",
        a4: `Rentierhaut ist bekannt für ihr charakteristisches Aussehen, Wärme und
    Weichheit. Sie wird oft für dekorative Zwecke verwendet, wie zum Beispiel als Teppiche oder
    Wandbehänge.`,
        q5: "Sind Ihre Häute ethisch bezogen?",
        a5: `Ja, alle unsere Häute stammen aus ethischen und nachhaltigen Praktiken.
    Wir legen Wert auf das Wohl der Tiere und die ökologische Verantwortung in unseren
    Beschaffungsprozessen.`,
        q6: "Bieten Sie Anpassungsoptionen an?",
        a6: `Ja, wir bieten Anpassungsoptionen für bestimmte Produkte an. Bitte kontaktieren Sie
    uns mit Ihren spezifischen Anforderungen und wir werden unser Bestes tun,
    um Ihre Bedürfnisse zu erfüllen.`,
      },
      achievement: {
        heading: "Unsere Erfolge",
        description: "Stolz darauf, unseren Kunden hochwertige Häute zu bieten",
        sheep: "Verkaufte Schafshäute",
        deer: "Verkaufte Hirschhäute",
        reindeer: "Verkaufte Rentierhäute",
        medical: "Verkaufte medizinische Häute",
      },
    },
  },
  fr: {
    translation: {
      navbar: {
        home: "ACCUEIL",
        services: "SERVICES",
        servicesMenu: {
          sheep: "PEAU DE MOUTON",
          deer: "PEAU DE CERF",
          reindeer: "PEAU DE RENNE",
          medical: "QUALITÉ MÉDICALE",
        },
        about: "À PROPOS",
      },
      carousel: {
        heading: "Tannerie Bylinka!",
        description1: `
        Nous vous souhaitons la bienvenue sur le site officiel de la Tannerie Bylinka -
        un lieu où la tradition rencontre la modernité dans l'art du tannage du cuir.`,
        description2: `Nous sommes fiers de perpétuer un savoir-faire qui est notre
        passion depuis des générations.`,
      },
      banner: {
        sheep: {
          heading: "Mouton",
          description1: "Enveloppez-vous de confort naturel",
          description2: "Découvrez des peaux de mouton luxueuses aujourd'hui!",
          see: "Voir plus",
        },
        deer: {
          heading: "Cerf",
          description1: "Enveloppez-vous de confort naturel",
          description2: "Découvrez des peaux de mouton luxueuses aujourd'hui!",
          see: "Voir plus",
        },
        reindeer: {
          heading: "Renne",
          description1: "Adoptez l'élégance nordique",
          description2: "Découvrez la beauté intemporelle de la peau de renne.",
          see: "Voir plus",
        },
      },
      contact: {
        heading: "Contact",
        tagline: "Contactez-nous dès aujourd'hui!",
        description: `Vous avez des questions ou besoin d'aide? Notre équipe est là pour 
    vous aider avec toutes vos questions sur nos produits ou vos commandes. 
    Contactez-nous dès aujourd'hui et nous vous répondrons rapidement!`,
        chat: "Discuter maintenant",
      },
      touch: {
        get: "Prenez",
        touch: "contact",
      },
      contactgrids: {
        phone: "Téléphone",
        email: "E-mail",
        info: "Info",
        address: "Adresse",
        street:
          "123 Maple Street, Greenwood City, Meadowshire, MS 12345, États-Unis",
      },
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
      gallery: "Galerie",
      aboutus: {
        about: "À propos de nous",
        heading: "À PROPOS DE NOUS - TANNERIE BYLINKA",
        description:
          "Au cœur de nos opérations se trouve Marian Siuty, propriétaire de la Tannerie Bylinka, qui a façonné son expérience étendue dans le tannage du cuir depuis plus de 40 ans. Il a repris l'artisanat de son père, poursuivant les traditions artisanales familiales. Marian a commencé son parcours dans les périodes difficiles de la Pologne communiste, où cette activité était souvent restreinte. Au fil des ans, grâce à sa persévérance et sa passion, il a transformé une petite entreprise familiale en l'une des plus grandes tanneries de la région.",
        read: "En savoir plus",
      },

      faq: {
        heading: "Questions Fréquemment Posées",
        q1: "Quels types de peaux proposez-vous ?",
        a1: `
    Nous proposons quatre types principaux de peaux : Peau de Mouton, Peau de Cerf, Peau de Renne,
    et Peaux de Qualité Médicale. Chaque type a des qualités et des usages uniques.`,
        q2: "Comment choisir le bon type de peau pour mes besoins ?",
        a2: `
    Considérez les qualités spécifiques et l'utilisation prévue de chaque type de peau.
    La Peau de Mouton est douce et polyvalente, la Peau de Cerf est connue pour sa durabilité
    et sa souplesse, la Peau de Renne offre une esthétique unique et de la chaleur, et
    les Peaux de Qualité Médicale sont spécialement conçues pour un usage thérapeutique.`,
        q3: "Quels sont les avantages de la Peau de Mouton ?",
        a3: `La Peau de Mouton est réputée pour sa douceur luxueuse, sa chaleur naturelle et
    sa durabilité. Elle est parfaite pour créer des couvertures douillettes, des vêtements stylés ou
    pour enrichir la décoration intérieure.`,
        q4: "Quelles sont les caractéristiques uniques de la Peau de Renne ?",
        a4: `La Peau de Renne est connue pour son apparence distinctive, sa chaleur et
    sa douceur. Elle est souvent utilisée à des fins décoratives, telles que des tapis ou
    des tentures murales.`,
        q5: "Vos peaux sont-elles obtenues de manière éthique ?",
        a5: `Oui, toutes nos peaux proviennent de pratiques éthiques et durables.
    Nous privilégions le bien-être animal et la responsabilité environnementale dans nos
    processus d'approvisionnement.`,
        q6: "Proposez-vous des options de personnalisation ?",
        a6: `Oui, nous proposons des options de personnalisation pour certains produits. Veuillez nous contacter
    avec vos exigences spécifiques et nous ferons de notre mieux pour
    répondre à vos besoins.`,
      },

      achievement: {
        heading: "Nos Réalisations",
        description:
          "Fiers de servir nos clients avec des peaux de qualité supérieure",
        sheep: "Peaux de Mouton Vendues",
        deer: "Peaux de Cerf Vendues",
        reindeer: "Peaux de Renne Vendues",
        medical: "Peaux de Qualité Médicale Vendues",
      },
    },
  },
  sv: {
    translation: {
      navbar: {
        home: "HEM",
        services: "TJÄNSTER",
        servicesMenu: {
          sheep: "FÅRSKINN",
          deer: "HJORTSKINN",
          reindeer: "RENHUD",
          medical: "MEDICINSK KVALITET",
        },
        about: "OM OSS",
      },
      carousel: {
        heading: "Bylinka Garveri!",
        description1: `
        Vi välkomnar dig varmt till Bylinka Garveris officiella webbplats -
        en plats där tradition möter modernitet i konsten att garva läder.`,
        description2: `Vi är stolta över att fortsätta hantverket som har varit vår
        passion i generationer.`,
      },
      banner: {
        sheep: {
          heading: "Får",
          description1: "Svep in dig i naturlig komfort",
          description2: "Upptäck lyxigt fårskinn idag!",
          see: "Se mer",
        },
        deer: {
          heading: "Hjort",
          description1: "Svep in dig i naturlig komfort",
          description2: "Upptäck lyxigt fårskinn idag!",
          see: "Se mer",
        },
        reindeer: {
          heading: "Ren",
          description1: "Omfamna nordisk elegans",
          description2: "Upptäck renhudens tidlösa skönhet.",
          see: "Se mer",
        },
      },
      contact: {
        heading: "Kontakt",
        tagline: "Kontakta oss idag!",
        description: `Har du frågor eller behöver hjälp? Vårt team finns här för att hjälpa 
    dig med alla frågor om våra produkter eller dina beställningar. Kontakta oss idag, 
    så återkommer vi omgående!`,
        chat: "Chatta nu",
      },
      touch: {
        get: "Ta",
        touch: "kontakt",
      },
      contactgrids: {
        phone: "Telefon",
        email: "E-post",
        info: "Information",
        address: "Adress",
        street: "123 Maple Street, Greenwood City, Meadowshire, MS 12345, USA",
      },
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
      gallery: "Galleri",
      aboutus: {
        about: "Om oss",
        heading: "OM OSS - BYLINKA GARVERI",
        description:
          "I hjärtat av vår verksamhet står Marian Siuty, ägare till Bylinka Garveri, som har format sin omfattande erfarenhet av lädergarvning under mer än 40 år. Han tog över hantverket från sin far och fortsatte familjens hantverkstraditioner. Marian började sin resa under de utmanande tiderna i det kommunistiska Polen, där denna verksamhet ofta var begränsad. Genom åren, tack vare sin uthållighet och passion, har han omvandlat ett litet familjeföretag till en av de största garverierna i regionen.",
        read: "Läs mer",
      },

      faq: {
        heading: "Vanliga Frågor",
        q1: "Vilka typer av skinn erbjuder ni?",
        a1: `
    Vi erbjuder fyra huvudtyper av skinn: Fårskinn, Hjortskinn, Renskinn,
    och medicinska skinn. Varje typ har unika egenskaper och användningsområden.`,
        q2: "Hur väljer jag rätt typ av skinn för mina behov?",
        a2: `
    Tänk på de specifika egenskaperna och den avsedda användningen av varje typ av skinn.
    Fårskinn är mjukt och mångsidigt, Hjortskinn är känt för sin hållbarhet
    och smidighet, Renskinn erbjuder unik estetik och värme, och
    medicinska skinn är speciellt utformade för terapeutiskt bruk.`,
        q3: "Vilka är fördelarna med fårskinn?",
        a3: `Fårskinn är känt för sin lyxiga mjukhet, naturliga värme och
    hållbarhet. Det är perfekt för att skapa mysiga filtar, stiliga kläder eller
    förbättra heminredningen.`,
        q4: "Vilka är de unika egenskaperna hos renskinn?",
        a4: `Renskinn är känt för sitt distinkta utseende, värme och
    mjukhet. Det används ofta för dekorativa ändamål, såsom mattor eller
    väggbonader.`,
        q5: "Är era skinn etiskt framtagna?",
        a5: `Ja, alla våra skinn kommer från etiska och hållbara metoder.
    Vi prioriterar djurvälfärd och miljöansvar i våra
    inköpsprocesser.`,
        q6: "Erbjuder ni anpassningsalternativ?",
        a6: `Ja, vi erbjuder anpassningsalternativ för vissa produkter. Vänligen kontakta oss
    med dina specifika krav och vi kommer att göra vårt bästa för att
    tillgodose dina behov.`,
      },

      achievement: {
        heading: "Våra Prestationer",
        description:
          "Stolt att betjäna våra kunder med skinn av högsta kvalitet",
        sheep: "Sålda Fårskinn",
        deer: "Sålda Hjortskinn",
        reindeer: "Sålda Renskinn",
        medical: "Sålda Medicinska Skinn",
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
