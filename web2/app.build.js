/* Archivo generado por tools/compilar.js a partir de los .jsx. No editar a mano. */

/* --- web/tweaks-panel.jsx --- */
"use strict";

function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var __TWEAKS_STYLE = "\n  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;\n    max-height:calc(100vh - 32px);display:flex;flex-direction:column;\n    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;\n    background:rgba(250,249,247,.78);color:#29261b;\n    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);\n    border:.5px solid rgba(255,255,255,.6);border-radius:14px;\n    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);\n    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}\n  .twk-hd{display:flex;align-items:center;justify-content:space-between;\n    padding:10px 8px 10px 14px;cursor:move;user-select:none}\n  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}\n  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);\n    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}\n  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}\n  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;\n    overflow-y:auto;overflow-x:hidden;min-height:0;\n    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}\n  .twk-body::-webkit-scrollbar{width:8px}\n  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}\n  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;\n    border:2px solid transparent;background-clip:content-box}\n  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);\n    border:2px solid transparent;background-clip:content-box}\n  .twk-row{display:flex;flex-direction:column;gap:5px}\n  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}\n  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;\n    color:rgba(41,38,27,.72)}\n  .twk-lbl>span:first-child{font-weight:500}\n  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}\n\n  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;\n    color:rgba(41,38,27,.45);padding:10px 0 0}\n  .twk-sect:first-child{padding-top:0}\n\n  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;\n    border:.5px solid rgba(0,0,0,.1);border-radius:7px;\n    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}\n  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}\n  select.twk-field{padding-right:22px;\n    background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>\");\n    background-repeat:no-repeat;background-position:right 8px center}\n\n  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;\n    border-radius:999px;background:rgba(0,0,0,.12);outline:none}\n  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;\n    width:14px;height:14px;border-radius:50%;background:#fff;\n    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}\n  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;\n    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}\n\n  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;\n    background:rgba(0,0,0,.06);user-select:none}\n  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;\n    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);\n    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}\n  .twk-seg.dragging .twk-seg-thumb{transition:none}\n  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;\n    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;\n    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;\n    overflow-wrap:anywhere}\n\n  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;\n    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}\n  .twk-toggle[data-on=\"1\"]{background:#34c759}\n  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;\n    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}\n  .twk-toggle[data-on=\"1\"] i{transform:translateX(14px)}\n\n  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;\n    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}\n  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;\n    user-select:none;padding-right:8px}\n  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;\n    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;\n    outline:none;color:inherit;-moz-appearance:textfield}\n  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{\n    -webkit-appearance:none;margin:0}\n  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}\n\n  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;\n    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}\n  .twk-btn:hover{background:rgba(0,0,0,.88)}\n  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}\n  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}\n\n  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;\n    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;\n    background:transparent;flex-shrink:0}\n  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}\n  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}\n  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}\n\n  .twk-chips{display:flex;gap:6px}\n  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;\n    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;\n    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);\n    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}\n  .twk-chip:hover{transform:translateY(-1px);\n    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}\n  .twk-chip[data-on=\"1\"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),\n    0 2px 6px rgba(0,0,0,.15)}\n  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;\n    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}\n  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}\n  .twk-chip>span>i:first-child{box-shadow:none}\n  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;\n    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}\n";
function useTweaks(defaults) {
  var _React$useState = React.useState(defaults),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    values = _React$useState2[0],
    setValues = _React$useState2[1];
  var setTweak = React.useCallback(function (keyOrEdits, val) {
    var edits = _typeof(keyOrEdits) === 'object' && keyOrEdits !== null ? keyOrEdits : _defineProperty({}, keyOrEdits, val);
    setValues(function (prev) {
      return _objectSpread(_objectSpread({}, prev), edits);
    });
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits: edits
    }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel(_ref2) {
  var _ref2$title = _ref2.title,
    title = _ref2$title === void 0 ? 'Tweaks' : _ref2$title,
    children = _ref2.children;
  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    open = _React$useState4[0],
    setOpen = _React$useState4[1];
  var dragRef = React.useRef(null);
  var offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  var PAD = 16;
  var clampToViewport = React.useCallback(function () {
    var panel = dragRef.current;
    if (!panel) return;
    var w = panel.offsetWidth,
      h = panel.offsetHeight;
    var maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    var maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(function () {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return function () {
        return window.removeEventListener('resize', clampToViewport);
      };
    }
    var ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return function () {
      return ro.disconnect();
    };
  }, [open, clampToViewport]);
  React.useEffect(function () {
    var onMsg = function onMsg(e) {
      var _e$data;
      var t = e === null || e === void 0 || (_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return function () {
      return window.removeEventListener('message', onMsg);
    };
  }, []);
  var dismiss = function dismiss() {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  var onDragStart = function onDragStart(e) {
    var panel = dragRef.current;
    if (!panel) return;
    var r = panel.getBoundingClientRect();
    var sx = e.clientX,
      sy = e.clientY;
    var startRight = window.innerWidth - r.right;
    var startBottom = window.innerHeight - r.bottom;
    var move = function move(ev) {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    var _up = function up() {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', _up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', _up);
  };
  React.useEffect(function () {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return function () {
      return document.documentElement.removeAttribute('data-om-starter');
    };
  }, []);
  if (!open) return null;
  return React.createElement(React.Fragment, null, React.createElement("style", null, __TWEAKS_STYLE), React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, React.createElement("b", null, title), React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    },
    onClick: dismiss
  }, "\u2715")), React.createElement("div", {
    className: "twk-body"
  }, children)));
}
function TweakSection(_ref3) {
  var label = _ref3.label,
    children = _ref3.children;
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow(_ref4) {
  var label = _ref4.label,
    value = _ref4.value,
    children = _ref4.children,
    _ref4$inline = _ref4.inline,
    inline = _ref4$inline === void 0 ? false : _ref4$inline;
  return React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label), value != null && React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}
function TweakSlider(_ref5) {
  var label = _ref5.label,
    value = _ref5.value,
    _ref5$min = _ref5.min,
    min = _ref5$min === void 0 ? 0 : _ref5$min,
    _ref5$max = _ref5.max,
    max = _ref5$max === void 0 ? 100 : _ref5$max,
    _ref5$step = _ref5.step,
    step = _ref5$step === void 0 ? 1 : _ref5$step,
    _ref5$unit = _ref5.unit,
    unit = _ref5$unit === void 0 ? '' : _ref5$unit,
    _onChange = _ref5.onChange;
  return React.createElement(TweakRow, {
    label: label,
    value: "".concat(value).concat(unit)
  }, React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: function onChange(e) {
      return _onChange(Number(e.target.value));
    }
  }));
}
function TweakToggle(_ref6) {
  var label = _ref6.label,
    value = _ref6.value,
    onChange = _ref6.onChange;
  return React.createElement("div", {
    className: "twk-row twk-row-h"
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label)), React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: function onClick() {
      return onChange(!value);
    }
  }, React.createElement("i", null)));
}
function TweakRadio(_ref7) {
  var _$3$options$length;
  var label = _ref7.label,
    value = _ref7.value,
    options = _ref7.options,
    _onChange2 = _ref7.onChange;
  var trackRef = React.useRef(null);
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    dragging = _React$useState6[0],
    setDragging = _React$useState6[1];
  var valueRef = React.useRef(value);
  valueRef.current = value;
  var labelLen = function labelLen(o) {
    return String(_typeof(o) === 'object' ? o.label : o).length;
  };
  var maxLen = options.reduce(function (m, o) {
    return Math.max(m, labelLen(o));
  }, 0);
  var fitsAsSegments = maxLen <= ((_$3$options$length = {
    2: 16,
    3: 10
  }[options.length]) !== null && _$3$options$length !== void 0 ? _$3$options$length : 0);
  if (!fitsAsSegments) {
    var resolve = function resolve(s) {
      var m = options.find(function (o) {
        return String(_typeof(o) === 'object' ? o.value : o) === s;
      });
      return m === undefined ? s : _typeof(m) === 'object' ? m.value : m;
    };
    return React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: function onChange(s) {
        return _onChange2(resolve(s));
      }
    });
  }
  var opts = options.map(function (o) {
    return _typeof(o) === 'object' ? o : {
      value: o,
      label: o
    };
  });
  var idx = Math.max(0, opts.findIndex(function (o) {
    return o.value === value;
  }));
  var n = opts.length;
  var segAt = function segAt(clientX) {
    var r = trackRef.current.getBoundingClientRect();
    var inner = r.width - 4;
    var i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  var onPointerDown = function onPointerDown(e) {
    setDragging(true);
    var v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) _onChange2(v0);
    var move = function move(ev) {
      if (!trackRef.current) return;
      var v = segAt(ev.clientX);
      if (v !== valueRef.current) _onChange2(v);
    };
    var _up2 = function up() {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', _up2);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', _up2);
  };
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: "calc(2px + ".concat(idx, " * (100% - 4px) / ").concat(n, ")"),
      width: "calc((100% - 4px) / ".concat(n, ")")
    }
  }), opts.map(function (o) {
    return React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": o.value === value
    }, o.label);
  })));
}
function TweakSelect(_ref8) {
  var label = _ref8.label,
    value = _ref8.value,
    options = _ref8.options,
    _onChange3 = _ref8.onChange;
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: function onChange(e) {
      return _onChange3(e.target.value);
    }
  }, options.map(function (o) {
    var v = _typeof(o) === 'object' ? o.value : o;
    var l = _typeof(o) === 'object' ? o.label : o;
    return React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText(_ref9) {
  var label = _ref9.label,
    value = _ref9.value,
    placeholder = _ref9.placeholder,
    _onChange4 = _ref9.onChange;
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: function onChange(e) {
      return _onChange4(e.target.value);
    }
  }));
}
function TweakNumber(_ref0) {
  var label = _ref0.label,
    value = _ref0.value,
    min = _ref0.min,
    max = _ref0.max,
    _ref0$step = _ref0.step,
    step = _ref0$step === void 0 ? 1 : _ref0$step,
    _ref0$unit = _ref0.unit,
    unit = _ref0$unit === void 0 ? '' : _ref0$unit,
    _onChange5 = _ref0.onChange;
  var clamp = function clamp(n) {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  var startRef = React.useRef({
    x: 0,
    val: 0
  });
  var onScrubStart = function onScrubStart(e) {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    var decimals = (String(step).split('.')[1] || '').length;
    var move = function move(ev) {
      var dx = ev.clientX - startRef.current.x;
      var raw = startRef.current.val + dx * step;
      var snapped = Math.round(raw / step) * step;
      _onChange5(clamp(Number(snapped.toFixed(decimals))));
    };
    var _up3 = function up() {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', _up3);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', _up3);
  };
  return React.createElement("div", {
    className: "twk-num"
  }, React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: function onChange(e) {
      return _onChange5(clamp(Number(e.target.value)));
    }
  }), unit && React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function __twkIsLight(hex) {
  var h = String(hex).replace('#', '');
  var x = h.length === 3 ? h.replace(/./g, function (c) {
    return c + c;
  }) : h.padEnd(6, '0');
  var n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  var r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
var __TwkCheck = function __TwkCheck(_ref1) {
  var light = _ref1.light;
  return React.createElement("svg", {
    viewBox: "0 0 14 14",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M3 7.2 5.8 10 11 4.2",
    fill: "none",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
  }));
};
function TweakColor(_ref10) {
  var label = _ref10.label,
    value = _ref10.value,
    options = _ref10.options,
    _onChange6 = _ref10.onChange;
  if (!options || !options.length) {
    return React.createElement("div", {
      className: "twk-row twk-row-h"
    }, React.createElement("div", {
      className: "twk-lbl"
    }, React.createElement("span", null, label)), React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: function onChange(e) {
        return _onChange6(e.target.value);
      }
    }));
  }
  var key = function key(o) {
    return String(JSON.stringify(o)).toLowerCase();
  };
  var cur = key(value);
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map(function (o, i) {
    var colors = Array.isArray(o) ? o : [o];
    var _colors = _toArray(colors),
      hero = _colors[0],
      rest = _arrayLikeToArray(_colors).slice(1);
    var sup = rest.slice(0, 4);
    var on = key(o) === cur;
    return React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: function onClick() {
        return _onChange6(o);
      }
    }, sup.length > 0 && React.createElement("span", null, sup.map(function (c, j) {
      return React.createElement("i", {
        key: j,
        style: {
          background: c
        }
      });
    })), on && React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton(_ref11) {
  var label = _ref11.label,
    onClick = _ref11.onClick,
    _ref11$secondary = _ref11.secondary,
    secondary = _ref11$secondary === void 0 ? false : _ref11$secondary;
  return React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks: useTweaks,
  TweaksPanel: TweaksPanel,
  TweakSection: TweakSection,
  TweakRow: TweakRow,
  TweakSlider: TweakSlider,
  TweakToggle: TweakToggle,
  TweakRadio: TweakRadio,
  TweakSelect: TweakSelect,
  TweakText: TweakText,
  TweakNumber: TweakNumber,
  TweakColor: TweakColor,
  TweakButton: TweakButton
});

/* --- web2/shell.jsx --- */
"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _React = React,
  useState = _React.useState,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  createContext = _React.createContext,
  useContext = _React.useContext;
var THEMES = {
  paper: {
    bg: '#FFFFFF',
    fg: '#0A0A0A',
    mute: '#6F6F6F',
    line: '#D8D8D8'
  },
  navy: {
    bg: '#00253D',
    fg: '#FFFFFF',
    mute: '#B8D9EC',
    line: 'rgba(184,217,236,.3)'
  },
  ink: {
    bg: '#0A0A0A',
    fg: '#F2F2F2',
    mute: '#9A9A9A',
    line: '#2A2A2A'
  }
};
var useTh = function useTh() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'paper';
  var _useApp = useApp(),
    dark = _useApp.dark;
  return THEMES[name === 'paper' && dark ? 'ink' : name];
};
var AppCtx = createContext(null);
var useApp = function useApp() {
  return useContext(AppCtx);
};
var tr = function tr(v, lang) {
  var _v$lang;
  return v && _typeof(v) === 'object' && !Array.isArray(v) ? (_v$lang = v[lang]) !== null && _v$lang !== void 0 ? _v$lang : v.es : v;
};
var n2 = function n2(i) {
  return String(i).padStart(2, '0');
};
function useScrollProgress(ref) {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    p = _useState2[0],
    setP = _useState2[1];
  useEffect(function () {
    var raf = 0;
    var calc = function calc() {
      raf = 0;
      var el = ref.current;
      if (!el) return;
      var r = el.getBoundingClientRect();
      var t = r.height - innerHeight;
      setP(t > 0 ? Math.min(1, Math.max(0, -r.top / t)) : 0);
    };
    var on = function on() {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    addEventListener('scroll', on, {
      passive: true
    });
    addEventListener('resize', on);
    return function () {
      removeEventListener('scroll', on);
      removeEventListener('resize', on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return p;
}
function useWide() {
  var _useState3 = useState(innerWidth),
    _useState4 = _slicedToArray(_useState3, 2),
    w = _useState4[0],
    setW = _useState4[1];
  useEffect(function () {
    var on = function on() {
      return setW(innerWidth);
    };
    addEventListener('resize', on);
    return function () {
      return removeEventListener('resize', on);
    };
  }, []);
  return w;
}
function Slot(_ref) {
  var id = _ref.id,
    label = _ref.label,
    ratio = _ref.ratio,
    src = _ref.src,
    _ref$fit = _ref.fit,
    fit = _ref$fit === void 0 ? 'cover' : _ref$fit,
    style = _ref.style;
  return React.createElement("div", {
    className: "qy-slot",
    style: _objectSpread({
      aspectRatio: ratio
    }, style)
  }, React.createElement("image-slot", _extends({
    id: id,
    shape: "rect",
    fit: fit,
    placeholder: label
  }, src ? {
    src: src
  } : {})));
}
function LangSwitch() {
  var _useApp2 = useApp(),
    lang = _useApp2.lang,
    setLang = _useApp2.setLang;
  return React.createElement("span", {
    className: "qy-lang"
  }, React.createElement("button", {
    className: lang === 'es' ? 'on' : '',
    onClick: function onClick() {
      return setLang('es');
    }
  }, "ES"), React.createElement("button", {
    className: lang === 'en' ? 'on' : '',
    onClick: function onClick() {
      return setLang('en');
    }
  }, "EN"));
}
function ModeSwitch() {
  var _useApp3 = useApp(),
    dark = _useApp3.dark,
    setDark = _useApp3.setDark;
  return React.createElement("span", {
    className: "qy-lang qy-mode"
  }, React.createElement("button", {
    className: !dark ? 'on' : '',
    onClick: function onClick() {
      return setDark(false);
    },
    "aria-label": "Modo claro"
  }, "\u2600\uFE0E"), React.createElement("button", {
    className: dark ? 'on' : '',
    onClick: function onClick() {
      return setDark(true);
    },
    "aria-label": "Modo oscuro"
  }, "\u263E"));
}
var NAV_PARENT = {
  sculptor: 'collections',
  collection: 'collections',
  project: 'projects',
  labcat: 'lab',
  labsub: 'lab',
  entry: 'journal'
};
function navMenu(lang) {
  return [{
    k: 'collections',
    subs: QY.collections.map(function (c) {
      return {
        label: c.name,
        note: tr(c.season, lang),
        to: ['collection', c.id]
      };
    })
  }, {
    k: 'projects',
    subs: QY.projects.map(function (p) {
      return {
        label: p.name,
        note: tr(p.year, lang),
        to: ['project', p.id]
      };
    })
  }, {
    k: 'lab',
    subs: (window.LAB ? LAB.tipos : []).map(function (t) {
      return {
        label: t[lang] || t.es,
        note: t.gallery ? t.gallery.length + ' ' + (lang === 'es' ? 'detalles' : 'details') : t.subs ? t.subs.map(function (x) {
          return x[lang] || x.es;
        }).join(' · ') : LAB.pieces.filter(function (p) {
          return p.tipo === t.id;
        }).length + ' ' + (lang === 'es' ? 'piezas' : 'pieces'),
        to: ['labcat', t.id]
      };
    })
  }, {
    k: 'about'
  }, {
    k: 'journal'
  }, {
    k: 'contact'
  }];
}
function Nav() {
  return useWide() <= 1024 ? React.createElement(MobileNav, null) : React.createElement(DesktopNav, null);
}
function DesktopNav() {
  var _useApp4 = useApp(),
    lang = _useApp4.lang,
    go = _useApp4.go,
    page = _useApp4.page;
  var menu = navMenu(lang);
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    hover = _useState8[0],
    setHover = _useState8[1];
  var wide = useWide() > 760;
  var active = NAV_PARENT[page] || page;
  var nav = function nav(to) {
    setOpen(false);
    setHover(null);
    go.apply(void 0, _toConsumableArray(to));
  };
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    sOpen = _useState0[0],
    setSOpen = _useState0[1];
  useEffect(function () {
    var k = function k(e) {
      if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName) || (e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSOpen(true);
      }
    };
    addEventListener('keydown', k);
    return function () {
      return removeEventListener('keydown', k);
    };
  }, []);
  var _useState1 = useState(false),
    _useState10 = _slicedToArray(_useState1, 2),
    overHero = _useState10[0],
    setOverHero = _useState10[1];
  useEffect(function () {
    var f = function f() {
      return setOverHero(page === 'home' && scrollY < innerHeight - 80);
    };
    f();
    addEventListener('scroll', f, {
      passive: true
    });
    addEventListener('resize', f);
    return function () {
      removeEventListener('scroll', f);
      removeEventListener('resize', f);
    };
  }, [page]);
  return React.createElement(React.Fragment, null, React.createElement("header", {
    className: 'qy-nav' + (overHero && !open ? ' on-hero' : ''),
    style: open ? {
      mixBlendMode: 'normal'
    } : null
  }, React.createElement("button", {
    className: "qy-logo",
    onClick: function onClick() {
      return nav(['home']);
    },
    "aria-label": "By QiYo"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: "assets/byqiyo-logo.png",
    alt: "By QiYo"
  })), wide ? React.createElement("nav", {
    className: "qy-links"
  }, menu.map(function (m) {
    return React.createElement("div", {
      key: m.k,
      className: "qy-nav-item",
      onMouseEnter: function onMouseEnter() {
        return setHover(m.k);
      },
      onMouseLeave: function onMouseLeave() {
        return setHover(null);
      }
    }, React.createElement("button", {
      className: active === m.k || hover === m.k ? 'on' : '',
      onClick: function onClick() {
        return nav([m.k]);
      }
    }, tr(QY.ui.nav[m.k], lang)), m.subs && hover === m.k && React.createElement("div", {
      className: "qy-dd"
    }, m.subs.map(function (s) {
      return React.createElement("button", {
        key: s.label,
        onClick: function onClick() {
          return nav(s.to);
        }
      }, s.label);
    })));
  }), React.createElement(SearchButton, {
    onOpen: function onOpen() {
      return setSOpen(true);
    }
  }), React.createElement(LangSwitch, null), React.createElement(ModeSwitch, null)) : React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, React.createElement(SearchButton, {
    onOpen: function onOpen() {
      setOpen(false);
      setSOpen(true);
    }
  }), React.createElement("button", {
    className: "qy-menu-btn",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, open ? lang === 'es' ? 'Cerrar' : 'Close' : 'Menú'))), sOpen && React.createElement(SearchOverlay, {
    onClose: function onClose() {
      return setSOpen(false);
    }
  }), !wide && open && React.createElement("div", {
    className: "qy-mobile-menu"
  }, menu.map(function (m) {
    return React.createElement("div", {
      key: m.k,
      className: "qy-mm-group"
    }, React.createElement("button", {
      onClick: function onClick() {
        return nav([m.k]);
      }
    }, tr(QY.ui.nav[m.k], lang)), m.subs && React.createElement("div", {
      className: "qy-mm-subs"
    }, m.subs.map(function (s) {
      return React.createElement("button", {
        key: s.label,
        onClick: function onClick() {
          return nav(s.to);
        }
      }, s.label);
    })));
  }), React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 16
    }
  }, React.createElement(LangSwitch, null), React.createElement(ModeSwitch, null))));
}
function Footer(_ref2) {
  var _ref2$theme = _ref2.theme,
    theme = _ref2$theme === void 0 ? 'paper' : _ref2$theme;
  var _useApp5 = useApp(),
    lang = _useApp5.lang,
    go = _useApp5.go;
  var th = useTh(theme);
  return React.createElement("footer", {
    className: "qy-footer",
    style: {
      background: th.bg,
      color: th.fg,
      borderTop: "1px solid ".concat(th.line)
    }
  }, React.createElement("div", {
    className: "qy-footer-brand"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: "assets/byqiyo-logo.png",
    alt: "By QiYo",
    style: {
      filter: th.bg !== '#FFFFFF' ? 'invert(1)' : 'none'
    }
  }), React.createElement("p", {
    style: {
      color: th.mute
    }
  }, tr(QY.home.claim, lang), " ", tr(QY.home.claimSub, lang), ".")), React.createElement("div", {
    className: "qy-footer-col"
  }, React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute
    }
  }, "Web"), ['collections', 'projects', 'lab', 'process'].map(function (k) {
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return go(k);
      }
    }, tr(QY.ui.nav[k], lang));
  }), QY.collections.map(function (c) {
    return React.createElement("button", {
      key: 'r' + c.id,
      onClick: function onClick() {
        return go('runway', c.id);
      }
    }, tr(QY.ui.nav.runway, lang) + ' ' + c.name);
  }), ['about', 'journal', 'contact'].map(function (k) {
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return go(k);
      }
    }, tr(QY.ui.nav[k], lang));
  })), React.createElement("div", {
    className: "qy-footer-col"
  }, React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute
    }
  }, tr(QY.ui.nav.contact, lang)), React.createElement("a", {
    href: 'mailto:' + QY.contact.email
  }, QY.contact.email), React.createElement("a", {
    href: QY.contact.instagramUrl,
    target: "_blank",
    rel: "noopener"
  }, "Instagram ", QY.contact.instagram)), React.createElement("div", {
    className: "qy-footer-base",
    style: {
      color: th.mute,
      borderColor: th.line
    }
  }, React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px 20px'
    }
  }, React.createElement("span", null, "\xA9 2026 By QiYo \xB7 ", QY.ui.author), LEGAL_PAGES.map(function (p) {
    return React.createElement("button", {
      key: p,
      className: "qy-link",
      onClick: function onClick() {
        return go('legal', p);
      }
    }, tr(LEGAL_T[p], lang));
  })), React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, React.createElement("a", {
    href: QY.contact.instagramUrl,
    target: "_blank",
    rel: "noopener",
    className: "qy-link",
    style: {
      color: th.fg
    }
  }, "Instagram ", QY.contact.instagram, " \u2197"), React.createElement(LangSwitch, null), React.createElement(ModeSwitch, null))));
}
var RevealCtx = createContext({
  show: function show() {},
  hide: function hide() {}
});
function RevealLayer(_ref3) {
  var children = _ref3.children,
    enabled = _ref3.enabled;
  var box = useRef(null);
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    img = _useState12[0],
    setImg = _useState12[1];
  var pos = useRef({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0
  });
  useEffect(function () {
    if (!enabled) return;
    var raf;
    var move = function move(e) {
      pos.current.tx = e.clientX;
      pos.current.ty = e.clientY;
    };
    var _tick = function tick() {
      var p = pos.current;
      p.x += (p.tx - p.x) * 0.14;
      p.y += (p.ty - p.y) * 0.14;
      if (box.current) box.current.style.transform = "translate(".concat(p.x + 24, "px, ").concat(p.y, "px) translateY(-50%)");
      raf = requestAnimationFrame(_tick);
    };
    addEventListener('mousemove', move);
    _tick();
    return function () {
      removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);
  var api = {
    show: function show(src) {
      return enabled && setImg(src);
    },
    hide: function hide() {
      return setImg(null);
    }
  };
  return React.createElement(RevealCtx.Provider, {
    value: api
  }, children, React.createElement("div", {
    ref: box,
    className: "qy-reveal",
    style: {
      opacity: img ? 1 : 0
    }
  }, img && React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: img,
    alt: ""
  })));
}
var useReveal = function useReveal() {
  return useContext(RevealCtx);
};
function HScroll(_ref4) {
  var children = _ref4.children,
    _ref4$theme = _ref4.theme,
    theme = _ref4$theme === void 0 ? 'paper' : _ref4$theme,
    label = _ref4.label;
  var outer = useRef(null),
    track = useRef(null);
  var _useState13 = useState({
      tw: 0,
      vw: innerWidth
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    dims = _useState14[0],
    setDims = _useState14[1];
  var p = useScrollProgress(outer);
  var wide = useWide() > 760;
  useEffect(function () {
    var m = function m() {
      return track.current && setDims({
        tw: track.current.scrollWidth,
        vw: innerWidth
      });
    };
    m();
    var t = setTimeout(m, 500);
    addEventListener('resize', m);
    return function () {
      clearTimeout(t);
      removeEventListener('resize', m);
    };
  }, [children, wide]);
  var dist = Math.max(0, dims.tw - dims.vw);
  var th = useTh(theme);
  if (!wide) return React.createElement("div", {
    className: "qy-hs-native"
  }, React.createElement("div", {
    className: "qy-hs-track",
    ref: track
  }, children));
  return React.createElement("section", {
    ref: outer,
    style: {
      height: "calc(100vh + ".concat(dist, "px)"),
      position: 'relative'
    }
  }, React.createElement("div", {
    className: "qy-hs-sticky"
  }, label && React.createElement("div", {
    className: "qy-hs-label qy-eyebrow",
    style: {
      color: th.mute
    }
  }, label), React.createElement("div", {
    className: "qy-hs-track",
    ref: track,
    style: {
      transform: "translate3d(".concat(-p * dist, "px,0,0)")
    }
  }, children), React.createElement("div", {
    className: "qy-hs-bar",
    style: {
      background: th.line
    }
  }, React.createElement("span", {
    style: {
      width: "".concat(p * 100, "%"),
      background: th.fg
    }
  }))));
}
function SectionHead(_ref5) {
  var label = _ref5.label,
    right = _ref5.right,
    _ref5$theme = _ref5.theme,
    theme = _ref5$theme === void 0 ? 'paper' : _ref5$theme;
  var th = useTh(theme);
  return React.createElement("div", {
    className: "qy-section-head",
    style: {
      borderColor: th.fg
    }
  }, React.createElement("span", {
    className: "qy-eyebrow"
  }, label), right && React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute
    }
  }, right));
}
Object.assign(window, {
  THEMES: THEMES,
  useTh: useTh,
  ModeSwitch: ModeSwitch,
  AppCtx: AppCtx,
  useApp: useApp,
  tr: tr,
  n2: n2,
  useScrollProgress: useScrollProgress,
  useWide: useWide,
  Slot: Slot,
  LangSwitch: LangSwitch,
  Nav: Nav,
  Footer: Footer,
  RevealLayer: RevealLayer,
  useReveal: useReveal,
  HScroll: HScroll,
  SectionHead: SectionHead
});

/* --- web2/home.jsx --- */
"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function HeroSlides() {
  var _useApp = useApp(),
    lang = _useApp.lang,
    go = _useApp.go,
    tweaks = _useApp.tweaks;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    i = _useState2[0],
    setI = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    paused = _useState4[0],
    setPaused = _useState4[1];
  var n = QY.hero.length;
  useEffect(function () {
    if (paused) return;
    var t = setTimeout(function () {
      return setI(function (x) {
        return (x + 1) % n;
      });
    }, tweaks.heroSecs * 1000);
    return function () {
      return clearTimeout(t);
    };
  }, [i, paused, tweaks.heroSecs]);
  var cur = QY.hero[i];
  var col = QY.collections.find(function (c) {
    return c.id === cur.col;
  });
  return React.createElement("section", {
    className: "qy-hero",
    onMouseEnter: function onMouseEnter() {
      return setPaused(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setPaused(false);
    },
    onTouchStart: function onTouchStart(e) {
      e.currentTarget._tx = e.touches[0].clientX;
    },
    onTouchEnd: function onTouchEnd(e) {
      var _e$currentTarget$_tx;
      var dx = e.changedTouches[0].clientX - ((_e$currentTarget$_tx = e.currentTarget._tx) !== null && _e$currentTarget$_tx !== void 0 ? _e$currentTarget$_tx : e.changedTouches[0].clientX);
      if (Math.abs(dx) > 40) setI(function (x) {
        return (x + (dx < 0 ? 1 : -1) + n) % n;
      });
    }
  }, QY.hero.map(function (h, k) {
    return React.createElement("div", {
      key: h.slot,
      className: "qy-hero-slide",
      style: {
        opacity: k === i ? 1 : 0,
        pointerEvents: k === i ? 'auto' : 'none',
        zIndex: k === i ? 2 : 1
      }
    }, h.src ? React.createElement("picture", null, h.srcM && React.createElement("source", {
      media: "(max-width:700px)",
      srcSet: h.srcM
    }), React.createElement("img", {
      className: "qy-hero-img",
      src: h.src,
      alt: tr(h.cap, lang),
      style: {
        '--p': h.pos || 'center',
        '--pm': h.posM || h.pos || 'center'
      }
    })) : React.createElement("image-slot", {
      id: h.slot,
      shape: "rect",
      placeholder: 'Foto horizontal · ' + tr(h.cap, 'es')
    }));
  }), React.createElement("div", {
    className: "qy-hero-cap"
  }, React.createElement("span", {
    className: "qy-eyebrow"
  }, n2(i + 1), " \xB7 ", tr(cur.cap, lang)), React.createElement("button", {
    className: "qy-hero-title",
    onClick: function onClick() {
      return go('collection', col.id);
    }
  }, col.name, React.createElement("span", null, tr(col.season, lang), " \xB7 ", tr(QY.ui.view, lang), " \u2192"))), React.createElement("div", {
    className: "qy-hero-dots"
  }, QY.hero.map(function (h, k) {
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setI(k);
      },
      className: k === i ? 'on' : '',
      "aria-label": 'Foto ' + (k + 1)
    }, React.createElement("span", null, n2(k + 1)), React.createElement("i", null, k === i && React.createElement("b", {
      key: i + '-' + paused,
      style: {
        animationDuration: tweaks.heroSecs + 's',
        animationPlayState: paused ? 'paused' : 'running'
      }
    })));
  })), React.createElement("button", {
    className: "qy-hero-scroll",
    onClick: function onClick() {
      return scrollTo({
        top: innerHeight,
        behavior: 'smooth'
      });
    }
  }, React.createElement("span", null, "Scroll"), React.createElement("i", null, "\u2193")));
}
function Home() {
  return useWide() <= 1024 ? React.createElement(HomeApp, null) : React.createElement(HomeDesk, null);
}
function HomeDesk() {
  var _useApp2 = useApp(),
    lang = _useApp2.lang,
    go = _useApp2.go;
  var stripWide = useWide() > 700;
  var _useApp3 = useApp(),
    mobStrip = _useApp3.mobStrip;
  return React.createElement("div", null, React.createElement(HeroSlides, null), React.createElement("section", {
    className: "qy-brand"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: "assets/byqiyo-logo.png",
    alt: "By QiYo"
  }), React.createElement("h1", {
    className: "qy-claim"
  }, tr(QY.home.claim, lang)), React.createElement("p", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.home.claimSub, lang))), React.createElement("section", {
    className: "qy-news"
  }, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Novedades' : 'News',
    right: React.createElement("button", {
      className: "qy-link",
      onClick: function onClick() {
        return go('journal');
      }
    }, tr(QY.ui.all, lang), " \u2192")
  }), React.createElement("div", {
    className: "qy-news-grid"
  }, QY.news.map(function (n, k) {
    return React.createElement("div", {
      key: k,
      className: "qy-news-item",
      role: "link",
      onClick: function onClick() {
        return go.apply(void 0, _toConsumableArray(n.to));
      }
    }, React.createElement(Slot, {
      id: n.slot,
      label: 'Novedad · ' + n.tag,
      ratio: "3/2",
      src: n.src
    }), React.createElement("span", {
      className: "qy-eyebrow qy-mute"
    }, n.tag, " \xB7 ", tr(n.date, lang)), React.createElement("h3", {
      className: "qy-news-t"
    }, tr(n.t, lang), " \u2192"));
  }))), React.createElement("section", {
    className: "qy-intro",
    style: {
      paddingTop: 0
    }
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: "qy-intro-q",
    src: "assets/byqiyo-q.png",
    alt: "By QiYo"
  }), React.createElement("div", {
    className: "qy-intro-txt"
  }, React.createElement("p", {
    className: "qy-lead"
  }, tr(QY.home.intro, lang)), React.createElement("button", {
    className: "qy-cta",
    onClick: function onClick() {
      return go('about', 'byqiyo');
    }
  }, lang === 'es' ? 'Leer más' : 'Read more', " \u2192"))), stripWide ? React.createElement("section", {
    className: "qy-strip"
  }, QY.home.tiles.map(function (t, k) {
    return React.createElement("div", {
      key: t.slot,
      className: "qy-strip-item",
      role: "link",
      onClick: function onClick() {
        return go(t.go);
      }
    }, React.createElement("div", {
      className: "qy-strip-img"
    }, React.createElement(Slot, {
      id: t.slot,
      label: tr(t.eyebrow, 'es') + ' · imagen',
      src: t.src,
      style: {
        height: '100%'
      }
    })), React.createElement("div", {
      className: "qy-strip-cap"
    }, React.createElement("span", {
      className: "qy-num qy-mute"
    }, n2(k + 1)), React.createElement("h2", {
      className: "qy-strip-t"
    }, t.title || tr(QY.ui.nav[t.go], lang)), React.createElement("span", {
      className: "qy-small qy-mute"
    }, tr(t.t, lang)), React.createElement("p", {
      className: "qy-strip-d qy-small"
    }, React.createElement("span", {
      className: "qy-strip-go"
    }, "\u2192"))));
  })) : React.createElement(MobileStrip, {
    variant: mobStrip
  }), React.createElement("section", {
    className: "qy-home-contact"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.contact, lang)), React.createElement("a", {
    className: "qy-home-mail",
    href: 'mailto:' + QY.contact.email
  }, QY.contact.email), React.createElement("a", {
    className: "qy-body",
    href: QY.contact.instagramUrl,
    target: "_blank",
    rel: "noopener"
  }, "Instagram ", QY.contact.instagram), React.createElement("button", {
    className: "qy-cta",
    onClick: function onClick() {
      return go('contact');
    }
  }, lang === 'es' ? 'Escribir un mensaje' : 'Send a message', " \u2192")), React.createElement(Footer, null));
}
function HomeOld() {
  var _useApp4 = useApp(),
    lang = _useApp4.lang,
    go = _useApp4.go;
  var reveal = useReveal();
  return React.createElement("div", null, React.createElement(HeroSlides, null), React.createElement("section", {
    className: "qy-brand"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: "assets/byqiyo-logo.png",
    alt: "By QiYo"
  }), React.createElement("p", {
    className: "qy-lead"
  }, tr(QY.home.statement, lang)), React.createElement("p", {
    className: "qy-body qy-mute"
  }, tr(QY.home.statementSub, lang))), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.nav.collections, lang),
    right: n2(QY.collections.length)
  }), QY.collections.map(function (c, k) {
    return React.createElement("button", {
      key: c.id,
      className: "qy-row",
      onMouseEnter: function onMouseEnter() {
        return reveal.show(c.reveal);
      },
      onMouseLeave: reveal.hide,
      onClick: function onClick() {
        reveal.hide();
        go('collection', c.id);
      }
    }, React.createElement("span", {
      className: "qy-num qy-mute"
    }, n2(k + 1)), React.createElement("span", {
      className: "qy-row-title"
    }, c.name, React.createElement("em", null, tr(c.sub, lang))), React.createElement("span", {
      className: "qy-row-meta"
    }, React.createElement("span", null, tr(c.season, lang)), React.createElement("span", {
      className: "qy-mute"
    }, c.count, " ", tr(QY.ui.looks, lang))));
  })), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.editorial, lang) + ' · Rebirth',
    right: "PV 2027"
  }), React.createElement("div", {
    className: "qy-ed-grid"
  }, React.createElement("div", {
    className: "a"
  }, React.createElement(Slot, {
    id: "web-home-ed-1",
    label: "Editorial Rebirth \xB7 horizontal",
    ratio: "16/9"
  })), React.createElement("div", {
    className: "b"
  }, React.createElement(Slot, {
    id: "web-home-ed-2",
    label: "Editorial \xB7 vertical",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "c"
  }, React.createElement(Slot, {
    id: "web-home-ed-3",
    label: "Detalle de material",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "d"
  }, React.createElement(Slot, {
    id: "web-home-ed-4",
    label: "Editorial \xB7 horizontal",
    ratio: "3/2"
  })))), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.process, lang),
    right: n2(QY.home.process.length)
  }), React.createElement("div", {
    className: "qy-proc"
  }, QY.home.process.map(function (p, k) {
    return React.createElement("article", {
      key: k
    }, React.createElement(Slot, {
      id: p.slot,
      label: 'Proceso · ' + tr(p.t, 'es'),
      ratio: "4/5"
    }), React.createElement("div", {
      className: "qy-proc-t"
    }, React.createElement("span", {
      className: "qy-num qy-mute"
    }, n2(k + 1)), React.createElement("h3", null, tr(p.t, lang))), React.createElement("p", {
      className: "qy-small qy-mute"
    }, tr(p.d, lang)));
  }))), React.createElement("section", {
    className: "qy-block qy-split"
  }, React.createElement("div", null, React.createElement(SectionHead, {
    label: tr(QY.ui.runwayList, lang)
  }), QY.home.runways.map(function (r, k) {
    return React.createElement("div", {
      key: k,
      className: "qy-runway"
    }, React.createElement("span", {
      className: "qy-num"
    }, r.year), React.createElement("span", null, tr(r.t, lang), React.createElement("em", {
      className: "qy-mute"
    }, r.col, " \xB7 ", tr(r.d, lang))));
  })), React.createElement("div", null, React.createElement(SectionHead, {
    label: tr(QY.ui.nav.journal, lang),
    right: React.createElement("button", {
      className: "qy-link",
      onClick: function onClick() {
        return go('journal');
      }
    }, tr(QY.ui.all, lang), " \u2192")
  }), QY.journal.map(function (j) {
    return React.createElement("button", {
      key: j.id,
      className: "qy-jrow",
      onMouseEnter: function onMouseEnter() {
        return reveal.show(j.img);
      },
      onMouseLeave: reveal.hide,
      onClick: function onClick() {
        reveal.hide();
        go('entry', j.id);
      }
    }, React.createElement("span", {
      className: "qy-eyebrow qy-mute"
    }, tr(j.tag, lang)), React.createElement("span", null, tr(j.title, lang)));
  }))), React.createElement("section", {
    className: "qy-block qy-home-about"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.nav.about, lang)
  }), React.createElement("div", {
    className: "qy-home-about-grid"
  }, React.createElement(Slot, {
    id: "web-about-portrait",
    label: "Retrato \xB7 Carmen \xC1lvarez Feriche",
    ratio: "4/5",
    src: "assets/opt/carmen-retrato.jpg"
  }), React.createElement("div", {
    className: "qy-home-about-txt"
  }, React.createElement("h2", {
    className: "qy-h1"
  }, tr(QY.about.lead, lang)), React.createElement("p", {
    className: "qy-body"
  }, tr(QY.about.body, lang)), React.createElement("button", {
    className: "qy-cta",
    onClick: function onClick() {
      return go('about');
    }
  }, lang === 'es' ? 'Conocer más' : 'Read more', " \u2192")))), React.createElement("section", {
    className: "qy-home-contact"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.contact, lang)), React.createElement("a", {
    className: "qy-home-mail",
    href: 'mailto:' + QY.contact.email
  }, QY.contact.email), React.createElement("a", {
    className: "qy-body",
    href: QY.contact.instagramUrl,
    target: "_blank",
    rel: "noopener"
  }, "Instagram ", QY.contact.instagram), React.createElement("button", {
    className: "qy-cta",
    onClick: function onClick() {
      return go('contact');
    }
  }, lang === 'es' ? 'Escribir un mensaje' : 'Send a message', " \u2192")), React.createElement(Footer, null));
}
Object.assign(window, {
  Home: Home
});

/* --- web2/pages.jsx --- */
"use strict";

function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Collections() {
  var _useApp = useApp(),
    lang = _useApp.lang,
    go = _useApp.go;
  return React.createElement("div", null, React.createElement("section", {
    className: "qy-page-head"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.collections, lang))), React.createElement(BaseGrid, {
    items: QY.collections.map(function (c) {
      return {
        key: c.id,
        slot: 'web-colcard2-' + c.id,
        src: c.cover,
        label: 'Portada ' + c.name + ' · horizontal',
        title: c.name,
        meta: tr(c.season, lang) + ' · ' + c.count + ' ' + tr(QY.ui.looks, lang),
        d: tr(c.sub, lang),
        onClick: function onClick() {
          return go('collection', c.id);
        }
      };
    })
  }), React.createElement(Footer, null));
}
function LookCard(_ref) {
  var f = _ref.f,
    c = _ref.c,
    th = _ref.th;
  var _useApp2 = useApp(),
    lang = _useApp2.lang,
    tweaks = _useApp2.tweaks;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    flip = _useState2[0],
    setFlip = _useState2[1];
  var line = c.lines ? c.lines[f.line] : null;
  var name = f.name || 'Look ' + f.n;
  var showImg = !!f.img;
  return React.createElement("div", {
    className: "qy-look",
    onMouseEnter: function onMouseEnter() {
      return showImg && f.back && setFlip(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setFlip(false);
    }
  }, React.createElement("div", {
    className: "qy-look-img"
  }, showImg ? React.createElement(React.Fragment, null, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: f.img,
    alt: name,
    style: {
      opacity: flip ? 0 : 1
    }
  }), f.back && React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: f.back,
    alt: "",
    style: {
      opacity: flip ? 1 : 0
    }
  })) : React.createElement("image-slot", {
    id: "web-look-".concat(c.id, "-").concat(f.n),
    shape: "rect",
    fit: "contain",
    placeholder: 'Figurín · ' + name
  })), React.createElement("div", {
    className: "qy-look-cap"
  }, React.createElement("span", {
    className: "qy-look-n",
    style: {
      color: line ? line.accent : th.fg
    }
  }, f.n), React.createElement("span", null, name), f.show && React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute,
      marginLeft: 'auto'
    }
  }, tr(QY.ui.runway, lang))));
}
function LinePanel(_ref2) {
  var l = _ref2.l,
    th = _ref2.th,
    lang = _ref2.lang;
  return React.createElement("div", {
    className: "qy-line-panel",
    style: {
      borderColor: th.line
    }
  }, React.createElement("div", {
    className: "qy-linebar"
  }, React.createElement("i", {
    style: {
      background: l.accent
    }
  }), React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute
    }
  }, "L\xEDnea ", l.n)), React.createElement("div", {
    className: "qy-line-name"
  }, tr(l.name, lang)), React.createElement("p", {
    className: "qy-small",
    style: {
      color: th.mute
    }
  }, tr(l.d, lang)), React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute
    }
  }, l.ref));
}
function Collection(_ref3) {
  var id = _ref3.id;
  var _useApp3 = useApp(),
    lang = _useApp3.lang,
    go = _useApp3.go;
  var reveal = useReveal();
  var c = QY.collections.find(function (x) {
    return x.id === id;
  }) || QY.collections[0];
  var next = QY.collections[(QY.collections.indexOf(c) + 1) % QY.collections.length];
  var th = useTh(c.theme);
  var track = [];
  if (c.lines) c.lines.forEach(function (l, li) {
    track.push(React.createElement(LinePanel, {
      key: 'l' + li,
      l: l,
      th: th,
      lang: lang
    }));
    c.figs.filter(function (f) {
      return f.line === li;
    }).forEach(function (f) {
      return track.push(React.createElement(LookCard, {
        key: f.n,
        f: f,
        c: c,
        th: th
      }));
    });
  });else c.figs.forEach(function (f) {
    return track.push(React.createElement(LookCard, {
      key: f.n,
      f: f,
      c: c,
      th: th
    }));
  });
  return React.createElement("div", {
    style: {
      background: th.bg,
      color: th.fg
    }
  }, React.createElement("section", {
    className: "qy-c-head"
  }, React.createElement("div", {
    className: "qy-c-head-l"
  }, React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute
    }
  }, tr(c.season, lang), " \xB7 ", c.count, " ", tr(QY.ui.looks, lang)), React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: 'qy-c-logo' + (c.id === 'rebirth' ? ' inv' : ''),
    src: c.logo,
    alt: c.name
  })), React.createElement("div", {
    className: "qy-c-head-r"
  }, React.createElement("h2", {
    className: "qy-h2"
  }, tr(c.sub, lang)), React.createElement("p", {
    className: "qy-body",
    style: {
      color: th.mute
    }
  }, tr(c.intro, lang)))), React.createElement("section", {
    className: "qy-c-cover"
  }, c.cover ? React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: "qy-c-cover-img",
    src: c.cover,
    alt: c.name
  }) : React.createElement(Slot, {
    id: 'web-c-cover-' + c.id,
    label: 'Editorial ' + c.name + ' · horizontal a sangre',
    ratio: "21/9"
  })), React.createElement("section", {
    className: "qy-block qy-c-concept"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.concept, lang),
    theme: c.theme
  }), React.createElement("div", {
    className: "qy-two"
  }, React.createElement("p", {
    className: "qy-lead"
  }, tr(c.body, lang)), c.moodboard ? React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: "qy-mood",
    src: c.moodboard,
    alt: 'Moodboard ' + c.name
  }) : React.createElement(Slot, {
    id: 'web-c-concept-' + c.id,
    label: 'Moodboard ' + c.name,
    ratio: "4/5"
  }))), c.refs && React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Inspiración · Escultoras' : 'Inspiration · Sculptors',
    right: n2(c.refs.length),
    theme: c.theme
  }), React.createElement("p", {
    className: "qy-lead qy-refs-intro"
  }, tr(c.refsIntro, lang)), React.createElement("div", {
    className: "qy-refs"
  }, c.refs.map(function (r) {
    return React.createElement("button", {
      key: r.id,
      className: "qy-ref",
      onClick: function onClick() {
        return go('sculptor', r.id);
      }
    }, React.createElement("div", {
      className: "qy-ref-portrait"
    }, React.createElement("img", {
      loading: "lazy",
      decoding: "async",
      src: r.portrait,
      alt: r.name
    })), React.createElement("div", {
      className: "qy-linebar"
    }, React.createElement("i", {
      style: {
        background: r.accent
      }
    }), React.createElement("span", {
      className: "qy-eyebrow",
      style: {
        color: th.mute
      }
    }, tr(r.tag, lang))), React.createElement("h3", {
      className: "qy-h3"
    }, r.name, " \u2192"));
  }))), c.lines && React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.lines, lang),
    right: n2(c.lines.length),
    theme: c.theme
  }), React.createElement("div", {
    className: "qy-lines"
  }, c.lines.map(function (l, k) {
    return React.createElement("article", {
      key: k
    }, React.createElement(Slot, {
      id: "web-line-".concat(c.id, "-").concat(k + 1),
      label: 'Línea ' + l.n + ' · ' + tr(l.name, 'es'),
      ratio: "3/4",
      src: l.img
    }), React.createElement("div", {
      className: "qy-linebar"
    }, React.createElement("i", {
      style: {
        background: l.accent
      }
    }), React.createElement("span", {
      className: "qy-eyebrow",
      style: {
        color: th.mute
      }
    }, "L\xEDnea ", l.n, " \xB7 ", l.ref)), React.createElement("h3", {
      className: "qy-h3"
    }, tr(l.name, lang)), React.createElement("p", {
      className: "qy-small",
      style: {
        color: th.mute
      }
    }, tr(l.d, lang)));
  }))), React.createElement(HScroll, {
    theme: c.theme,
    label: "".concat(tr(QY.ui.looks, lang), " \xB7 ").concat(c.count, " \xB7 ").concat(tr(QY.ui.scrollH, lang))
  }, track, React.createElement("div", {
    style: {
      flex: '0 0 8vw'
    }
  })), c.renders && React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Renders digitales' : 'Digital renders',
    right: n2(c.renders.length),
    theme: c.theme
  }), React.createElement(RunwayCarousel, {
    imgs: c.renders
  })), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.editorial, lang),
    right: c.editorial ? lang === 'es' ? 'Por outfit' : 'By outfit' : null,
    theme: c.theme
  }), c.editorial ? React.createElement("div", {
    className: "qy-ed-groups"
  }, c.editorial.map(function (gr, k) {
    return React.createElement("div", {
      key: k,
      className: "qy-ed-group"
    }, (gr.n || gr.name) && React.createElement("div", {
      className: "qy-ed-gh"
    }, React.createElement("span", {
      className: "qy-num",
      style: {
        color: th.mute
      }
    }, gr.n ? 'Outfit ' + gr.n + (gr.name ? ' · ' + tr(gr.name, lang) : '') : tr(gr.name, lang))), React.createElement(RunwayCarousel, {
      imgs: gr.imgs
    }));
  })) : React.createElement("div", {
    className: "qy-ed-grid"
  }, React.createElement("div", {
    className: "a"
  }, React.createElement(Slot, {
    id: "web-c-ed-".concat(c.id, "-1"),
    label: "Editorial \xB7 horizontal",
    ratio: "16/9"
  })), React.createElement("div", {
    className: "b"
  }, React.createElement(Slot, {
    id: "web-c-ed-".concat(c.id, "-2"),
    label: "Editorial \xB7 vertical",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "c"
  }, React.createElement(Slot, {
    id: "web-c-ed-".concat(c.id, "-3"),
    label: "Detalle",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "d"
  }, React.createElement(Slot, {
    id: "web-c-ed-".concat(c.id, "-4"),
    label: "Editorial \xB7 horizontal",
    ratio: "3/2"
  })))), QY.taller.some(function (g) {
    return g.id === c.id;
  }) && React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Proceso' : 'Process',
    right: tr(QY.ui.nav.process, lang),
    theme: c.theme
  }), React.createElement("button", {
    className: "qy-taller-link",
    onClick: function onClick() {
      return go('process', c.id);
    },
    style: {
      borderColor: th.fg
    }
  }, React.createElement("span", {
    className: "qy-h2"
  }, lang === 'es' ? 'Ver el proceso de ' + c.name + ' en el taller' : 'See the making of ' + c.name + ' in the studio'), React.createElement("span", {
    className: "qy-taller-link-go",
    "aria-hidden": "true"
  }, "\u2192"))), React.createElement("section", {
    className: "qy-block"
  }, React.createElement("div", {
    id: "pasarela"
  }), React.createElement(SectionHead, {
    label: tr(QY.ui.nav.runway, lang),
    right: tr(c.runway, lang),
    theme: c.theme
  }), c.runwayImgs ? React.createElement(RunwayCarousel, {
    imgs: c.runwayImgs
  }) : React.createElement("div", {
    className: "qy-ed-grid"
  }, React.createElement("div", {
    className: "a"
  }, React.createElement(Slot, {
    id: "web-c-run-".concat(c.id, "-1"),
    label: "Pasarela \xB7 v\xEDdeo u horizontal",
    ratio: "16/9"
  })), React.createElement("div", {
    className: "b"
  }, React.createElement(Slot, {
    id: "web-c-run-".concat(c.id, "-2"),
    label: "Pasarela \xB7 vertical",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "c"
  }, React.createElement(Slot, {
    id: "web-c-run-".concat(c.id, "-3"),
    label: "Pasarela \xB7 vertical",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "d"
  }, React.createElement(Slot, {
    id: "web-c-run-".concat(c.id, "-4"),
    label: "Pasarela \xB7 horizontal",
    ratio: "3/2"
  })))), React.createElement("button", {
    className: "qy-next",
    style: {
      borderColor: th.line
    },
    onMouseEnter: function onMouseEnter() {
      return reveal.show(next.reveal);
    },
    onMouseLeave: reveal.hide,
    onClick: function onClick() {
      reveal.hide();
      go('collection', next.id);
    }
  }, React.createElement("span", {
    className: "qy-eyebrow",
    style: {
      color: th.mute
    }
  }, tr(QY.ui.next, lang)), React.createElement("span", {
    className: "qy-next-name"
  }, next.name, " \u2192")), React.createElement(Footer, {
    theme: c.theme
  }));
}
function About(_ref4) {
  var id = _ref4.id;
  var _useApp4 = useApp(),
    lang = _useApp4.lang;
  useEffect(function () {
    if (id !== 'byqiyo') return;
    var t = setTimeout(function () {
      var el = document.getElementById('byqiyo');
      if (el) scrollTo({
        top: el.getBoundingClientRect().top + scrollY - 70,
        behavior: 'smooth'
      });
    }, 350);
    return function () {
      return clearTimeout(t);
    };
  }, [id]);
  return React.createElement("div", null, React.createElement("section", {
    className: "qy-about",
    id: "carmen"
  }, React.createElement(Slot, {
    id: "web-about-portrait",
    label: "Retrato \xB7 Carmen \xC1lvarez Feriche",
    ratio: "4/5",
    src: "assets/opt/carmen-retrato.jpg"
  }), React.createElement("div", {
    className: "qy-about-txt"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.about, lang), " \xB7 01"), React.createElement("h1", {
    className: "qy-h1"
  }, "Carmen \xC1lvarez Feriche"), React.createElement("p", {
    className: "qy-lead"
  }, tr(QY.about.carmen, lang)))), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: tr(QY.ui.path, lang)
  }), QY.about.path.map(function (p, i) {
    return React.createElement("div", {
      key: i,
      className: "qy-runway"
    }, React.createElement("span", {
      className: "qy-num"
    }, p.y), React.createElement("span", null, tr(p.t, lang), React.createElement("em", {
      className: "qy-mute"
    }, tr(p.d, lang))));
  })), React.createElement("section", {
    className: "qy-block",
    id: "cv"
  }, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Currículum' : 'Curriculum vitae'
  }), React.createElement("div", {
    className: "qy-cv"
  }, React.createElement("div", null, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, lang === 'es' ? 'Idiomas' : 'Languages'), QY.about.cv.langs.map(function (l, i) {
    return React.createElement("div", {
      key: i,
      className: "qy-runway qy-cv-row"
    }, React.createElement("span", null, tr(l.t, lang)), React.createElement("em", {
      className: "qy-mute"
    }, tr(l.l, lang)));
  })), React.createElement("div", null, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, lang === 'es' ? 'Herramientas' : 'Tools'), QY.about.cv.tools.map(function (g, i) {
    return React.createElement("div", {
      key: i,
      className: "qy-runway qy-cv-row"
    }, React.createElement("span", null, tr(g.g, lang)), React.createElement("em", {
      className: "qy-mute"
    }, g.items.join(' · ')));
  }))), React.createElement("div", {
    className: "qy-cv-work"
  }, React.createElement("div", {
    className: "qy-proj-spec"
  }, React.createElement(SingleCarousel, {
    fit: "contain",
    bg: "#efede9",
    imgs: ['assets/opt/cv/illustrator.jpg', 'assets/opt/cv/ai-2.jpg', 'assets/opt/cv/ai-3.webp', 'img/cv-ai-4.png', 'img/cv-ai-5.png']
  }), React.createElement("div", {
    className: "qy-col-card-cap"
  }, React.createElement("span", null, "Illustrator"), React.createElement("span", {
    className: "qy-num qy-mute"
  }, "01"))), React.createElement("div", {
    className: "qy-proj-spec"
  }, React.createElement(SingleCarousel, {
    fit: "contain",
    bg: "#efede9",
    imgs: [1, 2, 3, 4, 5, 6, 7].map(function (n) {
      return "img/cv-ps-".concat(n, ".jpg");
    })
  }), React.createElement("div", {
    className: "qy-col-card-cap"
  }, React.createElement("span", null, "Photoshop"), React.createElement("span", {
    className: "qy-num qy-mute"
  }, "02"))))), React.createElement("section", {
    className: "qy-about qy-about-brand",
    id: "byqiyo"
  }, React.createElement("div", {
    className: "qy-about-txt"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.about, lang), " \xB7 02"), React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: "qy-about-logo",
    src: "assets/byqiyo-logo.png",
    alt: "By QiYo"
  }), React.createElement("p", {
    className: "qy-lead",
    style: {
      textAlign: 'justify'
    }
  }, tr(QY.about.body, lang))), React.createElement("div", null, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Pilares' : 'Pillars',
    right: n2(QY.about.pillars.length)
  }), QY.about.pillars.map(function (p, i) {
    return React.createElement("div", {
      key: i,
      className: "qy-runway"
    }, React.createElement("span", {
      className: "qy-num qy-mute"
    }, n2(i + 1)), React.createElement("span", null, tr(p, lang)));
  }))), React.createElement(Footer, null));
}
function Journal() {
  var _useApp5 = useApp(),
    lang = _useApp5.lang,
    go = _useApp5.go;
  return React.createElement("div", null, React.createElement("section", {
    className: "qy-page-head"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.journal, lang))), React.createElement("section", {
    className: "qy-journal"
  }, QY.journal.map(function (j, i) {
    return React.createElement("div", {
      key: j.id,
      className: 'qy-jcard' + (i === 0 ? ' first' : '')
    }, React.createElement(Slot, {
      id: j.slot,
      label: 'Diario · ' + tr(j.title, 'es'),
      ratio: i === 0 ? '16/9' : '3/2',
      src: j.img
    }), React.createElement("span", {
      className: "qy-eyebrow qy-mute"
    }, n2(i + 1), " \xB7 ", tr(j.tag, lang)), React.createElement("button", {
      className: "qy-jcard-t",
      onClick: function onClick() {
        return go('entry', j.id);
      }
    }, tr(j.title, lang), " \u2192"), React.createElement("span", {
      className: "qy-small qy-mute"
    }, tr(j.body, lang)));
  })), React.createElement(Footer, null));
}
function Entry(_ref5) {
  var id = _ref5.id;
  var _useApp6 = useApp(),
    lang = _useApp6.lang,
    go = _useApp6.go;
  var j = QY.journal.find(function (x) {
    return x.id === id;
  }) || QY.journal[0];
  var others = QY.journal.filter(function (x) {
    return x.id !== j.id;
  });
  return React.createElement("div", null, React.createElement("article", {
    className: "qy-entry"
  }, React.createElement("button", {
    className: "qy-eyebrow qy-link",
    onClick: function onClick() {
      return go('journal');
    }
  }, "\u2190 ", tr(QY.ui.back, lang)), React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(j.tag, lang)), React.createElement("h1", {
    className: "qy-h1"
  }, tr(j.title, lang))), React.createElement("section", {
    className: "qy-c-cover"
  }, React.createElement(Slot, {
    id: j.slot,
    label: 'Diario · ' + tr(j.title, 'es'),
    ratio: "16/9",
    src: j.img
  })), React.createElement("section", {
    className: "qy-entry-body"
  }, React.createElement("p", {
    className: "qy-lead"
  }, tr(j.body, lang))), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Más del diario' : 'More from the journal'
  }), others.map(function (o) {
    return React.createElement("button", {
      key: o.id,
      className: "qy-jrow",
      onClick: function onClick() {
        return go('entry', o.id);
      }
    }, React.createElement("span", {
      className: "qy-eyebrow qy-mute"
    }, tr(o.tag, lang)), React.createElement("span", null, tr(o.title, lang)));
  })), React.createElement(Footer, null));
}
function Contact() {
  var _useApp7 = useApp(),
    lang = _useApp7.lang;
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    sent = _useState4[0],
    setSent = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    reason = _useState6[0],
    setReason = _useState6[1];
  var L = lang === 'es' ? {
    name: 'Nombre',
    email: 'Email',
    msg: 'Mensaje',
    ok: 'Gracias. Te respondo en breve.',
    reason: 'Motivo',
    h: 'Prensa, colaboraciones, pasarelas, exposiciones y confección a medida.'
  } : {
    name: 'Name',
    email: 'Email',
    msg: 'Message',
    ok: 'Thank you. I will reply soon.',
    reason: 'Reason',
    h: 'Press, collaborations, runways, exhibitions and made-to-measure.'
  };
  return React.createElement("div", null, React.createElement("section", {
    className: "qy-contact"
  }, React.createElement("div", {
    className: "qy-contact-l"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.contact, lang)), React.createElement("h1", {
    className: "qy-h2"
  }, L.h), React.createElement("a", {
    className: "qy-h2 qy-mail",
    href: 'mailto:' + QY.contact.email
  }, QY.contact.email), React.createElement("a", {
    className: "qy-body",
    href: QY.contact.instagramUrl,
    target: "_blank",
    rel: "noopener"
  }, "Instagram ", QY.contact.instagram)), React.createElement("form", {
    className: "qy-form",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      setSent(true);
    }
  }, React.createElement("div", {
    className: "qy-field full"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, L.reason), React.createElement("div", {
    className: "qy-chips qy-chips-line"
  }, QY.contact.reasons.map(function (r, i) {
    return React.createElement("button", {
      type: "button",
      key: i,
      className: reason === i ? 'on' : '',
      onClick: function onClick() {
        return setReason(i);
      }
    }, tr(r, lang));
  }))), React.createElement("label", {
    className: "qy-field"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, L.name), React.createElement("input", {
    required: true
  })), React.createElement("label", {
    className: "qy-field"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, L.email), React.createElement("input", {
    type: "email",
    required: true
  })), React.createElement("label", {
    className: "qy-field full"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, L.msg), React.createElement("textarea", {
    rows: "5",
    required: true
  })), React.createElement("div", {
    className: "qy-field full"
  }, sent ? React.createElement("div", {
    className: "qy-h3"
  }, L.ok) : React.createElement("button", {
    className: "qy-submit",
    type: "submit"
  }, tr(QY.ui.send, lang), " \u2192")))), React.createElement(Footer, null));
}
Object.assign(window, {
  Collections: Collections,
  Collection: Collection,
  About: About,
  Journal: Journal,
  Entry: Entry,
  Contact: Contact
});
function Sculptor(_ref6) {
  var id = _ref6.id;
  var _useApp8 = useApp(),
    lang = _useApp8.lang,
    go = _useApp8.go;
  var c = QY.collections.find(function (x) {
    return x.refs && x.refs.some(function (r) {
      return r.id === id;
    });
  });
  var r = c.refs.find(function (x) {
    return x.id === id;
  });
  var next = c.refs[(c.refs.indexOf(r) + 1) % c.refs.length];
  return React.createElement("div", null, React.createElement(PageHead, {
    back: React.createElement("button", {
      className: "qy-eyebrow qy-link",
      onClick: function onClick() {
        return go('collection', c.id);
      }
    }, "\u2190 ", c.name, " \xB7 ", lang === 'es' ? 'Inspiración' : 'Inspiration'),
    eyebrow: tr(r.tag, lang),
    title: r.name
  }), React.createElement("section", {
    className: "qy-block qy-sc"
  }, React.createElement("div", {
    className: "qy-sc-portrait"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: r.portrait,
    alt: r.name
  })), React.createElement("div", {
    className: "qy-sc-txt"
  }, r.body.map(function (t, k) {
    var s = tr(t, lang);
    var i = k > 0 ? s.indexOf('. ') : -1;
    return React.createElement("p", {
      key: k,
      className: k === 0 ? 'qy-lead' : 'qy-body'
    }, i > 0 && i < 40 ? React.createElement(React.Fragment, null, React.createElement("strong", null, s.slice(0, i + 1)), s.slice(i + 1)) : s);
  }))), React.createElement("section", {
    className: "qy-block qy-sc-works"
  }, React.createElement(SectionHead, {
    label: lang === 'es' ? 'Obra' : 'Work',
    right: n2(r.works.length)
  }), React.createElement("div", {
    className: "qy-ed-row"
  }, r.works.map(function (w, k) {
    return React.createElement("img", {
      loading: "lazy",
      decoding: "async",
      key: k,
      src: w,
      alt: 'Obra de ' + r.name
    });
  }))), React.createElement("button", {
    className: "qy-next",
    onClick: function onClick() {
      return go('sculptor', next.id);
    }
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, lang === 'es' ? 'Siguiente escultora' : 'Next sculptor'), React.createElement("span", {
    className: "qy-next-name"
  }, next.name, " \u2192")), React.createElement(Footer, null));
}
window.Sculptor = Sculptor;
function RunwayCarousel(_ref7) {
  var imgs = _ref7.imgs;
  var wrap = React.useRef(null),
    items = React.useRef([]);
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    i = _React$useState2[0],
    setI = _React$useState2[1];
  var _React$useState3 = React.useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    x = _React$useState4[0],
    setX = _React$useState4[1];
  var n = imgs.length;
  var center = function center() {
    var w = wrap.current,
      el = items.current[i];
    if (!w || !el) return;
    setX(w.clientWidth / 2 - (el.offsetLeft + el.offsetWidth / 2));
  };
  React.useLayoutEffect(center, [i]);
  React.useEffect(function () {
    window.addEventListener('resize', center);
    return function () {
      return window.removeEventListener('resize', center);
    };
  });
  var go = function go(d) {
    return setI(function (k) {
      return (k + d + n) % n;
    });
  };
  return React.createElement("div", {
    ref: wrap,
    style: {
      position: 'relative',
      overflow: 'hidden',
      touchAction: 'pan-y'
    },
    onTouchStart: function onTouchStart(e) {
      wrap.current._tx = e.touches[0].clientX;
    },
    onTouchEnd: function onTouchEnd(e) {
      var _wrap$current$_tx;
      var dx = e.changedTouches[0].clientX - ((_wrap$current$_tx = wrap.current._tx) !== null && _wrap$current$_tx !== void 0 ? _wrap$current$_tx : e.changedTouches[0].clientX);
      if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    }
  }, React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'center',
      transform: "translateX(".concat(x, "px)"),
      transition: 'transform .6s cubic-bezier(.2,.7,.2,1)'
    }
  }, imgs.map(function (it, k) {
    var src = it.src || it;
    var on = k === i;
    var st = {
      height: 'min(70vh, 640px)',
      width: 'auto',
      flex: 'none',
      display: 'block',
      objectFit: 'cover',
      filter: on ? 'none' : 'grayscale(1)',
      opacity: on ? 1 : 0.55,
      transition: 'filter .6s, opacity .6s',
      cursor: on ? 'default' : 'pointer'
    };
    var p = {
      key: k,
      ref: function ref(el) {
        return items.current[k] = el;
      },
      onClick: function onClick() {
        return setI(k);
      },
      style: st
    };
    return it.video ? React.createElement("video", _extends({}, p, {
      src: src,
      controls: on,
      playsInline: true,
      muted: true,
      loop: true,
      autoPlay: true,
      onLoadedMetadata: center
    })) : React.createElement("img", _extends({
      loading: "lazy",
      decoding: "async"
    }, p, {
      src: src,
      alt: "",
      onLoad: center
    }));
  })), React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, React.createElement(CarouselNav, {
    i: i,
    n: n,
    go: go
  })));
}
window.RunwayCarousel = RunwayCarousel;

/* --- web2/sections.jsx --- */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function BaseGrid(_ref) {
  var items = _ref.items;
  return React.createElement("section", {
    className: "qy-col-cards"
  }, items.map(function (it) {
    return React.createElement("div", {
      key: it.key,
      className: "qy-col-card qy-clickable",
      onClick: it.onClick,
      role: "link"
    }, React.createElement(Slot, {
      id: it.slot,
      label: it.label,
      ratio: it.ratio || '3/2',
      src: it.src
    }), React.createElement("div", {
      className: "qy-col-card-cap"
    }, React.createElement("span", null, it.title), React.createElement("span", {
      className: "qy-eyebrow qy-mute"
    }, it.meta)), it.d && React.createElement("p", {
      className: "qy-small qy-mute"
    }, it.d));
  }));
}
function PageHead(_ref2) {
  var eyebrow = _ref2.eyebrow,
    title = _ref2.title,
    lead = _ref2.lead,
    back = _ref2.back;
  return React.createElement("section", {
    className: "qy-page-head"
  }, back, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, eyebrow), title && React.createElement("h1", {
    className: "qy-h1"
  }, title), lead && React.createElement("p", {
    className: "qy-body qy-mute"
  }, lead));
}
function Projects() {
  var _useApp = useApp(),
    lang = _useApp.lang,
    go = _useApp.go;
  return React.createElement("div", null, React.createElement(PageHead, {
    eyebrow: tr(QY.ui.nav.projects, lang)
  }), React.createElement(BaseGrid, {
    items: QY.projects.map(function (p) {
      return {
        key: p.id,
        slot: 'web-projcard-' + p.id,
        src: p.card,
        label: 'Portada proyecto ' + p.name,
        title: p.name,
        meta: tr(p.year, lang),
        d: tr(p.d, lang),
        onClick: function onClick() {
          return go('project', p.id);
        }
      };
    })
  }), React.createElement(Footer, null));
}
function CarouselNav(_ref3) {
  var i = _ref3.i,
    n = _ref3.n,
    go = _ref3.go;
  if (n < 2) return null;
  var b = {
    background: 'none',
    border: 0,
    padding: '6px 0',
    minWidth: 44,
    minHeight: 44,
    color: 'inherit',
    font: 'inherit',
    cursor: 'pointer',
    fontSize: 18,
    lineHeight: 1
  };
  return React.createElement("div", {
    className: "qy-eyebrow qy-car-nav",
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 28,
      marginTop: 4
    }
  }, React.createElement("button", {
    "aria-label": "Anterior",
    onClick: function onClick() {
      return go(-1);
    },
    style: b
  }, "\u2190"), React.createElement("span", {
    className: "qy-num qy-mute"
  }, String(i + 1).padStart(2, '0'), " / ", String(n).padStart(2, '0')), React.createElement("button", {
    "aria-label": "Siguiente",
    onClick: function onClick() {
      return go(1);
    },
    style: b
  }, "\u2192"));
}
function SingleCarousel(_ref4) {
  var imgs = _ref4.imgs,
    _ref4$fit = _ref4.fit,
    fit = _ref4$fit === void 0 ? 'cover' : _ref4$fit,
    bg = _ref4.bg,
    _ref4$ratio = _ref4.ratio,
    ratio = _ref4$ratio === void 0 ? '4/5' : _ref4$ratio,
    h = _ref4.h;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    i = _useState2[0],
    setI = _useState2[1];
  var n = imgs.length,
    go = function go(d) {
      return setI(function (k) {
        return (k + d + n) % n;
      });
    };
  return React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      height: h,
      minHeight: h ? 420 : undefined,
      overflow: 'hidden',
      background: bg
    }
  }, imgs.map(function (src, k) {
    return React.createElement("img", {
      loading: "lazy",
      decoding: "async",
      key: k,
      src: src,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: fit,
        opacity: k === i ? 1 : 0,
        transition: 'opacity .5s'
      }
    });
  })), React.createElement(CarouselNav, {
    i: i,
    n: n,
    go: go
  }));
}
function ProjectBody(_ref5) {
  var p = _ref5.p;
  var _useApp2 = useApp(),
    lang = _useApp2.lang;
  var es = lang === 'es';
  var li = function li(arr) {
    return React.createElement("ul", {
      className: "qy-proj-list"
    }, arr.map(function (t, k) {
      return React.createElement("li", {
        key: k
      }, tr(t, lang));
    }));
  };
  return React.createElement(React.Fragment, null, React.createElement("section", {
    className: "qy-block qy-proj-two"
  }, React.createElement("div", null, React.createElement(SectionHead, {
    label: tr(p.film.t, lang)
  }), li(p.film.items), React.createElement("h3", {
    className: "qy-eyebrow qy-mute",
    style: {
      marginTop: 32
    }
  }, es ? 'Trama y argumento' : 'Plot and themes'), li(p.film.themes)), React.createElement("figure", {
    className: "qy-proj-fig"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: p.inspo,
    alt: ""
  }), React.createElement("figcaption", {
    className: "qy-small qy-mute"
  }, es ? 'Rachel Weisz como Hipatia de Alejandría' : 'Rachel Weisz as Hypatia of Alexandria'))), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: es ? 'Investigación' : 'Research'
  }), React.createElement("div", {
    className: "qy-proj-research"
  }, p.research.map(function (r, k) {
    return React.createElement("div", {
      key: k
    }, React.createElement("span", {
      className: "qy-num qy-mute"
    }, String(k + 1).padStart(2, '0')), React.createElement("h3", {
      className: "qy-proj-h"
    }, tr(r.t, lang)), React.createElement("p", {
      className: "qy-small qy-mute"
    }, tr(r.d, lang)));
  }))), React.createElement("section", {
    className: "qy-block qy-proj-quote"
  }, React.createElement("p", {
    className: "qy-claim"
  }, "\u201C", es ? 'Defiende tu derecho a pensar, porque pensar de manera errónea es mejor que no pensar.' : 'Reserve your right to think, for even to think wrongly is better than not to think at all.', "\u201D"), React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, "Hipatia de Alejandr\xEDa")), React.createElement("section", {
    className: "qy-block qy-proj-two"
  }, React.createElement("div", null, React.createElement(SectionHead, {
    label: es ? 'Idea final' : 'Final idea'
  }), li(p.idea)), React.createElement(SingleCarousel, {
    imgs: p["final"]
  })), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: es ? 'Proceso' : 'Process',
    right: p.steps.length + (es ? ' pasos' : ' steps')
  }), React.createElement("ol", {
    className: "qy-proj-steps"
  }, p.steps.map(function (t, k) {
    return React.createElement("li", {
      key: k
    }, React.createElement("span", {
      className: "qy-num qy-mute"
    }, String(k + 1).padStart(2, '0')), tr(t, lang));
  })), React.createElement(RunwayCarousel, {
    imgs: p.process
  })));
}
function Project(_ref6) {
  var id = _ref6.id;
  var _useApp3 = useApp(),
    lang = _useApp3.lang,
    go = _useApp3.go;
  var p = QY.projects.find(function (x) {
    return x.id === id;
  }) || QY.projects[0];
  var next = QY.projects[(QY.projects.indexOf(p) + 1) % QY.projects.length];
  return React.createElement("div", null, React.createElement(PageHead, {
    back: React.createElement("button", {
      className: "qy-eyebrow qy-link",
      onClick: function onClick() {
        return go('projects');
      }
    }, "\u2190 ", tr(QY.ui.nav.projects, lang)),
    eyebrow: tr(p.kind, lang) + (tr(p.year, lang) ? ' · ' + tr(p.year, lang) : ''),
    title: p.name,
    lead: tr(p.d, lang)
  }), p.specs ? React.createElement("section", {
    className: "qy-block"
  }, React.createElement("div", {
    className: "qy-proj-specs"
  }, p.specs.map(function (sp, k) {
    return React.createElement("div", {
      key: sp.id,
      className: "qy-proj-spec"
    }, React.createElement(Slot, {
      id: 'web-proj-spec-' + sp.id,
      label: tr(sp.t, 'es') + ' · imagen',
      ratio: "4/5",
      src: sp.src
    }), React.createElement("div", {
      className: "qy-col-card-cap"
    }, React.createElement("span", null, tr(sp.t, lang)), React.createElement("span", {
      className: "qy-num qy-mute"
    }, String(k + 1).padStart(2, '0'))));
  })), p.works && React.createElement(React.Fragment, null, React.createElement("div", {
    style: {
      height: 64
    }
  }), React.createElement(SectionHead, {
    label: lang === 'es' ? 'Otros trabajos' : 'Other work'
  }), React.createElement("div", {
    className: "qy-proj-specs qy-proj-works"
  }, p.works.map(function (w, k) {
    return React.createElement("div", {
      key: w.id,
      className: "qy-proj-spec"
    }, React.createElement(Slot, {
      id: 'web-proj-work-' + w.id,
      label: tr(w.t, 'es'),
      ratio: "4/5",
      src: w.src
    }), React.createElement("div", {
      className: "qy-col-card-cap"
    }, React.createElement("span", null, tr(w.t, lang)), React.createElement("span", {
      className: "qy-num qy-mute"
    }, String(k + 1).padStart(2, '0'))));
  })))) : p.steps ? React.createElement(ProjectBody, {
    p: p
  }) : React.createElement(React.Fragment, null, React.createElement("section", {
    className: "qy-c-cover"
  }, React.createElement(Slot, {
    id: 'web-proj-cover-' + p.id,
    label: 'Proyecto ' + p.name + ' · horizontal',
    ratio: "21/9"
  })), React.createElement("section", {
    className: "qy-block"
  }, React.createElement("div", {
    className: "qy-ed-grid"
  }, React.createElement("div", {
    className: "a"
  }, React.createElement(Slot, {
    id: "web-proj-".concat(p.id, "-1"),
    label: "Proyecto \xB7 horizontal",
    ratio: "16/9"
  })), React.createElement("div", {
    className: "b"
  }, React.createElement(Slot, {
    id: "web-proj-".concat(p.id, "-2"),
    label: "Proyecto \xB7 vertical",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "c"
  }, React.createElement(Slot, {
    id: "web-proj-".concat(p.id, "-3"),
    label: "Detalle",
    ratio: "4/5"
  })), React.createElement("div", {
    className: "d"
  }, React.createElement(Slot, {
    id: "web-proj-".concat(p.id, "-4"),
    label: "Proyecto \xB7 horizontal",
    ratio: "3/2"
  }))))), next !== p && React.createElement("button", {
    className: "qy-next",
    onClick: function onClick() {
      return go('project', next.id);
    }
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, lang === 'es' ? 'Siguiente proyecto' : 'Next project'), React.createElement("span", {
    className: "qy-next-name"
  }, next.name, " \u2192")), React.createElement(Footer, null));
}
var LAB_URL = 'Web QiYo 3D LAB.html';
function labCover(t) {
  var ty = LAB.tipos.find(function (x) {
    return x.id === t;
  });
  if (ty && ty.gallery) return ty.gallery[0];
  var p = LAB.pieces.find(function (x) {
    return x.tipo === t && x.cover;
  }) || LAB.pieces.find(function (x) {
    return x.tipo === t;
  });
  return p && p.img;
}
function Lab() {
  var _useApp4 = useApp(),
    lang = _useApp4.lang,
    go = _useApp4.go;
  return React.createElement("div", null, React.createElement(PageHead, {
    eyebrow: "QiYo 3D LAB"
  }), React.createElement(BaseGrid, {
    items: LAB.tipos.map(function (t) {
      return {
        key: t.id,
        slot: 'web-labcard-' + t.id,
        src: labCover(t.id),
        ratio: '4/5',
        label: t.es,
        title: t[lang] || t.es,
        meta: t.gallery ? t.gallery.length + (lang === 'es' ? ' detalles' : ' details') : t.subs ? t.subs.length + (lang === 'es' ? ' secciones' : ' sections') : LAB.pieces.filter(function (p) {
          return p.tipo === t.id;
        }).length + (lang === 'es' ? ' piezas' : ' pieces'),
        onClick: function onClick() {
          return go('labcat', t.id);
        }
      };
    })
  }), React.createElement(Footer, null));
}
function LabCat(_ref7) {
  var id = _ref7.id;
  var _useApp5 = useApp(),
    lang = _useApp5.lang,
    go = _useApp5.go;
  var t = LAB.tipos.find(function (x) {
    return x.id === id;
  }) || LAB.tipos[0];
  var pieces = LAB.pieces.filter(function (p) {
    return p.tipo === t.id;
  });
  if (t.gallery) return React.createElement("div", null, React.createElement(PageHead, {
    back: React.createElement("button", {
      className: "qy-eyebrow qy-link",
      onClick: function onClick() {
        return go('lab');
      }
    }, "\u2190 QiYo 3D LAB"),
    eyebrow: '3D Lab · ' + (lang === 'es' ? 'Detalles' : 'Details'),
    title: t[lang] || t.es
  }), React.createElement("section", {
    style: {
      padding: '0 var(--g) clamp(64px,8vw,120px)'
    }
  }, React.createElement(SingleCarousel, {
    imgs: t.gallery,
    ratio: "auto",
    h: "calc(100vh - 140px)"
  })), React.createElement(Footer, null));
  if (t.subs) return React.createElement("div", null, React.createElement(PageHead, {
    back: React.createElement("button", {
      className: "qy-eyebrow qy-link",
      onClick: function onClick() {
        return go('lab');
      }
    }, "\u2190 QiYo 3D LAB"),
    eyebrow: "3D Lab",
    title: t[lang] || t.es
  }), React.createElement(BaseGrid, {
    items: t.subs.map(function (s) {
      return {
        key: s.id,
        slot: 'web-labsub-' + s.id,
        ratio: '4/5',
        label: s.es,
        title: s[lang] || s.es,
        onClick: function onClick() {
          return go('labsub', s.id);
        }
      };
    })
  }), React.createElement(Footer, null));
  return React.createElement("div", null, React.createElement(PageHead, {
    back: React.createElement("button", {
      className: "qy-eyebrow qy-link",
      onClick: function onClick() {
        return go('lab');
      }
    }, "\u2190 QiYo 3D LAB"),
    eyebrow: '3D Lab · ' + pieces.length + (lang === 'es' ? ' piezas' : ' pieces'),
    title: t[lang] || t.es
  }), React.createElement("section", {
    className: "qy-pieces"
  }, pieces.map(function (p) {
    return React.createElement("div", {
      key: p.id,
      className: "qy-piece"
    }, React.createElement("div", {
      className: "qy-piece-img"
    }, p.img ? React.createElement("img", {
      loading: "lazy",
      decoding: "async",
      src: p.img,
      alt: p[lang].t
    }) : React.createElement(Slot, {
      id: 'web-piece-' + p.id,
      label: p.es.t + ' · foto',
      ratio: "4/5"
    })), React.createElement("div", {
      className: "qy-col-card-cap"
    }, React.createElement("span", null, p[lang].t), React.createElement("span", {
      className: "qy-num qy-mute"
    }, p.n)), React.createElement("span", {
      className: "qy-small qy-mute"
    }, p[lang].v));
  })), React.createElement(Footer, null));
}
function LabSub(_ref8) {
  var id = _ref8.id;
  var _useApp6 = useApp(),
    lang = _useApp6.lang,
    go = _useApp6.go;
  var t = LAB.tipos.find(function (x) {
    return x.subs && x.subs.some(function (s) {
      return s.id === id;
    });
  });
  if (!t) return React.createElement(LabCat, {
    id: "textil"
  });
  var s = t.subs.find(function (s) {
    return s.id === id;
  });
  return React.createElement("div", null, React.createElement(PageHead, {
    back: React.createElement("button", {
      className: "qy-eyebrow qy-link",
      onClick: function onClick() {
        return go('labcat', t.id);
      }
    }, "\u2190 ", t[lang] || t.es),
    eyebrow: '3D Lab · ' + (t[lang] || t.es),
    title: s[lang] || s.es
  }), React.createElement("section", {
    className: "qy-block"
  }, React.createElement("div", {
    className: "qy-ed-grid"
  }, React.createElement("div", {
    className: "a"
  }, React.createElement(Slot, {
    id: 'web-labsub-' + id + '-1',
    label: s.es + ' · horizontal',
    ratio: "16/9"
  })), React.createElement("div", {
    className: "b"
  }, React.createElement(Slot, {
    id: 'web-labsub-' + id + '-2',
    label: s.es + ' · vertical',
    ratio: "4/5"
  })), React.createElement("div", {
    className: "c"
  }, React.createElement(Slot, {
    id: 'web-labsub-' + id + '-3',
    label: s.es + ' · detalle',
    ratio: "4/5"
  })), React.createElement("div", {
    className: "d"
  }, React.createElement(Slot, {
    id: 'web-labsub-' + id + '-4',
    label: s.es + ' · horizontal',
    ratio: "3/2"
  })))), React.createElement(Footer, null));
}
function Process(_ref9) {
  var id = _ref9.id;
  var _useApp7 = useApp(),
    lang = _useApp7.lang;
  var es = lang === 'es';
  useEffect(function () {
    if (!id) return;
    var t = setTimeout(function () {
      var el = document.getElementById('taller-' + id);
      if (el) scrollTo({
        top: el.getBoundingClientRect().top + scrollY - 80,
        behavior: 'smooth'
      });
    }, 350);
    return function () {
      return clearTimeout(t);
    };
  }, [id]);
  return React.createElement("div", null, React.createElement(PageHead, {
    eyebrow: tr(QY.ui.nav.process, lang),
    title: es ? 'Cada pieza se construye a mano, capa a capa.' : 'Each piece is built by hand, layer by layer.',
    lead: es ? 'Lo que pasa en el taller, entrada a entrada.' : 'What happens in the studio, one entry at a time.'
  }), QY.taller.map(function (g) {
    return React.createElement("section", {
      key: g.id,
      id: 'taller-' + g.id,
      className: "qy-block"
    }, React.createElement(SectionHead, {
      label: tr(g.t, lang),
      right: g.imgs.length ? n2(g.imgs.length) : null
    }), g.imgs.length ? React.createElement(RunwayCarousel, {
      imgs: g.imgs
    }) : React.createElement("div", {
      className: "qy-taller"
    }, [1, 2, 3].map(function (n) {
      return React.createElement(Slot, {
        key: n,
        id: 'web-taller-' + g.id + '-' + n,
        label: 'Taller ' + tr(g.t, 'es') + ' · foto ' + n,
        ratio: "4/5"
      });
    })));
  }), React.createElement("section", {
    className: "qy-block"
  }, React.createElement(SectionHead, {
    label: es ? 'Técnicas' : 'Techniques',
    right: n2(QY.home.process.length)
  }), QY.home.process.map(function (p, k) {
    return React.createElement("div", {
      key: k,
      className: "qy-runway"
    }, React.createElement("span", {
      className: "qy-num"
    }, n2(k + 1)), React.createElement("span", null, tr(p.t, lang), React.createElement("em", {
      className: "qy-mute"
    }, tr(p.d, lang))));
  })), React.createElement(Footer, null));
}
function Runway() {
  var _useApp8 = useApp(),
    lang = _useApp8.lang;
  return React.createElement("div", null, React.createElement(PageHead, {
    eyebrow: tr(QY.ui.nav.runway, lang),
    title: lang === 'es' ? 'Las colecciones en movimiento.' : 'The collections in motion.'
  }), QY.home.runways.map(function (r, k) {
    return React.createElement("section", {
      key: k,
      className: "qy-block"
    }, React.createElement(SectionHead, {
      label: r.year + ' · ' + tr(r.t, lang),
      right: r.col + ' · ' + tr(r.d, lang)
    }), React.createElement("div", {
      className: "qy-ed-grid"
    }, React.createElement("div", {
      className: "a"
    }, React.createElement(Slot, {
      id: "web-runway-".concat(k, "-1"),
      label: "Pasarela \xB7 horizontal",
      ratio: "16/9"
    })), React.createElement("div", {
      className: "b"
    }, React.createElement(Slot, {
      id: "web-runway-".concat(k, "-2"),
      label: "Pasarela \xB7 vertical",
      ratio: "4/5"
    }))));
  }), React.createElement(Footer, null));
}
Object.assign(window, {
  BaseGrid: BaseGrid,
  PageHead: PageHead,
  Projects: Projects,
  Project: Project,
  CarouselNav: CarouselNav,
  SingleCarousel: SingleCarousel,
  Lab: Lab,
  LabCat: LabCat,
  LabSub: LabSub,
  Process: Process,
  Runway: Runway
});

/* --- web2/search.jsx --- */
"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _React = React,
  useStateS = _React.useState,
  useEffectS = _React.useEffect,
  useRefS = _React.useRef,
  useMemoS = _React.useMemo;
var qyNorm = function qyNorm(s) {
  return String(s || '').split('').map(function (c) {
    return c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').charAt(0) || c;
  }).join('').toLowerCase();
};
var isAsset = function isAsset(s) {
  return /\.(png|jpe?g|webp|gif|mp4|svg)$/i.test(s) || /^(assets|uploads|figurines)\//.test(s);
};
function textOf(o, lang) {
  var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  if (o == null) return out;
  if (typeof o === 'string') {
    if (!isAsset(o) && o.length > 1) out.push(o);
    return out;
  }
  if (typeof o === 'number') return out;
  if (Array.isArray(o)) {
    o.forEach(function (x) {
      return textOf(x, lang, out);
    });
    return out;
  }
  if (_typeof(o) === 'object') {
    if ('es' in o && typeof o.es === 'string') {
      var _o$lang;
      textOf((_o$lang = o[lang]) !== null && _o$lang !== void 0 ? _o$lang : o.es, lang, out);
      return out;
    }
    if (lang in o && _typeof(o[lang]) === 'object') {
      textOf(o[lang], lang, out);
      return out;
    }
    Object.entries(o).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        k = _ref2[0],
        v = _ref2[1];
      if (!['id', 'slot', 'theme', 'go', 'tipo', 'state', 'es', 'en'].includes(k) || k === lang) textOf(v, lang, out);
    });
  }
  return out;
}
var SEARCH_TYPES = [{
  k: 'all',
  es: 'Todo',
  en: 'All'
}, {
  k: 'collection',
  es: 'Colecciones',
  en: 'Collections'
}, {
  k: 'project',
  es: 'Proyectos',
  en: 'Projects'
}, {
  k: 'lab',
  es: '3D Lab',
  en: '3D Lab'
}, {
  k: 'journal',
  es: 'Diario',
  en: 'Journal'
}, {
  k: 'page',
  es: 'Páginas',
  en: 'Pages'
}];
function buildIndex(lang) {
  var E = function E(type, title, sub, text, img, to) {
    return {
      type: type,
      title: title,
      sub: sub,
      text: Array.isArray(text) ? text.join(' · ') : text || '',
      img: img,
      to: to
    };
  };
  var idx = [];
  QY.collections.forEach(function (c) {
    idx.push(E('collection', c.name, [c.sub, tr(c.season, lang)].filter(Boolean).join(' · '), textOf(c, lang), c.cover || c.reveal, ['collection', c.id]));
    if (c.runway) idx.push(E('page', (lang === 'es' ? 'Pasarela ' : 'Runway ') + c.name, c.runway, [c.runway, c.name], (c.runwayImgs || [])[0], ['runway', c.id]));
  });
  QY.projects.forEach(function (p) {
    idx.push(E('project', p.name, tr(p.year, lang), textOf(p, lang), p.cover || p.card, ['project', p.id]));
    (p.specs || []).concat(p.works || []).forEach(function (s) {
      return idx.push(E('project', tr(s.t, lang), p.name, [tr(s.t, lang), p.name], s.src, ['project', p.id]));
    });
  });
  if (window.LAB) {
    LAB.tipos.forEach(function (t) {
      return idx.push(E('lab', t[lang] || t.es, '3D Lab', (t.subs || []).map(function (s) {
        return s[lang] || s.es;
      }), null, ['labcat', t.id]));
    });
    LAB.pieces.forEach(function (p) {
      var d = p[lang] || p.es;
      idx.push(E('lab', d.t, [d.v, p.col].filter(Boolean).join(' · '), [d.x, d.mat, p.col, d.v], p.img, ['labcat', p.tipo]));
    });
  }
  QY.journal.forEach(function (j) {
    return idx.push(E('journal', tr(j.title, lang), tr(j.tag, lang), tr(j.body, lang), j.img, ['entry', j.id]));
  });
  var es = lang === 'es';
  idx.push(E('page', es ? 'Sobre mí' : 'About', 'Carmen Álvarez Feriche', textOf(QY.about, lang).concat(['CV', es ? 'Currículum' : 'Curriculum', 'Illustrator', 'Photoshop']), 'assets/opt/carmen-retrato.jpg', ['about']));
  idx.push(E('page', es ? 'Contacto' : 'Contact', QY.contact.email, textOf(QY.contact, lang).concat(textOf(QY.ui, lang).filter(function (s) {
    return /medida|measure|prensa|press|colabor/i.test(s);
  })), null, ['contact']));
  idx.push(E('page', es ? 'Taller' : 'Studio', es ? 'Hecho a mano' : 'Handmade', [es ? 'taller proceso artesanía hecho a mano' : 'studio process craft handmade'].concat(QY.taller.map(function (g) {
    return tr(g.t, lang);
  })).concat(QY.home.process.map(function (p) {
    return tr(p.t, lang) + ' ' + tr(p.d, lang);
  })), (QY.taller[0] || {
    imgs: []
  }).imgs[0], ['process']));
  return idx;
}
function runSearch(idx, q) {
  var terms = qyNorm(q).split(/\s+/).filter(function (t) {
    return t.length > 1 || /\d/.test(t);
  });
  if (!terms.length) return [];
  var seen = new Set();
  return idx.map(function (e) {
    var T = qyNorm(e.title),
      S = qyNorm(e.sub),
      X = qyNorm(e.text);
    var score = 0;
    var _iterator = _createForOfIteratorHelper(terms),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var t = _step.value;
        var s = (T.startsWith(t) ? 6 : T.includes(t) ? 4 : 0) + (S.includes(t) ? 2 : 0) + (X.includes(t) ? 1 : 0);
        if (!s) return null;
        score += s;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return _objectSpread(_objectSpread({}, e), {}, {
      score: score,
      terms: terms
    });
  }).filter(Boolean).filter(function (e) {
    var k = e.type + e.title + e.to.join();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  }).sort(function (a, b) {
    return b.score - a.score;
  });
}
function Hl(_ref3) {
  var text = _ref3.text,
    terms = _ref3.terms;
  if (!text) return null;
  var N = qyNorm(text),
    marks = [];
  terms.forEach(function (t) {
    var i = N.indexOf(t);
    while (i >= 0) {
      marks.push([i, i + t.length]);
      i = N.indexOf(t, i + t.length);
    }
  });
  if (!marks.length) return React.createElement(React.Fragment, null, text);
  marks.sort(function (a, b) {
    return a[0] - b[0];
  });
  var out = [];
  var p = 0;
  marks.forEach(function (_ref4, k) {
    var _ref5 = _slicedToArray(_ref4, 2),
      a = _ref5[0],
      b = _ref5[1];
    if (a < p) return;
    out.push(text.slice(p, a));
    out.push(React.createElement("mark", {
      key: k,
      className: "qy-mark"
    }, text.slice(a, b)));
    p = b;
  });
  out.push(text.slice(p));
  return React.createElement(React.Fragment, null, out);
}
function snippet(text, terms) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 70;
  var N = qyNorm(text);
  var i = -1;
  var _iterator2 = _createForOfIteratorHelper(terms),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var t = _step2.value;
      i = N.indexOf(t);
      if (i >= 0) break;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  if (i < 0) return text.length > r * 2 ? text.slice(0, r * 2) + '…' : text;
  var a = Math.max(0, i - r),
    b = Math.min(text.length, i + r);
  return (a > 0 ? '…' : '') + text.slice(a, b).trim() + (b < text.length ? '…' : '');
}
var SUGGEST = ['Rebirth', 'Thalaira', 'Ágora', {
  es: 'Bolsos',
  en: 'Bags'
}, {
  es: 'Corsé',
  en: 'Corset'
}, {
  es: 'Pasarela',
  en: 'Runway'
}, {
  es: 'Confección a medida',
  en: 'Made to measure'
}];
var typeLabel = function typeLabel(k, lang) {
  var t = SEARCH_TYPES.find(function (x) {
    return x.k === k;
  });
  return t ? t[lang] : k;
};
function SearchRow(_ref6) {
  var r = _ref6.r,
    i = _ref6.i,
    lang = _ref6.lang,
    onGo = _ref6.onGo,
    compact = _ref6.compact;
  return React.createElement("button", {
    className: 'qy-sr' + (compact ? ' compact' : ''),
    onClick: function onClick() {
      return onGo(r.to);
    }
  }, !compact && React.createElement("span", {
    className: "qy-num qy-mute"
  }, n2(i + 1)), React.createElement("span", {
    className: "qy-sr-thumb"
  }, r.img ? React.createElement("img", {
    src: r.img,
    alt: "",
    loading: "lazy"
  }) : React.createElement("span", {
    className: "qy-eyebrow"
  }, r.title.slice(0, 1))), React.createElement("span", {
    className: "qy-sr-body"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, typeLabel(r.type, lang), r.sub ? ' · ' + r.sub : ''), React.createElement("span", {
    className: "qy-h3"
  }, React.createElement(Hl, {
    text: r.title,
    terms: r.terms
  })), !compact && r.text && React.createElement("span", {
    className: "qy-small qy-mute"
  }, React.createElement(Hl, {
    text: snippet(r.text, r.terms),
    terms: r.terms
  }))), React.createElement("span", {
    className: "qy-sr-arrow"
  }, "\u2192"));
}
function SearchOverlay(_ref7) {
  var onClose = _ref7.onClose;
  var _useApp = useApp(),
    lang = _useApp.lang,
    go = _useApp.go;
  var _useStateS = useStateS(''),
    _useStateS2 = _slicedToArray(_useStateS, 2),
    q = _useStateS2[0],
    setQ = _useStateS2[1];
  var inp = useRefS(null);
  var idx = useMemoS(function () {
    return buildIndex(lang);
  }, [lang]);
  var res = useMemoS(function () {
    return runSearch(idx, q);
  }, [idx, q]);
  useEffectS(function () {
    inp.current && inp.current.focus();
    var k = function k(e) {
      return e.key === 'Escape' && onClose();
    };
    addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return function () {
      removeEventListener('keydown', k);
      document.body.style.overflow = '';
    };
  }, []);
  var nav = function nav(to) {
    onClose();
    go.apply(void 0, _toConsumableArray(to));
  };
  var all = function all() {
    if (q.trim()) nav(['search', q.trim()]);
  };
  return React.createElement("div", {
    className: "qy-search-ov",
    role: "dialog",
    "aria-label": lang === 'es' ? 'Buscar' : 'Search'
  }, React.createElement("div", {
    className: "qy-search-ov-top"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, lang === 'es' ? 'Buscar en By QiYo' : 'Search By QiYo'), React.createElement("button", {
    className: "qy-eyebrow qy-link",
    onClick: onClose
  }, lang === 'es' ? 'Cerrar' : 'Close', " \xB7 Esc")), React.createElement("form", {
    className: "qy-search-field",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      all();
    }
  }, React.createElement("input", {
    ref: inp,
    value: q,
    onChange: function onChange(e) {
      return setQ(e.target.value);
    },
    placeholder: lang === 'es' ? 'Colecciones, piezas, técnicas…' : 'Collections, pieces, techniques…',
    "aria-label": lang === 'es' ? 'Buscar' : 'Search'
  }), q && React.createElement("button", {
    type: "button",
    className: "qy-eyebrow qy-mute qy-link",
    onClick: function onClick() {
      setQ('');
      inp.current.focus();
    }
  }, lang === 'es' ? 'Borrar' : 'Clear')), !q.trim() ? React.createElement("div", {
    className: "qy-search-sugg"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, lang === 'es' ? 'Sugerencias' : 'Suggestions'), React.createElement("div", {
    className: "qy-chips"
  }, SUGGEST.map(function (s) {
    var t = tr(s, lang);
    return React.createElement("button", {
      key: t,
      className: "qy-chip",
      onClick: function onClick() {
        return setQ(t);
      }
    }, t);
  }))) : React.createElement("div", {
    className: "qy-search-quick"
  }, res.length ? React.createElement(React.Fragment, null, res.slice(0, 5).map(function (r, i) {
    return React.createElement(SearchRow, {
      key: i,
      r: r,
      i: i,
      lang: lang,
      onGo: nav,
      compact: true
    });
  }), React.createElement("button", {
    className: "qy-search-all",
    onClick: all
  }, React.createElement("span", null, lang === 'es' ? "Ver los ".concat(res.length, " resultados") : "See all ".concat(res.length, " results")), React.createElement("span", null, "\u21B5"))) : React.createElement("p", {
    className: "qy-lead qy-mute",
    style: {
      padding: '32px 0'
    }
  }, lang === 'es' ? "Nada para \xAB".concat(q, "\xBB.") : "Nothing for \u201C".concat(q, "\u201D."))));
}
function Search(_ref8) {
  var id = _ref8.id;
  var _useApp2 = useApp(),
    lang = _useApp2.lang,
    go = _useApp2.go;
  var _useStateS3 = useStateS(id || ''),
    _useStateS4 = _slicedToArray(_useStateS3, 2),
    q = _useStateS4[0],
    setQ = _useStateS4[1];
  var _useStateS5 = useStateS('all'),
    _useStateS6 = _slicedToArray(_useStateS5, 2),
    type = _useStateS6[0],
    setType = _useStateS6[1];
  var idx = useMemoS(function () {
    return buildIndex(lang);
  }, [lang]);
  var res = useMemoS(function () {
    return runSearch(idx, q);
  }, [idx, q]);
  var counts = useMemoS(function () {
    return Object.fromEntries(SEARCH_TYPES.map(function (t) {
      return [t.k, t.k === 'all' ? res.length : res.filter(function (r) {
        return r.type === t.k;
      }).length];
    }));
  }, [res]);
  var shown = type === 'all' ? res : res.filter(function (r) {
    return r.type === type;
  });
  var es = lang === 'es';
  return React.createElement("div", null, React.createElement("section", {
    className: "qy-page-head qy-search-head"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, es ? 'Búsqueda' : 'Search'), React.createElement("form", {
    className: "qy-search-field big",
    onSubmit: function onSubmit(e) {
      return e.preventDefault();
    }
  }, React.createElement("input", {
    value: q,
    onChange: function onChange(e) {
      setQ(e.target.value);
      setType('all');
    },
    placeholder: es ? 'Buscar…' : 'Search…',
    "aria-label": es ? 'Buscar' : 'Search',
    autoFocus: !id
  }), q && React.createElement("button", {
    type: "button",
    className: "qy-eyebrow qy-mute qy-link",
    onClick: function onClick() {
      return setQ('');
    }
  }, es ? 'Borrar' : 'Clear')), q.trim() && React.createElement("p", {
    className: "qy-small qy-mute"
  }, res.length ? es ? "".concat(res.length, " resultado").concat(res.length === 1 ? '' : 's', " para \xAB").concat(q.trim(), "\xBB") : "".concat(res.length, " result").concat(res.length === 1 ? '' : 's', " for \u201C").concat(q.trim(), "\u201D") : '')), q.trim() && res.length > 0 && React.createElement("section", {
    className: "qy-block qy-search-res"
  }, React.createElement("div", {
    className: "qy-search-tabs"
  }, SEARCH_TYPES.filter(function (t) {
    return counts[t.k] > 0;
  }).map(function (t) {
    return React.createElement("button", {
      key: t.k,
      className: type === t.k ? 'on' : '',
      onClick: function onClick() {
        return setType(t.k);
      }
    }, t[lang], React.createElement("sup", {
      className: "qy-num"
    }, counts[t.k]));
  })), React.createElement("div", {
    className: "qy-sr-list"
  }, shown.map(function (r, i) {
    return React.createElement(SearchRow, {
      key: r.type + r.title + i,
      r: r,
      i: i,
      lang: lang,
      onGo: function onGo(to) {
        return go.apply(void 0, _toConsumableArray(to));
      }
    });
  }))), (!q.trim() || !res.length) && React.createElement("section", {
    className: "qy-block qy-search-empty"
  }, q.trim() && React.createElement(React.Fragment, null, React.createElement("h2", {
    className: "qy-h2"
  }, es ? "No hay resultados para \xAB".concat(q.trim(), "\xBB.") : "No results for \u201C".concat(q.trim(), "\u201D.")), React.createElement("p", {
    className: "qy-body qy-mute"
  }, es ? 'Prueba con otra palabra, revisa la ortografía o explora una de estas búsquedas.' : 'Try another word, check the spelling or explore one of these searches.')), React.createElement("div", {
    className: "qy-chips"
  }, SUGGEST.map(function (s) {
    var t = tr(s, lang);
    return React.createElement("button", {
      key: t,
      className: "qy-chip",
      onClick: function onClick() {
        return setQ(t);
      }
    }, t);
  })), React.createElement("div", {
    className: "qy-search-browse"
  }, QY.collections.map(function (c) {
    return React.createElement("button", {
      key: c.id,
      className: "qy-proj-spec",
      onClick: function onClick() {
        return go('collection', c.id);
      }
    }, React.createElement("div", {
      className: "qy-slot",
      style: {
        aspectRatio: '4/5'
      }
    }, React.createElement("img", {
      loading: "lazy",
      decoding: "async",
      src: c.cover,
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })), React.createElement("div", {
      className: "qy-col-card-cap"
    }, React.createElement("span", null, c.name), React.createElement("span", {
      className: "qy-num qy-mute"
    }, tr(c.season, lang))));
  }))), React.createElement(Footer, null));
}
function SearchButton(_ref9) {
  var onOpen = _ref9.onOpen;
  var _useApp3 = useApp(),
    lang = _useApp3.lang;
  return React.createElement("button", {
    className: "qy-search-btn",
    onClick: onOpen,
    "aria-label": lang === 'es' ? 'Buscar' : 'Search'
  }, React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "4.6"
  }), React.createElement("path", {
    d: "M9.4 9.4 13 13"
  })), React.createElement("span", null, lang === 'es' ? 'Buscar' : 'Search'));
}
Object.assign(window, {
  Search: Search,
  SearchOverlay: SearchOverlay,
  SearchButton: SearchButton
});

/* --- web2/legal.jsx --- */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
QY.legal = {
  owner: 'Carmen Álvarez Feriche',
  nif: '',
  address: '',
  city: 'Granada',
  updated: L2('4 de noviembre de 2026', '4 November 2026')
};
function L2(es, en) {
  return {
    es: es,
    en: en
  };
}
var LEGAL_PAGES = ['aviso', 'privacidad', 'cookies'];
var LEGAL_T = {
  aviso: {
    es: 'Aviso legal',
    en: 'Legal notice'
  },
  privacidad: {
    es: 'Política de privacidad',
    en: 'Privacy policy'
  },
  cookies: {
    es: 'Política de cookies',
    en: 'Cookie policy'
  }
};
function legalBody(id, lang, g) {
  var es = lang === 'es';
  var mail = React.createElement("a", {
    href: 'mailto:' + QY.contact.email,
    style: {
      textDecoration: 'underline'
    }
  }, QY.contact.email);
  if (id === 'aviso') return [[es ? 'Titular' : 'Owner', React.createElement(React.Fragment, null, es ? 'Este sitio web es titularidad de ' : 'This website is owned by ', g.owner, es ? ', persona física y titular de la marca registrada By QiYo' : ', a private individual and owner of the registered trademark By QiYo', g.nif ? ', NIF ' + g.nif : '', g.address ? (es ? ', con domicilio en ' : ', with address at ') + g.address : (es ? ', con residencia en ' : ', based in ') + g.city, es ? '. Contacto: ' : '. Contact: ', mail, ".")], [es ? 'Objeto' : 'Purpose', es ? 'By QiYo es la web de portfolio de la diseñadora Carmen Álvarez Feriche. Presenta colecciones, proyectos y procesos de trabajo. No se realizan ventas ni se desarrolla actividad económica a través de este sitio.' : 'By QiYo is the portfolio website of designer Carmen Álvarez Feriche. It presents collections, projects and working processes. No sales or economic activity take place through this site.'], [es ? 'Propiedad intelectual' : 'Intellectual property', es ? 'Los diseños, fotografías, textos, modelos 3D y la marca By QiYo son propiedad de su titular o se usan con autorización. Queda prohibida su reproducción, distribución o transformación sin permiso expreso por escrito.' : 'The designs, photographs, texts, 3D models and the By QiYo brand belong to their owner or are used with permission. Reproduction, distribution or transformation without express written permission is prohibited.'], [es ? 'Responsabilidad' : 'Liability', es ? 'El titular no se hace responsable del uso indebido de los contenidos ni de los sitios externos enlazados, como Instagram.' : 'The owner is not liable for misuse of the content or for linked external sites such as Instagram.'], [es ? 'Legislación aplicable' : 'Applicable law', es ? 'Este aviso se rige por la legislación española.' : 'This notice is governed by Spanish law.']];
  if (id === 'privacidad') return [[es ? 'Responsable' : 'Controller', React.createElement(React.Fragment, null, g.owner, g.nif ? ', NIF ' + g.nif : '', '. ', g.address || g.city, '. ', mail, ".")], [es ? 'Qué datos se recogen' : 'What data is collected', es ? 'Solo los que envías a través del formulario de contacto o por email: nombre, dirección de correo y el contenido del mensaje.' : 'Only what you send through the contact form or by email: name, email address and the message content.'], [es ? 'Finalidad y base legal' : 'Purpose and legal basis', es ? 'Responder a tu consulta (prensa, colaboraciones, pasarelas, exposiciones o confección a medida). La base legal es tu consentimiento al enviar el mensaje (art. 6.1.a RGPD).' : 'To reply to your enquiry (press, collaborations, runways, exhibitions or made-to-measure). The legal basis is your consent when sending the message (art. 6.1.a GDPR).'], [es ? 'Conservación' : 'Retention', es ? 'Los datos se conservan mientras dure la comunicación y, después, durante el tiempo necesario para atender posibles responsabilidades. No se ceden a terceros salvo obligación legal.' : 'Data is kept for as long as the conversation lasts and afterwards only as long as needed to meet legal obligations. It is not shared with third parties unless legally required.'], [es ? 'Tus derechos' : 'Your rights', React.createElement(React.Fragment, null, es ? 'Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ' : 'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ', mail, es ? '. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).' : '. You may also file a complaint with the Spanish Data Protection Agency (aepd.es).')]];
  return [[es ? 'Qué cookies usa esta web' : 'Cookies used', es ? 'Solo almacenamiento técnico necesario para el funcionamiento: recordar el idioma, el modo claro u oscuro y la última página visitada. Se guarda en tu navegador y no identifica a nadie.' : 'Only technical storage needed for the site to work: remembering the language, light or dark mode and the last page visited. It stays in your browser and does not identify anyone.'], [es ? 'Analítica y terceros' : 'Analytics and third parties', es ? 'No se usan cookies de analítica, publicidad ni redes sociales. Las tipografías se cargan desde Google Fonts, que puede registrar tu dirección IP de forma técnica.' : 'No analytics, advertising or social media cookies are used. Fonts are loaded from Google Fonts, which may technically log your IP address.'], [es ? 'Consentimiento' : 'Consent', es ? 'Al tratarse solo de almacenamiento técnico, no es necesario pedir consentimiento (art. 22.2 LSSI-CE). Si en el futuro se añade analítica, se mostrará un aviso para aceptarla o rechazarla.' : 'As only technical storage is used, consent is not required (art. 22.2 LSSI-CE). If analytics are added in future, a banner will let you accept or reject them.'], [es ? 'Cómo borrarlas' : 'How to delete them', es ? 'Puedes eliminar estos datos en cualquier momento desde la configuración de tu navegador.' : 'You can delete this data at any time from your browser settings.']];
}
function Legal(_ref) {
  var id = _ref.id;
  var _useApp = useApp(),
    lang = _useApp.lang,
    go = _useApp.go;
  var k = LEGAL_PAGES.includes(id) ? id : 'aviso';
  var g = QY.legal;
  return React.createElement("div", null, React.createElement(PageHead, {
    eyebrow: 'Legal · ' + (lang === 'es' ? 'Actualizado ' : 'Updated ') + tr(g.updated, lang),
    title: tr(LEGAL_T[k], lang)
  }), React.createElement("section", {
    style: {
      padding: '0 var(--g) clamp(64px,8vw,120px)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr)',
      gap: 'clamp(24px,4vw,64px)'
    },
    className: "qy-legal"
  }, React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignSelf: 'start',
      position: 'sticky',
      top: 100
    }
  }, LEGAL_PAGES.map(function (p) {
    return React.createElement("button", {
      key: p,
      className: "qy-eyebrow qy-link",
      style: {
        opacity: p === k ? 1 : .45
      },
      onClick: function onClick() {
        return go('legal', p);
      }
    }, tr(LEGAL_T[p], lang));
  })), React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, legalBody(k, lang, g).map(function (_ref2, i) {
    var _ref3 = _slicedToArray(_ref2, 2),
      h = _ref3[0],
      b = _ref3[1];
    return React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, React.createElement("h2", {
      className: "qy-h3"
    }, h), React.createElement("p", {
      className: "qy-body"
    }, b));
  }))), React.createElement(Footer, null));
}
function NotFound() {
  var _useApp2 = useApp(),
    lang = _useApp2.lang,
    go = _useApp2.go;
  var es = lang === 'es';
  return React.createElement("div", null, React.createElement("section", {
    style: {
      minHeight: '78vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: 24,
      padding: '140px var(--g) clamp(48px,6vw,96px)'
    }
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, "Error 404"), React.createElement("h1", {
    style: {
      fontSize: 'clamp(64px,14vw,220px)',
      fontWeight: 500,
      letterSpacing: '-.05em',
      lineHeight: .9
    }
  }, es ? 'Sin rastro.' : 'No trace.'), React.createElement("p", {
    className: "qy-lead qy-mute",
    style: {
      maxWidth: '32ch'
    }
  }, es ? 'Esta página no existe o ha cambiado de sitio.' : 'This page does not exist or has moved.'), React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28
    }
  }, React.createElement("button", {
    className: "qy-eyebrow qy-link",
    onClick: function onClick() {
      return go('home');
    }
  }, "\u2190 ", tr(QY.ui.nav.home, lang)), React.createElement("button", {
    className: "qy-eyebrow qy-link",
    onClick: function onClick() {
      return go('collections');
    }
  }, tr(QY.ui.nav.collections, lang), " \u2192"), React.createElement("button", {
    className: "qy-eyebrow qy-link",
    onClick: function onClick() {
      return go('contact');
    }
  }, tr(QY.ui.nav.contact, lang), " \u2192"))), React.createElement(Footer, null));
}
Object.assign(window, {
  Legal: Legal,
  NotFound: NotFound,
  LEGAL_PAGES: LEGAL_PAGES,
  LEGAL_T: LEGAL_T
});

/* --- web2/mstrip.jsx --- */
"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function useCenterActive(n, axis, scroller) {
  var refs = React.useRef([]);
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    a = _React$useState2[0],
    setA = _React$useState2[1];
  React.useEffect(function () {
    if (axis === 'y') {
      var io = new IntersectionObserver(function (es) {
        return es.forEach(function (e) {
          if (e.isIntersecting) setA(+e.target.dataset.k);
        });
      }, {
        rootMargin: '-48% 0px -48% 0px'
      });
      refs.current.forEach(function (el) {
        return el && io.observe(el);
      });
      return function () {
        return io.disconnect();
      };
    }
    var sc = scroller.current;
    if (!sc) return;
    var f = function f() {
      var c = sc.scrollLeft + sc.clientWidth / 2;
      var best = 0,
        d = 1e9;
      refs.current.forEach(function (el, k) {
        if (!el) return;
        var m = Math.abs(el.offsetLeft + el.offsetWidth / 2 - c);
        if (m < d) {
          d = m;
          best = k;
        }
      });
      setA(best);
    };
    f();
    sc.addEventListener('scroll', f, {
      passive: true
    });
    return function () {
      return sc.removeEventListener('scroll', f);
    };
  }, [n, axis]);
  return [a, setA, refs];
}
function MStripImg(_ref) {
  var t = _ref.t,
    on = _ref.on,
    h = _ref.h;
  return React.createElement("div", {
    className: "qy-ms-img",
    style: {
      height: h,
      filter: on ? 'none' : 'grayscale(1)',
      opacity: on ? 1 : .7
    }
  }, t.src ? React.createElement("img", {
    src: t.src,
    alt: "",
    loading: "lazy"
  }) : React.createElement(Slot, {
    id: t.slot,
    label: "imagen",
    style: {
      height: '100%'
    }
  }));
}
function MStripFoco(_ref2) {
  var tiles = _ref2.tiles,
    lang = _ref2.lang,
    go = _ref2.go;
  var _useCenterActive = useCenterActive(tiles.length, 'y'),
    _useCenterActive2 = _slicedToArray(_useCenterActive, 3),
    a = _useCenterActive2[0],
    refs = _useCenterActive2[2];
  return React.createElement("section", {
    className: "qy-ms qy-ms-foco"
  }, tiles.map(function (t, k) {
    var on = k === a;
    return React.createElement("div", {
      key: t.slot,
      ref: function ref(el) {
        return refs.current[k] = el;
      },
      "data-k": k,
      className: 'qy-ms-f' + (on ? ' on' : ''),
      role: "link",
      onClick: function onClick() {
        return go(t.go);
      }
    }, React.createElement(MStripImg, {
      t: t,
      on: on,
      h: "64svh"
    }), React.createElement("div", {
      className: "qy-ms-f-cap"
    }, React.createElement("span", {
      className: "qy-num"
    }, n2(k + 1), " / ", n2(tiles.length)), React.createElement("h2", null, t.title || tr(QY.ui.nav[t.go], lang)), React.createElement("span", {
      className: "qy-ms-f-sub"
    }, tr(t.t, lang), " \u2192")));
  }));
}
function MStripAcordeon(_ref3) {
  var tiles = _ref3.tiles,
    lang = _ref3.lang,
    go = _ref3.go;
  var _useCenterActive3 = useCenterActive(tiles.length, 'y'),
    _useCenterActive4 = _slicedToArray(_useCenterActive3, 3),
    a = _useCenterActive4[0],
    setA = _useCenterActive4[1],
    refs = _useCenterActive4[2];
  return React.createElement("section", {
    className: "qy-ms qy-ms-acc"
  }, tiles.map(function (t, k) {
    var on = k === a;
    return React.createElement("div", {
      key: t.slot,
      ref: function ref(el) {
        return refs.current[k] = el;
      },
      "data-k": k,
      className: 'qy-ms-a' + (on ? ' on' : ''),
      role: "link",
      onClick: function onClick() {
        return on ? go(t.go) : setA(k);
      }
    }, React.createElement(MStripImg, {
      t: t,
      on: on,
      h: on ? '58svh' : '84px'
    }), React.createElement("div", {
      className: "qy-ms-a-cap"
    }, React.createElement("span", {
      className: "qy-num"
    }, n2(k + 1)), React.createElement("h2", null, t.title || tr(QY.ui.nav[t.go], lang)), React.createElement("span", {
      className: "qy-ms-a-go"
    }, on ? lang === 'es' ? 'Entrar →' : 'Enter →' : '+')));
  }));
}
function MStripCarrusel(_ref4) {
  var tiles = _ref4.tiles,
    lang = _ref4.lang,
    go = _ref4.go;
  var sc = React.useRef(null);
  var _useCenterActive5 = useCenterActive(tiles.length, 'x', sc),
    _useCenterActive6 = _slicedToArray(_useCenterActive5, 3),
    a = _useCenterActive6[0],
    refs = _useCenterActive6[2];
  var t = tiles[a];
  var to = function to(k) {
    var el = refs.current[k],
      s = sc.current;
    if (el && s) s.scrollTo({
      left: el.offsetLeft - (s.clientWidth - el.offsetWidth) / 2,
      behavior: 'smooth'
    });
  };
  return React.createElement("section", {
    className: "qy-ms qy-ms-car"
  }, React.createElement("div", {
    ref: sc,
    className: "qy-ms-c-track"
  }, tiles.map(function (x, k) {
    var on = k === a;
    return React.createElement("div", {
      key: x.slot,
      ref: function ref(el) {
        return refs.current[k] = el;
      },
      className: 'qy-ms-c' + (on ? ' on' : ''),
      onClick: function onClick() {
        return on ? go(x.go) : to(k);
      }
    }, React.createElement(MStripImg, {
      t: x,
      on: on,
      h: "112vw"
    }));
  })), React.createElement("div", {
    className: "qy-ms-c-cap"
  }, React.createElement("div", {
    className: "qy-ms-c-row"
  }, React.createElement("span", {
    className: "qy-num"
  }, n2(a + 1), " / ", n2(tiles.length)), React.createElement("span", {
    className: "qy-ms-dots"
  }, tiles.map(function (_, k) {
    return React.createElement("button", {
      key: k,
      className: k === a ? 'on' : '',
      onClick: function onClick() {
        return to(k);
      },
      "aria-label": 'Sección ' + (k + 1)
    });
  }))), React.createElement("h2", null, t.title || tr(QY.ui.nav[t.go], lang)), React.createElement("button", {
    className: "qy-cta",
    onClick: function onClick() {
      return go(t.go);
    }
  }, tr(t.t, lang), " \u2192")));
}
function MobileStrip(_ref5) {
  var variant = _ref5.variant;
  var _useApp = useApp(),
    lang = _useApp.lang,
    go = _useApp.go;
  var tiles = QY.home.tiles;
  var C = {
    foco: MStripFoco,
    acordeon: MStripAcordeon,
    carrusel: MStripCarrusel
  }[variant] || MStripFoco;
  return React.createElement(C, {
    tiles: tiles,
    lang: lang,
    go: go
  });
}
Object.assign(window, {
  MobileStrip: MobileStrip
});

/* --- web2/mobile.jsx --- */
"use strict";

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var APP_BP = 1024;
function useApp2() {
  return useWide() <= APP_BP;
}
var TAB_OF = {
  home: 'home',
  collections: 'collections',
  collection: 'collections',
  sculptor: 'collections',
  lab: 'lab',
  labcat: 'lab',
  labsub: 'lab',
  journal: 'journal',
  entry: 'journal'
};
function FitImg(_ref) {
  var src = _ref.src,
    pos = _ref.pos,
    fit = _ref.fit,
    _ref$alt = _ref.alt,
    alt = _ref$alt === void 0 ? '' : _ref$alt;
  if (fit === 'contain') return React.createElement("div", {
    className: "qy-fit"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: "qy-fit-bg",
    src: src,
    alt: "",
    "aria-hidden": "true"
  }), React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: "qy-fit-c",
    src: src,
    alt: alt
  }));
  return React.createElement("div", {
    className: "qy-fit"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    className: "qy-fit-cover",
    src: src,
    alt: alt,
    style: {
      objectPosition: pos || 'center'
    }
  }));
}
function MobileNav() {
  var _useApp = useApp(),
    lang = _useApp.lang,
    go = _useApp.go,
    page = _useApp.page;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    more = _useState2[0],
    setMore = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    sOpen = _useState4[0],
    setSOpen = _useState4[1];
  var tab = TAB_OF[page] || 'more';
  var es = lang === 'es';
  var tabs = [['home', es ? 'Inicio' : 'Home'], ['collections', es ? 'Colecciones' : 'Collections'], ['lab', '3D Lab'], ['journal', es ? 'Diario' : 'Journal'], ['more', es ? 'Más' : 'More']];
  var nav = function nav() {
    setMore(false);
    go.apply(void 0, arguments);
  };
  useEffect(function () {
    document.body.style.overflow = more ? 'hidden' : '';
  }, [more]);
  return React.createElement(React.Fragment, null, React.createElement("header", {
    className: "qy-abar"
  }, React.createElement("button", {
    className: "qy-logo",
    onClick: function onClick() {
      return nav('home');
    },
    "aria-label": "By QiYo"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: "assets/byqiyo-logo.png",
    alt: "By QiYo"
  })), React.createElement(SearchButton, {
    onOpen: function onOpen() {
      setMore(false);
      setSOpen(true);
    }
  })), sOpen && React.createElement(SearchOverlay, {
    onClose: function onClose() {
      return setSOpen(false);
    }
  }), React.createElement("nav", {
    className: "qy-tabbar"
  }, tabs.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
      k = _ref3[0],
      l = _ref3[1];
    return React.createElement("button", {
      key: k,
      className: (more ? k === 'more' : tab === k) ? 'on' : '',
      onClick: function onClick() {
        return k === 'more' ? setMore(!more) : nav(k);
      }
    }, React.createElement("i", null), React.createElement("span", null, l));
  })), more && React.createElement("div", {
    className: "qy-sheet-ov",
    onClick: function onClick() {
      return setMore(false);
    }
  }, React.createElement("div", {
    className: "qy-sheet",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, React.createElement("span", {
    className: "qy-sheet-grip"
  }), [['projects'], ['process'], ['about'], ['contact']].map(function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 1),
      k = _ref5[0];
    return React.createElement("button", {
      key: k,
      className: "qy-sheet-l",
      onClick: function onClick() {
        return nav(k);
      }
    }, tr(QY.ui.nav[k], lang), React.createElement("span", null, "\u2192"));
  }), React.createElement("div", {
    className: "qy-sheet-sub"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, es ? 'Colecciones' : 'Collections'), React.createElement("div", null, QY.collections.map(function (c) {
    return React.createElement("button", {
      key: c.id,
      onClick: function onClick() {
        return nav('collection', c.id);
      }
    }, c.name);
  }), QY.collections.map(function (c) {
    return React.createElement("button", {
      key: 'r' + c.id,
      onClick: function onClick() {
        return nav('runway', c.id);
      }
    }, tr(QY.ui.nav.runway, lang), " ", c.name);
  }))), React.createElement("div", {
    className: "qy-sheet-row"
  }, React.createElement(LangSwitch, null), React.createElement(ModeSwitch, null), React.createElement("a", {
    href: QY.contact.instagramUrl,
    target: "_blank",
    rel: "noopener"
  }, "Instagram \u2197")), React.createElement("div", {
    className: "qy-sheet-legal"
  }, LEGAL_PAGES.map(function (p) {
    return React.createElement("button", {
      key: p,
      onClick: function onClick() {
        return nav('legal', p);
      }
    }, tr(LEGAL_T[p], lang));
  })))));
}
function HeroStories() {
  var _useApp2 = useApp(),
    lang = _useApp2.lang,
    go = _useApp2.go,
    tweaks = _useApp2.tweaks;
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    i = _useState6[0],
    setI = _useState6[1];
  var n = QY.hero.length;
  var dur = (tweaks.heroSecs || 6) * 1000;
  useEffect(function () {
    var t = setTimeout(function () {
      return setI(function (x) {
        return (x + 1) % n;
      });
    }, dur);
    return function () {
      return clearTimeout(t);
    };
  }, [i, dur]);
  var cur = QY.hero[i];
  var col = QY.collections.find(function (c) {
    return c.id === cur.col;
  });
  var tx = React.useRef(0);
  return React.createElement("section", {
    className: "qy-card qy-card-hero",
    onTouchStart: function onTouchStart(e) {
      tx.current = e.touches[0].clientX;
    },
    onTouchEnd: function onTouchEnd(e) {
      var dx = e.changedTouches[0].clientX - tx.current;
      if (Math.abs(dx) > 40) setI(function (x) {
        return (x + (dx < 0 ? 1 : -1) + n) % n;
      });
    }
  }, QY.hero.map(function (h, k) {
    return React.createElement("div", {
      key: h.slot,
      className: "qy-card-media",
      style: {
        opacity: k === i ? 1 : 0
      }
    }, React.createElement(FitImg, {
      src: h.srcM || h.src,
      pos: h.posM,
      fit: h.fitM,
      alt: tr(h.cap, lang)
    }));
  }), React.createElement("div", {
    className: "qy-stories"
  }, QY.hero.map(function (h, k) {
    return React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setI(k);
      },
      "aria-label": 'Foto ' + (k + 1)
    }, React.createElement("i", {
      style: k < i ? {
        width: '100%'
      } : k === i ? {
        animation: "qyStory ".concat(dur, "ms linear forwards")
      } : null,
      key: k === i ? 'a' + i : 'b'
    }));
  })), React.createElement("div", {
    className: "qy-card-txt"
  }, React.createElement("span", {
    className: "qy-eyebrow"
  }, tr(cur.cap, lang)), React.createElement("h1", {
    className: "qy-card-t"
  }, col.name), React.createElement("button", {
    className: "qy-card-cta",
    onClick: function onClick() {
      return go('collection', col.id);
    }
  }, tr(col.season, lang), " \xB7 ", tr(QY.ui.view, lang), " \u2192")));
}
function HomeApp() {
  var _useApp3 = useApp(),
    lang = _useApp3.lang,
    go = _useApp3.go;
  var es = lang === 'es';
  var tiles = QY.home.tiles;
  return React.createElement("div", {
    className: "qy-app-home"
  }, React.createElement(HeroStories, null), React.createElement("section", {
    className: "qy-app-intro"
  }, React.createElement("img", {
    loading: "lazy",
    decoding: "async",
    src: "assets/byqiyo-q.png",
    alt: "",
    className: "qy-card-q"
  }), React.createElement("p", {
    className: "qy-card-lead"
  }, tr(QY.home.intro, lang)), React.createElement("button", {
    className: "qy-card-cta dark",
    onClick: function onClick() {
      return go('about', 'byqiyo');
    }
  }, es ? 'Conocer la marca' : 'About the brand', " \u2192")), React.createElement(MStripAcordeon, {
    tiles: tiles,
    lang: lang,
    go: go
  }), React.createElement("section", {
    className: "qy-app-news"
  }, React.createElement("div", {
    className: "qy-card-head"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, es ? 'Novedades' : 'News'), React.createElement("button", {
    className: "qy-link",
    onClick: function onClick() {
      return go('journal');
    }
  }, tr(QY.ui.all, lang), " \u2192")), React.createElement("div", {
    className: "qy-news-track"
  }, QY.news.map(function (n, k) {
    return React.createElement("div", {
      key: k,
      className: "qy-news-c",
      role: "link",
      onClick: function onClick() {
        return go.apply(void 0, _toConsumableArray(n.to));
      }
    }, React.createElement("div", {
      className: "qy-news-c-img"
    }, React.createElement("img", {
      src: n.src,
      alt: "",
      loading: "lazy"
    })), React.createElement("span", {
      className: "qy-eyebrow qy-mute"
    }, n.tag, " \xB7 ", tr(n.date, lang)), React.createElement("h3", null, tr(n.t, lang)));
  }))), React.createElement("section", {
    className: "qy-app-contact"
  }, React.createElement("span", {
    className: "qy-eyebrow qy-mute"
  }, tr(QY.ui.nav.contact, lang)), React.createElement("a", {
    className: "qy-card-mail",
    href: 'mailto:' + QY.contact.email
  }, QY.contact.email), React.createElement("div", {
    className: "qy-card-btns"
  }, React.createElement("button", {
    className: "qy-card-cta dark",
    onClick: function onClick() {
      return go('contact');
    }
  }, es ? 'Escribir un mensaje' : 'Send a message', " \u2192"), React.createElement("a", {
    className: "qy-card-cta ghost",
    href: QY.contact.instagramUrl,
    target: "_blank",
    rel: "noopener"
  }, "Instagram ", QY.contact.instagram, " \u2197"))), React.createElement(Footer, null));
}
Object.assign(window, {
  MobileNav: MobileNav,
  HomeApp: HomeApp,
  useApp2: useApp2,
  FitImg: FitImg,
  APP_BP: APP_BP
});

/* --- web2/app.jsx --- */
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, e) { if ("object" != _typeof(t) || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TWEAK_DEFAULTS = {
  "heroSecs": 6,
  "showFigs": true,
  "cursorReveal": true,
  "mobStrip": "foco"
};
var ROUTE_KEY = 'qy-web2-route';
function App() {
  var _useTweaks = useTweaks(TWEAK_DEFAULTS),
    _useTweaks2 = _slicedToArray(_useTweaks, 2),
    t = _useTweaks2[0],
    setTweak = _useTweaks2[1];
  var saved = function () {
    try {
      return JSON.parse(localStorage.getItem(ROUTE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }();
  var _useState = useState({
      page: 'home',
      param: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    route = _useState2[0],
    setRoute = _useState2[1];
  var _useState3 = useState(saved.lang || 'es'),
    _useState4 = _slicedToArray(_useState3, 2),
    lang = _useState4[0],
    setLang = _useState4[1];
  var _useState5 = useState(!!saved.dark),
    _useState6 = _slicedToArray(_useState5, 2),
    dark = _useState6[0],
    setDark = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    fading = _useState8[0],
    setFading = _useState8[1];
  useEffect(function () {
    localStorage.setItem(ROUTE_KEY, JSON.stringify(_objectSpread(_objectSpread({}, route), {}, {
      lang: lang,
      dark: dark
    })));
    document.documentElement.lang = lang;
    document.body.classList.toggle('qy-dark', dark);
  }, [route, lang, dark]);
  var go = function go(page) {
    var param = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (page === 'runway') {
      var id = param || 'thalaira';
      var jump = function jump() {
        var el = document.getElementById('pasarela');
        if (el) scrollTo({
          top: el.getBoundingClientRect().top + scrollY - 80,
          behavior: 'smooth'
        });
      };
      if (route.page === 'collection' && route.param === id) {
        jump();
        return;
      }
      setFading(true);
      setTimeout(function () {
        setRoute({
          page: 'collection',
          param: id
        });
        setFading(false);
        setTimeout(jump, 400);
      }, 280);
      return;
    }
    if (page === route.page && param === route.param) {
      scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    setFading(true);
    setTimeout(function () {
      setRoute({
        page: page,
        param: param
      });
      scrollTo(0, 0);
      setFading(false);
    }, 280);
  };
  window.__qyGo = function (page, param) {
    setRoute({
      page: page,
      param: param || null
    });
    scrollTo(0, 0);
  };
  var Page = {
    home: Home,
    collections: Collections,
    collection: Collection,
    about: About,
    journal: Journal,
    entry: Entry,
    contact: Contact,
    projects: Projects,
    project: Project,
    lab: Lab,
    labcat: LabCat,
    labsub: LabSub,
    process: Process,
    runway: Runway,
    sculptor: Sculptor,
    search: Search,
    legal: Legal,
    notfound: NotFound
  }[route.page] || NotFound;
  return React.createElement(AppCtx.Provider, {
    value: {
      mobStrip: new URLSearchParams(location.search).get('strip') || t.mobStrip,
      lang: lang,
      setLang: setLang,
      dark: dark,
      setDark: setDark,
      go: go,
      page: route.page,
      tweaks: t
    }
  }, React.createElement(RevealLayer, {
    enabled: t.cursorReveal
  }, React.createElement(Nav, null), React.createElement("main", {
    key: route.page + (route.param || ''),
    style: {
      opacity: fading ? 0 : 1,
      transition: 'opacity .28s ease'
    }
  }, React.createElement(Page, {
    id: route.param
  }))), React.createElement(TweaksPanel, null, React.createElement(TweakSection, {
    label: "Portada"
  }), React.createElement(TweakSlider, {
    label: "Cambio de foto",
    value: t.heroSecs,
    min: 3,
    max: 12,
    step: 1,
    unit: "s",
    onChange: function onChange(v) {
      return setTweak('heroSecs', v);
    }
  }), React.createElement(TweakSection, {
    label: "Colecciones"
  }), React.createElement(TweakToggle, {
    label: "Mostrar figurines actuales",
    value: t.showFigs,
    onChange: function onChange(v) {
      return setTweak('showFigs', v);
    }
  }), React.createElement(TweakToggle, {
    label: "Imagen al pasar el cursor",
    value: t.cursorReveal,
    onChange: function onChange(v) {
      return setTweak('cursorReveal', v);
    }
  }), React.createElement(TweakSection, {
    label: "Inicio en m\xF3vil \xB7 secciones"
  }), React.createElement(TweakRadio, {
    label: "Variante",
    value: t.mobStrip,
    options: [{
      value: 'foco',
      label: 'A · Foco'
    }, {
      value: 'acordeon',
      label: 'B · Acordeón'
    }, {
      value: 'carrusel',
      label: 'C · Carrusel'
    }],
    onChange: function onChange(v) {
      return setTweak('mobStrip', v);
    }
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
