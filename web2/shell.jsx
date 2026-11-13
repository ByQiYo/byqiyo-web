const { useState, useEffect, useRef, createContext, useContext } = React;

const THEMES = {
  paper: { bg: '#FFFFFF', fg: '#0A0A0A', mute: '#6F6F6F', line: '#D8D8D8' },
  navy: { bg: '#00253D', fg: '#FFFFFF', mute: '#B8D9EC', line: 'rgba(184,217,236,.3)' },
  ink: { bg: '#0A0A0A', fg: '#F2F2F2', mute: '#9A9A9A', line: '#2A2A2A' },
};
const useTh = (name = 'paper') => { const { dark } = useApp(); return THEMES[name === 'paper' && dark ? 'ink' : name]; };
const AppCtx = createContext(null);
const useApp = () => useContext(AppCtx);
const tr = (v, lang) => (v && typeof v === 'object' && !Array.isArray(v) ? (v[lang] ?? v.es) : v);
const n2 = i => String(i).padStart(2, '0');

function useScrollProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const calc = () => { raf = 0; const el = ref.current; if (!el) return; const r = el.getBoundingClientRect(); const t = r.height - innerHeight; setP(t > 0 ? Math.min(1, Math.max(0, -r.top / t)) : 0); };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    calc(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
  return p;
}
function useWide() {
  const [w, setW] = useState(innerWidth);
  useEffect(() => { const on = () => setW(innerWidth); addEventListener('resize', on); return () => removeEventListener('resize', on); }, []);
  return w;
}

function Slot({ id, label, ratio, src, fit = 'cover', style }) {
  return (
    <div className="qy-slot" style={{ aspectRatio: ratio, ...style }}>
      <image-slot id={id} shape="rect" fit={fit} placeholder={label} {...(src ? { src } : {})}></image-slot>
    </div>
  );
}

function LangSwitch() {
  const { lang, setLang } = useApp();
  return <span className="qy-lang"><button className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')}>ES</button><button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>EN</button></span>;
}

function ModeSwitch() {
  const { dark, setDark } = useApp();
  return <span className="qy-lang qy-mode"><button className={!dark ? 'on' : ''} onClick={() => setDark(false)} aria-label="Modo claro">{'\u2600\uFE0E'}</button><button className={dark ? 'on' : ''} onClick={() => setDark(true)} aria-label="Modo oscuro">{'\u263E'}</button></span>;
}

const NAV_PARENT = { sculptor: 'collections', collection: 'collections', project: 'projects', labcat: 'lab', labsub: 'lab', entry: 'journal' };
function navMenu(lang) {
  return [
    { k: 'collections', subs: QY.collections.map(c => ({ label: c.name, note: tr(c.season, lang), to: ['collection', c.id] })) },
    { k: 'projects', subs: QY.projects.map(p => ({ label: p.name, note: tr(p.year, lang), to: ['project', p.id] })) },
    { k: 'lab', subs: (window.LAB ? LAB.tipos : []).map(t => ({ label: t[lang] || t.es, note: t.gallery ? t.gallery.length + ' ' + (lang === 'es' ? 'detalles' : 'details') : t.subs ? t.subs.map(x => x[lang] || x.es).join(' · ') : LAB.pieces.filter(p => p.tipo === t.id).length + ' ' + (lang === 'es' ? 'piezas' : 'pieces'), to: ['labcat', t.id] })) },
    { k: 'about' }, { k: 'journal' }, { k: 'contact' },
  ];
}

function Nav() { return useWide() <= 1024 ? <MobileNav /> : <DesktopNav />; }
function DesktopNav() {
  const { lang, go, page } = useApp();
  const menu = navMenu(lang);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);
  const wide = useWide() > 760;
  const active = NAV_PARENT[page] || page;
  const nav = (to) => { setOpen(false); setHover(null); go(...to); };
  const [sOpen, setSOpen] = useState(false);
  useEffect(() => { const k = e => { if ((e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) || ((e.metaKey || e.ctrlKey) && e.key === 'k')) { e.preventDefault(); setSOpen(true); } }; addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, []);
  const [overHero, setOverHero] = useState(false);
  useEffect(() => { const f = () => setOverHero(page === 'home' && scrollY < innerHeight - 80); f(); addEventListener('scroll', f, { passive: true }); addEventListener('resize', f); return () => { removeEventListener('scroll', f); removeEventListener('resize', f); }; }, [page]);
  return (
    <>
      <header className={'qy-nav' + (overHero && !open ? ' on-hero' : '')} style={open ? { mixBlendMode: 'normal' } : null}>
        <button className="qy-logo" onClick={() => nav(['home'])} aria-label="By QiYo"><img loading="lazy" decoding="async" src="assets/byqiyo-logo.png" alt="By QiYo" /></button>
        {wide ? (
          <nav className="qy-links">
            {menu.map(m => (
              <div key={m.k} className="qy-nav-item" onMouseEnter={() => setHover(m.k)} onMouseLeave={() => setHover(null)}>
                <button className={active === m.k || hover === m.k ? 'on' : ''} onClick={() => nav([m.k])}>{tr(QY.ui.nav[m.k], lang)}</button>
                {m.subs && hover === m.k && <div className="qy-dd">{m.subs.map(s => <button key={s.label} onClick={() => nav(s.to)}>{s.label}</button>)}</div>}
              </div>
            ))}
            <SearchButton onOpen={() => setSOpen(true)} /><LangSwitch /><ModeSwitch />
          </nav>
        ) : <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}><SearchButton onOpen={() => { setOpen(false); setSOpen(true); }} /><button className="qy-menu-btn" onClick={() => setOpen(!open)}>{open ? (lang === 'es' ? 'Cerrar' : 'Close') : 'Menú'}</button></div>}
      </header>
      {sOpen && <SearchOverlay onClose={() => setSOpen(false)} />}
      {!wide && open && (
        <div className="qy-mobile-menu">
          {menu.map(m => (
            <div key={m.k} className="qy-mm-group">
              <button onClick={() => nav([m.k])}>{tr(QY.ui.nav[m.k], lang)}</button>
              {m.subs && <div className="qy-mm-subs">{m.subs.map(s => <button key={s.label} onClick={() => nav(s.to)}>{s.label}</button>)}</div>}
            </div>
          ))}
          <div style={{ display: 'flex', gap: 24, marginTop: 16 }}><LangSwitch /><ModeSwitch /></div>
        </div>
      )}
    </>
  );
}

function Footer({ theme = 'paper' }) {
  const { lang, go } = useApp();
  const th = useTh(theme);
  return (
    <footer className="qy-footer" style={{ background: th.bg, color: th.fg, borderTop: `1px solid ${th.line}` }}>
      <div className="qy-footer-brand">
        <img loading="lazy" decoding="async" src="assets/byqiyo-logo.png" alt="By QiYo" style={{ filter: th.bg !== '#FFFFFF' ? 'invert(1)' : 'none' }} />
        <p style={{ color: th.mute }}>{tr(QY.home.claim, lang)} {tr(QY.home.claimSub, lang)}.</p>
      </div>
      <div className="qy-footer-col">
        <span className="qy-eyebrow" style={{ color: th.mute }}>Web</span>
        {['collections', 'projects', 'lab', 'process'].map(k => <button key={k} onClick={() => go(k)}>{tr(QY.ui.nav[k], lang)}</button>)}
        {QY.collections.map(c => <button key={'r' + c.id} onClick={() => go('runway', c.id)}>{tr(QY.ui.nav.runway, lang) + ' ' + c.name}</button>)}
        {['about', 'journal', 'contact'].map(k => <button key={k} onClick={() => go(k)}>{tr(QY.ui.nav[k], lang)}</button>)}
      </div>
      <div className="qy-footer-col">
        <span className="qy-eyebrow" style={{ color: th.mute }}>{tr(QY.ui.nav.contact, lang)}</span>
        <a href={'mailto:' + QY.contact.email}>{QY.contact.email}</a>
        <a href={QY.contact.instagramUrl} target="_blank" rel="noopener">Instagram {QY.contact.instagram}</a>
      </div>
      <div className="qy-footer-base" style={{ color: th.mute, borderColor: th.line }}>
        <span style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}><span>© 2026 By QiYo · {QY.ui.author}</span>{LEGAL_PAGES.map(p => <button key={p} className="qy-link" onClick={() => go('legal', p)}>{tr(LEGAL_T[p], lang)}</button>)}</span><span style={{ display: 'flex', gap: 20, alignItems: 'center' }}><a href={QY.contact.instagramUrl} target="_blank" rel="noopener" className="qy-link" style={{ color: th.fg }}>Instagram {QY.contact.instagram} ↗</a><LangSwitch /><ModeSwitch /></span>
      </div>
    </footer>
  );
}

const RevealCtx = createContext({ show() {}, hide() {} });
function RevealLayer({ children, enabled }) {
  const box = useRef(null);
  const [img, setImg] = useState(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  useEffect(() => {
    if (!enabled) return;
    let raf;
    const move = e => { pos.current.tx = e.clientX; pos.current.ty = e.clientY; };
    const tick = () => { const p = pos.current; p.x += (p.tx - p.x) * 0.14; p.y += (p.ty - p.y) * 0.14; if (box.current) box.current.style.transform = `translate(${p.x + 24}px, ${p.y}px) translateY(-50%)`; raf = requestAnimationFrame(tick); };
    addEventListener('mousemove', move); tick();
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, [enabled]);
  const api = { show: src => enabled && setImg(src), hide: () => setImg(null) };
  return (
    <RevealCtx.Provider value={api}>
      {children}
      <div ref={box} className="qy-reveal" style={{ opacity: img ? 1 : 0 }}>{img && <img loading="lazy" decoding="async" src={img} alt="" />}</div>
    </RevealCtx.Provider>
  );
}
const useReveal = () => useContext(RevealCtx);

function HScroll({ children, theme = 'paper', label }) {
  const outer = useRef(null), track = useRef(null);
  const [dims, setDims] = useState({ tw: 0, vw: innerWidth });
  const p = useScrollProgress(outer);
  const wide = useWide() > 760;
  useEffect(() => {
    const m = () => track.current && setDims({ tw: track.current.scrollWidth, vw: innerWidth });
    m(); const t = setTimeout(m, 500); addEventListener('resize', m);
    return () => { clearTimeout(t); removeEventListener('resize', m); };
  }, [children, wide]);
  const dist = Math.max(0, dims.tw - dims.vw);
  const th = useTh(theme);
  if (!wide) return <div className="qy-hs-native"><div className="qy-hs-track" ref={track}>{children}</div></div>;
  return (
    <section ref={outer} style={{ height: `calc(100vh + ${dist}px)`, position: 'relative' }}>
      <div className="qy-hs-sticky">
        {label && <div className="qy-hs-label qy-eyebrow" style={{ color: th.mute }}>{label}</div>}
        <div className="qy-hs-track" ref={track} style={{ transform: `translate3d(${-p * dist}px,0,0)` }}>{children}</div>
        <div className="qy-hs-bar" style={{ background: th.line }}><span style={{ width: `${p * 100}%`, background: th.fg }}></span></div>
      </div>
    </section>
  );
}

function SectionHead({ label, right, theme = 'paper' }) {
  const th = useTh(theme);
  return <div className="qy-section-head" style={{ borderColor: th.fg }}><span className="qy-eyebrow">{label}</span>{right && <span className="qy-eyebrow" style={{ color: th.mute }}>{right}</span>}</div>;
}

Object.assign(window, { THEMES, useTh, ModeSwitch, AppCtx, useApp, tr, n2, useScrollProgress, useWide, Slot, LangSwitch, Nav, Footer, RevealLayer, useReveal, HScroll, SectionHead });
