// Datos del titular. nif/address opcionales: si se rellenan, aparecen en las páginas legales.
QY.legal = { owner: 'Carmen Álvarez Feriche', nif: '', address: '', city: 'Granada', updated: L2('4 de noviembre de 2026', '4 November 2026') };
function L2(es, en) { return { es, en }; }

const LEGAL_PAGES = ['aviso', 'privacidad', 'cookies'];
const LEGAL_T = { aviso: { es: 'Aviso legal', en: 'Legal notice' }, privacidad: { es: 'Política de privacidad', en: 'Privacy policy' }, cookies: { es: 'Política de cookies', en: 'Cookie policy' } };

function legalBody(id, lang, g) {
  const es = lang === 'es';
  const mail = <a href={'mailto:' + QY.contact.email} style={{ textDecoration: 'underline' }}>{QY.contact.email}</a>;
  if (id === 'aviso') return [
    [es ? 'Titular' : 'Owner', <>{es ? 'Este sitio web es titularidad de ' : 'This website is owned by '}{g.owner}{es ? ', persona física y titular de la marca registrada By QiYo' : ', a private individual and owner of the registered trademark By QiYo'}{g.nif ? ', NIF ' + g.nif : ''}{g.address ? (es ? ', con domicilio en ' : ', with address at ') + g.address : (es ? ', con residencia en ' : ', based in ') + g.city}{es ? '. Contacto: ' : '. Contact: '}{mail}.</>],
    [es ? 'Objeto' : 'Purpose', es ? 'By QiYo es la web de portfolio de la diseñadora Carmen Álvarez Feriche. Presenta colecciones, proyectos y procesos de trabajo. No se realizan ventas ni se desarrolla actividad económica a través de este sitio.' : 'By QiYo is the portfolio website of designer Carmen Álvarez Feriche. It presents collections, projects and working processes. No sales or economic activity take place through this site.'],
    [es ? 'Propiedad intelectual' : 'Intellectual property', es ? 'Los diseños, fotografías, textos, modelos 3D y la marca By QiYo son propiedad de su titular o se usan con autorización. Queda prohibida su reproducción, distribución o transformación sin permiso expreso por escrito.' : 'The designs, photographs, texts, 3D models and the By QiYo brand belong to their owner or are used with permission. Reproduction, distribution or transformation without express written permission is prohibited.'],
    [es ? 'Responsabilidad' : 'Liability', es ? 'El titular no se hace responsable del uso indebido de los contenidos ni de los sitios externos enlazados, como Instagram.' : 'The owner is not liable for misuse of the content or for linked external sites such as Instagram.'],
    [es ? 'Legislación aplicable' : 'Applicable law', es ? 'Este aviso se rige por la legislación española.' : 'This notice is governed by Spanish law.'],
  ];
  if (id === 'privacidad') return [
    [es ? 'Responsable' : 'Controller', <>{g.owner}{g.nif ? ', NIF ' + g.nif : ''}{'. '}{g.address || g.city}{'. '}{mail}.</>],
    [es ? 'Qué datos se recogen' : 'What data is collected', es ? 'Solo los que envías a través del formulario de contacto o por email: nombre, dirección de correo y el contenido del mensaje.' : 'Only what you send through the contact form or by email: name, email address and the message content.'],
    [es ? 'Finalidad y base legal' : 'Purpose and legal basis', es ? 'Responder a tu consulta (prensa, colaboraciones, pasarelas, exposiciones o confección a medida). La base legal es tu consentimiento al enviar el mensaje (art. 6.1.a RGPD).' : 'To reply to your enquiry (press, collaborations, runways, exhibitions or made-to-measure). The legal basis is your consent when sending the message (art. 6.1.a GDPR).'],
    [es ? 'Conservación' : 'Retention', es ? 'Los datos se conservan mientras dure la comunicación y, después, durante el tiempo necesario para atender posibles responsabilidades. No se ceden a terceros salvo obligación legal.' : 'Data is kept for as long as the conversation lasts and afterwards only as long as needed to meet legal obligations. It is not shared with third parties unless legally required.'],
    [es ? 'Tus derechos' : 'Your rights', <>{es ? 'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ' : 'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to '}{mail}{es ? '. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).' : '. You may also file a complaint with the Spanish Data Protection Agency (aepd.es).'}</>],
  ];
  return [
    [es ? 'Qué cookies usa esta web' : 'Cookies used', es ? 'Solo almacenamiento técnico necesario para el funcionamiento: recordar el idioma, el modo claro u oscuro y la última página visitada. Se guarda en tu navegador y no identifica a nadie.' : 'Only technical storage needed for the site to work: remembering the language, light or dark mode and the last page visited. It stays in your browser and does not identify anyone.'],
    [es ? 'Analítica y terceros' : 'Analytics and third parties', es ? 'No se usan cookies de analítica, publicidad ni redes sociales. Las tipografías se cargan desde Google Fonts, que puede registrar tu dirección IP de forma técnica.' : 'No analytics, advertising or social media cookies are used. Fonts are loaded from Google Fonts, which may technically log your IP address.'],
    [es ? 'Consentimiento' : 'Consent', es ? 'Al tratarse solo de almacenamiento técnico, no es necesario pedir consentimiento (art. 22.2 LSSI-CE). Si en el futuro se añade analítica, se mostrará un aviso para aceptarla o rechazarla.' : 'As only technical storage is used, consent is not required (art. 22.2 LSSI-CE). If analytics are added in future, a banner will let you accept or reject them.'],
    [es ? 'Cómo borrarlas' : 'How to delete them', es ? 'Puedes eliminar estos datos en cualquier momento desde la configuración de tu navegador.' : 'You can delete this data at any time from your browser settings.'],
  ];
}

function Legal({ id }) {
  const { lang, go } = useApp();
  const k = LEGAL_PAGES.includes(id) ? id : 'aviso';
  const g = QY.legal;
  return (
    <div>
      <PageHead eyebrow={'Legal · ' + (lang === 'es' ? 'Actualizado ' : 'Updated ') + tr(g.updated, lang)} title={tr(LEGAL_T[k], lang)} />
      <section style={{ padding: '0 var(--g) clamp(64px,8vw,120px)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)', gap: 'clamp(24px,4vw,64px)' }} className="qy-legal">
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'start', position: 'sticky', top: 100 }}>
          {LEGAL_PAGES.map(p => <button key={p} className="qy-eyebrow qy-link" style={{ opacity: p === k ? 1 : .45 }} onClick={() => go('legal', p)}>{tr(LEGAL_T[p], lang)}</button>)}
        </nav>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {legalBody(k, lang, g).map(([h, b], i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <h2 className="qy-h3">{h}</h2>
              <p className="qy-body">{b}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

function NotFound() {
  const { lang, go } = useApp();
  const es = lang === 'es';
  return (
    <div>
      <section style={{ minHeight: '78vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 24, padding: '140px var(--g) clamp(48px,6vw,96px)' }}>
        <span className="qy-eyebrow qy-mute">Error 404</span>
        <h1 style={{ fontSize: 'clamp(64px,14vw,220px)', fontWeight: 500, letterSpacing: '-.05em', lineHeight: .9 }}>{es ? 'Sin rastro.' : 'No trace.'}</h1>
        <p className="qy-lead qy-mute" style={{ maxWidth: '32ch' }}>{es ? 'Esta página no existe o ha cambiado de sitio.' : 'This page does not exist or has moved.'}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28 }}>
          <button className="qy-eyebrow qy-link" onClick={() => go('home')}>← {tr(QY.ui.nav.home, lang)}</button>
          <button className="qy-eyebrow qy-link" onClick={() => go('collections')}>{tr(QY.ui.nav.collections, lang)} →</button>
          <button className="qy-eyebrow qy-link" onClick={() => go('contact')}>{tr(QY.ui.nav.contact, lang)} →</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

Object.assign(window, { Legal, NotFound, LEGAL_PAGES, LEGAL_T });
