// Interfaz tipo app para móvil y tablet vertical (≤1024px)
const APP_BP = 1024;
function useApp2() { return useWide() <= APP_BP; }
const TAB_OF = { home: 'home', collections: 'collections', collection: 'collections', sculptor: 'collections', lab: 'lab', labcat: 'lab', labsub: 'lab', journal: 'journal', entry: 'journal' };

function FitImg({ src, pos, fit, alt = '' }) {
  if (fit === 'contain') return (
    <div className="qy-fit">
      <img loading="lazy" decoding="async" className="qy-fit-bg" src={src} alt="" aria-hidden="true" />
      <img loading="lazy" decoding="async" className="qy-fit-c" src={src} alt={alt} />
    </div>
  );
  return <div className="qy-fit"><img loading="lazy" decoding="async" className="qy-fit-cover" src={src} alt={alt} style={{ objectPosition: pos || 'center' }} /></div>;
}

function MobileNav() {
  const { lang, go, page } = useApp();
  const [more, setMore] = useState(false);
  const [sOpen, setSOpen] = useState(false);
  const tab = TAB_OF[page] || 'more';
  const es = lang === 'es';
  const tabs = [['home', es ? 'Inicio' : 'Home'], ['collections', es ? 'Colecciones' : 'Collections'], ['lab', '3D Lab'], ['journal', es ? 'Diario' : 'Journal'], ['more', es ? 'Más' : 'More']];
  const nav = (...to) => { setMore(false); go(...to); };
  useEffect(() => { document.body.style.overflow = more ? 'hidden' : ''; }, [more]);
  return (
    <>
      <header className="qy-abar">
        <button className="qy-logo" onClick={() => nav('home')} aria-label="By QiYo"><img loading="lazy" decoding="async" src="assets/byqiyo-logo.png" alt="By QiYo" /></button>
        <SearchButton onOpen={() => { setMore(false); setSOpen(true); }} />
      </header>
      {sOpen && <SearchOverlay onClose={() => setSOpen(false)} />}
      <nav className="qy-tabbar">
        {tabs.map(([k, l]) => <button key={k} className={(more ? k === 'more' : tab === k) ? 'on' : ''} onClick={() => k === 'more' ? setMore(!more) : nav(k)}><i></i><span>{l}</span></button>)}
      </nav>
      {more && (
        <div className="qy-sheet-ov" onClick={() => setMore(false)}>
          <div className="qy-sheet" onClick={e => e.stopPropagation()}>
            <span className="qy-sheet-grip"></span>
            {[['projects'], ['process'], ['about'], ['contact']].map(([k]) => <button key={k} className="qy-sheet-l" onClick={() => nav(k)}>{tr(QY.ui.nav[k], lang)}<span>→</span></button>)}
            <div className="qy-sheet-sub">
              <span className="qy-eyebrow qy-mute">{es ? 'Colecciones' : 'Collections'}</span>
              <div>{QY.collections.map(c => <button key={c.id} onClick={() => nav('collection', c.id)}>{c.name}</button>)}{QY.collections.map(c => <button key={'r' + c.id} onClick={() => nav('runway', c.id)}>{tr(QY.ui.nav.runway, lang)} {c.name}</button>)}</div>
            </div>
            <div className="qy-sheet-row"><LangSwitch /><ModeSwitch /><a href={QY.contact.instagramUrl} target="_blank" rel="noopener">Instagram ↗</a></div>
            <div className="qy-sheet-legal">{LEGAL_PAGES.map(p => <button key={p} onClick={() => nav('legal', p)}>{tr(LEGAL_T[p], lang)}</button>)}</div>
          </div>
        </div>
      )}
    </>
  );
}

function HeroStories() {
  const { lang, go, tweaks } = useApp();
  const [i, setI] = useState(0);
  const n = QY.hero.length;
  const dur = (tweaks.heroSecs || 6) * 1000;
  useEffect(() => { const t = setTimeout(() => setI(x => (x + 1) % n), dur); return () => clearTimeout(t); }, [i, dur]);
  const cur = QY.hero[i];
  const col = QY.collections.find(c => c.id === cur.col);
  const tx = React.useRef(0);
  return (
    <section className="qy-card qy-card-hero" onTouchStart={e => { tx.current = e.touches[0].clientX; }} onTouchEnd={e => { const dx = e.changedTouches[0].clientX - tx.current; if (Math.abs(dx) > 40) setI(x => (x + (dx < 0 ? 1 : -1) + n) % n); }}>
      {QY.hero.map((h, k) => <div key={h.slot} className="qy-card-media" style={{ opacity: k === i ? 1 : 0 }}><FitImg src={h.srcM || h.src} pos={h.posM} fit={h.fitM} alt={tr(h.cap, lang)} /></div>)}
      <div className="qy-stories">{QY.hero.map((h, k) => <button key={k} onClick={() => setI(k)} aria-label={'Foto ' + (k + 1)}><i style={k < i ? { width: '100%' } : k === i ? { animation: `qyStory ${dur}ms linear forwards` } : null} key={k === i ? 'a' + i : 'b'}></i></button>)}</div>
      <div className="qy-card-txt">
        <span className="qy-eyebrow">{tr(cur.cap, lang)}</span>
        <h1 className="qy-card-t">{col.name}</h1>
        <button className="qy-card-cta" onClick={() => go('collection', col.id)}>{tr(col.season, lang)} · {tr(QY.ui.view, lang)} →</button>
      </div>
    </section>
  );
}

function HomeApp() {
  const { lang, go } = useApp();
  const es = lang === 'es';
  const tiles = QY.home.tiles;
  return (
    <div className="qy-app-home">
      <HeroStories />
      <section className="qy-app-intro">
        <img loading="lazy" decoding="async" src="assets/byqiyo-q.png" alt="" className="qy-card-q" />
        <p className="qy-card-lead">{tr(QY.home.intro, lang)}</p>
        <button className="qy-card-cta dark" onClick={() => go('about', 'byqiyo')}>{es ? 'Conocer la marca' : 'About the brand'} →</button>
      </section>
      <MStripAcordeon tiles={tiles} lang={lang} go={go} />
      <section className="qy-app-news">
        <div className="qy-card-head"><span className="qy-eyebrow qy-mute">{es ? 'Novedades' : 'News'}</span><button className="qy-link" onClick={() => go('journal')}>{tr(QY.ui.all, lang)} →</button></div>
        <div className="qy-news-track">
          {QY.news.map((n, k) => (
            <div key={k} className="qy-news-c" role="link" onClick={() => go(...n.to)}>
              <div className="qy-news-c-img"><img src={n.src} alt="" loading="lazy" /></div>
              <span className="qy-eyebrow qy-mute">{n.tag} · {tr(n.date, lang)}</span>
              <h3>{tr(n.t, lang)}</h3>
            </div>
          ))}
        </div>
      </section>
      <section className="qy-app-contact">
        <span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.contact, lang)}</span>
        <a className="qy-card-mail" href={'mailto:' + QY.contact.email}>{QY.contact.email}</a>
        <div className="qy-card-btns">
          <button className="qy-card-cta dark" onClick={() => go('contact')}>{es ? 'Escribir un mensaje' : 'Send a message'} →</button>
          <a className="qy-card-cta ghost" href={QY.contact.instagramUrl} target="_blank" rel="noopener">Instagram {QY.contact.instagram} ↗</a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

Object.assign(window, { MobileNav, HomeApp, useApp2, FitImg, APP_BP });
