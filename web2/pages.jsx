function Collections() {
  const { lang, go } = useApp();
  return (
    <div>
      <section className="qy-page-head"><span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.collections, lang)}</span></section>
      <BaseGrid items={QY.collections.map(c => ({ key: c.id, slot: 'web-colcard2-' + c.id, src: c.cover, label: 'Portada ' + c.name + ' · horizontal', title: c.name, meta: tr(c.season, lang) + ' · ' + c.count + ' ' + tr(QY.ui.looks, lang), d: tr(c.sub, lang), onClick: () => go('collection', c.id) }))} />
      <Footer />
    </div>
  );
}

function LookCard({ f, c, th }) {
  const { lang, tweaks } = useApp();
  const [flip, setFlip] = useState(false);
  const line = c.lines ? c.lines[f.line] : null;
  const name = f.name || 'Look ' + f.n;
  const showImg = !!f.img;
  return (
    <div className="qy-look" onMouseEnter={() => showImg && f.back && setFlip(true)} onMouseLeave={() => setFlip(false)}>
      <div className="qy-look-img">
        {showImg
          ? <><img loading="lazy" decoding="async" src={f.img} alt={name} style={{ opacity: flip ? 0 : 1 }} />{f.back && <img loading="lazy" decoding="async" src={f.back} alt="" style={{ opacity: flip ? 1 : 0 }} />}</>
          : <image-slot id={`web-look-${c.id}-${f.n}`} shape="rect" fit="contain" placeholder={'Figurín · ' + name}></image-slot>}
      </div>
      <div className="qy-look-cap">
        <span className="qy-look-n" style={{ color: line ? line.accent : th.fg }}>{f.n}</span>
        <span>{name}</span>
        {f.show && <span className="qy-eyebrow" style={{ color: th.mute, marginLeft: 'auto' }}>{tr(QY.ui.runway, lang)}</span>}
      </div>
    </div>
  );
}

function LinePanel({ l, th, lang }) {
  return (
    <div className="qy-line-panel" style={{ borderColor: th.line }}>
      <div className="qy-linebar"><i style={{ background: l.accent }}></i><span className="qy-eyebrow" style={{ color: th.mute }}>Línea {l.n}</span></div>
      <div className="qy-line-name">{tr(l.name, lang)}</div>
      <p className="qy-small" style={{ color: th.mute }}>{tr(l.d, lang)}</p>
      <span className="qy-eyebrow" style={{ color: th.mute }}>{l.ref}</span>
    </div>
  );
}

function Collection({ id }) {
  const { lang, go } = useApp();
  const reveal = useReveal();
  const c = QY.collections.find(x => x.id === id) || QY.collections[0];
  const next = QY.collections[(QY.collections.indexOf(c) + 1) % QY.collections.length];
  const th = useTh(c.theme);
  const track = [];
  if (c.lines) c.lines.forEach((l, li) => { track.push(<LinePanel key={'l' + li} l={l} th={th} lang={lang} />); c.figs.filter(f => f.line === li).forEach(f => track.push(<LookCard key={f.n} f={f} c={c} th={th} />)); });
  else c.figs.forEach(f => track.push(<LookCard key={f.n} f={f} c={c} th={th} />));
  return (
    <div style={{ background: th.bg, color: th.fg }}>
      <section className="qy-c-head">
        <div className="qy-c-head-l">
          <span className="qy-eyebrow" style={{ color: th.mute }}>{tr(c.season, lang)} · {c.count} {tr(QY.ui.looks, lang)}</span>
          <img loading="lazy" decoding="async" className={'qy-c-logo' + (c.id === 'rebirth' ? ' inv' : '')} src={c.logo} alt={c.name} />
        </div>
        <div className="qy-c-head-r">
          <h2 className="qy-h2">{tr(c.sub, lang)}</h2>
          <p className="qy-body" style={{ color: th.mute }}>{tr(c.intro, lang)}</p>
        </div>
      </section>
      <section className="qy-c-cover">{c.cover ? <img loading="lazy" decoding="async" className="qy-c-cover-img" src={c.cover} alt={c.name} /> : <Slot id={'web-c-cover-' + c.id} label={'Editorial ' + c.name + ' · horizontal a sangre'} ratio="21/9" />}</section>

      <section className="qy-block qy-c-concept">
        <SectionHead label={tr(QY.ui.concept, lang)} theme={c.theme} />
        <div className="qy-two">
          <p className="qy-lead">{tr(c.body, lang)}</p>
          {c.moodboard ? <img loading="lazy" decoding="async" className="qy-mood" src={c.moodboard} alt={'Moodboard ' + c.name} /> : <Slot id={'web-c-concept-' + c.id} label={'Moodboard ' + c.name} ratio="4/5" />}
        </div>
      </section>

      {c.refs && (
        <section className="qy-block">
          <SectionHead label={lang === 'es' ? 'Inspiración · Escultoras' : 'Inspiration · Sculptors'} right={n2(c.refs.length)} theme={c.theme} />
          <p className="qy-lead qy-refs-intro">{tr(c.refsIntro, lang)}</p>
          <div className="qy-refs">
            {c.refs.map(r => (
              <button key={r.id} className="qy-ref" onClick={() => go('sculptor', r.id)}>
                <div className="qy-ref-portrait"><img loading="lazy" decoding="async" src={r.portrait} alt={r.name} /></div>
                <div className="qy-linebar"><i style={{ background: r.accent }}></i><span className="qy-eyebrow" style={{ color: th.mute }}>{tr(r.tag, lang)}</span></div>
                <h3 className="qy-h3">{r.name} →</h3>
              </button>
            ))}
          </div>
        </section>
      )}

      {c.lines && (
        <section className="qy-block">
          <SectionHead label={tr(QY.ui.lines, lang)} right={n2(c.lines.length)} theme={c.theme} />
          <div className="qy-lines">
            {c.lines.map((l, k) => (
              <article key={k}>
                <Slot id={`web-line-${c.id}-${k + 1}`} label={'Línea ' + l.n + ' · ' + tr(l.name, 'es')} ratio="3/4" src={l.img} />
                <div className="qy-linebar"><i style={{ background: l.accent }}></i><span className="qy-eyebrow" style={{ color: th.mute }}>Línea {l.n} · {l.ref}</span></div>
                <h3 className="qy-h3">{tr(l.name, lang)}</h3>
                <p className="qy-small" style={{ color: th.mute }}>{tr(l.d, lang)}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <HScroll theme={c.theme} label={`${tr(QY.ui.looks, lang)} · ${c.count} · ${tr(QY.ui.scrollH, lang)}`}>
        {track}
        <div style={{ flex: '0 0 8vw' }}></div>
      </HScroll>

      {c.renders && (
        <section className="qy-block">
          <SectionHead label={lang === 'es' ? 'Renders digitales' : 'Digital renders'} right={n2(c.renders.length)} theme={c.theme} />
          <RunwayCarousel imgs={c.renders} />
        </section>
      )}

      <section className="qy-block">
        <SectionHead label={tr(QY.ui.editorial, lang)} right={c.editorial ? (lang === 'es' ? 'Por outfit' : 'By outfit') : null} theme={c.theme} />
        {c.editorial ? (
          <div className="qy-ed-groups">
            {c.editorial.map((gr, k) => (
              <div key={k} className="qy-ed-group">
                {(gr.n || gr.name) && <div className="qy-ed-gh"><span className="qy-num" style={{ color: th.mute }}>{gr.n ? 'Outfit ' + gr.n + (gr.name ? ' · ' + tr(gr.name, lang) : '') : tr(gr.name, lang)}</span></div>}
                <RunwayCarousel imgs={gr.imgs} />
              </div>
            ))}
          </div>
        ) : (
          <div className="qy-ed-grid">
            <div className="a"><Slot id={`web-c-ed-${c.id}-1`} label="Editorial · horizontal" ratio="16/9" /></div>
            <div className="b"><Slot id={`web-c-ed-${c.id}-2`} label="Editorial · vertical" ratio="4/5" /></div>
            <div className="c"><Slot id={`web-c-ed-${c.id}-3`} label="Detalle" ratio="4/5" /></div>
            <div className="d"><Slot id={`web-c-ed-${c.id}-4`} label="Editorial · horizontal" ratio="3/2" /></div>
          </div>
        )}
      </section>

      <section className="qy-block">
        <div id="pasarela"></div><SectionHead label={tr(QY.ui.nav.runway, lang)} right={tr(c.runway, lang)} theme={c.theme} />
        {c.runwayImgs ? (
          <RunwayCarousel imgs={c.runwayImgs} />
        ) : <div className="qy-ed-grid">
          <div className="a"><Slot id={`web-c-run-${c.id}-1`} label="Pasarela · vídeo u horizontal" ratio="16/9" /></div>
          <div className="b"><Slot id={`web-c-run-${c.id}-2`} label="Pasarela · vertical" ratio="4/5" /></div>
          <div className="c"><Slot id={`web-c-run-${c.id}-3`} label="Pasarela · vertical" ratio="4/5" /></div>
          <div className="d"><Slot id={`web-c-run-${c.id}-4`} label="Pasarela · horizontal" ratio="3/2" /></div>
        </div>}
      </section>

      <button className="qy-next" style={{ borderColor: th.line }} onMouseEnter={() => reveal.show(next.reveal)} onMouseLeave={reveal.hide} onClick={() => { reveal.hide(); go('collection', next.id); }}>
        <span className="qy-eyebrow" style={{ color: th.mute }}>{tr(QY.ui.next, lang)}</span>
        <span className="qy-next-name">{next.name} →</span>
      </button>
      <Footer theme={c.theme} />
    </div>
  );
}

function About({ id }) {
  const { lang } = useApp();
  useEffect(() => {
    if (id !== 'byqiyo') return;
    const t = setTimeout(() => { const el = document.getElementById('byqiyo'); if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 70, behavior: 'smooth' }); }, 350);
    return () => clearTimeout(t);
  }, [id]);
  return (
    <div>
      <section className="qy-about" id="carmen">
        <Slot id="web-about-portrait" label="Retrato · Carmen Álvarez Feriche" ratio="4/5" src="assets/opt/carmen-retrato.jpg" />
        <div className="qy-about-txt">
          <span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.about, lang)} · 01</span>
          <h1 className="qy-h1">Carmen Álvarez Feriche</h1>
          <p className="qy-lead">{tr(QY.about.carmen, lang)}</p>
        </div>
      </section>
      <section className="qy-block">
        <SectionHead label={tr(QY.ui.path, lang)} />
        {QY.about.path.map((p, i) => <div key={i} className="qy-runway"><span className="qy-num">{p.y}</span><span>{tr(p.t, lang)}<em className="qy-mute">{tr(p.d, lang)}</em></span></div>)}
      </section>
      <section className="qy-block" id="cv">
        <SectionHead label={lang === 'es' ? 'Currículum' : 'Curriculum vitae'} />
        <div className="qy-cv">
          <div>
            <span className="qy-eyebrow qy-mute">{lang === 'es' ? 'Idiomas' : 'Languages'}</span>
            {QY.about.cv.langs.map((l, i) => <div key={i} className="qy-runway qy-cv-row"><span>{tr(l.t, lang)}</span><em className="qy-mute">{tr(l.l, lang)}</em></div>)}
          </div>
          <div>
            <span className="qy-eyebrow qy-mute">{lang === 'es' ? 'Herramientas' : 'Tools'}</span>
            {QY.about.cv.tools.map((g, i) => <div key={i} className="qy-runway qy-cv-row"><span>{tr(g.g, lang)}</span><em className="qy-mute">{g.items.join(' · ')}</em></div>)}
          </div>
        </div>
        <div className="qy-cv-work">
          <div className="qy-proj-spec"><SingleCarousel fit="contain" bg="#efede9" imgs={['assets/opt/cv/illustrator.jpg', 'assets/opt/cv/ai-2.jpg', 'assets/opt/cv/ai-3.webp', 'img/cv-ai-4.png', 'img/cv-ai-5.png']} /><div className="qy-col-card-cap"><span>Illustrator</span><span className="qy-num qy-mute">01</span></div></div>
          <div className="qy-proj-spec"><SingleCarousel fit="contain" bg="#efede9" imgs={[1, 2, 3, 4, 5, 6, 7].map(n => `img/cv-ps-${n}.jpg`)} /><div className="qy-col-card-cap"><span>Photoshop</span><span className="qy-num qy-mute">02</span></div></div>
        </div>
      </section>
      <section className="qy-about qy-about-brand" id="byqiyo">
        <div className="qy-about-txt">
          <span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.about, lang)} · 02</span>
          <img loading="lazy" decoding="async" className="qy-about-logo" src="assets/byqiyo-logo.png" alt="By QiYo" />
          <p className="qy-lead" style={{ textAlign: 'justify' }}>{tr(QY.about.body, lang)}</p>
        </div>
        <div>
          <SectionHead label={lang === 'es' ? 'Pilares' : 'Pillars'} right={n2(QY.about.pillars.length)} />
          {QY.about.pillars.map((p, i) => <div key={i} className="qy-runway"><span className="qy-num qy-mute">{n2(i + 1)}</span><span>{tr(p, lang)}</span></div>)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function Journal() {
  const { lang, go } = useApp();
  return (
    <div>
      <section className="qy-page-head"><span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.journal, lang)}</span></section>
      <section className="qy-journal">
        {QY.journal.map((j, i) => (
          <div key={j.id} className={'qy-jcard' + (i === 0 ? ' first' : '')}>
            <Slot id={j.slot} label={'Diario · ' + tr(j.title, 'es')} ratio={i === 0 ? '16/9' : '3/2'} src={j.img} />
            <span className="qy-eyebrow qy-mute">{n2(i + 1)} · {tr(j.tag, lang)}</span>
            <button className="qy-jcard-t" onClick={() => go('entry', j.id)}>{tr(j.title, lang)} →</button>
            <span className="qy-small qy-mute">{tr(j.body, lang)}</span>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

function Entry({ id }) {
  const { lang, go } = useApp();
  const j = QY.journal.find(x => x.id === id) || QY.journal[0];
  const others = QY.journal.filter(x => x.id !== j.id);
  return (
    <div>
      <article className="qy-entry">
        <button className="qy-eyebrow qy-link" onClick={() => go('journal')}>← {tr(QY.ui.back, lang)}</button>
        <span className="qy-eyebrow qy-mute">{tr(j.tag, lang)}</span>
        <h1 className="qy-h1">{tr(j.title, lang)}</h1>
      </article>
      <section className="qy-c-cover"><Slot id={j.slot} label={'Diario · ' + tr(j.title, 'es')} ratio="16/9" src={j.img} /></section>
      <section className="qy-entry-body"><p className="qy-lead">{tr(j.body, lang)}</p></section>
      <section className="qy-block">
        <SectionHead label={lang === 'es' ? 'Más del diario' : 'More from the journal'} />
        {others.map(o => <button key={o.id} className="qy-jrow" onClick={() => go('entry', o.id)}><span className="qy-eyebrow qy-mute">{tr(o.tag, lang)}</span><span>{tr(o.title, lang)}</span></button>)}
      </section>
      <Footer />
    </div>
  );
}

function Contact() {
  const { lang } = useApp();
  const [sent, setSent] = useState(false);
  const [reason, setReason] = useState(0);
  const L = lang === 'es' ? { name: 'Nombre', email: 'Email', msg: 'Mensaje', ok: 'Gracias. Te respondo en breve.', reason: 'Motivo', h: 'Prensa, colaboraciones, pasarelas, exposiciones y confección a medida.' } : { name: 'Name', email: 'Email', msg: 'Message', ok: 'Thank you. I will reply soon.', reason: 'Reason', h: 'Press, collaborations, runways, exhibitions and made-to-measure.' };
  return (
    <div>
      <section className="qy-contact">
        <div className="qy-contact-l">
          <span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.contact, lang)}</span>
          <h1 className="qy-h2">{L.h}</h1>
          <a className="qy-h2 qy-mail" href={'mailto:' + QY.contact.email}>{QY.contact.email}</a>
          <a className="qy-body" href={QY.contact.instagramUrl} target="_blank" rel="noopener">Instagram {QY.contact.instagram}</a>
        </div>
        <form className="qy-form" onSubmit={e => { e.preventDefault(); setSent(true); }}>
          <div className="qy-field full"><span className="qy-eyebrow qy-mute">{L.reason}</span>
            <div className="qy-chips qy-chips-line">{QY.contact.reasons.map((r, i) => <button type="button" key={i} className={reason === i ? 'on' : ''} onClick={() => setReason(i)}>{tr(r, lang)}</button>)}</div>
          </div>
          <label className="qy-field"><span className="qy-eyebrow qy-mute">{L.name}</span><input required /></label>
          <label className="qy-field"><span className="qy-eyebrow qy-mute">{L.email}</span><input type="email" required /></label>
          <label className="qy-field full"><span className="qy-eyebrow qy-mute">{L.msg}</span><textarea rows="5" required></textarea></label>
          <div className="qy-field full">{sent ? <div className="qy-h3">{L.ok}</div> : <button className="qy-submit" type="submit">{tr(QY.ui.send, lang)} →</button>}</div>
        </form>
      </section>
      <Footer />
    </div>
  );
}

Object.assign(window, { Collections, Collection, About, Journal, Entry, Contact });

function Sculptor({ id }) {
  const { lang, go } = useApp();
  const c = QY.collections.find(x => x.refs && x.refs.some(r => r.id === id));
  const r = c.refs.find(x => x.id === id);
  const next = c.refs[(c.refs.indexOf(r) + 1) % c.refs.length];
  return (
    <div>
      <PageHead back={<button className="qy-eyebrow qy-link" onClick={() => go('collection', c.id)}>← {c.name} · {lang === 'es' ? 'Inspiración' : 'Inspiration'}</button>} eyebrow={tr(r.tag, lang)} title={r.name} />
      <section className="qy-block qy-sc">
        <div className="qy-sc-portrait"><img loading="lazy" decoding="async" src={r.portrait} alt={r.name} /></div>
        <div className="qy-sc-txt">
          {r.body.map((t, k) => { const s = tr(t, lang); const i = k > 0 ? s.indexOf('. ') : -1; return <p key={k} className={k === 0 ? 'qy-lead' : 'qy-body'}>{i > 0 && i < 40 ? <><strong>{s.slice(0, i + 1)}</strong>{s.slice(i + 1)}</> : s}</p>; })}
        </div>
      </section>
      <section className="qy-block qy-sc-works">
        <SectionHead label={lang === 'es' ? 'Obra' : 'Work'} right={n2(r.works.length)} />
        <div className="qy-ed-row">{r.works.map((w, k) => <img loading="lazy" decoding="async" key={k} src={w} alt={'Obra de ' + r.name} />)}</div>
      </section>
      <button className="qy-next" onClick={() => go('sculptor', next.id)}><span className="qy-eyebrow qy-mute">{lang === 'es' ? 'Siguiente escultora' : 'Next sculptor'}</span><span className="qy-next-name">{next.name} →</span></button>
      <Footer />
    </div>
  );
}
window.Sculptor = Sculptor;

function RunwayCarousel({ imgs }) {
  const wrap = React.useRef(null), items = React.useRef([]);
  const [i, setI] = React.useState(0);
  const [x, setX] = React.useState(0);
  const n = imgs.length;
  const center = () => { const w = wrap.current, el = items.current[i]; if (!w || !el) return; setX(w.clientWidth / 2 - (el.offsetLeft + el.offsetWidth / 2)); };
  React.useLayoutEffect(center, [i]);
  React.useEffect(() => { window.addEventListener('resize', center); return () => window.removeEventListener('resize', center); });
  const go = d => setI(k => (k + d + n) % n);
  return (
    <div ref={wrap} style={{ position: 'relative', overflow: 'hidden', touchAction: 'pan-y' }} onTouchStart={e => { wrap.current._tx = e.touches[0].clientX; }} onTouchEnd={e => { const dx = e.changedTouches[0].clientX - (wrap.current._tx ?? e.changedTouches[0].clientX); if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1); }}>
      <div style={{ display: 'flex', gap: 24, alignItems: 'center', transform: `translateX(${x}px)`, transition: 'transform .6s cubic-bezier(.2,.7,.2,1)' }}>
        {imgs.map((it, k) => { const src = it.src || it; const on = k === i;
          const st = { height: 'min(70vh, 640px)', width: 'auto', flex: 'none', display: 'block', objectFit: 'cover', filter: on ? 'none' : 'grayscale(1)', opacity: on ? 1 : 0.55, transition: 'filter .6s, opacity .6s', cursor: on ? 'default' : 'pointer' };
          const p = { key: k, ref: el => (items.current[k] = el), onClick: () => setI(k), style: st };
          return it.video ? <video {...p} src={src} controls={on} playsInline muted loop autoPlay onLoadedMetadata={center} /> : <img loading="lazy" decoding="async" {...p} src={src} alt="" onLoad={center} />; })}
      </div>
      <div style={{ marginTop: 12 }}><CarouselNav i={i} n={n} go={go} /></div>
    </div>
  );
}
window.RunwayCarousel = RunwayCarousel;
