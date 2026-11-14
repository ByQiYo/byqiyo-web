// Alternativas móviles a la tira de secciones (hover → foco por scroll / tacto)
function useCenterActive(n, axis, scroller) {
  const refs = React.useRef([]);
  const [a, setA] = React.useState(0);
  React.useEffect(() => {
    if (axis === 'y') {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setA(+e.target.dataset.k); }), { rootMargin: '-48% 0px -48% 0px' });
      refs.current.forEach(el => el && io.observe(el));
      return () => io.disconnect();
    }
    const sc = scroller.current; if (!sc) return;
    const f = () => { const c = sc.scrollLeft + sc.clientWidth / 2; let best = 0, d = 1e9; refs.current.forEach((el, k) => { if (!el) return; const m = Math.abs(el.offsetLeft + el.offsetWidth / 2 - c); if (m < d) { d = m; best = k; } }); setA(best); };
    f(); sc.addEventListener('scroll', f, { passive: true }); return () => sc.removeEventListener('scroll', f);
  }, [n, axis]);
  return [a, setA, refs];
}

function MStripImg({ t, on, h }) {
  return <div className="qy-ms-img" style={{ height: h, filter: on ? 'none' : 'grayscale(1)', opacity: on ? 1 : .7 }}>{t.src ? <img src={t.src} alt="" loading="lazy" /> : <Slot id={t.slot} label="imagen" style={{ height: '100%' }} />}</div>;
}

function MStripFoco({ tiles, lang, go }) {
  const [a, , refs] = useCenterActive(tiles.length, 'y');
  return (
    <section className="qy-ms qy-ms-foco">
      {tiles.map((t, k) => { const on = k === a; return (
        <div key={t.slot} ref={el => (refs.current[k] = el)} data-k={k} className={'qy-ms-f' + (on ? ' on' : '')} role="link" onClick={() => go(t.go)}>
          <MStripImg t={t} on={on} h="64svh" />
          <div className="qy-ms-f-cap">
            <span className="qy-num">{n2(k + 1)} / {n2(tiles.length)}</span>
            <h2>{t.title || tr(QY.ui.nav[t.go], lang)}</h2>
            <span className="qy-ms-f-sub">{tr(t.t, lang)} →</span>
          </div>
        </div>); })}
    </section>
  );
}

function MStripAcordeon({ tiles, lang, go }) {
  const [a, setA, refs] = useCenterActive(tiles.length, 'y');
  return (
    <section className="qy-ms qy-ms-acc">
      {tiles.map((t, k) => { const on = k === a; return (
        <div key={t.slot} ref={el => (refs.current[k] = el)} data-k={k} className={'qy-ms-a' + (on ? ' on' : '')} role="link" onClick={() => on ? go(t.go) : setA(k)}>
          <MStripImg t={t} on={on} h={on ? '58svh' : '84px'} />
          <div className="qy-ms-a-cap">
            <span className="qy-num">{n2(k + 1)}</span>
            <h2>{t.title || tr(QY.ui.nav[t.go], lang)}</h2>
            <span className="qy-ms-a-go">{on ? (lang === 'es' ? 'Entrar →' : 'Enter →') : '+'}</span>
          </div>
        </div>); })}
    </section>
  );
}

function MStripCarrusel({ tiles, lang, go }) {
  const sc = React.useRef(null);
  const [a, , refs] = useCenterActive(tiles.length, 'x', sc);
  const t = tiles[a];
  const to = k => { const el = refs.current[k], s = sc.current; if (el && s) s.scrollTo({ left: el.offsetLeft - (s.clientWidth - el.offsetWidth) / 2, behavior: 'smooth' }); };
  return (
    <section className="qy-ms qy-ms-car">
      <div ref={sc} className="qy-ms-c-track">
        {tiles.map((x, k) => { const on = k === a; return (
          <div key={x.slot} ref={el => (refs.current[k] = el)} className={'qy-ms-c' + (on ? ' on' : '')} onClick={() => on ? go(x.go) : to(k)}>
            <MStripImg t={x} on={on} h="112vw" />
          </div>); })}
      </div>
      <div className="qy-ms-c-cap">
        <div className="qy-ms-c-row"><span className="qy-num">{n2(a + 1)} / {n2(tiles.length)}</span><span className="qy-ms-dots">{tiles.map((_, k) => <button key={k} className={k === a ? 'on' : ''} onClick={() => to(k)} aria-label={'Sección ' + (k + 1)}></button>)}</span></div>
        <h2>{t.title || tr(QY.ui.nav[t.go], lang)}</h2>
        <button className="qy-cta" onClick={() => go(t.go)}>{tr(t.t, lang)} →</button>
      </div>
    </section>
  );
}

function MobileStrip({ variant }) {
  const { lang, go } = useApp();
  const tiles = QY.home.tiles;
  const C = { foco: MStripFoco, acordeon: MStripAcordeon, carrusel: MStripCarrusel }[variant] || MStripFoco;
  return <C tiles={tiles} lang={lang} go={go} />;
}

Object.assign(window, { MobileStrip });
