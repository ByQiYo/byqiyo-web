// Precompila el código JSX de la web en web2/app.build.js.
// Uso (una vez): npm install   ·   después: npm run compilar
// Reproduce lo que antes hacía Babel en el navegador (presets react + env).
const babel = require('@babel/core');
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const files = ['web/tweaks-panel.jsx', 'web2/shell.jsx', 'web2/home.jsx', 'web2/pages.jsx', 'web2/sections.jsx',
  'web2/search.jsx', 'web2/legal.jsx', 'web2/mstrip.jsx', 'web2/mobile.jsx', 'web2/app.jsx'];
let out = '/* Archivo generado por tools/compilar.js a partir de los .jsx. No editar a mano. */\n';
for (const f of files) {
  const code = babel.transformSync(fs.readFileSync(path.join(root, f), 'utf8'),
    { filename: f, babelrc: false, configFile: false, presets: ['@babel/preset-react', '@babel/preset-env'], comments: false }).code;
  out += `\n/* --- ${f} --- */\n${code}\n`;
}
fs.writeFileSync(path.join(root, 'web2/app.build.js'), out);
console.log('web2/app.build.js generado (' + (out.length / 1024 | 0) + ' KB)');
