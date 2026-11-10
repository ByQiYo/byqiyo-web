window.LAB = {
  domain: 'qiyolab.com',
  tipos: [
    { id: 'bolsos', es: 'Bolsos', en: 'Bags' },
    { id: 'accesorios', es: 'Accesorios', en: 'Accessories' },
    { id: 'textil', es: 'Laboratorio textil', en: 'Textile lab', gallery: ['img/lab-textil-tul-impreso.jpg', 'assets/opt/lab/textil-1.jpg', 'assets/opt/lab/textil-2.jpg', 'assets/opt/lab/textil-3.jpg', 'assets/opt/lab/textil-4.jpg', 'assets/opt/bolso-blanconegro-detalle.jpg'] }
  ],
  states: {
    disponible: { es: 'Disponible', en: 'Available' },
    pedido: { es: 'Bajo pedido', en: 'Made to order' },
    archivo: { es: 'Pieza de archivo', en: 'Archive piece' }
  },
  pieces: [
    { id: 'pliegue-blanco', n: '001', tipo: 'bolsos', col: 'Rebirth', state: 'pedido', price: 220,
      es: { t: 'Bolso Acordeón', v: 'Blanco', x: 'Caja rígida de pliegues verticales impresa en una sola pieza. El asa arqueada y el colgante con la Q se imprimen aparte y se montan con anillas metálicas.', mat: 'PETG reciclado blanco · anillas de acero' },
      en: { t: 'Accordion Bag', v: 'White', x: 'A rigid box of vertical pleats printed as a single piece. The arched handle and Q charm are printed separately and joined with steel rings.', mat: 'White recycled PETG · steel rings' },
      dim: '22 × 16 × 9 cm', w: '310 g', h: '31 h',
      img: 'assets/opt/bolso-negro-mano.jpg', gal: ['assets/opt/bolso-negro-mano.jpg', 'img/bolso-02.jpg', 'assets/opt/bolso-blanco-mano.jpg'] },
    { id: 'rebirth-01', n: '002', tipo: 'bolsos', col: 'Rebirth', state: 'archivo', price: null,
      es: { t: 'Bolso Rebirth 001', v: 'Tul negro', x: 'Los motivos se imprimen directamente sobre el tul: el bolso conserva la caída del textil y gana el relieve del filamento. La boquilla se imprime aparte y cierra la pieza como estructura.', mat: 'PLA sobre tul · boquilla en PETG-R' },
      en: { t: 'Rebirth Bag 001', v: 'Black tulle', x: 'The motifs are printed straight onto the tulle, so the bag keeps the drape of the textile and gains the relief of the filament. The frame is printed separately and closes the piece as structure.', mat: 'PLA on tulle · PETG-R frame' },
      dim: '28 × 24 cm', w: '240 g', h: '18 h',
      img: 'assets/opt/bolso-blanconegro-detalle.jpg', gal: ['assets/opt/bolso-blanconegro-detalle.jpg', 'img/bolso-01.jpg', 'assets/opt/bolso-blanco-mano.jpg'] },
    { id: 'pendientes-rebirth-blanco', n: '003', tipo: 'accesorios', col: 'Rebirth', state: 'pedido', price: null, cover: true,
      es: { t: 'Pendientes Rebirth', v: 'Blanco · relieve', x: 'Pendientes impresos en 3D de la colección Rebirth.', mat: 'PLA impreso' },
      en: { t: 'Rebirth Earrings', v: 'White · relief', x: '3D-printed earrings from the Rebirth collection.', mat: 'Printed PLA' },
      dim: '—', w: '—', h: '—', img: 'assets/opt/lab/pendientes-rebirth-blanco.jpg', gal: ['assets/opt/lab/pendientes-rebirth-blanco.jpg'] },
    { id: 'pendientes-rebirth-amarillo', n: '004', tipo: 'accesorios', col: 'Rebirth', state: 'pedido', price: null,
      es: { t: 'Pendientes Rebirth', v: 'Amarillo · aro oval', x: 'Pendientes impresos en 3D de la colección Rebirth.', mat: 'PLA impreso' },
      en: { t: 'Rebirth Earrings', v: 'Yellow · oval hoop', x: '3D-printed earrings from the Rebirth collection.', mat: 'Printed PLA' },
      dim: '—', w: '—', h: '—', img: 'assets/opt/lab/pendientes-rebirth-amarillo.jpg', gal: ['assets/opt/lab/pendientes-rebirth-amarillo.jpg'] },
    { id: 'pendientes-rebirth-rosa', n: '005', tipo: 'accesorios', col: 'Rebirth', state: 'pedido', price: null,
      es: { t: 'Pendientes Rebirth', v: 'Rosa y negro · radial', x: 'Pendientes impresos en 3D de la colección Rebirth.', mat: 'PLA impreso' },
      en: { t: 'Rebirth Earrings', v: 'Pink and black · radial', x: '3D-printed earrings from the Rebirth collection.', mat: 'Printed PLA' },
      dim: '—', w: '—', h: '—', img: 'assets/opt/lab/pendientes-rebirth-rosa.jpg', gal: ['assets/opt/lab/pendientes-rebirth-rosa.jpg'] },
    { id: 'rebirth-002', n: '006', tipo: 'bolsos', col: 'Rebirth', state: 'pedido', price: null,
      es: { t: 'Bolso Rebirth 002', v: 'Disponible en dos colores', x: 'Bolso de mano rígido con relieve impreso y asa superior, de la colección Rebirth.', mat: 'PLA impreso' },
      en: { t: 'Rebirth Bag 002', v: 'Available in two colours', x: 'A rigid handbag with printed relief and top handle, from the Rebirth collection.', mat: 'Printed PLA' },
      dim: '—', w: '—', h: '—',
      img: 'assets/opt/bolso-rebirth-002.jpg', gal: ['assets/opt/bolso-rebirth-002.jpg'] }
  ],
  materials: [
    { n: 'PETG-R', es: { name: 'PETG reciclado', o: 'Envases de PET recuperados y transformados en filamento.', p: 'Resistente, flexible en láminas finas, admite transparencia.', u: 'Estructuras, boquillas de bolso, piezas que soportan peso.' }, en: { name: 'Recycled PETG', o: 'Recovered PET containers turned into filament.', p: 'Strong, flexible in thin sheets, allows transparency.', u: 'Structures, bag frames, load-bearing parts.' } },
    { n: 'PLA', es: { name: 'Ácido poliláctico', o: 'Polímero de origen vegetal (almidón de maíz o caña).', p: 'Rígido, acabado mate, mucha definición en el detalle.', u: 'Relieves, ornamento y texturas impresas sobre tejido.' }, en: { name: 'Polylactic acid', o: 'Plant-based polymer (corn or cane starch).', p: 'Rigid, matte finish, high detail definition.', u: 'Reliefs, ornament and textures printed on fabric.' } },
    { n: 'Tejido', en_n: 'Textile', es: { name: 'Impresión sobre tejido', o: 'Tul, malla o gasa fijados a la cama de impresión.', p: 'El filamento se funde con la trama: el textil sigue siendo flexible.', u: 'Superficies de bolsos y paneles de prendas.' }, en: { name: 'Printing on fabric', o: 'Tulle, mesh or chiffon fixed to the print bed.', p: 'The filament fuses with the weave: the textile stays flexible.', u: 'Bag surfaces and garment panels.' } }
  ],
  journal: [
    { id: 'boquilla', d: '2026-09-18', img: 'assets/opt/bolso-negro-mano.jpg', piece: 'rebirth-01',
      es: { t: 'Imprimir una boquilla', x: 'Notas sobre cómo una pieza rígida sustituye al herraje metálico.', b: ['La boquilla del Bolso Rebirth 01 es la parte que más pruebas ha necesitado. Tiene que ser lo bastante rígida para sostener el peso del tul con relieve y lo bastante fina para no parecer un bloque.', 'Después de varias versiones, la solución fue imprimirla en PETG reciclado con un relleno alto y paredes de 1,2 mm. La pieza se atornilla al textil por dentro: no hay pegamento.'] },
      en: { t: 'Printing a frame', x: 'Notes on how a rigid part replaces metal hardware.', b: ['The frame of Rebirth Bag 01 is the part that needed the most tests. It has to be rigid enough to carry the weight of the relief tulle and thin enough not to look like a block.', 'After several versions, the answer was to print it in recycled PETG with high infill and 1.2 mm walls. It is screwed to the textile from inside: no glue.'] } },
    { id: 'relieves', d: '2026-07-02', img: 'assets/opt/lab/pendientes-rebirth-blanco.jpg', piece: 'relieves',
      es: { t: 'Cuarenta pruebas de textura', x: 'Un archivo de relieves antes de llegar al tejido.', b: ['Cada textura del laboratorio empieza como un panel de prueba sobre la mesa. Algunas imitan coral, otras arena mojada; todas sirven para medir cuánto relieve aguanta un tejido antes de perder caída.', 'Los paneles que funcionan pasan al catálogo y se pueden encargar en otro color o medida.'] },
      en: { t: 'Forty texture tests', x: 'An archive of reliefs before they reach the fabric.', b: ['Every texture in the lab starts as a test panel on the table. Some echo coral, others wet sand; all of them measure how much relief a fabric can take before it loses its drape.', 'The panels that work go into the catalogue and can be ordered in another colour or size.'] } },
    { id: 'pasarela', d: '2026-05-21', img: 'img/home-cruzroja-2025-hospital-real.jpg', piece: null,
      es: { t: 'Rebirth en pasarela', x: 'Las piezas del laboratorio, por primera vez en movimiento.', b: ['En el desfile de Rebirth las piezas impresas salieron del taller y se vieron en movimiento. Fue la prueba definitiva: el relieve tenía que moverse con la prenda, no contra ella.', 'Varias de esas piezas forman hoy el archivo del laboratorio.'] },
      en: { t: 'Rebirth on the runway', x: 'Lab pieces, in motion for the first time.', b: ['At the Rebirth show the printed pieces left the studio and were seen in motion. It was the real test: the relief had to move with the garment, not against it.', 'Several of those pieces now make up the lab archive.'] } }
  ]
};
