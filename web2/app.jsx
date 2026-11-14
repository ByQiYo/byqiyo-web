const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroSecs": 6,
  "showFigs": true,
  "cursorReveal": true,
  "mobStrip": "foco"
}/*EDITMODE-END*/;
const ROUTE_KEY = 'qy-web2-route';
// Historial del navegador: cada página tiene su dirección (#/coleccion/rebirth…), así el botón
// «atrás» vuelve a la página anterior de la web en lugar de salir de ella.
const QY_PAGES = ['home', 'collections', 'collection', 'about', 'journal', 'entry', 'contact', 'projects', 'project', 'lab', 'labcat', 'labsub', 'process', 'sculptor', 'search', 'legal'];
const routeToHash = (page, param) => page === 'home' ? '' : '#/' + page + (param ? '/' + encodeURIComponent(param) : '');
const hashToRoute = () => {
  const m = location.hash.match(/^#\/([a-z]+)(?:\/(.+))?$/);
  return m && QY_PAGES.includes(m[1]) ? { page: m[1], param: m[2] ? decodeURIComponent(m[2]) : null } : { page: 'home', param: null };
};
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const saved = (() => { try { return JSON.parse(localStorage.getItem(ROUTE_KEY)) || {}; } catch (e) { return {}; } })();
  // Al abrir la web se empieza en Inicio (salvo que el enlace apunte a una página concreta);
  // solo se recuerdan el idioma y el modo oscuro.
  const [route, setRoute] = useState(hashToRoute);
  const [lang, setLang] = useState(saved.lang || 'es');
  const [dark, setDark] = useState(!!saved.dark);
  const [fading, setFading] = useState(false);
  useEffect(() => { localStorage.setItem(ROUTE_KEY, JSON.stringify({ ...route, lang, dark })); document.documentElement.lang = lang; document.body.classList.toggle('qy-dark', dark); }, [route, lang, dark]);
  const go = (page, param = null) => {
    if (page === 'runway') { const id = param || 'thalaira'; const jump = () => { const el = document.getElementById('pasarela'); if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }); }; if (route.page === 'collection' && route.param === id) { jump(); return; } history.pushState(null, '', routeToHash('collection', id)); setFading(true); setTimeout(() => { setRoute({ page: 'collection', param: id }); setFading(false); setTimeout(jump, 400); }, 280); return; }
    if (page === route.page && param === route.param) { scrollTo({ top: 0, behavior: 'smooth' }); return; }
    setFading(true);
    history.pushState(null, '', routeToHash(page, param) || location.pathname);
    setTimeout(() => { setRoute({ page, param }); scrollTo(0, 0); setFading(false); }, 280);
  };
  // Botones atrás/adelante del navegador
  useEffect(() => {
    const onPop = () => { setFading(true); setTimeout(() => { setRoute(hashToRoute()); scrollTo(0, 0); setFading(false); }, 200); };
    addEventListener('popstate', onPop);
    return () => removeEventListener('popstate', onPop);
  }, []);
  window.__qyGo = (page, param) => { setRoute({ page, param: param || null }); scrollTo(0, 0); };
  const Page = { home: Home, collections: Collections, collection: Collection, about: About, journal: Journal, entry: Entry, contact: Contact, projects: Projects, project: Project, lab: Lab, labcat: LabCat, labsub: LabSub, process: Process, runway: Runway, sculptor: Sculptor, search: Search, legal: Legal, notfound: NotFound }[route.page] || NotFound;
  return (
    <AppCtx.Provider value={{ mobStrip: new URLSearchParams(location.search).get('strip') || t.mobStrip, lang, setLang, dark, setDark, go, page: route.page, tweaks: t }}>
      <RevealLayer enabled={t.cursorReveal}>
        <Nav />
        <main key={route.page + (route.param || '')} style={{ opacity: fading ? 0 : 1, transition: 'opacity .28s ease' }}><Page id={route.param} /></main>
      </RevealLayer>
      <TweaksPanel>
        <TweakSection label="Portada" />
        <TweakSlider label="Cambio de foto" value={t.heroSecs} min={3} max={12} step={1} unit="s" onChange={v => setTweak('heroSecs', v)} />
        <TweakSection label="Colecciones" />
        <TweakToggle label="Mostrar figurines actuales" value={t.showFigs} onChange={v => setTweak('showFigs', v)} />
        <TweakToggle label="Imagen al pasar el cursor" value={t.cursorReveal} onChange={v => setTweak('cursorReveal', v)} />
        <TweakSection label="Inicio en móvil · secciones" />
        <TweakRadio label="Variante" value={t.mobStrip} options={[{ value: 'foco', label: 'A · Foco' }, { value: 'acordeon', label: 'B · Acordeón' }, { value: 'carrusel', label: 'C · Carrusel' }]} onChange={v => setTweak('mobStrip', v)} />
      </TweaksPanel>
    </AppCtx.Provider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
