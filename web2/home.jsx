function HeroSlides() {
  const { lang, go, tweaks } = useApp();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = QY.hero.length;
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI(x => (x + 1) % n), tweaks.heroSecs * 1000);
    return () => clearTimeout(t);
  }, [i, paused, tweaks.heroSecs]);
  const cur = QY.hero[i];
  const col = QY.collections.find(c => c.id === cur.col);
  return (
    <section className="qy-hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={e => { e.currentTarget._tx = e.touches[0].clientX; }} onTouchEnd={e => { const dx = e.changedTouches[0].clientX - (e.currentTarget._tx ?? e.changedTouches[0].clientX); if (Math.abs(dx) > 40) setI(x => (x + (dx < 0 ? 1 : -1) + n) % n); }}>
      {QY.hero.map((h, k) => (
        <div key={h.slot} className="qy-hero-slide" style={{ opacity: k === i ? 1 : 0, pointerEvents: k === i ? 'auto' : 'none', zIndex: k === i ? 2 : 1 }}>
          {h.src ? <picture>{h.srcM && <source media="(max-width:700px)" srcSet={h.srcM} />}<img className="qy-hero-img" src={h.src} alt={tr(h.cap, lang)} style={{ '--p': h.pos || 'center', '--pm': h.posM || h.pos || 'center' }} /></picture> : <image-slot id={h.slot} shape="rect" placeholder={'Foto horizontal · ' + tr(h.cap, 'es')}></image-slot>}
        </div>
      ))}
      <div className="qy-hero-cap">
        <span className="qy-eyebrow">{n2(i + 1)} · {tr(cur.cap, lang)}</span>
        <button className="qy-hero-title" onClick={() => go('collection', col.id)}>{col.name}<span>{tr(col.season, lang)} · {tr(QY.ui.view, lang)} →</span></button>
      </div>
      <div className="qy-hero-dots">
        {QY.hero.map((h, k) => (
          <button key={k} onClick={() => setI(k)} className={k === i ? 'on' : ''} aria-label={'Foto ' + (k + 1)}>
            <span>{n2(k + 1)}</span>
            <i>{k === i && <b key={i + '-' + paused} style={{ animationDuration: tweaks.heroSecs + 's', animationPlayState: paused ? 'paused' : 'running' }}></b>}</i>
          </button>
        ))}
      </div>
      <button className="qy-hero-scroll" onClick={() => scrollTo({ top: innerHeight, behavior: 'smooth' })}><span>Scroll</span><i>↓</i></button>
    </section>
  );
}

function Home() { return useWide() <= 1024 ? <HomeApp /> : <HomeDesk />; }
function HomeDesk() {
  const { lang, go } = useApp();
  const stripWide = useWide() > 700;
  const { mobStrip } = useApp();
  return (
    <div>
      <HeroSlides />

      <section className="qy-brand">
        <img loading="lazy" decoding="async" src="assets/byqiyo-logo.png" alt="By QiYo" />
        <h1 className="qy-claim">{tr(QY.home.claim, lang)}</h1>
        <p className="qy-eyebrow qy-mute">{tr(QY.home.claimSub, lang)}</p>
      </section>

      <section className="qy-news">
        <SectionHead label={lang === 'es' ? 'Novedades' : 'News'} right={<button className="qy-link" onClick={() => go('journal')}>{tr(QY.ui.all, lang)} →</button>} />
        <div className="qy-news-grid">
          {QY.news.map((n, k) => (
            <div key={k} className="qy-news-item" role="link" onClick={() => go(...n.to)}>
              <Slot id={n.slot} label={'Novedad · ' + n.tag} ratio="3/2" src={n.src} />
              <span className="qy-eyebrow qy-mute">{n.tag} · {tr(n.date, lang)}</span>
              <h3 className="qy-news-t">{tr(n.t, lang)} →</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="qy-intro" style={{ paddingTop: 0 }}>
        <img loading="lazy" decoding="async" className="qy-intro-q" src="assets/byqiyo-q.png" alt="By QiYo" />
        <div className="qy-intro-txt"><p className="qy-lead">{tr(QY.home.intro, lang)}</p><button className="qy-cta" onClick={() => go('about', 'byqiyo')}>{lang === 'es' ? 'Leer más' : 'Read more'} →</button></div>
      </section>

      {stripWide ? <section className="qy-strip">
        {QY.home.tiles.map((t, k) => (
          <div key={t.slot} className="qy-strip-item" role="link" onClick={() => go(t.go)}>
            <div className="qy-strip-img"><Slot id={t.slot} label={tr(t.eyebrow, 'es') + ' · imagen'} src={t.src} style={{ height: '100%' }} /></div>
            <div className="qy-strip-cap">
              <span className="qy-num qy-mute">{n2(k + 1)}</span>
              <h2 className="qy-strip-t">{t.title || tr(QY.ui.nav[t.go], lang)}</h2>
              <span className="qy-small qy-mute">{tr(t.t, lang)}</span>
              <p className="qy-strip-d qy-small">{tr(t.d, lang)} <span className="qy-strip-go">→</span></p>
            </div>
          </div>
        ))}
      </section> : <MobileStrip variant={mobStrip} />}

      <section className="qy-home-contact">
        <span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.contact, lang)}</span>
        <a className="qy-home-mail" href={'mailto:' + QY.contact.email}>{QY.contact.email}</a>
        <a className="qy-body" href={QY.contact.instagramUrl} target="_blank" rel="noopener">Instagram {QY.contact.instagram}</a>
        <button className="qy-cta" onClick={() => go('contact')}>{lang === 'es' ? 'Escribir un mensaje' : 'Send a message'} →</button>
      </section>
      <Footer />
    </div>
  );
}

function HomeOld() {
  const { lang, go } = useApp();
  const reveal = useReveal();
  return (
    <div>
      <HeroSlides />

      <section className="qy-brand">
        <img loading="lazy" decoding="async" src="assets/byqiyo-logo.png" alt="By QiYo" />
        <p className="qy-lead">{tr(QY.home.statement, lang)}</p>
        <p className="qy-body qy-mute">{tr(QY.home.statementSub, lang)}</p>
      </section>

      <section className="qy-block">
        <SectionHead label={tr(QY.ui.nav.collections, lang)} right={n2(QY.collections.length)} />
        {QY.collections.map((c, k) => (
          <button key={c.id} className="qy-row" onMouseEnter={() => reveal.show(c.reveal)} onMouseLeave={reveal.hide} onClick={() => { reveal.hide(); go('collection', c.id); }}>
            <span className="qy-num qy-mute">{n2(k + 1)}</span>
            <span className="qy-row-title">{c.name}<em>{tr(c.sub, lang)}</em></span>
            <span className="qy-row-meta"><span>{tr(c.season, lang)}</span><span className="qy-mute">{c.count} {tr(QY.ui.looks, lang)}</span></span>
          </button>
        ))}
      </section>

      <section className="qy-block">
        <SectionHead label={tr(QY.ui.editorial, lang) + ' · Rebirth'} right="PV 2027" />
        <div className="qy-ed-grid">
          <div className="a"><Slot id="web-home-ed-1" label="Editorial Rebirth · horizontal" ratio="16/9" /></div>
          <div className="b"><Slot id="web-home-ed-2" label="Editorial · vertical" ratio="4/5" /></div>
          <div className="c"><Slot id="web-home-ed-3" label="Detalle de material" ratio="4/5" /></div>
          <div className="d"><Slot id="web-home-ed-4" label="Editorial · horizontal" ratio="3/2" /></div>
        </div>
      </section>

      <section className="qy-block">
        <SectionHead label={tr(QY.ui.process, lang)} right={n2(QY.home.process.length)} />
        <div className="qy-proc">
          {QY.home.process.map((p, k) => (
            <article key={k}>
              <Slot id={p.slot} label={'Proceso · ' + tr(p.t, 'es')} ratio="4/5" />
              <div className="qy-proc-t"><span className="qy-num qy-mute">{n2(k + 1)}</span><h3>{tr(p.t, lang)}</h3></div>
              <p className="qy-small qy-mute">{tr(p.d, lang)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="qy-block qy-split">
        <div>
          <SectionHead label={tr(QY.ui.runwayList, lang)} />
          {QY.home.runways.map((r, k) => (
            <div key={k} className="qy-runway"><span className="qy-num">{r.year}</span><span>{tr(r.t, lang)}<em className="qy-mute">{r.col} · {tr(r.d, lang)}</em></span></div>
          ))}
        </div>
        <div>
          <SectionHead label={tr(QY.ui.nav.journal, lang)} right={<button className="qy-link" onClick={() => go('journal')}>{tr(QY.ui.all, lang)} →</button>} />
          {QY.journal.map(j => (
            <button key={j.id} className="qy-jrow" onMouseEnter={() => reveal.show(j.img)} onMouseLeave={reveal.hide} onClick={() => { reveal.hide(); go('entry', j.id); }}>
              <span className="qy-eyebrow qy-mute">{tr(j.tag, lang)}</span><span>{tr(j.title, lang)}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="qy-block qy-home-about">
        <SectionHead label={tr(QY.ui.nav.about, lang)} />
        <div className="qy-home-about-grid">
          <Slot id="web-about-portrait" label="Retrato · Carmen Álvarez Feriche" ratio="4/5" src="assets/opt/carmen-retrato.jpg" />
          <div className="qy-home-about-txt">
            <h2 className="qy-h1">{tr(QY.about.lead, lang)}</h2>
            <p className="qy-body">{tr(QY.about.body, lang)}</p>
            <button className="qy-cta" onClick={() => go('about')}>{lang === 'es' ? 'Conocer más' : 'Read more'} →</button>
          </div>
        </div>
      </section>

      <section className="qy-home-contact">
        <span className="qy-eyebrow qy-mute">{tr(QY.ui.nav.contact, lang)}</span>
        <a className="qy-home-mail" href={'mailto:' + QY.contact.email}>{QY.contact.email}</a>
        <a className="qy-body" href={QY.contact.instagramUrl} target="_blank" rel="noopener">Instagram {QY.contact.instagram}</a>
        <button className="qy-cta" onClick={() => go('contact')}>{lang === 'es' ? 'Escribir un mensaje' : 'Send a message'} →</button>
      </section>
      <Footer />
    </div>
  );
}

Object.assign(window, { Home });
