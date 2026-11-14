(() => {
const pad = n => String(n).padStart(2, '0');
const thNames = ['Galene', 'Ondine', 'Cauda', 'Kaia', 'Halios', 'Nausicaa', 'Medya', 'Marela', 'Delmare', 'Thalassa'];
const thShow = ['Galene', 'Ondine', 'Cauda', 'Halios', 'Nausicaa', 'Thalassa'];
const L = (es, en) => ({ es, en });

window.QY = {
  ui: {
    nav: { home: L('Inicio', 'Home'), collections: L('Colecciones', 'Collections'), projects: L('Proyectos', 'Projects'), lab: L('3D Lab', '3D Lab'), about: L('Sobre mí', 'About'), journal: L('Diario', 'Journal'), contact: L('Contacto', 'Contact'), process: L('Taller', 'Studio'), runway: L('Pasarela', 'Runway') },
    looks: L('Looks', 'Looks'), concept: L('Concepto', 'Concept'), lines: L('Líneas', 'Lines'), materials: L('Materiales', 'Materials'),
    editorial: L('Editorial', 'Editorial'), sheet: L('Ficha', 'Facts'), process: L('Proceso', 'Process'), runwayList: L('Pasarelas', 'Runways'),
    next: L('Siguiente colección', 'Next collection'), view: L('Ver colección', 'View collection'), runway: L('Desfila', 'Runway'),
    back: L('Volver al diario', 'Back to journal'), all: L('Todo el diario', 'All entries'), send: L('Enviar', 'Send'),
    scrollH: L('Desliza para ver los looks', 'Scroll to see the looks'), path: L('Trayectoria', 'Path'),
    author: 'Carmen Álvarez Feriche', authorRole: L('Diseñadora de autor', 'Author designer'),
  },
  hero: [
    { slot: 'web-hero-1', posM: '46% center', src: 'assets/opt/home/grupo-rebirth-2.jpg', col: 'rebirth', cap: L('Rebirth, editorial', 'Rebirth, editorial') },
    { slot: 'web-hero-2', posM: '58% center', src: 'assets/opt/home/thalaira-agua.jpg', col: 'thalaira', cap: L('Thalaira, editorial', 'Thalaira, editorial') },
    { slot: 'web-hero-3', posM: '55% center', src: 'assets/opt/home/detalle-bolsillo.jpg', col: 'rebirth', cap: L('Rebirth, detalle', 'Rebirth, detail') },
    { slot: 'web-hero-4', posM: '46% center', src: 'img/home-cruzroja-2025-hospital-real.jpg', col: 'thalaira', cap: L('Thalaira, Pasarela Cruz Roja Granada · Hospital Real', 'Thalaira, Cruz Roja Granada Runway · Hospital Real') },
  ],
  home: {
    claim: L('“No seas diferente, sé único”', '“Don’t be different, be unique”'),
    claimSub: L('Moda de autor y complementos', 'Author fashion and accessories'),
    intro: L('By QiYo es una marca que ha surgido de la necesidad de actualizar la moda de autor a la tecnología actual. Se podría definir como una marca de moda emergente y contemporánea que se mueve entre el prêt-à-porter y, a su vez, desarrolla colecciones de carácter conceptual.', 'By QiYo is a brand born from the need to bring author fashion up to date with today’s technology. It could be defined as an emerging, contemporary fashion brand that moves within prêt-à-porter while also developing collections of a conceptual nature.'),
    tiles: [
      { go: 'collections', slot: 'web-tile-rebirth', src: 'assets/opt/home/tile-colecciones.jpg', eyebrow: L('Colecciones', 'Collections'), t: 'Rebirth · Thalaira', d: L('Rebirth: The Shape of Plastic, 24 outfits en tres líneas creativas. Thalaira nace desde las aguas de Motril, el lugar donde crecí y al que siempre vuelvo, incluso cuando diseño.', 'Rebirth: The Shape of Plastic, 24 outfits in three creative lines. Thalaira is born from the waters of Motril, the place where I grew up and always return to, even when I design.') },
      { go: 'lab', slot: 'web-tile-lab', src: 'assets/opt/bolso-negro-mano.jpg', eyebrow: 'QiYo 3D LAB', title: 'QiYo 3D LAB', t: L('Diseño impreso en 3D', '3D-printed design'), d: L('Experimentación con impresión 3D y nuevos materiales. Bolsos, pendientes y laboratorio textil.', 'Experimentation with 3D printing and new materials. Bags, earrings and textile lab.') },
      { go: 'projects', slot: 'web-tile-proyecto', src: 'assets/opt/home/tile-agora.jpg', eyebrow: L('Proyectos', 'Projects'), t: L('Fuera de colección', 'Beyond the collections'), d: L('Ágora y proyectos universitarios.', 'Ágora and university projects.') },
      { go: 'process', slot: 'web-tile-artesania', src: 'assets/opt/home/tile-artesania.jpg', eyebrow: L('Taller', 'Studio'), t: L('Hecho a mano', 'Handmade'), d: L('Dominio de técnicas artesanales y digitales: plisado, smoking canadian aplicado manualmente e impresión 3D.', 'Command of craft and digital techniques: pleating, hand-applied Canadian smocking and 3D printing.') },
      { go: 'runway', slot: 'web-tile-pasarela', src: 'img/home-tile-pasarela.jpg', eyebrow: L('Pasarela', 'Runway'), t: L('En movimiento', 'In motion'), d: L('Thalaira en la XII Pasarela Solidaria Cruz Roja Granada 2025.', 'Thalaira at the XII Pasarela Solidaria Cruz Roja Granada 2025.') },
      { go: 'journal', slot: 'web-tile-diario', src: 'img/home-tile-diario.jpg', eyebrow: L('Diario', 'Journal'), t: L('Notas de taller', 'Studio notes'), d: L('Investigación, materiales y pasarela.', 'Research, materials and runway.') },
      { go: 'about', slot: 'web-about-portrait', src: 'assets/opt/carmen-retrato.jpg', eyebrow: L('Sobre mí', 'About'), t: 'Carmen Álvarez Feriche', d: L('Entender la moda más bien desde una perspectiva artística y personal, buscando no solo vestir sino transmitir ideas y emociones.', 'Understanding fashion from an artistic and personal perspective, seeking not only to dress but to convey ideas and emotions.') },
    ],
    statement: L('By QiYo es una firma de moda de autor contemporánea enfocada en transformar ideas y emociones en prendas y complementos con identidad propia.', 'By QiYo is a contemporary author fashion label focused on transforming ideas and emotions into garments and accessories with their own identity.'),
    statementSub: L('No busca repetir las mismas formas, sino mantener una misma manera de investigar, interpretar y construir moda.', 'It does not seek to repeat the same forms, but to keep the same way of researching, interpreting and building fashion.'),
    process: [
      { slot: 'web-proc-1', t: L('Impresión 3D', '3D printing'), d: L('El plástico se trabaja a través de la impresión 3D, que aparece principalmente en aplicaciones y relieves, pero también en elementos independientes y complementos que interactúan con las prendas.', 'Plastic is worked through 3D printing, which appears mainly in appliqués and reliefs, but also in standalone elements and accessories that interact with the garments.') },
      { slot: 'web-proc-2', t: L('Plisado', 'Pleating'), d: L('El plisado en tonos de azules degradados, como si cada capa de tela fuera una vibración del agua.', 'Pleating in gradient blues, as if each layer of fabric were a vibration of the water.') },
      { slot: 'web-proc-3', t: L('Smoking canadian', 'Canadian smocking'), d: L('La técnica de smoking canadian, aplicándola manualmente para crear texturas tridimensionales que evoquen a partes de algunos peces.', 'The Canadian smocking technique, applied by hand to create three-dimensional textures that evoke parts of certain fish.') },
      { slot: 'web-proc-4', t: L('Material recuperado', 'Recovered material'), d: L('Tejidos con un alto componente de poliéster, en ocasiones reciclado, que permite a los tejidos interactuar con el plástico.', 'Fabrics with a high polyester content, sometimes recycled, which allows them to interact with plastic.') },
    ],
    runways: [
      { year: '2025', t: 'XII Pasarela Solidaria Cruz Roja Granada', col: 'Thalaira', d: L('6 looks', '6 looks') },
      { year: '2025', t: L('Pasarela “Goya” televisada, Mae West Granada', 'Televised “Goya” runway, Mae West Granada'), col: 'By QiYo', d: L('Pasarela', 'Runway') },
    ],
  },
  collections: [
    {
      id: 'rebirth', name: 'Rebirth', sub: 'The Shape of Plastic', season: L('PV 2027', 'SS 2027'), theme: 'paper',
      logo: 'assets/rebirth-logo.png', reveal: 'assets/opt/cover-rebirth.jpg', count: 24,
      cover: 'assets/opt/home/grupo-rebirth-2.jpg', moodboard: 'img/moodboard-rebirth.jpg', runway: 'Estación Diseño',
      runwayImgs: ['img/rebirth-runway-run-1.jpg', 'img/rebirth-runway-run-2.jpg', 'img/rebirth-runway-run-3.jpg', 'img/rebirth-runway-run-4.jpg', 'img/rebirth-runway-run-5.jpg', 'img/rebirth-runway-run-6.jpg'],
      editorial: [
        { n: '07', fig: 'figurines/o07.jpg', imgs: ['img/photos-1788256738046-yvct.jpg', 'img/12.jpg', 'img/photos-1788256737978-fgkn.jpg', 'img/photos-1788256738118-odsv.jpg', 'img/16.jpg'] },
        { n: '10', fig: 'figurines/o10.jpg', imgs: ['img/21.jpg', 'img/22.jpg', 'img/20.jpg', 'img/18.jpg', 'img/23.jpg', 'img/24.jpg', 'img/25.jpg'] },
        { n: '11', fig: 'figurines/o11.jpg', imgs: ['img/36.jpg', 'img/37.jpg', 'img/35.jpg', 'img/38.jpg', 'img/39.jpg', 'img/photoshoot-41.jpg', 'img/photoshoot-42.jpg'] },
        { n: '16', fig: 'figurines/o16.jpg', imgs: ['img/photos-1788256728876-yysy.jpg', 'img/photos-1788256728713-cfdg.jpg', 'img/photos-1788256728807-racj.jpg', 'img/photos-1788256728941-b8ij.jpg', 'img/photos-1788256729270-fvbn.jpg'] },
        { n: '18', fig: 'figurines/o18.jpg', imgs: ['img/photos-1788256717135-rus1.jpg', 'img/photos-1788256717218-lqqx.jpg', 'img/photos-1788256717367-c0fw.jpg', 'img/photos-1788256717299-0nfw.jpg', 'img/photos-1788256717520-2v2y.jpg'] },
        { n: null, imgs: ['img/30.jpg', 'img/27.jpg', 'img/29.jpg', 'img/33.jpg'] },
      ],
      refsIntro: L('Por eso la obra de todos estos artistas ha inspirado el concepto Rebirth, en el que se hacen presentes técnicas como el ensamblaje aditivo de Aurora Robson y sus diseños biomórficos, o el propio arte con residuos creado por Richterová. También el aceptar la fragmentación como parte del proceso creativo, como puede apreciarse en la obra de Sayaka Ganz, donde el origen del objeto es visible en el resultado final.', 'That is why the work of all these artists has inspired the Rebirth concept, which features techniques such as Aurora Robson’s additive assemblage and biomorphic designs, or the waste art created by Richterová. Also the acceptance of fragmentation as part of the creative process, as seen in the work of Sayaka Ganz, where the origin of the object is visible in the final result.'),
      refs: [
        { id: 'richterova', body: [L("Artista checa que ha dedicado las dos últimas décadas a desarrollar lo que llama «PET-ART».", "Artista checa que ha dedicado las dos últimas décadas a desarrollar lo que llama «PET-ART»."), L("Trayectoria y descubrimiento. En 2004 descubrió por accidente que las botellas de plástico podían deformarse con calor; desde entonces ha usado miles para crear cientos de objetos escultóricos.", "Trayectoria y descubrimiento. En 2004 descubrió por accidente que las botellas de plástico podían deformarse con calor; desde entonces ha usado miles para crear cientos de objetos escultóricos."), L("Obra y estilo. Esculturas inspiradas en la naturaleza (cactus, medusas, hongos y animales, como un cocodrilo de 360 botellas), además de elaboradas lámparas y candelabros de PET.", "Obra y estilo. Esculturas inspiradas en la naturaleza (cactus, medusas, hongos y animales, como un cocodrilo de 360 botellas), además de elaboradas lámparas y candelabros de PET."), L("Museo del PET. Cerca de 5.000 botellas de 139 países, reunidas junto a su esposo para documentar la evolución del material y convertir lo que se ve como basura en algo de valor duradero.", "Museo del PET. Cerca de 5.000 botellas de 139 países, reunidas junto a su esposo para documentar la evolución del material y convertir lo que se ve como basura en algo de valor duradero.")], works: ['img/pasted-1782062984252-0.jpg'], name: 'Veronika Richterová', accent: '#007A6E', tag: L('Escultora · PET-ART', 'Sculptor · PET-ART'), portrait: 'img/pasted-1782062972254-0.jpg', work: 'img/pasted-1782062984252-0.jpg', d: L('Artista checa que ha dedicado las dos últimas décadas a desarrollar lo que llama «PET-ART». En 2004 descubrió por accidente que las botellas de plástico podían deformarse con calor; desde entonces ha usado miles para crear cientos de objetos escultóricos.', 'Czech artist who has spent the last two decades developing what she calls “PET-ART”. In 2004 she discovered by accident that plastic bottles could be deformed with heat; since then she has used thousands to create hundreds of sculptural objects.') },
        { id: 'robson', body: [L("Nacida en Toronto (1972) y criada en Maui (Hawái), es artista y activista ambiental radicada en Nueva York.", "Nacida en Toronto (1972) y criada en Maui (Hawái), es artista y activista ambiental radicada en Nueva York."), L("Trayectoria y descubrimiento. Formada en Artes Visuales e Historia del Arte en la Universidad de Columbia. En su etapa académica aprendió a canalizar sus pesadillas infantiles para convertirlas en composiciones artísticas armoniosas.", "Trayectoria y descubrimiento. Formada en Artes Visuales e Historia del Arte en la Universidad de Columbia. En su etapa académica aprendió a canalizar sus pesadillas infantiles para convertirlas en composiciones artísticas armoniosas."), L("Obras y estilo. Instalaciones etéreas y esculturas de gran escala, como «Lift» (10.000 botellas y 3.000 tapas). Técnica compleja (soldadura, remachado y extrusión de plástico), a menudo con energía solar y motores que aportan luz y movimiento.", "Obras y estilo. Instalaciones etéreas y esculturas de gran escala, como «Lift» (10.000 botellas y 3.000 tapas). Técnica compleja (soldadura, remachado y extrusión de plástico), a menudo con energía solar y motores que aportan luz y movimiento."), L("Project Vortex. Fundadora de esta coalición internacional de creativos dedicada a interrumpir el flujo de plástico hacia la basura y los océanos, promoviendo una economía circular en las artes.", "Project Vortex. Fundadora de esta coalición internacional de creativos dedicada a interrumpir el flujo de plástico hacia la basura y los océanos, promoviendo una economía circular en las artes.")], works: ['img/pasted-1782062044856-0.jpg'], name: 'Aurora Robson', accent: '#E8005A', tag: L('Escultora · Project Vortex', 'Sculptor · Project Vortex'), portrait: 'img/pasted-1782061586122-0.jpg', work: 'img/pasted-1782062044856-0.jpg', d: L('Instalaciones etéreas y esculturas de gran escala, como «Lift» (10.000 botellas y 3.000 tapas). Fundadora de Project Vortex, coalición internacional de creativos dedicada a interrumpir el flujo de plástico hacia la basura y los océanos.', 'Ethereal installations and large-scale sculptures, such as “Lift” (10,000 bottles and 3,000 caps). Founder of Project Vortex, an international coalition of creatives dedicated to interrupting the flow of plastic into landfill and the oceans.') },
        { id: 'ganz', body: [L("Escultora japonesa nacida en Yokohama; ha vivido en Japón, Brasil y Hong Kong, lo que moldeó su percepción de la armonía y el caos.", "Escultora japonesa nacida en Yokohama; ha vivido en Japón, Brasil y Hong Kong, lo que moldeó su percepción de la armonía y el caos."), L("Trayectoria y descubrimiento. Máster en Bellas Artes (Bowling Green State University). Sus creencias animistas sintoístas le hacen sentir tristeza por los objetos abandonados y la impulsan a «hacerlos felices» dándoles una nueva vida.", "Trayectoria y descubrimiento. Máster en Bellas Artes (Bowling Green State University). Sus creencias animistas sintoístas le hacen sentir tristeza por los objetos abandonados y la impulsan a «hacerlos felices» dándoles una nueva vida."), L("Obras y estilo. Su método es el «impresionismo 3D»: objetos domésticos recuperados que actúan como pinceladas para construir animales dinámicos; al alejarse, el caos revela formas sólidas en movimiento.", "Obras y estilo. Su método es el «impresionismo 3D»: objetos domésticos recuperados que actúan como pinceladas para construir animales dinámicos; al alejarse, el caos revela formas sólidas en movimiento."), L("Flujo de energía. Visualiza el «aliento» atravesando la escultura; si el ensamblaje se vuelve denso y bloquea ese flujo, retira piezas para que no quede energía estancada.", "Flujo de energía. Visualiza el «aliento» atravesando la escultura; si el ensamblaje se vuelve denso y bloquea ese flujo, retira piezas para que no quede energía estancada.")], works: ['img/pasted-1782062126549-0.jpg', 'img/pasted-1782063098067-0.jpg', 'img/pasted-1782063227950-0.jpg'], name: 'Sayaka Ganz', accent: '#F5D300', tag: L('Escultora · «Impresionismo 3D»', 'Sculptor · “3D Impressionism”'), portrait: 'img/pasted-1782062084083-0.jpg', work: 'img/pasted-1782062126549-0.jpg', d: L('Su método es el «impresionismo 3D»: objetos domésticos recuperados que actúan como pinceladas para construir animales dinámicos; al alejarse, el caos revela formas sólidas en movimiento.', 'Her method is “3D impressionism”: recovered household objects that act as brushstrokes to build dynamic animals; from a distance, chaos reveals solid forms in motion.') },
      ],
      intro: L('Rebirth: The Shape of Plastic es una colección conceptual de By QiYo formada por 24 outfits, que se distribuye en tres líneas creativas con 8 looks cada una. La colección reúne propuestas tanto femeninas como masculinas, en las que predomina una estética escultórica, experimental y muy ligada a la forma.', 'Rebirth: The Shape of Plastic is a conceptual collection by By QiYo made up of 24 outfits, distributed across three creative lines of 8 looks each. It brings together womenswear and menswear proposals dominated by a sculptural, experimental aesthetic closely tied to form.'),
      body: L('La colección juega con lo rígido y lo blando, tratando de hacer de un material tan rígido como el plástico una herramienta fluida y maleable. Rebirth se construye así como una colección de presencia fuerte, donde cada look busca transformar lo cotidiano en una propuesta de moda.', 'The collection plays with the rigid and the soft, trying to turn a material as rigid as plastic into a fluid, malleable tool. Rebirth is thus built as a collection with a strong presence, where each look seeks to transform the everyday into a fashion proposal.'),
      lines: [
        { n: 'I', img: 'img/origen-amarillo.jpg', name: L('Origen', 'Origin'), accent: '#007A6E', ref: 'Veronika Richterová', d: L('La línea Origen parte de la idea de mostrar cómo el plástico pasa de un objeto cotidiano al arte.', 'The Origin line starts from the idea of showing how plastic moves from an everyday object to art.') },
        { n: 'II', img: 'img/transformacion-magenta.jpg', name: L('Transformación', 'Transformation'), accent: '#E8005A', ref: 'Aurora Robson', d: L('La línea Transformación representa el momento en el que el plástico empieza a cambiar. Un material que se rompe, se deforma y se recompone para generar nuevas formas.', 'The Transformation line represents the moment plastic begins to change. A material that breaks, deforms and recomposes itself to generate new forms.') },
        { n: 'III', img: 'img/renacer-cyan.jpg', name: L('Renacer', 'Rebirth'), accent: '#F5D300', ref: 'Sayaka Ganz', d: L('La tercera línea, Renacer, representa el momento final de la colección, cuando el plástico ya se ha transformado por completo en una nueva forma.', 'The third line, Rebirth, represents the final moment of the collection, when plastic has completely transformed into a new form.') },
      ],
      figs: Array.from({ length: 24 }, (_, i) => ({ n: pad(i + 1), img: `figurines/o${pad(i + 1)}.jpg`, line: Math.floor(i / 8) })),
      materials: [
        { img: 'assets/opt/tul-rosa.jpg', label: L('Tul de carnaval', 'Carnival tulle') },
        { img: 'assets/opt/gasa-cristal-amarillo.jpg', label: L('Gasa cristal', 'Crystal gauze') },
        { img: 'assets/opt/raso-blanco.jpg', label: L('Raso ceremonial', 'Ceremonial satin') },
        { img: 'assets/opt/saten-rosa.jpg', label: L('Crêpe satén', 'Satin crêpe') },
        { img: 'assets/opt/triacetato-amarillo.jpg', label: L('Triacetato', 'Triacetate') },
        { img: 'assets/opt/mikado-blanco.jpg', label: L('Mikado', 'Mikado') },
      ],
      sheet: [
        [L('Temporada', 'Season'), L('Primavera / Verano 2027', 'Spring / Summer 2027')],
        [L('Looks', 'Looks'), L('24 outfits, 3 líneas de 8', '24 outfits, 3 lines of 8')],
        [L('Materiales', 'Materials'), L('Crêpe satén, raso ceremonial, mikado, gasa cristal impresa, triacetato y otomán rayado', 'Satin crêpe, ceremonial satin, mikado, printed crystal gauze, triacetate and striped ottoman')],
        [L('Paleta', 'Palette'), L('Negros, añiles muy oscuros, crema y blanco, con acentos de rosa, amarillo y turquesa', 'Blacks, very dark indigos, cream and white, with accents of pink, yellow and turquoise')],
        [L('Referentes', 'References'), 'Veronika Richterová · Aurora Robson · Sayaka Ganz · Iris Van Herpen'],
      ],
    },
    {
      id: 'thalaira', name: 'Thalaira', sub: L('Desde las aguas de Motril', 'From the waters of Motril'), season: L('PV 2026', 'SS 2026'), theme: 'navy',
      logo: 'assets/thalaira-logo.png', cover: 'assets/opt/home/thalaira-agua.jpg', reveal: 'assets/opt/thalaira/moodboard-main.jpg', count: 10,
      moodboard: 'assets/opt/thalaira/moodboard-portfolio.jpg', renders: [1,2,3,4,5].map(i => `img/thalaira-render-${i}.jpg`), runway: 'XII Pasarela Solidaria Cruz Roja Granada 2025',
      editorial: [{ n: '01', name: 'Galene', imgs: ['img/IMG-20251215-WA0039.jpg', 'img/IMG-20251215-WA0093.jpg', 'img/IMG-20251215-WA0124.jpg', 'img/IMG-20251215-WA0125.jpg', 'img/IMG-20251215-WA0161.jpg'] }, { n: '02', name: 'Ondine', imgs: ['img/IMG-20251215-WA0153.jpg', 'img/IMG-20251215-WA0157.jpg', 'img/IMG-20251215-WA0162.jpg', 'img/IMG-20251215-WA0164.jpg', 'img/IMG-20251215-WA0183.jpg', 'img/IMG-20251215-WA0185.jpg'] }, { n: '03', name: 'Cauda', imgs: ['img/IMG-20251215-WA0141.jpg', 'img/IMG-20251215-WA0144.jpg', 'img/IMG-20251215-WA0173.jpg'] }, { n: '05', name: 'Halios', imgs: ['img/IMG-20251215-WA0072.jpg', 'img/IMG-20251215-WA0152.jpg', 'img/IMG-20251215-WA0155.jpg', 'img/IMG-20251215-WA0163.jpg', 'img/IMG-20251215-WA0171.jpg', 'img/IMG-20251219-WA0029.jpg', 'img/IMG-20251219-WA0060.jpg'] }, { n: '06', name: 'Nausicaa', imgs: ['img/IMG-20251215-WA0146.jpg'] }, { n: '10', name: 'Thalassa', imgs: ['img/IMG-20251215-WA0116.jpg', 'img/IMG-20251215-WA0154.jpg', 'img/IMG-20251215-WA0169.jpg', 'img/IMG-20251215-WA0172.jpg', 'img/IMG-20251215-WA0178.jpg', 'img/IMG-20251215-WA0179.jpg'] }, { name: L('Mixto', 'Mixed'), imgs: ['img/IMG-20251215-WA0087.jpg', 'img/IMG-20251215-WA0097.jpg', 'img/IMG-20251215-WA0099.jpg', 'img/IMG-20251215-WA0122.jpg', 'img/IMG-20251215-WA0130.jpg', 'img/IMG-20251215-WA0135.jpg', 'img/IMG-20251215-WA0139.jpg', 'img/IMG-20251215-WA0142-ca6a7d52.jpg', 'img/IMG-20251215-WA0150.jpg', 'img/IMG-20251215-WA0151.jpg', 'img/IMG-20251215-WA0156.jpg', 'img/IMG-20251215-WA0158.jpg', 'img/IMG-20251215-WA0159.jpg', 'img/IMG-20251215-WA0165.jpg', 'img/IMG-20251215-WA0166.jpg', 'img/IMG-20251215-WA0168.jpg', 'img/IMG-20251215-WA0170.jpg', 'img/IMG-20251215-WA0174.jpg', 'img/IMG-20251215-WA0175.jpg', 'img/IMG-20251215-WA0177.jpg', 'img/IMG-20251215-WA0180.jpg', 'img/IMG-20251215-WA0181.jpg', 'img/IMG-20251215-WA0182.jpg', 'img/IMG-20251215-WA0184.jpg'] }],
      runwayImgs: [{ src: 'assets/thalaira-runway/look-1-thalassa.mp4', video: true }, { src: 'img/thalaira-runway-run-1.jpg', h: true }, { src: 'img/thalaira-runway-run-3.jpg', h: true }, { src: 'img/thalaira-runway-run-7.jpg', h: true }, 'img/thalaira-runway-run-2.jpg', 'img/thalaira-runway-run-4.jpg', 'img/thalaira-runway-run-5.jpg', 'img/thalaira-runway-run-6.jpg'],
      intro: L('Esta colección nace desde las aguas de Motril, el lugar donde crecí y al que siempre vuelvo, incluso cuando diseño. Por eso, esta vez hemos querido sumergirnos, literalmente, en el mar que baña sus costas, y observar sus formas y texturas. Los peces se han vuelto los protagonistas de esta colección.', 'This collection is born from the waters of Motril, the place where I grew up and always return to, even when I design. That is why this time we wanted to dive, literally, into the sea that bathes its shores and observe its forms and textures. Fish have become the protagonists of this collection.'),
      body: L('Nuestro punto de partida siempre es estructural, con líneas limpias y cortes marcados. Pero en esta colección, esa base sólida se abre al movimiento. Y como en cada colección de By QiYo, hacemos cada uno de estos looks celebrando la autenticidad y la energía vital que dan sentido a cada prenda.', 'Our starting point is always structural, with clean lines and sharp cuts. But in this collection, that solid base opens up to movement. And as in every By QiYo collection, we make each of these looks celebrating the authenticity and vital energy that give meaning to each garment.'),
      figs: thNames.map((name, i) => ({ n: pad(i + 1), name, img: `figurines/thalaira/${name.toLowerCase()}-delantero.jpg`, back: `figurines/thalaira/${name.toLowerCase()}-espalda.jpg`, show: thShow.includes(name) })),
      materials: [
        { img: 'img/thalaira-moodboard-fondo.jpg', label: L('Fondo marino', 'Seabed') },
        { img: 'assets/opt/thalaira/puerto-motril.jpg', label: L('Puerto de Motril', 'Port of Motril') },
        { img: 'assets/opt/thalaira/moodboard.jpg', label: L('Moodboard', 'Moodboard') },
      ],
      sheet: [
        [L('Temporada', 'Season'), L('Primavera / Verano 2026', 'Spring / Summer 2026')],
        [L('Pasarela', 'Runway'), L('4 looks femeninos y 2 masculinos', '4 womenswear and 2 menswear looks')],
        [L('Tejidos', 'Fabrics'), L('Koshibo azul marino, crep de licra celeste, gasa cristal celeste y forros de acetato', 'Navy koshibo, sky-blue lycra crêpe, sky-blue crystal gauze and acetate linings')],
        [L('Paleta', 'Palette'), L('Azul cielo, azul turquesa oscuro, azul marino', 'Sky blue, dark turquoise, navy blue')],
        [L('Presentada', 'Shown'), 'XII Pasarela Solidaria Cruz Roja Granada 2025'],
      ],
    },
  ],
  news: [
    { tag: 'Rebirth', date: L('PV 2027', 'SS 2027'), slot: 'web-news-1', src: 'assets/opt/home/news-rebirth.jpg', to: ['collection', 'rebirth'], t: L('Rebirth: The Shape of Plastic', 'Rebirth: The Shape of Plastic') },
    { tag: '3D Lab', date: L('2026', '2026'), slot: 'web-news-2', src: 'assets/opt/bolso-blanconegro-detalle.jpg', to: ['labcat', 'bolsos'], t: L('Nuevo bolso impreso en 3D', 'New 3D-printed bag') },
    { tag: 'Thalaira', date: L('2025', '2025'), slot: 'web-news-3', src: 'img/home-news-thalaira-desfile.jpg', to: ['entry', 'cruzroja-2025'], t: L('XII Pasarela Solidaria Cruz Roja Granada', 'XII Pasarela Solidaria Cruz Roja Granada') },
  ],
  projects: [
    { id: 'agora', name: 'Americana Ágora', year: L('2º Moda', '2nd year Fashion'), kind: L('Proyecto de Moda I', 'Fashion Project I'), card: 'assets/opt/home/tile-agora.jpg',
      d: L('Americana inspirada en la película Ágora (Alejandro Amenábar, 2009) y en la figura de Hipatia de Alejandría.', 'A blazer inspired by the film Agora (Alejandro Amenábar, 2009) and the figure of Hypatia of Alexandria.'),
      cover: 'assets/opt/home/tile-agora.jpg',
      film: { t: L('Sobre la película', 'About the film'), items: [L('Película de 2009, dirigida por Alejandro Amenábar', '2009 film directed by Alejandro Amenábar'), L('Rachel Weisz, Oscar Isaac y Max Minghella', 'Rachel Weisz, Oscar Isaac and Max Minghella'), L('Drama histórico galardonado con 7 Goyas', 'Historical drama, winner of 7 Goya awards')], themes: [L('Lucha por el conocimiento', 'The struggle for knowledge'), L('Conflicto religioso', 'Religious conflict'), L('Papel de la mujer', 'The role of women'), L('Intolerancia y violencia', 'Intolerance and violence'), L('Poder y política', 'Power and politics')] },
      research: [
        { t: L('Hipatia de Alejandría', 'Hypatia of Alexandria'), d: L('Filósofa, científica, matemática, astrónoma, maestra y custodia de la Biblioteca de Alejandría.', 'Philosopher, scientist, mathematician, astronomer, teacher and keeper of the Library of Alexandria.') },
        { t: L('Biblioteca de Alejandría', 'Library of Alexandria'), d: L('Su objetivo era compilar todo el conocimiento humano. Grandes filósofos la custodiaron; fue la biblioteca más grande del mundo.', 'Its aim was to gather all human knowledge. Great philosophers kept it; it was the largest library in the world.') },
        { t: L('Conflicto religioso', 'Religious conflict'), d: L('Llegada de la religión cristiana, pérdida de los antiguos dioses, el conocimiento como forma de poder y la limitación del progreso científico.', 'The arrival of Christianity, the loss of the old gods, knowledge as a form of power and the limiting of scientific progress.') },
        { t: L('Vestimenta de la época', 'Dress of the period'), d: L('Lino, lana y seda. Colores terrosos, azul, amarillo y rojo. La ropa como símbolo de estatus social e indicador del papel en la sociedad.', 'Linen, wool and silk. Earthy colours, blue, yellow and red. Clothing as a symbol of social status and of one\'s role in society.') }
      ],
      inspo: 'assets/opt/agora/hipatia.jpg',
      sketch: 'assets/opt/agora/p11-0.webp',
      idea: [L('Papiro antiguo desgastado', 'Worn ancient papyrus'), L('Colores terrosos, con los escritos en marrón oscuro', 'Earthy colours, with the writing in dark brown'), L('Mangas unidas por cordones, como un papiro', 'Sleeves joined with cords, like a papyrus'), L('Zonas quemadas en referencia al incendio', 'Burnt areas referring to the fire'), L('Apuntes matemáticos y astronómicos', 'Mathematical and astronomical notes')],
      steps: [L('Descoser mangas', 'Unpick the sleeves'), L('Modificar y coser', 'Alter and sew'), L('Tintar la americana', 'Dye the blazer'), L('Envejecer la americana', 'Age the blazer'), L('Dibujar ilustraciones', 'Draw the illustrations'), L('Rotular todo', 'Letter everything'), L('Hacer ojales', 'Make the eyelets'), L('Atar las mangas', 'Tie the sleeves'), L('Quemar bordes', 'Burn the edges')],
      process: ['img/agora-p12-0.jpg', 'img/agora-p12-1.jpg', 'assets/opt/agora/p12-2.jpg', 'assets/opt/agora/p12-3.jpg', 'assets/opt/agora/p12-4.jpg', 'assets/opt/agora/p12-5.jpg', 'assets/opt/agora/p13-0.jpg', 'assets/opt/agora/p13-1.jpg', 'assets/opt/agora/p13-2.jpg'],
      final: ['assets/opt/agora/look-1.jpg', 'assets/opt/agora/look-2.jpg', 'assets/opt/agora/look-3.jpg', 'assets/opt/home/tile-agora.jpg', 'assets/opt/agora/p14-1.webp', 'assets/opt/agora/p14-0.webp'],
      why: [L('Mangas separadas, atadas con cuerda: simulan pergaminos.', 'Separate sleeves tied with cord: they evoke scrolls.'), L('Zonas quemadas: simbolizan la pérdida del conocimiento y la involución de la humanidad.', 'Burnt areas: they symbolise the loss of knowledge and the regression of humanity.'), L('Apuntes matemáticos: tema principal de la película.', 'Mathematical notes: the main theme of the film.'), L('Los colores se corresponden con los escritos de la época.', 'The colours match the writings of the period.')] },
    { id: 'universitarios', name: 'Proyectos universitarios', year: '', card: 'assets/opt/uni/corse-impreso.jpg', kind: L('Proyectos', 'Projects'), specs: [{ id: 'sastreria', src: 'assets/opt/uni/sastreria.jpg', t: L('Sastrería y traje', 'Tailoring and suits') }, { id: 'corseteria', src: 'assets/opt/uni/corseteria.jpg', t: L('Corsetería y lencería', 'Corsetry and lingerie') }, { id: 'bebe', src: 'assets/opt/uni/bebe.jpg', t: L('Ropa de bebé · 2º Moda', 'Babywear · 2nd year Fashion') }, { id: 'moulage', src: 'assets/opt/uni/moulage.jpg', t: L('Modelaje sobre maniquí', 'Draping on the stand') }], works: [{ id: 'corse-impreso', src: 'assets/opt/uni/corse-impreso.jpg', t: L('Corsé impreso en 3D', '3D-printed corset') }, { id: 'vestido-metal', src: 'assets/opt/uni/vestido-metal.jpg', t: L('Vestido de metal', 'Metal dress') }], d: L('Trabajos realizados durante la formación universitaria en Moda.', 'Work produced during university fashion studies.') },
  ],
  journal: [
    { id: 'cruzroja-2025', tag: L('Sept. 2025', 'Sept. 2025'), slot: 'web-j-cr25', img: 'img/home-cruzroja-2025-hospital-real.jpg',
      title: L('XII Pasarela Solidaria Cruz Roja Granada', 'XII Cruz Roja Granada Charity Runway'),
      body: L('Thalaira desfila en la XII Pasarela Solidaria Cruz Roja Granada con 4 looks femeninos y 2 masculinos.', 'Thalaira shows at the XII Cruz Roja Granada Charity Runway with 4 womenswear and 2 menswear looks.') },
    { id: 'ande-2025', img: 'assets/opt/home/ande-2025.jpg', tag: L('Sept. 2025', 'Sept. 2025'), slot: 'web-j-ande25',
      title: L('Pasarela ANDE en el Parque de las Ciencias', 'ANDE runway at the Parque de las Ciencias'),
      body: L('By QiYo en la pasarela ANDE celebrada en el Parque de las Ciencias de Granada.', 'By QiYo at the ANDE runway held at the Parque de las Ciencias in Granada.') },
    { id: 'cruzroja-2026', tag: L('Sept. 2026', 'Sept. 2026'), img: 'img/home-news-thalaira-desfile.jpg', slot: 'web-j-cr26',
      title: L('Pasarela Solidaria Cruz Roja Granada', 'Cruz Roja Granada Charity Runway'),
      body: L('By QiYo vuelve a la Pasarela Solidaria Cruz Roja Granada.', 'By QiYo returns to the Cruz Roja Granada Charity Runway.') },
    { id: 'navidad-madrid-2026', img: 'assets/opt/home/navidad-madrid-2026.jpg', tag: L('Dic. 2026 · Próximamente', 'Dec. 2026 · Coming soon'), slot: 'web-j-nav26',
      title: L('Viste la Navidad en Madrid', 'Viste la Navidad, Madrid'),
      body: L('Próximamente: By QiYo participará en Viste la Navidad en Madrid.', 'Coming soon: By QiYo will take part in Viste la Navidad in Madrid.') },
  ],
  about: {
    carmen: L('Diseñadora y fundadora de By QiYo. Grado en Diseño de Moda, Estación Diseño (2023-27). Granada.', 'Designer and founder of By QiYo. Degree in Fashion Design, Estación Diseño (2023-27). Granada.'),
    lead: L('Carmen Álvarez Feriche', 'Carmen Álvarez Feriche'),
    body: L('El objetivo de By QiYo es entender la moda más bien desde una perspectiva artística y personal, buscando no solo vestir sino transmitir ideas y emociones. Se caracteriza sobre todo por la dualidad entre la rigidez y la fluidez, y el interés por la tecnología a la vez que por la reutilización, el reciclaje y el aprovechamiento.', 'By QiYo aims to understand fashion from an artistic and personal perspective, seeking not only to dress but to convey ideas and emotions. It is characterised above all by the duality between rigidity and fluidity, and an interest in technology as well as in reuse, recycling and making the most of materials.'),
    pillars: [L('Identidad creativa y estética diferenciada', 'Distinct creative and aesthetic identity'), L('Dominio de técnicas artesanales y digitales', 'Command of craft and digital techniques'), L('Capacidad de desarrollar colecciones conceptuales completas', 'Ability to develop complete conceptual collections'), L('Experimentación con impresión 3D y nuevos materiales', 'Experimentation with 3D printing and new materials'), L('Flexibilidad para producir piezas personalizadas y limitadas', 'Flexibility to produce personalised, limited pieces')],
    cv: {
      langs: [{ t: L('Español', 'Spanish'), l: L('Nativo', 'Native') }, { t: L('Inglés', 'English'), l: L('B2/C1 hablado', 'B2/C1 spoken') }],
      tools: [
        { g: 'Adobe', items: ['Illustrator', 'Photoshop', 'InDesign'] },
        { g: L('Diseño 3D', '3D design'), items: ['CLO3D'] },
        { g: L('Diseño y ofimática', 'Design and office'), items: ['Canva', 'Excel'] },
        { g: L('Inteligencia artificial', 'Artificial intelligence'), items: ['Claude', 'OpenAI'] },
      ],
    },
    path: [
      { y: '2020-24', t: L('Pequeños diseños y proyectos personales', 'Small designs and personal projects'), d: L('', '') },
      { y: '2023-27', t: L('Grado en Diseño de Moda', 'Degree in Fashion Design'), d: L('Estación Diseño', 'Estación Diseño') },
      { y: '2025', t: L('Pasarela “Goya” televisada', 'Televised “Goya” runway'), d: L('Mae West Granada', 'Mae West Granada') },
      { y: '2025', t: L('Exposición de Chaqueta', 'Jacket exhibition'), d: L('Kinepolis, Pulianas', 'Kinepolis, Pulianas') },
      { y: '2025', t: L('Exposición de Chaqueta', 'Jacket exhibition'), d: L('Museo de la Piel, Ubrique (Cádiz)', 'Museo de la Piel, Ubrique (Cádiz)') },
      { y: '2025', t: L('XII Pasarela Solidaria Cruz Roja Granada', 'XII Pasarela Solidaria Cruz Roja Granada'), d: L('Thalaira', 'Thalaira') },
      { y: '2025', t: L('Pasarela ANDE', 'ANDE runway'), d: L('Parque de las Ciencias, Granada', 'Parque de las Ciencias, Granada') },
      { y: '2026', t: L('Pasarela Solidaria Cruz Roja Granada', 'Cruz Roja Granada Charity Runway'), d: L('By QiYo', 'By QiYo') },
      { y: '2026', t: L('Viste la Navidad', 'Viste la Navidad'), d: L('Madrid · próximamente', 'Madrid · coming soon') },
      { y: '2027', t: L('Rebirth, PV 2027', 'Rebirth, SS 2027'), d: L('Colección en desarrollo', 'Collection in progress') },
    ],
  },
  contact: {
    email: 'by.qiyo@gmail.com', instagram: '@by.qiyo', instagramUrl: 'https://www.instagram.com/by.qiyo/',
    reasons: [L('Prensa', 'Press'), L('Colaboración', 'Collaboration'), L('Pasarela / exposición', 'Runway / exhibition'), L('Confección a medida', 'Made to measure'), L('Otro', 'Other')],
  },
};
})();

// Taller: una fila (carrusel) por grupo. Añade fotos nuevas al principio de cada lista.
QY.taller = [
  { id: 'thalaira', t: { es: 'Thalaira', en: 'Thalaira' }, imgs: ['assets/opt/taller/t-sg83.jpg', 'assets/opt/taller/t-sg78.jpg', 'assets/opt/taller/t-sg80.jpg', 'assets/opt/taller/t-sg84.jpg', 'assets/opt/taller/t-sg79.jpg', 'assets/opt/taller/t-sg81.jpg', 'assets/opt/taller/t-sg82.jpg', 'img/taller-t1.jpg', 'img/taller-t4.jpg', 'assets/opt/taller/t3.jpg', 'img/taller-t2.jpg', 'assets/opt/taller/t0.jpg'] },
  { id: 'rebirth', t: { es: 'Rebirth', en: 'Rebirth' }, imgs: ['assets/opt/taller/r-sg50.jpg', 'assets/opt/taller/r-sg59.jpg', 'assets/opt/taller/r1.jpg', 'assets/opt/taller/r2.jpg', 'assets/opt/taller/r3.jpg', 'assets/opt/taller/r4.jpg', 'assets/opt/taller/r5.jpg', 'assets/opt/taller/r6.jpg', 'assets/opt/taller/r7.jpg'] },
  { id: 'impresion-3d', t: { es: 'Impresión 3D', en: '3D printing' }, imgs: ['assets/opt/taller/p1.jpg', 'assets/opt/taller/p2.jpg', 'assets/opt/taller/p3.jpg', 'img/taller-p4.jpg', 'assets/opt/taller/p5.jpg', 'assets/opt/taller/p6.jpg', 'img/taller-p7.jpg', 'assets/opt/taller/p8.jpg', 'assets/opt/taller/p9.jpg', 'assets/opt/taller/p10.jpg', 'assets/opt/taller/p11.jpg'] },
];
