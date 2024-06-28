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
      sheep: {
        heading: "Sheep Skin",
        description: `At Bylinka Tannery, under the guidance of the experienced Marian
          Siuty, we tan sheepskins sourced from the finest breeds, both Polish
          and international. Each breed provides unique characteristics that
          translate into specific properties of the skins we process.`,
        colors: `Available Color:`,
        pattern: "Available Patterns:",
        breed: "Available Breeds:",
        heading2: `Product Processing`,
        desc1: `Preparation and Cleaning:`,
        desc2: `The tanning
        process starts with the thorough cleaning of raw skins. All contaminants
        and residual tissue are removed, which is crucial for ensuring the
        quality of the final product.`,
        desc3: `Preparation and Cleaning:`,
        desc4: `This is a
        key stage where the skin is permanently altered. We use natural and
        synthetic tanning agents that provide the skin with flexibility and
        durability. Our tanning methods are eco-friendly and environmentally
        safe.`,
        desc5: `Preparation and Cleaning:`,
        desc6: `After
        tanning, the skin is dyed, dried, and then subjected to various
        finishing processes such as grinding, polishing, or impregnation. These
        stages define the appearance, texture, and color of the skin.`,
        desc7: `Thanks to these processes and attention to detail, Bylinka Tannery
        delivers top-quality products that meet the expectations of even the
        most demanding clients. Our skins are prepared with the utmost care,
        respecting both traditional craftsmanship and the latest trends in
        tannery, allowing us to provide exceptional products to domestic and
        international markets.`,
      },
      deer: {
        heading: "Deer Skin",
        description: `At Bylinka Tannery, we are proud to present our deer skin tanning
            services, synonymous with refinement and natural beauty. Belonging
            to the deer family, these skins provide materials that find use in
            the most luxurious leather products.`,
        colors: `Available Color:`,
        pattern: "Available Patterns:",

        heading2: `Characteristics of Deer Skins`,
        desc1: `Deer skins are known for their exceptional delicacy and smoothness,
        making them the perfect material for exclusive accessories and
        high-fashion details. The natural pattern of their fur, subtly speckled,
        adds a unique, elegant character to each product. The branched,
        permanent antlers of deer are also used in decoration and artistic
        crafts, highlighting their versatile application.`,
        heading3: `Applications of Deer Skins`,
        desc2: `Tanned deer skins are valued for their durability and aesthetics, making
        them suitable for high-quality clothing, elegant handbags, wallets, and
        also for finishing in luxury vehicles or as decorative elements in
        exclusive interiors. Their versatility and durability make them the
        choice for the most demanding clients who seek products that combine
        luxury with functionality.`,
        heading4: `Commitment to Quality and Tradition`,
        desc3: `At Bylinka Tannery, we are committed to delivering products that are not
        only beautifully presented but are also crafted according to the highest
        artisanal standards. Each deer skin is tanned with passion and
        precision, reflecting our commitment to promoting traditional tanning
        techniques and modern innovations in the industry. Our work with deer is
        a testament to our passion for the art of tanning and our commitment to
        preserving natural heritage.`,
        heading5: `Tanning Process`,
        desc4: `At Bylinka Tannery, every deer skin is tanned with utmost care to
        preserve its natural texture and color. The process begins with thorough
        cleaning and preparation, followed by environmentally friendly tanning
        to protect the skin against external factors and enhance its natural
        beauty. The final stage includes dyeing and finishing techniques that
        increase the skin's softness and flexibility, crucial for user comfort.`,
      },

      reindeer: {
        heading: "Reindeer Skin",
        description: `At Bylinka Tannery, renowned for its masterful approach to traditional
          craftsmanship, we offer a unique service of tanning reindeer skins.
          These noble skins, sourced from remote Arctic regions, are valued
          worldwide for their exceptional durability and beauty.`,
        colors: `Available Color:`,
        pattern: "Available Patterns:",

        heading2: `Characteristics of Reindeer Skins`,
        desc1: `Reindeer skins are exceptionally resistant to low temperatures and
        moisture, making them an ideal material for winter clothing, footwear,
        and interior design elements such as carpets or covers. The natural
        texture and subtle, yet distinct, pattern of their fur add elegance and
        warmth to every product.`,
        heading3: `Applications of Reindeer Skins`,
        desc2: `Tanned reindeer skins from Bylinka Tannery find wide application both in
        fashion and in interior decoration. They are chosen by fashion designers
        to create luxurious coats, jackets, and winter boots. In the interior
        design sector, these skins are valued for their natural beauty and
        durability, blending perfectly with various styles, from Scandinavian
        minimalism to more traditional arrangements.`,
        desc3: `Thanks to our commitment to preserving tradition and innovation in
        tanning techniques, Bylinka Tannery is proud to provide products that
        are not only beautifully presented but also durable and functional. Each
        skin is a testament to our passion for craftsmanship and commitment to
        excellence.`,
        heading4: `Tanning Process`,
        desc4: `Each skin is carefully selected and manually cleaned to remove any
        impurities. This stage is crucial to preserve the natural properties of
        the reindeer skin.`,
        desc5: `We use a specially developed tanning method that enhances the natural
        durability of the skin and protects it from harmful external factors.
        Our tanning processes are environmentally friendly, ensuring that the
        final product is both beautiful and ecologically sustainable.`,
        desc6: `The skins are gently dyed to highlight their natural color while
        preserving the unique fur pattern. Then, the skins are finished with
        techniques that increase their softness and flexibility, important for
        user comfort.`,
      },

      medical: {
        heading: "Medical Grade Leathers",
        description: `At Bylinka Tannery, we specialize in producing medical grade leathers,
          which represent the highest standard of leather tanning for medical
          applications. Our medical leathers are designed to ensure maximum
          softness, flexibility, and safety for users, which is crucial in the
          medical field.`,
        colors: `Available Color:`,
        pattern: "Available Patterns:",

        heading2: `Safety and Hygiene`,
        desc1: `Our medical grade leathers are tanned using specially selected methods
        that minimize the risk of allergic reactions and skin irritation. We use
        aluminum-based tannins known for their gentle action and compliance with
        the stringent hygiene standards required in medicine. Each batch of
        leather undergoes rigorous quality testing to ensure it meets medical
        standards.`,
        heading3: `Medical Applications`,
        desc2: `Our medical leathers are used in the production of dressings, orthopedic
        straps, medical clothing elements, and other accessories that come into
        direct contact with patients' skin. Their delicacy and softness make
        them ideal for individuals with sensitive skin and those requiring
        special care in managing skin conditions or injuries.`,

        heading4: `Commitment to Quality`,
        desc3: `Our medical grade leathers are a symbol of Bylinka Tannery's commitment
        to delivering the highest quality products. Every step in the production
        process is closely monitored to ensure that the final product not only
        meets but exceeds the expectations of our clients and the standards of
        the medical industry. We are committed to maintaining the highest
        ethical and environmental standards, making us a leader in the
        production of medical leathers.`,

        heading5: `Partnership and Collaboration`,
        desc4: `At Bylinka, we understand the importance of collaboration with the
        medical sector. We are open to partnerships with clinics, hospitals,
        medical equipment manufacturers, and researchers to deliver products
        that best meet medical needs. Our medical grade leathers are more than
        just a product—they are part of a comprehensive approach to health and
        well-being of patients worldwide.`,
      },

      related: "Related Services",

      footer: {
        address: `
          123 Maple Street, Greenwood City, Meadowshire, MS 12345, United States`,
        pages: `Pages`,
        home: `Home`,
        sheep: `Sheep`,
        deer: `Deer`,
        reindeer: `Reindeer`,
        medical: `Medical`,
        about: `About`,
        info: `Information`,
        privacy: `Privacy policy`,
        terms: `Terms & conditions`,
        connect: `Connect with us`,
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

      sheep: {
        heading: "Skóra Owcy",
        description:
          "W Bylinka Tannery, pod kierownictwem doświadczonego Mariana Siuty, garbujemy skóry owcze pochodzące z najlepszych ras, zarówno polskich, jak i międzynarodowych. Każda rasa dostarcza unikalnych cech, które przekładają się na specyficzne właściwości skór, które przetwarzamy.",
        colors: "Dostępne Kolory:",
        pattern: "Dostępne Wzory:",
        breed: "Dostępne Rasy:",
        heading2: "Przetwarzanie Produktu",
        desc1: "Przygotowanie i Czyszczenie:",
        desc2:
          "Proces garbowania zaczyna się od dokładnego czyszczenia surowych skór. Usuwane są wszelkie zanieczyszczenia i pozostałości tkanek, co jest kluczowe dla zapewnienia jakości końcowego produktu.",
        desc3: "Garbowanie:",
        desc4:
          "Jest to kluczowy etap, w którym skóra zostaje trwale zmieniona. Używamy naturalnych i syntetycznych środków garbujących, które zapewniają skórze elastyczność i trwałość. Nasze metody garbowania są przyjazne dla środowiska i bezpieczne dla natury.",
        desc5: "Wykończenie:",
        desc6:
          "Po garbowaniu skóra jest barwiona, suszona, a następnie poddawana różnym procesom wykończeniowym, takim jak szlifowanie, polerowanie czy impregnacja. Te etapy definiują wygląd, strukturę i kolor skóry.",
        desc7:
          "Dzięki tym procesom i dbałości o szczegóły, Bylinka Tannery dostarcza produkty najwyższej jakości, które spełniają oczekiwania nawet najbardziej wymagających klientów. Nasze skóry są przygotowywane z najwyższą starannością, szanując zarówno tradycyjne rzemiosło, jak i najnowsze trendy w garbarstwie, co pozwala nam dostarczać wyjątkowe produkty na rynki krajowe i międzynarodowe.",
      },
      related: "Powiązane Usługi",

      deer: {
        heading: "Skóra Jeleni",
        description:
          "W Bylinka Tannery z dumą prezentujemy nasze usługi garbowania skóry jeleni, które są synonimem wyrafinowania i naturalnego piękna. Skóry należące do rodziny jeleni stanowią materiały, które znajdują zastosowanie w najbardziej luksusowych wyrobach skórzanych.",
        colors: "Dostępne Kolory:",
        pattern: "Dostępne Wzory:",

        heading2: "Charakterystyka Skór Jeleni",
        desc1:
          "Skóry jeleni są znane ze swojej wyjątkowej delikatności i gładkości, co czyni je idealnym materiałem do ekskluzywnych akcesoriów i modnych detali. Naturalny wzór ich futra, subtelnie nakrapiany, dodaje unikalnego, eleganckiego charakteru każdemu produktowi. Rozgałęzione, trwałe poroże jeleni jest również wykorzystywane w dekoracjach i rzemiośle artystycznym, podkreślając ich wszechstronne zastosowanie.",

        heading3: "Zastosowania Skór Jeleni",
        desc2:
          "Garbowane skóry jeleni są cenione za swoją trwałość i estetykę, co czyni je odpowiednimi do wysokiej jakości odzieży, eleganckich torebek, portfeli, a także do wykończeń w luksusowych pojazdach lub jako elementy dekoracyjne w ekskluzywnych wnętrzach. Ich wszechstronność i trwałość sprawiają, że są wyborem najbardziej wymagających klientów, którzy szukają produktów łączących luksus z funkcjonalnością.",

        heading4: "Zaangażowanie w Jakość i Tradycję",
        desc3:
          "W Bylinka Tannery zobowiązujemy się do dostarczania produktów, które są nie tylko pięknie prezentowane, ale także wykonane zgodnie z najwyższymi standardami rzemieślniczymi. Każda skóra jelenia jest garbowana z pasją i precyzją, odzwierciedlając nasze zaangażowanie w promowanie tradycyjnych technik garbowania oraz nowoczesnych innowacji w branży. Nasza praca z jeleniami jest świadectwem naszej pasji do sztuki garbowania i naszego zaangażowania w zachowanie naturalnego dziedzictwa.",

        heading5: "Proces Garbowania",
        desc4:
          "W Bylinka Tannery każda skóra jelenia jest garbowana z najwyższą starannością, aby zachować jej naturalną teksturę i kolor. Proces rozpoczyna się od dokładnego czyszczenia i przygotowania, a następnie przyjaznego dla środowiska garbowania, które chroni skórę przed czynnikami zewnętrznymi i podkreśla jej naturalne piękno. Ostatnim etapem są techniki farbowania i wykończenia, które zwiększają miękkość i elastyczność skóry, co jest kluczowe dla komfortu użytkownika.",
      },

      reindeer: {
        heading: "Skóra z Renifera",
        description: `W Bylinka Tannery, znanej z mistrzowskiego podejścia do tradycyjnego
      rzemiosła, oferujemy unikalną usługę garbowania skór reniferów.
      Te szlachetne skóry, pozyskiwane z odległych regionów Arktyki, są cenione
      na całym świecie za swoją wyjątkową trwałość i piękno.`,
        colors: `Dostępne Kolory:`,
        pattern: "Dostępne Wzory:",
        heading2: `Charakterystyka Skór z Renifera`,
        desc1: `Skóry reniferów są wyjątkowo odporne na niskie temperatury i
    wilgoć, co czyni je idealnym materiałem na odzież zimową, obuwie
    oraz elementy wystroju wnętrz, takie jak dywany czy pokrowce. Naturalna
    tekstura i subtelny, ale wyraźny wzór ich futra dodają elegancji i
    ciepła każdemu produktowi.`,
        heading3: `Zastosowania Skór z Renifera`,
        desc2: `Garbowane skóry reniferów z Bylinka Tannery znajdują szerokie zastosowanie zarówno w
    modzie, jak i w dekoracji wnętrz. Są wybierane przez projektantów mody
    do tworzenia luksusowych płaszczy, kurtek i zimowych butów. W sektorze
    aranżacji wnętrz, te skóry są cenione za swoje naturalne piękno i
    trwałość, doskonale komponując się z różnymi stylami, od skandynawskiego
    minimalizmu po bardziej tradycyjne aranżacje.`,
        desc3: `Dzięki naszemu zaangażowaniu w zachowanie tradycji i innowacji w
    technikach garbowania, Bylinka Tannery z dumą dostarcza produkty, które
    są nie tylko pięknie prezentowane, ale także trwałe i funkcjonalne. Każda
    skóra jest świadectwem naszej pasji do rzemiosła i zaangażowania w doskonałość.`,
        heading4: `Proces Garbowania`,
        desc4: `Każda skóra jest starannie wyselekcjonowana i ręcznie czyszczona w celu usunięcia
    wszelkich zanieczyszczeń. Ten etap jest kluczowy, aby zachować naturalne
    właściwości skóry renifera.`,
        desc5: `Używamy specjalnie opracowanej metody garbowania, która zwiększa naturalną
    trwałość skóry i chroni ją przed szkodliwymi czynnikami zewnętrznymi.
    Nasze procesy garbowania są przyjazne dla środowiska, zapewniając, że
    końcowy produkt jest zarówno piękny, jak i ekologicznie zrównoważony.`,
        desc6: `Skóry są delikatnie barwione, aby podkreślić ich naturalny kolor, zachowując
    unikalny wzór futra. Następnie skóry są wykańczane technikami, które zwiększają
    ich miękkość i elastyczność, co jest ważne dla komfortu użytkownika.`,
      },

      medical: {
        heading: "Skóry Medyczne",
        description: `W Bylinka Tannery specjalizujemy się w produkcji skór medycznych,
      które reprezentują najwyższy standard garbowania skór dla
      zastosowań medycznych. Nasze skóry medyczne są zaprojektowane, aby zapewnić
      maksymalną miękkość, elastyczność i bezpieczeństwo dla użytkowników, co
      jest kluczowe w dziedzinie medycyny.`,
        colors: `Dostępne Kolory:`,
        pattern: "Dostępne Wzory:",
        heading2: `Bezpieczeństwo i Higiena`,
        desc1: `Nasze skóry medyczne są garbowane za pomocą specjalnie wybranych metod,
    które minimalizują ryzyko reakcji alergicznych i podrażnień skóry. Używamy
    garbników na bazie aluminium, znanych ze swojego delikatnego działania i
    zgodności z rygorystycznymi standardami higieny wymaganymi w medycynie. Każda
    partia skóry przechodzi rygorystyczne testy jakości, aby zapewnić, że spełnia
    standardy medyczne.`,
        heading3: `Zastosowania Medyczne`,
        desc2: `Nasze skóry medyczne są używane do produkcji opatrunków, pasków ortopedycznych,
    elementów odzieży medycznej i innych akcesoriów mających bezpośredni kontakt ze
    skórą pacjentów. Ich delikatność i miękkość sprawiają, że są idealne dla osób
    o wrażliwej skórze oraz tych, które wymagają specjalnej opieki w zarządzaniu
    stanami skórnymi lub urazami.`,
        heading4: `Zaangażowanie w Jakość`,
        desc3: `Nasze skóry medyczne są symbolem zaangażowania Bylinka Tannery w dostarczanie
    produktów najwyższej jakości. Każdy etap procesu produkcji jest ściśle monitorowany,
    aby zapewnić, że produkt końcowy nie tylko spełnia, ale i przewyższa oczekiwania
    naszych klientów i standardy branży medycznej. Zobowiązujemy się do utrzymania
    najwyższych standardów etycznych i środowiskowych, co czyni nas liderem w
    produkcji skór medycznych.`,
        heading5: `Partnerstwo i Współpraca`,
        desc4: `W Bylinka rozumiemy znaczenie współpracy z sektorem medycznym. Jesteśmy otwarci na
    partnerstwa z klinikami, szpitalami, producentami sprzętu medycznego i badaczami, aby
    dostarczać produkty, które najlepiej spełniają potrzeby medyczne. Nasze skóry medyczne
    to więcej niż tylko produkt - są częścią kompleksowego podejścia do zdrowia i
    dobrego samopoczucia pacjentów na całym świecie.`,
      },

      footer: {
        address: `
      123 Maple Street, Greenwood City, Meadowshire, MS 12345, Stany Zjednoczone`,
        pages: "Strony",
        home: "Strona główna",
        sheep: "Owca",
        deer: "Jeleń",
        reindeer: "Renifer",
        medical: "Medyczne",
        about: "O nas",
        info: "Informacje",
        privacy: "Polityka prywatności",
        terms: "Regulamin",
        connect: "Połącz się z nami",
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

      sheep: {
        heading: "Schafsleder",
        description:
          "Bei Bylinka Tannery, unter der Leitung des erfahrenen Marian Siuty, gerben wir Schafsleder von den besten Rassen, sowohl polnischen als auch internationalen. Jede Rasse liefert einzigartige Eigenschaften, die sich in spezifischen Merkmalen der von uns verarbeiteten Leder widerspiegeln.",
        colors: "Verfügbare Farben:",
        pattern: "Verfügbare Muster:",
        breed: "Verfügbare Rassen:",
        heading2: "Produktverarbeitung",
        desc1: "Vorbereitung und Reinigung:",
        desc2:
          "Der Gerbprozess beginnt mit der gründlichen Reinigung der rohen Häute. Alle Verunreinigungen und Gewebereste werden entfernt, was entscheidend für die Qualität des Endprodukts ist.",
        desc3: "Gerbung:",
        desc4:
          "Dies ist eine Schlüsselstufe, bei der die Haut dauerhaft verändert wird. Wir verwenden natürliche und synthetische Gerbstoffe, die der Haut Flexibilität und Haltbarkeit verleihen. Unsere Gerbmethoden sind umweltfreundlich und sicher für die Natur.",
        desc5: "Finishing:",
        desc6:
          "Nach dem Gerben wird die Haut gefärbt, getrocknet und dann verschiedenen Endbearbeitungsprozessen wie Schleifen, Polieren oder Imprägnieren unterzogen. Diese Stufen bestimmen das Aussehen, die Textur und die Farbe des Leders.",
        desc7:
          "Dank dieser Prozesse und der Liebe zum Detail liefert Bylinka Tannery Produkte von höchster Qualität, die die Erwartungen selbst der anspruchsvollsten Kunden erfüllen. Unsere Leder werden mit größter Sorgfalt hergestellt, wobei sowohl traditionelles Handwerk als auch die neuesten Trends in der Gerberei respektiert werden, was es uns ermöglicht, außergewöhnliche Produkte auf nationale und internationale Märkte zu liefern.",
      },
      related: "Verwandte Dienstleistungen",

      deer: {
        heading: "Hirschleder",
        description: `Bei Bylinka Tannery sind wir stolz darauf, unsere Dienstleistungen zur
        Gerbung von Hirschleder zu präsentieren, die für Raffinesse und natürliche Schönheit stehen.
        Diese Leder, die zur Familie der Hirsche gehören, bieten Materialien, die in den luxuriösesten
        Lederprodukten Verwendung finden.`,
        colors: `Verfügbare Farben:`,
        pattern: "Verfügbare Muster:",
        heading2: `Eigenschaften von Hirschleder`,
        desc1: `Hirschleder sind bekannt für ihre außergewöhnliche Zartheit und Glätte,
    was sie zum perfekten Material für exklusive Accessoires und
    modische Details macht. Das natürliche Muster ihres Fells, dezent gesprenkelt,
    verleiht jedem Produkt einen einzigartigen, eleganten Charakter. Die verzweigten,
    dauerhaften Geweihe der Hirsche werden auch in Dekorationen und künstlerischem
    Handwerk verwendet und unterstreichen ihre vielseitige Anwendung.`,
        heading3: `Anwendungen von Hirschleder`,
        desc2: `Gegerbtes Hirschleder wird für seine Haltbarkeit und Ästhetik geschätzt,
    was es für hochwertige Kleidung, elegante Handtaschen, Geldbörsen
    und auch für Verkleidungen in Luxusfahrzeugen oder als dekorative Elemente
    in exklusiven Innenräumen geeignet macht. Ihre Vielseitigkeit und Haltbarkeit
    machen sie zur Wahl für die anspruchsvollsten Kunden, die Produkte suchen,
    die Luxus mit Funktionalität kombinieren.`,
        heading4: `Engagement für Qualität und Tradition`,
        desc3: `Bei Bylinka Tannery sind wir bestrebt, Produkte zu liefern, die nicht nur
    schön präsentiert werden, sondern auch nach den höchsten handwerklichen
    Standards hergestellt sind. Jedes Hirschleder wird mit Leidenschaft und
    Präzision gegerbt, was unser Engagement für die Förderung traditioneller
    Gerbtechniken und moderner Innovationen in der Branche widerspiegelt. Unsere
    Arbeit mit Hirschleder ist ein Beweis für unsere Leidenschaft für die
    Kunst des Gerbens und unser Engagement für den Erhalt des natürlichen Erbes.`,
        heading5: `Gerbprozess`,
        desc4: `Bei Bylinka Tannery wird jedes Hirschleder mit größter Sorgfalt gegerbt,
    um seine natürliche Struktur und Farbe zu bewahren. Der Prozess beginnt mit
    gründlicher Reinigung und Vorbereitung, gefolgt von umweltfreundlicher
    Gerbung, die das Leder vor äußeren Einflüssen schützt und seine natürliche
    Schönheit hervorhebt. Die letzte Phase umfasst Färbungs- und
    Veredelungstechniken, die die Weichheit und Flexibilität des Leders erhöhen,
    was entscheidend für den Komfort des Benutzers ist.`,
      },

      reindeer: {
        heading: "Rentierleder",
        description: `Bei Bylinka Tannery, bekannt für seine meisterhafte Herangehensweise an traditionelles
      Handwerk, bieten wir einen einzigartigen Service zur Gerbung von Rentierfellen an.
      Diese edlen Felle, die aus abgelegenen arktischen Regionen stammen, sind weltweit geschätzt
      für ihre außergewöhnliche Haltbarkeit und Schönheit.`,
        colors: `Verfügbare Farben:`,
        pattern: "Verfügbare Muster:",
        heading2: `Eigenschaften von Rentierfellen`,
        desc1: `Rentierfelle sind außergewöhnlich widerstandsfähig gegen niedrige Temperaturen und
    Feuchtigkeit, was sie zu einem idealen Material für Winterkleidung, Schuhe
    und Innenelemente wie Teppiche oder Bezüge macht. Die natürliche
    Textur und das dezente, aber markante Muster ihres Fells verleihen jedem Produkt
    Eleganz und Wärme.`,
        heading3: `Anwendungen von Rentierfellen`,
        desc2: `Gegerbte Rentierfelle von Bylinka Tannery finden breite Anwendung sowohl in
    der Mode als auch in der Inneneinrichtung. Sie werden von Modedesignern
    ausgewählt, um luxuriöse Mäntel, Jacken und Winterstiefel zu kreieren. Im
    Bereich der Inneneinrichtung werden diese Felle wegen ihrer natürlichen Schönheit und
    Haltbarkeit geschätzt und passen perfekt zu verschiedenen Stilen, von skandinavischem
    Minimalismus bis hin zu traditionelleren Arrangements.`,
        desc3: `Dank unseres Engagements für den Erhalt von Tradition und Innovation in
    Gerbtechniken ist Bylinka Tannery stolz darauf, Produkte zu liefern, die
    nicht nur schön präsentiert, sondern auch langlebig und funktional sind. Jedes
    Fell ist ein Beweis für unsere Leidenschaft für Handwerkskunst und unser Engagement für
    Exzellenz.`,
        heading4: `Gerbprozess`,
        desc4: `Jedes Fell wird sorgfältig ausgewählt und manuell gereinigt, um
    Verunreinigungen zu entfernen. Diese Phase ist entscheidend, um die natürlichen
    Eigenschaften des Rentierfells zu erhalten.`,
        desc5: `Wir verwenden eine speziell entwickelte Gerbmethode, die die natürliche
    Haltbarkeit des Fells erhöht und es vor schädlichen äußeren Einflüssen schützt.
    Unsere Gerbprozesse sind umweltfreundlich, um sicherzustellen, dass das
    Endprodukt sowohl schön als auch ökologisch nachhaltig ist.`,
        desc6: `Die Felle werden sanft gefärbt, um ihre natürliche Farbe zu betonen und dabei
    das einzigartige Fellmuster zu erhalten. Dann werden die Felle mit
    Techniken fertiggestellt, die ihre Weichheit und Flexibilität erhöhen, was für
    den Benutzerkomfort wichtig ist.`,
      },

      medical: {
        heading: "Medizinisches Leder",
        description: `Bei Bylinka Tannery spezialisieren wir uns auf die Herstellung von medizinischem Leder,
      das den höchsten Standard der Ledergerbung für medizinische Anwendungen darstellt. Unser
      medizinisches Leder ist so konzipiert, dass es maximale Weichheit, Flexibilität und
      Sicherheit für die Benutzer gewährleistet, was im medizinischen Bereich von entscheidender
      Bedeutung ist.`,
        colors: `Verfügbare Farben:`,
        pattern: "Verfügbare Muster:",
        heading2: `Sicherheit und Hygiene`,
        desc1: `Unser medizinisches Leder wird mit speziell ausgewählten Methoden gegerbt,
    die das Risiko von allergischen Reaktionen und Hautreizungen minimieren. Wir verwenden
    Aluminium-basierte Gerbstoffe, die für ihre sanfte Wirkung und die Einhaltung der
    strengen Hygienestandards in der Medizin bekannt sind. Jede Charge Leder wird strengen
    Qualitätstests unterzogen, um sicherzustellen, dass sie den medizinischen Standards entspricht.`,
        heading3: `Medizinische Anwendungen`,
        desc2: `Unser medizinisches Leder wird bei der Herstellung von Verbänden, orthopädischen
    Gurten, medizinischen Kleidungselementen und anderen Accessoires verwendet, die in direkten
    Kontakt mit der Haut von Patienten kommen. Ihre Zartheit und Weichheit machen sie ideal für
    Personen mit empfindlicher Haut und diejenigen, die spezielle Pflege bei der Behandlung
    von Hautkrankheiten oder Verletzungen benötigen.`,
        heading4: `Engagement für Qualität`,
        desc3: `Unser medizinisches Leder ist ein Symbol für das Engagement von Bylinka Tannery, Produkte
    von höchster Qualität zu liefern. Jeder Schritt im Produktionsprozess wird genau überwacht,
    um sicherzustellen, dass das Endprodukt nicht nur die Erwartungen unserer Kunden erfüllt,
    sondern übertrifft und den Standards der medizinischen Industrie entspricht. Wir sind
    bestrebt, die höchsten ethischen und ökologischen Standards einzuhalten, was uns zu einem
    führenden Hersteller von medizinischem Leder macht.`,
        heading5: `Partnerschaft und Zusammenarbeit`,
        desc4: `Bei Bylinka verstehen wir die Bedeutung der Zusammenarbeit mit dem medizinischen Sektor.
    Wir sind offen für Partnerschaften mit Kliniken, Krankenhäusern, Herstellern medizinischer
    Geräte und Forschern, um Produkte zu liefern, die die medizinischen Bedürfnisse am besten
    erfüllen. Unser medizinisches Leder ist mehr als nur ein Produkt - es ist Teil eines
    umfassenden Ansatzes für die Gesundheit und das Wohlbefinden von Patienten weltweit.`,
      },

      footer: {
        address: `
      123 Maple Street, Greenwood City, Meadowshire, MS 12345, Vereinigte Staaten`,
        pages: "Seiten",
        home: "Startseite",
        sheep: "Schaf",
        deer: "Hirsch",
        reindeer: "Rentier",
        medical: "Medizinisch",
        about: "Über uns",
        info: "Information",
        privacy: "Datenschutzrichtlinie",
        terms: "Geschäftsbedingungen",
        connect: "Verbinde dich mit uns",
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

      sheep: {
        heading: "Peau de Mouton",
        description:
          "Chez Bylinka Tannery, sous la direction de l'expérimenté Marian Siuty, nous tannons des peaux de mouton provenant des meilleures races, tant polonaises qu'internationales. Chaque race offre des caractéristiques uniques qui se traduisent par des propriétés spécifiques des peaux que nous transformons.",
        colors: "Couleurs Disponibles:",
        pattern: "Motifs Disponibles:",
        breed: "Races Disponibles:",
        heading2: "Traitement du Produit",
        desc1: "Préparation et Nettoyage:",
        desc2:
          "Le processus de tannage commence par un nettoyage approfondi des peaux brutes. Toutes les impuretés et les résidus de tissus sont éliminés, ce qui est crucial pour garantir la qualité du produit final.",
        desc3: "Tannage:",
        desc4:
          "C'est une étape clé où la peau est modifiée de manière permanente. Nous utilisons des agents de tannage naturels et synthétiques qui confèrent à la peau flexibilité et durabilité. Nos méthodes de tannage sont respectueuses de l'environnement et sûres pour la nature.",
        desc5: "Finition:",
        desc6:
          "Après le tannage, la peau est teinte, séchée, puis soumise à divers processus de finition tels que le ponçage, le polissage ou l'imprégnation. Ces étapes définissent l'apparence, la texture et la couleur de la peau.",
        desc7:
          "Grâce à ces processus et à l'attention portée aux détails, Bylinka Tannery livre des produits de la plus haute qualité qui répondent aux attentes des clients les plus exigeants. Nos peaux sont préparées avec le plus grand soin, respectant à la fois l'artisanat traditionnel et les dernières tendances en matière de tannerie, ce qui nous permet de fournir des produits exceptionnels aux marchés nationaux et internationaux.",
      },
      related: "Services Connexes",

      deer: {
        heading: "Peau de Cerf",
        description: `Chez Bylinka Tannery, nous sommes fiers de présenter nos services de
        tannage des peaux de cerf, synonymes de raffinement et de beauté naturelle. Appartenant
        à la famille des cerfs, ces peaux fournissent des matériaux qui trouvent leur utilisation
        dans les produits en cuir les plus luxueux.`,
        colors: `Couleurs Disponibles:`,
        pattern: "Motifs Disponibles:",
        heading2: `Caractéristiques des Peaux de Cerf`,
        desc1: `Les peaux de cerf sont connues pour leur délicatesse exceptionnelle et leur
    douceur, ce qui en fait le matériau parfait pour les accessoires exclusifs et
    les détails de haute couture. Le motif naturel de leur fourrure, subtilement tacheté,
    ajoute un caractère unique et élégant à chaque produit. Les bois ramifiés et
    permanents des cerfs sont également utilisés dans la décoration et l'artisanat
    artistique, soulignant leur application polyvalente.`,
        heading3: `Applications des Peaux de Cerf`,
        desc2: `Les peaux de cerf tannées sont appréciées pour leur durabilité et leur esthétique,
    ce qui les rend adaptées aux vêtements de haute qualité, aux sacs à main élégants,
    aux portefeuilles et également aux finitions dans les véhicules de luxe ou comme
    éléments décoratifs dans les intérieurs exclusifs. Leur polyvalence et leur durabilité
    en font le choix des clients les plus exigeants qui recherchent des produits
    alliant luxe et fonctionnalité.`,
        heading4: `Engagement pour la Qualité et la Tradition`,
        desc3: `Chez Bylinka Tannery, nous nous engageons à livrer des produits non seulement
    magnifiquement présentés, mais aussi fabriqués selon les normes artisanales les plus élevées.
    Chaque peau de cerf est tannée avec passion et précision, reflétant notre engagement
    à promouvoir les techniques de tannage traditionnelles et les innovations modernes
    dans l'industrie. Notre travail avec les cerfs est un témoignage de notre passion
    pour l'art du tannage et de notre engagement à préserver le patrimoine naturel.`,
        heading5: `Processus de Tannage`,
        desc4: `Chez Bylinka Tannery, chaque peau de cerf est tannée avec le plus grand soin pour
    préserver sa texture et sa couleur naturelles. Le processus commence par un nettoyage
    et une préparation minutieux, suivis d'un tannage respectueux de l'environnement
    pour protéger la peau contre les facteurs externes et améliorer sa beauté naturelle.
    La phase finale comprend des techniques de teinture et de finition qui augmentent
    la douceur et la flexibilité de la peau, cruciales pour le confort de l'utilisateur.`,
      },

      reindeer: {
        heading: "Peau de Renne",
        description: `Chez Bylinka Tannery, réputée pour son approche magistrale de l'artisanat
      traditionnel, nous offrons un service unique de tannage des peaux de renne.
      Ces nobles peaux, provenant des régions arctiques reculées, sont appréciées
      dans le monde entier pour leur durabilité exceptionnelle et leur beauté.`,
        colors: `Couleurs Disponibles:`,
        pattern: "Motifs Disponibles:",
        heading2: `Caractéristiques des Peaux de Renne`,
        desc1: `Les peaux de renne sont exceptionnellement résistantes aux basses températures et
    à l'humidité, ce qui en fait un matériau idéal pour les vêtements d'hiver, les chaussures
    et les éléments de décoration intérieure tels que les tapis ou les couvertures. La
    texture naturelle et le motif subtil mais distinct de leur fourrure ajoutent de l'élégance
    et de la chaleur à chaque produit.`,
        heading3: `Applications des Peaux de Renne`,
        desc2: `Les peaux de renne tannées de Bylinka Tannery trouvent une large application tant dans
    la mode que dans la décoration intérieure. Elles sont choisies par les créateurs de mode
    pour créer des manteaux, des vestes et des bottes d'hiver luxueux. Dans le secteur
    de la décoration intérieure, ces peaux sont appréciées pour leur beauté naturelle et
    leur durabilité, s'intégrant parfaitement à divers styles, du minimalisme scandinave
    aux arrangements plus traditionnels.`,
        desc3: `Grâce à notre engagement à préserver la tradition et l'innovation dans les
    techniques de tannage, Bylinka Tannery est fière de fournir des produits qui
    ne sont pas seulement magnifiquement présentés mais aussi durables et fonctionnels. Chaque
    peau est un témoignage de notre passion pour l'artisanat et de notre engagement pour
    l'excellence.`,
        heading4: `Processus de Tannage`,
        desc4: `Chaque peau est soigneusement sélectionnée et nettoyée manuellement pour
    enlever les impuretés. Cette étape est cruciale pour préserver les propriétés naturelles
    de la peau de renne.`,
        desc5: `Nous utilisons une méthode de tannage spécialement développée qui renforce la
    durabilité naturelle de la peau et la protège contre les facteurs externes nuisibles.
    Nos processus de tannage sont respectueux de l'environnement, garantissant que le
    produit final est à la fois beau et écologiquement durable.`,
        desc6: `Les peaux sont doucement teintées pour mettre en valeur leur couleur naturelle tout en
    préservant le motif unique de la fourrure. Ensuite, les peaux sont finies avec
    des techniques qui augmentent leur douceur et leur flexibilité, importantes pour le
    confort de l'utilisateur.`,
      },

      medical: {
        heading: "Cuirs de Qualité Médicale",
        description: `Chez Bylinka Tannery, nous nous spécialisons dans la production de cuirs de qualité
      médicale, qui représentent la norme la plus élevée de tannage du cuir pour des applications
      médicales. Nos cuirs médicaux sont conçus pour assurer une douceur, une flexibilité et une
      sécurité maximales pour les utilisateurs, ce qui est crucial dans le domaine médical.`,
        colors: `Couleurs Disponibles:`,
        pattern: "Motifs Disponibles:",
        heading2: `Sécurité et Hygiène`,
        desc1: `Nos cuirs de qualité médicale sont tannés en utilisant des méthodes spécialement
    sélectionnées qui minimisent le risque de réactions allergiques et d'irritations cutanées.
    Nous utilisons des tanins à base d'aluminium connus pour leur action douce et leur conformité
    aux normes d'hygiène strictes requises en médecine. Chaque lot de cuir subit des tests de
    qualité rigoureux pour garantir qu'il répond aux normes médicales.`,
        heading3: `Applications Médicales`,
        desc2: `Nos cuirs médicaux sont utilisés dans la production de pansements, de sangles orthopédiques,
    d'éléments de vêtements médicaux et d'autres accessoires qui entrent en contact direct avec
    la peau des patients. Leur délicatesse et leur douceur les rendent idéaux pour les personnes
    ayant la peau sensible et celles nécessitant des soins spéciaux dans la gestion des affections
    cutanées ou des blessures.`,
        heading4: `Engagement envers la Qualité`,
        desc3: `Nos cuirs de qualité médicale sont le symbole de l'engagement de Bylinka Tannery à fournir
    des produits de la plus haute qualité. Chaque étape du processus de production est étroitement
    surveillée pour garantir que le produit final non seulement répond mais dépasse les attentes
    de nos clients et les normes de l'industrie médicale. Nous nous engageons à maintenir les
    normes éthiques et environnementales les plus élevées, ce qui fait de nous un leader dans la
    production de cuirs médicaux.`,
        heading5: `Partenariat et Collaboration`,
        desc4: `Chez Bylinka, nous comprenons l'importance de la collaboration avec le secteur médical.
    Nous sommes ouverts aux partenariats avec des cliniques, des hôpitaux, des fabricants
    d'équipements médicaux et des chercheurs pour fournir des produits qui répondent le mieux aux
    besoins médicaux. Nos cuirs de qualité médicale sont plus qu'un simple produit - ils font
    partie d'une approche globale de la santé et du bien-être des patients dans le monde entier.`,
      },

      footer: {
        address: `
      123 Maple Street, Greenwood City, Meadowshire, MS 12345, États-Unis`,
        pages: "Pages",
        home: "Accueil",
        sheep: "Mouton",
        deer: "Cerf",
        reindeer: "Renne",
        medical: "Médical",
        about: "À propos",
        info: "Information",
        privacy: "Politique de confidentialité",
        terms: "Termes et conditions",
        connect: "Connectez avec nous",
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

      sheep: {
        heading: "Fårskinn",
        description:
          "På Bylinka Tannery, under ledning av den erfarne Marian Siuty, garvar vi fårskinn från de bästa raserna, både polska och internationella. Varje ras har unika egenskaper som översätts till specifika egenskaper hos de skinn vi bearbetar.",
        colors: "Tillgängliga Färger:",
        pattern: "Tillgängliga Mönster:",
        breed: "Tillgängliga Raser:",
        heading2: "Produktbearbetning",
        desc1: "Förberedelse och Rengöring:",
        desc2:
          "Garvningsprocessen börjar med grundlig rengöring av råskinnen. Alla föroreningar och vävnadsrester avlägsnas, vilket är avgörande för att säkerställa slutproduktens kvalitet.",
        desc3: "Garvning:",
        desc4:
          "Detta är ett nyckelsteg där skinnet förändras permanent. Vi använder naturliga och syntetiska garvningsmedel som ger skinnet flexibilitet och hållbarhet. Våra garvningsmetoder är miljövänliga och säkra för naturen.",
        desc5: "Efterbehandling:",
        desc6:
          "Efter garvningen färgas skinnet, torkas och utsätts sedan för olika efterbehandlingsprocesser såsom slipning, polering eller impregnering. Dessa steg bestämmer skinnets utseende, textur och färg.",
        desc7:
          "Tack vare dessa processer och uppmärksamhet på detaljer levererar Bylinka Tannery produkter av högsta kvalitet som uppfyller förväntningarna hos även de mest krävande kunderna. Våra skinn tillverkas med största omsorg, med respekt för både traditionellt hantverk och de senaste trenderna inom garvning, vilket gör det möjligt för oss att leverera exceptionella produkter till nationella och internationella marknader.",
      },
      related: "Relaterade Tjänster",

      deer: {
        heading: "Hjortskinn",
        description: `På Bylinka Tannery är vi stolta över att presentera våra tjänster för
        garvning av hjortskinn, som är synonymt med förfining och naturlig skönhet. Dessa skinn,
        som tillhör hjortfamiljen, ger material som används i de mest lyxiga läderprodukterna.`,
        colors: `Tillgängliga Färger:`,
        pattern: "Tillgängliga Mönster:",
        heading2: `Egenskaper hos Hjortskinn`,
        desc1: `Hjortskinn är kända för sin exceptionella mjukhet och släthet,
    vilket gör dem till det perfekta materialet för exklusiva accessoarer och
    modedetaljer. Deras naturliga mönster, subtilt fläckade,
    ger varje produkt en unik, elegant karaktär. Hjortens förgrenade,
    permanenta horn används också i dekorationer och konstnärliga hantverk,
    vilket understryker deras mångsidiga användning.`,
        heading3: `Användningsområden för Hjortskinn`,
        desc2: `Garbade hjortskinn uppskattas för sin hållbarhet och estetik, vilket
    gör dem lämpliga för högkvalitativa kläder, eleganta handväskor, plånböcker,
    och även för finish i lyxiga fordon eller som dekorativa element
    i exklusiva interiörer. Deras mångsidighet och hållbarhet gör dem
    till valet för de mest krävande kunder som söker produkter som kombinerar
    lyx med funktionalitet.`,
        heading4: `Engagemang för Kvalitet och Tradition`,
        desc3: `På Bylinka Tannery är vi engagerade i att leverera produkter som inte bara
    är vackert presenterade utan också tillverkade enligt de högsta
    hantverksstandarderna. Varje hjortskinn bereds med passion och precision,
    vilket speglar vårt engagemang för att främja traditionella
    garvningstekniker och moderna innovationer inom branschen. Vårt arbete
    med hjortskinn är ett bevis på vår passion för garvningens konst och
    vårt engagemang för att bevara det naturliga arvet.`,
        heading5: `Garvningsprocessen`,
        desc4: `På Bylinka Tannery bereds varje hjortskinn med största omsorg för att
    bevara dess naturliga struktur och färg. Processen börjar med noggrann
    rengöring och förberedelse, följt av miljövänlig garvning som skyddar
    skinnet mot yttre faktorer och framhäver dess naturliga skönhet. Den sista
    fasen omfattar färgnings- och ytbehandlingstekniker som ökar skinnets
    mjukhet och flexibilitet, vilket är avgörande för användarkomforten.`,
      },

      reindeer: {
        heading: "Renskinn",
        description: `På Bylinka Tannery, känd för sitt mästerliga tillvägagångssätt till traditionellt
      hantverk, erbjuder vi en unik tjänst för garvning av renskinn.
      Dessa ädla skinn, hämtade från avlägsna arktiska regioner, är värderade
      över hela världen för sin exceptionella hållbarhet och skönhet.`,
        colors: `Tillgängliga Färger:`,
        pattern: "Tillgängliga Mönster:",
        heading2: `Egenskaper hos Renskinn`,
        desc1: `Renskinn är exceptionellt motståndskraftiga mot låga temperaturer och
    fukt, vilket gör dem till ett idealiskt material för vinterkläder, skor
    och inredningselement som mattor eller överdrag. Den naturliga
    texturen och det subtila men distinkta mönstret i deras päls tillför elegans och
    värme till varje produkt.`,
        heading3: `Användningsområden för Renskinn`,
        desc2: `Garvade renskinn från Bylinka Tannery hittar bred användning både inom
    mode och inredning. De väljs av modedesigners för att skapa lyxiga kappor, jackor och
    vinterstövlar. Inom inredningssektorn värderas dessa skinn för sin naturliga skönhet och
    hållbarhet, och passar perfekt med olika stilar, från skandinavisk
    minimalism till mer traditionella arrangemang.`,
        desc3: `Tack vare vårt engagemang för att bevara tradition och innovation inom
    garvtekniker är Bylinka Tannery stolt över att tillhandahålla produkter som
    inte bara är vackert presenterade utan också hållbara och funktionella. Varje
    skinn är ett bevis på vår passion för hantverk och vårt engagemang för
    excellens.`,
        heading4: `Garvningsprocess`,
        desc4: `Varje skinn väljs noggrant och rengörs manuellt för att avlägsna
    orenheter. Denna fas är avgörande för att bevara de naturliga egenskaperna
    hos renskinnet.`,
        desc5: `Vi använder en speciellt utvecklad garvningsmetod som ökar skinnets naturliga
    hållbarhet och skyddar det mot skadliga yttre faktorer.
    Våra garvningsprocesser är miljövänliga, vilket säkerställer att
    slutprodukten är både vacker och ekologiskt hållbar.`,
        desc6: `Skinnen färgas varsamt för att framhäva deras naturliga färg samtidigt som
    det unika pälsmönstret bevaras. Därefter färdigställs skinnen med
    tekniker som ökar deras mjukhet och flexibilitet, vilket är viktigt för
    användarkomforten.`,
      },

      medical: {
        heading: "Medicinskt Läder",
        description: `På Bylinka Tannery specialiserar vi oss på att producera medicinskt läder,
      vilket representerar den högsta standarden för lädergarvning för medicinska
      tillämpningar. Vårt medicinska läder är utformat för att säkerställa maximal
      mjukhet, flexibilitet och säkerhet för användarna, vilket är avgörande inom
      det medicinska området.`,
        colors: `Tillgängliga Färger:`,
        pattern: "Tillgängliga Mönster:",
        heading2: `Säkerhet och Hygien`,
        desc1: `Vårt medicinska läder är garvat med speciellt utvalda metoder
    som minimerar risken för allergiska reaktioner och hudirritationer. Vi använder
    aluminium-baserade garvämnen som är kända för sin milda verkan och överensstämmelse med
    de strikta hygienstandarder som krävs inom medicin. Varje parti läder genomgår noggranna
    kvalitetstester för att säkerställa att det uppfyller medicinska standarder.`,
        heading3: `Medicinska Tillämpningar`,
        desc2: `Vårt medicinska läder används vid tillverkning av förband, ortopediska
    remmar, medicinska klädelement och andra tillbehör som kommer i direkt kontakt med
    patienternas hud. Deras ömhet och mjukhet gör dem idealiska för personer med känslig hud
    och de som kräver särskild vård vid behandling av hudtillstånd eller skador.`,
        heading4: `Engagemang för Kvalitet`,
        desc3: `Vårt medicinska läder är en symbol för Bylinka Tannerys engagemang för att leverera
    produkter av högsta kvalitet. Varje steg i produktionsprocessen övervakas noggrant för att
    säkerställa att slutprodukten inte bara uppfyller utan överträffar våra kunders förväntningar
    och de medicinska industrins standarder. Vi är engagerade i att upprätthålla de högsta
    etiska och miljömässiga standarderna, vilket gör oss till en ledande producent av medicinskt
    läder.`,
        heading5: `Partnerskap och Samarbete`,
        desc4: `På Bylinka förstår vi vikten av samarbete med den medicinska sektorn. Vi är öppna för
    partnerskap med kliniker, sjukhus, medicintekniska tillverkare och forskare för att leverera
    produkter som bäst uppfyller medicinska behov. Vårt medicinska läder är mer än bara en produkt
    - det är en del av en omfattande strategi för hälsa och välbefinnande hos patienter världen över.`,
      },

      footer: {
        address: `
      123 Maple Street, Greenwood City, Meadowshire, MS 12345, Förenta Staterna`,
        pages: "Sidor",
        home: "Hem",
        sheep: "Får",
        deer: "Hjort",
        reindeer: "Ren",
        medical: "Medicinskt",
        about: "Om oss",
        info: "Information",
        privacy: "Integritetspolicy",
        terms: "Villkor",
        connect: "Anslut med oss",
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
