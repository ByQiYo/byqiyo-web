const { useState: useStateS, useEffect: useEffectS, useRef: useRefS, useMemo: useMemoS } = React;

const qyNorm = s => String(s || '').split('').map(c => c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0) || c).join('').toLowerCase();
const isAsset = s => /\.(png|jpe?g|webp|gif|mp4|svg)$/i.test(s) || /^(assets|uploads|figurines)\//.test(s);
function textOf(o, lang, out = []) {
  if (o == null) return out;
  if (typeof o === 'string') { if (!isAsset(o) && o.length > 1) out.push(o); return out; }
  if (typeof o === 'number') return out;
  if (Array.isArray(o)) { o.forEach(x => textOf(x, lang, out)); return out; }
  if (typeof o === 'object') {
    if ('es' in o && typeof o.es === 'string') { textOf(o[lang] ?? o.es, lang, out); return out; }
    if (lang in o && typeof o[lang] === 'object') { textOf(o[lang], lang, out); return out; }
    Object.entries(o).forEach(([k, v]) => { if (!['id', 'slot', 'theme', 'go', 'tipo', 'state', 'es', 'en'].includes(k) || (k === lang)) textOf(v, lang, out); });
  }
  return out;
}

const SEARCH_TYPES = [
  { k: 'all', es: 'Todo', en: 'All' },
  { k: 'collection', es: 'Colecciones', en: 'Collections' },
  { k: 'project', es: 'Proyectos', en: 'Projects' },
  { k: 'lab', es: '3D Lab', en: '3D Lab' },
  { k: 'journal', es: 'Diario', en: 'Journal' },
  { k: 'page', es: 'Páginas', en: 'Pages' },
];

function buildIndex(lang) {
  const E = (type, title, sub, text, img, to) => ({ type, title, sub, text: Array.isArray(text) ? text.join(' · ') : (text || ''), img, to });
  const idx = [];
  QY.collections.forEach(c => {
    idx.push(E('collection', c.name, [c.sub, tr(c.season, lang)].filter(Boolean).join(' · '), textOf(c, lang), c.cover || c.reveal, ['collection', c.id]));
    if (c.runway) idx.push(E('page', (lang === 'es' ? 'Pasarela ' : 'Runway ') + c.name, c.runway, [c.runway, c.name], (c.runwayImgs || [])[0], ['runway', c.id]));
  });
  QY.projects.forEach(p => {
    idx.push(E('project', p.name, tr(p.year, lang), textOf(p, lang), p.cover || p.card, ['project', p.id]));
    (p.specs || []).concat(p.works || []).forEach(s => idx.push(E('project', tr(s.t, lang), p.name, [tr(s.t, lang), p.name], s.src, ['project', p.id])));
  });
  if (window.LAB) {
    LAB.tipos.forEach(t => idx.push(E('lab', t[lang] || t.es, '3D Lab', (t.subs || []).map(s => s[lang] || s.es), null, ['labcat', t.id])));
    LAB.pieces.forEach(p => { const d = p[lang] || p.es; idx.push(E('lab', d.t, [d.v, p.col].filter(Boolean).join(' · '), [d.x, d.mat, p.col, d.v], p.img, ['labcat', p.tipo])); });
  }
  QY.journal.forEach(j => idx.push(E('journal', tr(j.title, lang), tr(j.tag, lang), tr(j.body, lang), j.img, ['entry', j.id])));
  const es = lang === 'es';
  idx.push(E('page', es ? 'Sobre mí' : 'About', 'Carmen Álvarez Feriche', textOf(QY.about, lang).concat(['CV', es ? 'Currículum' : 'Curriculum', 'Illustrator', 'Photoshop']), 'assets/opt/carmen-retrato.jpg', ['about']));
  idx.push(E('page', es ? 'Contacto' : 'Contact', QY.contact.email, textOf(QY.contact, lang).concat(textOf(QY.ui, lang).filter(s => /medida|measure|prensa|press|colabor/i.test(s))), null, ['contact']));
  idx.push(E('page', es ? 'Taller' : 'Studio', es ? 'Hecho a mano' : 'Handmade', [es ? 'taller proceso artesanía hecho a mano' : 'studio process craft handmade'].concat(QY.taller.map(g => tr(g.t, lang))).concat(QY.home.process.map(p => tr(p.t, lang) + ' ' + tr(p.d, lang))), (QY.taller[0] || { imgs: [] }).imgs[0], ['process']));
  return idx;
}

function runSearch(idx, q) {
  const terms = qyNorm(q).split(/\s+/).filter(t => t.length > 1 || /\d/.test(t));
  if (!terms.length) return [];
  const seen = new Set();
  return idx.map(e => {
    const T = qyNorm(e.title), S = qyNorm(e.sub), X = qyNorm(e.text);
    let score = 0;
    for (const t of terms) { const s = (T.startsWith(t) ? 6 : T.includes(t) ? 4 : 0) + (S.includes(t) ? 2 : 0) + (X.includes(t) ? 1 : 0); if (!s) return null; score += s; }
    return { ...e, score, terms };
  }).filter(Boolean).filter(e => { const k = e.type + e.title + e.to.join(); if (seen.has(k)) return false; seen.add(k); return true; }).sort((a, b) => b.score - a.score);
}

function Hl({ text, terms }) {
  if (!text) return null;
  const N = qyNorm(text), marks = [];
  terms.forEach(t => { let i = N.indexOf(t); while (i >= 0) { marks.push([i, i + t.length]); i = N.indexOf(t, i + t.length); } });
  if (!marks.length) return <>{text}</>;
  marks.sort((a, b) => a[0] - b[0]);
  const out = []; let p = 0;
  marks.forEach(([a, b], k) => { if (a < p) return; out.push(text.slice(p, a)); out.push(<mark key={k} className="qy-mark">{text.slice(a, b)}</mark>); p = b; });
  out.push(text.slice(p));
  return <>{out}</>;
}
function snippet(text, terms, r = 70) {
  const N = qyNorm(text); let i = -1;
  for (const t of terms) { i = N.indexOf(t); if (i >= 0) break; }
  if (i < 0) return text.length > r * 2 ? text.slice(0, r * 2) + '…' : text;
  const a = Math.max(0, i - r), b = Math.min(text.length, i + r);
  return (a > 0 ? '…' : '') + text.slice(a, b).trim() + (b < text.length ? '…' : '');
}

const SUGGEST = ['Rebirth', 'Thalaira', 'Ágora', { es: 'Bolsos', en: 'Bags' }, { es: 'Corsé', en: 'Corset' }, { es: 'Pasarela', en: 'Runway' }, { es: 'Confección a medida', en: 'Made to measure' }];
const typeLabel = (k, lang) => { const t = SEARCH_TYPES.find(x => x.k === k); return t ? t[lang] : k; };

function SearchRow({ r, i, lang, onGo, compact }) {
  return (
    <button className={'qy-sr' + (compact ? ' compact' : '')} onClick={() => onGo(r.to)}>
      {!compact && <span className="qy-num qy-mute">{n2(i + 1)}</span>}
      <span className="qy-sr-thumb">{r.img ? <img src={r.img} alt="" loading="lazy" /> : <span className="qy-eyebrow">{r.title.slice(0, 1)}</span>}</span>
      <span className="qy-sr-body">
        <span className="qy-eyebrow qy-mute">{typeLabel(r.type, lang)}{r.sub ? ' · ' + r.sub : ''}</span>
        <span className="qy-h3"><Hl text={r.title} terms={r.terms} /></span>
        {!compact && r.text && <span className="qy-small qy-mute"><Hl text={snippet(r.text, r.terms)} terms={r.terms} /></span>}
      </span>
      <span className="qy-sr-arrow">→</span>
    </button>
  );
}

function SearchOverlay({ onClose }) {
  const { lang, go } = useApp();
  const [q, setQ] = useStateS('');
  const inp = useRefS(null);
  const idx = useMemoS(() => buildIndex(lang), [lang]);
  const res = useMemoS(() => runSearch(idx, q), [idx, q]);
  useEffectS(() => { inp.current && inp.current.focus(); const k = e => e.key === 'Escape' && onClose(); addEventListener('keydown', k); document.body.style.overflow = 'hidden'; return () => { removeEventListener('keydown', k); document.body.style.overflow = ''; }; }, []);
  const nav = to => { onClose(); go(...to); };
  const all = () => { if (q.trim()) nav(['search', q.trim()]); };
  return (
    <div className="qy-search-ov" role="dialog" aria-label={lang === 'es' ? 'Buscar' : 'Search'}>
      <div className="qy-search-ov-top">
        <span className="qy-eyebrow qy-mute">{lang === 'es' ? 'Buscar en By QiYo' : 'Search By QiYo'}</span>
        <button className="qy-eyebrow qy-link" onClick={onClose}>{lang === 'es' ? 'Cerrar' : 'Close'} · Esc</button>
      </div>
      <form className="qy-search-field" onSubmit={e => { e.preventDefault(); all(); }}>
        <input ref={inp} value={q} onChange={e => setQ(e.target.value)} placeholder={lang === 'es' ? 'Colecciones, piezas, técnicas…' : 'Collections, pieces, techniques…'} aria-label={lang === 'es' ? 'Buscar' : 'Search'} />
        {q && <button type="button" className="qy-eyebrow qy-mute qy-link" onClick={() => { setQ(''); inp.current.focus(); }}>{lang === 'es' ? 'Borrar' : 'Clear'}</button>}
      </form>
      {!q.trim() ? (
        <div className="qy-search-sugg">
          <span className="qy-eyebrow qy-mute">{lang === 'es' ? 'Sugerencias' : 'Suggestions'}</span>
          <div className="qy-chips">{SUGGEST.map(s => { const t = tr(s, lang); return <button key={t} className="qy-chip" onClick={() => setQ(t)}>{t}</button>; })}</div>
        </div>
      ) : (
        <div className="qy-search-quick">
          {res.length ? <>
            {res.slice(0, 5).map((r, i) => <SearchRow key={i} r={r} i={i} lang={lang} onGo={nav} compact />)}
            <button className="qy-search-all" onClick={all}><span>{lang === 'es' ? `Ver los ${res.length} resultados` : `See all ${res.length} results`}</span><span>↵</span></button>
          </> : <p className="qy-lead qy-mute" style={{ padding: '32px 0' }}>{lang === 'es' ? `Nada para «${q}».` : `Nothing for “${q}”.`}</p>}
        </div>
      )}
    </div>
  );
}

function Search({ id }) {
  const { lang, go } = useApp();
  const [q, setQ] = useStateS(id || '');
  const [type, setType] = useStateS('all');
  const idx = useMemoS(() => buildIndex(lang), [lang]);
  const res = useMemoS(() => runSearch(idx, q), [idx, q]);
  const counts = useMemoS(() => Object.fromEntries(SEARCH_TYPES.map(t => [t.k, t.k === 'all' ? res.length : res.filter(r => r.type === t.k).length])), [res]);
  const shown = type === 'all' ? res : res.filter(r => r.type === type);
  const es = lang === 'es';
  return (
    <div>
      <section className="qy-page-head qy-search-head">
        <span className="qy-eyebrow qy-mute">{es ? 'Búsqueda' : 'Search'}</span>
        <form className="qy-search-field big" onSubmit={e => e.preventDefault()}>
          <input value={q} onChange={e => { setQ(e.target.value); setType('all'); }} placeholder={es ? 'Buscar…' : 'Search…'} aria-label={es ? 'Buscar' : 'Search'} autoFocus={!id} />
          {q && <button type="button" className="qy-eyebrow qy-mute qy-link" onClick={() => setQ('')}>{es ? 'Borrar' : 'Clear'}</button>}
        </form>
        {q.trim() && <p className="qy-small qy-mute">{res.length ? (es ? `${res.length} resultado${res.length === 1 ? '' : 's'} para «${q.trim()}»` : `${res.length} result${res.length === 1 ? '' : 's'} for “${q.trim()}”`) : ''}</p>}
      </section>
      {q.trim() && res.length > 0 && (
        <section className="qy-block qy-search-res">
          <div className="qy-search-tabs">
            {SEARCH_TYPES.filter(t => counts[t.k] > 0).map(t => <button key={t.k} className={type === t.k ? 'on' : ''} onClick={() => setType(t.k)}>{t[lang]}<sup className="qy-num">{counts[t.k]}</sup></button>)}
          </div>
          <div className="qy-sr-list">{shown.map((r, i) => <SearchRow key={r.type + r.title + i} r={r} i={i} lang={lang} onGo={to => go(...to)} />)}</div>
        </section>
      )}
      {(!q.trim() || !res.length) && (
        <section className="qy-block qy-search-empty">
          {q.trim() && <><h2 className="qy-h2">{es ? `No hay resultados para «${q.trim()}».` : `No results for “${q.trim()}”.`}</h2><p className="qy-body qy-mute">{es ? 'Prueba con otra palabra, revisa la ortografía o explora una de estas búsquedas.' : 'Try another word, check the spelling or explore one of these searches.'}</p></>}
          <div className="qy-chips">{SUGGEST.map(s => { const t = tr(s, lang); return <button key={t} className="qy-chip" onClick={() => setQ(t)}>{t}</button>; })}</div>
          <div className="qy-search-browse">
            {QY.collections.map(c => <button key={c.id} className="qy-proj-spec" onClick={() => go('collection', c.id)}><div className="qy-slot" style={{ aspectRatio: '4/5' }}><img src={c.cover} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /></div><div className="qy-col-card-cap"><span>{c.name}</span><span className="qy-num qy-mute">{tr(c.season, lang)}</span></div></button>)}
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

function SearchButton({ onOpen }) {
  const { lang } = useApp();
  return <button className="qy-search-btn" onClick={onOpen} aria-label={lang === 'es' ? 'Buscar' : 'Search'}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="6" r="4.6"></circle><path d="M9.4 9.4 13 13"></path></svg><span>{lang === 'es' ? 'Buscar' : 'Search'}</span></button>;
}

Object.assign(window, { Search, SearchOverlay, SearchButton });
