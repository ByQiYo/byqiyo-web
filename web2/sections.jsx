function BaseGrid({ items }) {
  return (
    <section className="qy-col-cards">
      {items.map(it => (
        <div key={it.key} className="qy-col-card qy-clickable" onClick={it.onClick} role="link">
          <Slot id={it.slot} label={it.label} ratio={it.ratio || '3/2'} src={it.src} />
          <div className="qy-col-card-cap"><span>{it.title}</span><span className="qy-eyebrow qy-mute">{it.meta}</span></div>
          {it.d && <p className="qy-small qy-mute">{it.d}</p>}
        </div>
      ))}
    </section>
  );
}

function PageHead({ eyebrow, title, lead, back }) {
  return (
    <section className="qy-page-head">
      {back}
      <span className="qy-eyebrow qy-mute">{eyebrow}</span>
      {title && <h1 className="qy-h1">{title}</h1>}
      {lead && <p className="qy-body qy-mute">{lead}</p>}
    </section>
  );
}

function Projects() {
  const { lang, go } = useApp();
  return (
    <div>
      <PageHead eyebrow={tr(QY.ui.nav.projects, lang)} />
      <BaseGrid items={QY.projects.map(p => ({ key: p.id, slot: 'web-projcard-' + p.id, src: p.card, label: 'Portada proyecto ' + p.name, title: p.name, meta: tr(p.year, lang), d: tr(p.d, lang), onClick: () => go('project', p.id) }))} />
      <Footer />
    </div>
  );
}

function CarouselNav({ i, n, go }) {
  if (n < 2) return null;
  const b = { background: 'none', border: 0, padding: '6px 0', minWidth: 44, minHeight: 44, color: 'inherit', font: 'inherit', cursor: 'pointer', fontSize: 18, lineHeight: 1 };
  return (
    <div className="qy-eyebrow qy-car-nav" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28, marginTop: 4 }}>
      <button aria-label="Anterior" onClick={() => go(-1)} style={b}>←</button>
      <span className="qy-num qy-mute">{String(i + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</span>
      <button aria-label="Siguiente" onClick={() => go(1)} style={b}>→</button>
    </div>
  );
}

function SingleCarousel({ imgs, fit = 'cover', bg, ratio = '4/5', h }) {
  const [i, setI] = useState(0);
  const n = imgs.length, go = d => setI(k => (k + d + n) % n);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ position: 'relative', aspectRatio: ratio, height: h, minHeight: h ? 420 : undefined, overflow: 'hidden', background: bg }}>
        {imgs.map((src, k) => <img loading="lazy" decoding="async" key={k} src={src} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit, opacity: k === i ? 1 : 0, transition: 'opacity .5s' }} />)}
      </div>
      <CarouselNav i={i} n={n} go={go} />
    </div>
  );
}

function ProjectBody({ p }) {
  const { lang } = useApp();
  const es = lang === 'es';
  const li = arr => <ul className="qy-proj-list">{arr.map((t, k) => <li key={k}>{tr(t, lang)}</li>)}</ul>;
  return (<>
    <section className="qy-block qy-proj-two">
      <div><SectionHead label={tr(p.film.t, lang)} />{li(p.film.items)}<h3 className="qy-eyebrow qy-mute" style={{ marginTop: 32 }}>{es ? 'Trama y argumento' : 'Plot and themes'}</h3>{li(p.film.themes)}</div>
      <figure className="qy-proj-fig"><img loading="lazy" decoding="async" src={p.inspo} alt="" /><figcaption className="qy-small qy-mute">{es ? 'Rachel Weisz como Hipatia de Alejandría' : 'Rachel Weisz as Hypatia of Alexandria'}</figcaption></figure>
    </section>
    <section className="qy-block">
      <SectionHead label={es ? 'Investigación' : 'Research'} />
      <div className="qy-proj-research">{p.research.map((r, k) => <div key={k}><span className="qy-num qy-mute">{String(k + 1).padStart(2, '0')}</span><h3 className="qy-proj-h">{tr(r.t, lang)}</h3><p className="qy-small qy-mute">{tr(r.d, lang)}</p></div>)}</div>
    </section>
    <section className="qy-block qy-proj-quote"><p className="qy-claim">“{es ? 'Defiende tu derecho a pensar, porque pensar de manera errónea es mejor que no pensar.' : 'Reserve your right to think, for even to think wrongly is better than not to think at all.'}”</p><span className="qy-eyebrow qy-mute">Hipatia de Alejandría</span></section>
    <section className="qy-block qy-proj-two">
      <div><SectionHead label={es ? 'Idea final' : 'Final idea'} />{li(p.idea)}</div>
      <SingleCarousel imgs={p.final} />
    </section>
    <section className="qy-block">
      <SectionHead label={es ? 'Proceso' : 'Process'} right={p.steps.length + (es ? ' pasos' : ' steps')} />
      <ol className="qy-proj-steps">{p.steps.map((t, k) => <li key={k}><span className="qy-num qy-mute">{String(k + 1).padStart(2, '0')}</span>{tr(t, lang)}</li>)}</ol>
      <RunwayCarousel imgs={p.process} />
    </section>
  </>);
}

function Project({ id }) {
  const { lang, go } = useApp();
  const p = QY.projects.find(x => x.id === id) || QY.projects[0];
  const next = QY.projects[(QY.projects.indexOf(p) + 1) % QY.projects.length];
  return (
    <div>
      <PageHead back={<button className="qy-eyebrow qy-link" onClick={() => go('projects')}>← {tr(QY.ui.nav.projects, lang)}</button>} eyebrow={tr(p.kind, lang) + (tr(p.year, lang) ? ' · ' + tr(p.year, lang) : '')} title={p.name} lead={tr(p.d, lang)} />
      {p.specs ? <section className="qy-block"><div className="qy-proj-specs">{p.specs.map((sp, k) => <div key={sp.id} className="qy-proj-spec"><Slot id={'web-proj-spec-' + sp.id} label={tr(sp.t, 'es') + ' · imagen'} ratio="4/5" src={sp.src} /><div className="qy-col-card-cap"><span>{tr(sp.t, lang)}</span><span className="qy-num qy-mute">{String(k + 1).padStart(2, '0')}</span></div></div>)}</div>{p.works && <><div style={{ height: 64 }}></div><SectionHead label={lang === 'es' ? 'Otros trabajos' : 'Other work'} /><div className="qy-proj-specs qy-proj-works">{p.works.map((w, k) => <div key={w.id} className="qy-proj-spec"><Slot id={'web-proj-work-' + w.id} label={tr(w.t, 'es')} ratio="4/5" src={w.src} /><div className="qy-col-card-cap"><span>{tr(w.t, lang)}</span><span className="qy-num qy-mute">{String(k + 1).padStart(2, '0')}</span></div></div>)}</div></>}</section> : p.steps ? <ProjectBody p={p} /> : <>
      <section className="qy-c-cover"><Slot id={'web-proj-cover-' + p.id} label={'Proyecto ' + p.name + ' · horizontal'} ratio="21/9" /></section>
      <section className="qy-block">
        <div className="qy-ed-grid">
          <div className="a"><Slot id={`web-proj-${p.id}-1`} label="Proyecto · horizontal" ratio="16/9" /></div>
          <div className="b"><Slot id={`web-proj-${p.id}-2`} label="Proyecto · vertical" ratio="4/5" /></div>
          <div className="c"><Slot id={`web-proj-${p.id}-3`} label="Detalle" ratio="4/5" /></div>
          <div className="d"><Slot id={`web-proj-${p.id}-4`} label="Proyecto · horizontal" ratio="3/2" /></div>
        </div>
      </section></>}
      {next !== p && <button className="qy-next" onClick={() => go('project', next.id)}><span className="qy-eyebrow qy-mute">{lang === 'es' ? 'Siguiente proyecto' : 'Next project'}</span><span className="qy-next-name">{next.name} →</span></button>}
      <Footer />
    </div>
  );
}

const LAB_URL = 'Web QiYo 3D LAB.html';
function labCover(t) { const ty = LAB.tipos.find(x => x.id === t); if (ty && ty.gallery) return ty.gallery[0]; const p = LAB.pieces.find(x => x.tipo === t && x.cover) || LAB.pieces.find(x => x.tipo === t); return p && p.img; }

function Lab() {
  const { lang, go } = useApp();
  return (
    <div>
      <PageHead eyebrow="QiYo 3D LAB" />
      <BaseGrid items={LAB.tipos.map(t => ({ key: t.id, slot: 'web-labcard-' + t.id, src: labCover(t.id), ratio: '4/5', label: t.es, title: t[lang] || t.es, meta: t.gallery ? t.gallery.length + (lang === 'es' ? ' detalles' : ' details') : t.subs ? t.subs.length + (lang === 'es' ? ' secciones' : ' sections') : LAB.pieces.filter(p => p.tipo === t.id).length + (lang === 'es' ? ' piezas' : ' pieces'), onClick: () => go('labcat', t.id) }))} />
      <Footer />
    </div>
  );
}

function LabCat({ id }) {
  const { lang, go } = useApp();
  const t = LAB.tipos.find(x => x.id === id) || LAB.tipos[0];
  const pieces = LAB.pieces.filter(p => p.tipo === t.id);
  if (t.gallery) return (
    <div>
      <PageHead back={<button className="qy-eyebrow qy-link" onClick={() => go('lab')}>← QiYo 3D LAB</button>} eyebrow={'3D Lab · ' + (lang === 'es' ? 'Detalles' : 'Details')} title={t[lang] || t.es} />
      <section style={{ padding: '0 var(--g) clamp(64px,8vw,120px)' }}><SingleCarousel imgs={t.gallery} ratio="auto" h="calc(100vh - 140px)" /></section>
      <Footer />
    </div>
  );
  if (t.subs) return (
    <div>
      <PageHead back={<button className="qy-eyebrow qy-link" onClick={() => go('lab')}>← QiYo 3D LAB</button>} eyebrow="3D Lab" title={t[lang] || t.es} />
      <BaseGrid items={t.subs.map(s => ({ key: s.id, slot: 'web-labsub-' + s.id, ratio: '4/5', label: s.es, title: s[lang] || s.es, onClick: () => go('labsub', s.id) }))} />
      <Footer />
    </div>
  );
  return (
    <div>
      <PageHead back={<button className="qy-eyebrow qy-link" onClick={() => go('lab')}>← QiYo 3D LAB</button>} eyebrow={'3D Lab · ' + pieces.length + (lang === 'es' ? ' piezas' : ' pieces')} title={t[lang] || t.es} />
      <section className="qy-pieces">
        {pieces.map(p => (
          <div key={p.id} className="qy-piece">
            <div className="qy-piece-img">{p.img ? <img loading="lazy" decoding="async" src={p.img} alt={p[lang].t} /> : <Slot id={'web-piece-' + p.id} label={p.es.t + ' · foto'} ratio="4/5" />}</div>
            <div className="qy-col-card-cap"><span>{p[lang].t}</span><span className="qy-num qy-mute">{p.n}</span></div>
            <span className="qy-small qy-mute">{p[lang].v}</span>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

function LabSub({ id }) {
  const { lang, go } = useApp();
  const t = LAB.tipos.find(x => x.subs && x.subs.some(s => s.id === id));
  if (!t) return <LabCat id="textil" />;
  const s = t.subs.find(s => s.id === id);
  return (
    <div>
      <PageHead back={<button className="qy-eyebrow qy-link" onClick={() => go('labcat', t.id)}>← {t[lang] || t.es}</button>} eyebrow={'3D Lab · ' + (t[lang] || t.es)} title={s[lang] || s.es} />
      <section className="qy-block">
        <div className="qy-ed-grid">
          <div className="a"><Slot id={'web-labsub-' + id + '-1'} label={s.es + ' · horizontal'} ratio="16/9" /></div>
          <div className="b"><Slot id={'web-labsub-' + id + '-2'} label={s.es + ' · vertical'} ratio="4/5" /></div>
          <div className="c"><Slot id={'web-labsub-' + id + '-3'} label={s.es + ' · detalle'} ratio="4/5" /></div>
          <div className="d"><Slot id={'web-labsub-' + id + '-4'} label={s.es + ' · horizontal'} ratio="3/2" /></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Process({ id }) {
  const { lang } = useApp();
  const es = lang === 'es';
  // Si se llega desde una colección, baja hasta su sección del taller.
  useEffect(() => {
    if (!id) return;
    const t = setTimeout(() => { const el = document.getElementById('taller-' + id); if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 80, behavior: 'smooth' }); }, 350);
    return () => clearTimeout(t);
  }, [id]);
  return (
    <div>
      <PageHead eyebrow={tr(QY.ui.nav.process, lang)} title={es ? 'Cada pieza se construye a mano, capa a capa.' : 'Each piece is built by hand, layer by layer.'} lead={es ? 'Lo que pasa en el taller, entrada a entrada.' : 'What happens in the studio, one entry at a time.'} />
      {QY.taller.map(g => (
        <section key={g.id} id={'taller-' + g.id} className="qy-block">
          <SectionHead label={tr(g.t, lang)} right={g.imgs.length ? n2(g.imgs.length) : null} />
          {g.imgs.length ? <RunwayCarousel imgs={g.imgs} /> : <div className="qy-taller">{[1, 2, 3].map(n => <Slot key={n} id={'web-taller-' + g.id + '-' + n} label={'Taller ' + tr(g.t, 'es') + ' · foto ' + n} ratio="4/5" />)}</div>}
        </section>
      ))}
      <section className="qy-block">
        <SectionHead label={es ? 'Técnicas' : 'Techniques'} right={n2(QY.home.process.length)} />
        {QY.home.process.map((p, k) => <div key={k} className="qy-runway"><span className="qy-num">{n2(k + 1)}</span><span>{tr(p.t, lang)}<em className="qy-mute">{tr(p.d, lang)}</em></span></div>)}
      </section>
      <Footer />
    </div>
  );
}

function Runway() {
  const { lang } = useApp();
  return (
    <div>
      <PageHead eyebrow={tr(QY.ui.nav.runway, lang)} title={lang === 'es' ? 'Las colecciones en movimiento.' : 'The collections in motion.'} />
      {QY.home.runways.map((r, k) => (
        <section key={k} className="qy-block">
          <SectionHead label={r.year + ' · ' + tr(r.t, lang)} right={r.col + ' · ' + tr(r.d, lang)} />
          <div className="qy-ed-grid">
            <div className="a"><Slot id={`web-runway-${k}-1`} label="Pasarela · horizontal" ratio="16/9" /></div>
            <div className="b"><Slot id={`web-runway-${k}-2`} label="Pasarela · vertical" ratio="4/5" /></div>
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}

Object.assign(window, { BaseGrid, PageHead, Projects, Project, CarouselNav, SingleCarousel, Lab, LabCat, LabSub, Process, Runway });
