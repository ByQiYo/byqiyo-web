# By QiYo · Web

Portfolio de Carmen Álvarez Feriche. Una sola web que se adapta a ordenador, tablet y móvil.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en github.com (por ejemplo `byqiyo`), público.
2. **Add file → Upload files** y arrastra TODO el contenido de esta carpeta (no la carpeta en sí). Si da error por número de archivos, súbelo en 2–3 tandas (máx. 100 por tanda).
   - Importante: incluye los archivos ocultos `.nojekyll` y `.image-slots.state.json`. En Mac, pulsa Cmd+Mayús+. para verlos en el Finder.
3. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save.**
4. En 1–2 minutos la web estará en `https://TU-USUARIO.github.io/byqiyo/`.

## Dominio propio (opcional)

En **Settings → Pages → Custom domain** escribe tu dominio (p. ej. `byqiyo.com`) y en tu proveedor del dominio añade los registros DNS que indica GitHub. Marca **Enforce HTTPS**.

## Estructura

- `index.html` — página principal
- `web2/` — secciones y textos (`data.js` contiene los textos)
- `assets/opt/`, `img/` — fotos comprimidas
