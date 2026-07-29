/* @ds-bundle: {"format":4,"namespace":"AgataMacDesignSystem_19cc91","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ComparisonCard","sourcePath":"components/cards/ComparisonCard.jsx"},{"name":"IndicatorCard","sourcePath":"components/cards/IndicatorCard.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"ComparisonTable","sourcePath":"components/data/ComparisonTable.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Badge","sourcePath":"components/feedback/Alert.jsx"},{"name":"Tag","sourcePath":"components/feedback/Alert.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"FAQAccordion","sourcePath":"components/navigation/FAQAccordion.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Avatar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Timeline","sourcePath":"components/navigation/Timeline.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"2b3d3a8d8086","components/cards/ComparisonCard.jsx":"50b97d916a40","components/cards/IndicatorCard.jsx":"bb277c5561ad","components/cards/ProductCard.jsx":"a1a4e550aa97","components/data/ComparisonTable.jsx":"0c09a8a92002","components/feedback/Alert.jsx":"24513a67281a","components/forms/Input.jsx":"d340f857f1cc","components/navigation/FAQAccordion.jsx":"2e4a4594bc41","components/navigation/Navbar.jsx":"1f8a5b54d102","components/navigation/Timeline.jsx":"b70369d80df4","ui_kits/client-portal/Dashboard.jsx":"e490867e8204","ui_kits/website/HomePage.jsx":"879c9a925620"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AgataMacDesignSystem_19cc91 = window.AgataMacDesignSystem_19cc91 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-body)',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '20px',
  borderRadius: 'var(--radius-md)',
  height: '48px',
  padding: '0 24px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'background-color .15s ease'
};
const variants = {
  primary: {
    background: 'var(--color-brand-900)',
    color: '#fff'
  },
  action: {
    background: 'var(--color-gold-500)',
    color: 'var(--color-brand-950)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--color-brand-700)',
    borderColor: 'var(--color-brand-700)'
  },
  'secondary-inverse': {
    background: 'transparent',
    color: '#fff',
    borderColor: '#fff'
  },
  tertiary: {
    background: 'transparent',
    color: 'var(--color-brand-700)',
    padding: '0',
    height: 'auto'
  },
  whatsapp: {
    background: '#25D366',
    color: '#fff'
  }
};
const hoverBg = {
  primary: 'var(--color-brand-800)',
  action: 'var(--color-gold-600)',
  whatsapp: '#1fbd5a'
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick
}) {
  const v = variants[variant] || variants.primary;
  const style = {
    ...base,
    ...v,
    fontSize: size === 'sm' ? '14px' : '16px',
    height: size === 'sm' ? '40px' : '48px'
  };
  if (disabled) {
    style.background = 'var(--color-neutral-200)';
    style.color = 'var(--color-neutral-500)';
    style.cursor = 'not-allowed';
    style.borderColor = 'transparent';
  }
  const [hover, setHover] = React.useState(false);
  if (hover && !disabled && hoverBg[variant]) style.background = hoverBg[variant];
  if (hover && !disabled && (variant === 'secondary' || variant === 'secondary-inverse')) {
    style.background = variant === 'secondary-inverse' ? 'rgba(255,255,255,.12)' : 'var(--color-brand-50)';
  }
  return /*#__PURE__*/React.createElement("button", {
    style: style,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, icon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/ComparisonCard.jsx
try { (() => {
function ComparisonCard({
  operadora,
  plano,
  acomodacao,
  abrangencia,
  copart,
  preco,
  recommended = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      width: 220,
      borderRadius: 'var(--radius-lg)',
      border: recommended ? '2px solid var(--color-gold-500)' : '1px solid var(--border-default)',
      padding: 20,
      background: '#fff',
      position: 'relative'
    }
  }, recommended && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -12,
      left: 20,
      background: 'var(--color-gold-500)',
      color: 'var(--color-brand-950)',
      fontSize: 11,
      fontWeight: 700,
      padding: '3px 10px',
      borderRadius: 'var(--radius-full)'
    }
  }, "RECOMENDADO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: 'var(--color-neutral-900)'
    }
  }, operadora), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-neutral-500)',
      marginBottom: 12
    }
  }, plano), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-neutral-700)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "Acomoda\xE7\xE3o: ", acomodacao), /*#__PURE__*/React.createElement("span", null, "Abrang\xEAncia: ", abrangencia), /*#__PURE__*/React.createElement("span", null, "Coparticipa\xE7\xE3o: ", copart)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--color-brand-900)',
      marginTop: 12
    }
  }, preco));
}
Object.assign(__ds_scope, { ComparisonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ComparisonCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/IndicatorCard.jsx
try { (() => {
function IndicatorCard({
  value,
  label,
  detail
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      width: 220,
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      background: '#fff',
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      fontWeight: 700,
      color: 'var(--color-gold-600)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--color-neutral-900)',
      marginTop: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-neutral-500)',
      marginTop: 2
    }
  }, detail));
}
Object.assign(__ds_scope, { IndicatorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/IndicatorCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
function ProductCard({
  icon,
  title,
  description,
  bullets = [],
  ctaLabel = 'Saiba mais',
  highlighted = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      width: 260,
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      background: highlighted ? 'var(--color-brand-900)' : '#fff',
      border: highlighted ? 'none' : '1px solid var(--border-default)',
      boxShadow: highlighted ? 'var(--shadow-md)' : 'none',
      color: highlighted ? '#fff' : 'var(--color-neutral-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: highlighted ? 'rgba(255,255,255,.12)' : 'var(--color-brand-50)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '22px',
      opacity: highlighted ? .85 : 1,
      color: highlighted ? '#fff' : 'var(--color-neutral-600)',
      marginBottom: 12
    }
  }, description), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginBottom: 16
    }
  }, bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontSize: 13,
      color: highlighted ? '#fff' : 'var(--color-neutral-700)'
    }
  }, "\u2022 ", b))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: highlighted ? 'var(--color-gold-400)' : 'var(--color-brand-700)'
    }
  }, ctaLabel, " \u2192"));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/data/ComparisonTable.jsx
try { (() => {
function ComparisonTable({
  columns = [],
  rows = []
}) {
  return /*#__PURE__*/React.createElement("table", {
    style: {
      fontFamily: 'var(--font-body)',
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--color-brand-50)'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      textAlign: i === columns.length - 1 ? 'right' : 'left',
      padding: '12px 16px',
      fontWeight: 600,
      color: 'var(--color-neutral-900)'
    }
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      background: r.recommended ? 'var(--color-gold-50)' : '#fff',
      borderBottom: '1px solid var(--color-neutral-100)'
    }
  }, r.cells.map((cell, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    style: {
      padding: '14px 16px',
      textAlign: j === r.cells.length - 1 ? 'right' : 'left',
      color: 'var(--color-neutral-700)'
    }
  }, cell, j === 0 && r.recommended && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      marginLeft: 8,
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--color-gold-700)',
      background: 'var(--color-gold-100)',
      padding: '2px 6px',
      borderRadius: 4
    }
  }, "RECOMENDADO")))))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const semanticColors = {
  info: {
    bg: 'var(--color-brand-50)',
    fg: 'var(--color-brand-700)'
  },
  success: {
    bg: '#e9f7f0',
    fg: 'var(--color-success)'
  },
  warning: {
    bg: '#fdf1e6',
    fg: 'var(--color-warning)'
  },
  danger: {
    bg: '#fbebeb',
    fg: 'var(--color-danger)'
  },
  ai: {
    bg: '#f0eefb',
    fg: 'var(--color-ai)'
  }
};
function Alert({
  type = 'info',
  title,
  children
}) {
  const c = semanticColors[type] || semanticColors.info;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      gap: 12,
      background: c.bg,
      borderRadius: 'var(--radius-md)',
      padding: 16,
      width: '320px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: c.fg,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      color: 'var(--color-neutral-900)',
      fontSize: 14
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--color-neutral-700)',
      marginTop: 2
    }
  }, children)));
}
function Badge({
  children,
  tone = 'brand'
}) {
  const map = {
    brand: {
      bg: 'var(--color-brand-50)',
      fg: 'var(--color-brand-700)'
    },
    gold: {
      bg: 'var(--color-gold-100)',
      fg: 'var(--color-gold-700)'
    },
    success: {
      bg: '#e9f7f0',
      fg: 'var(--color-success)'
    }
  };
  const c = map[tone] || map.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 600,
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      background: c.bg,
      color: c.fg
    }
  }, children);
}
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      fontWeight: 500,
      padding: '4px 10px',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--color-neutral-100)',
      color: 'var(--color-neutral-700)',
      border: '1px solid var(--color-neutral-200)'
    }
  }, children);
}
Object.assign(__ds_scope, { Alert, Badge, Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  helper,
  state = 'default',
  value,
  onChange
}) {
  const borderColor = state === 'error' ? 'var(--color-danger)' : state === 'success' ? 'var(--color-success)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '260px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-neutral-900)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: state === 'disabled',
    style: {
      height: 52,
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${borderColor}`,
      fontSize: 16,
      color: 'var(--color-neutral-900)',
      background: state === 'disabled' ? 'var(--color-neutral-100)' : '#fff'
    }
  }), helper && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: state === 'error' ? 'var(--color-danger)' : state === 'success' ? 'var(--color-success)' : 'var(--color-neutral-500)'
    }
  }, helper));
}
function Select({
  label,
  options = [],
  placeholder = 'Selecione'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: '260px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--color-neutral-900)'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    style: {
      height: 52,
      padding: '0 16px',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--border-default)',
      fontSize: 16,
      color: 'var(--color-neutral-700)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("option", null, placeholder), options.map((o, i) => /*#__PURE__*/React.createElement("option", {
    key: i
  }, o))));
}
Object.assign(__ds_scope, { Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/FAQAccordion.jsx
try { (() => {
function FAQAccordion({
  items = []
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 400
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--color-neutral-900)',
      background: '#fff'
    }
  }, it.q, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-brand-700)'
    }
  }, open === i ? '−' : '+')), open === i && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px 16px',
      fontSize: 14,
      color: 'var(--color-neutral-600)',
      lineHeight: '22px'
    }
  }, it.a))));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function Navbar({
  active = 'Início',
  logoSrc = 'assets/logo.png'
}) {
  const items = ['Início', 'Soluções', 'Para empresas', 'Para você', 'Conteúdos', 'Sobre'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      background: '#fff',
      borderBottom: '1px solid var(--color-neutral-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    style: {
      height: 28
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      fontSize: 14,
      fontWeight: 500
    }
  }, items.map(it => /*#__PURE__*/React.createElement("span", {
    key: it,
    style: {
      color: it === active ? 'var(--color-brand-900)' : 'var(--color-neutral-600)',
      borderBottom: it === active ? '2px solid var(--color-cyan-500)' : 'none',
      paddingBottom: 4
    }
  }, it))), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--color-brand-900)',
      color: '#fff',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '10px 20px',
      fontWeight: 600,
      fontSize: 14
    }
  }, "Falar com especialista"));
}
function Avatar({
  initials,
  src,
  size = 40
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--color-brand-100)',
      color: 'var(--color-brand-700)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: size * 0.4,
      overflow: 'hidden'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Navbar, Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Timeline.jsx
try { (() => {
function Timeline({
  steps = [],
  current = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      display: 'flex',
      alignItems: 'center'
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      width: 90
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 700,
      background: i < current ? 'var(--color-success)' : i === current ? 'var(--color-brand-900)' : '#fff',
      color: i <= current ? '#fff' : 'var(--color-neutral-400)',
      border: i === current || i < current ? 'none' : '2px solid var(--color-neutral-200)'
    }
  }, i < current ? '✓' : i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textAlign: 'center',
      color: i <= current ? 'var(--color-neutral-900)' : 'var(--color-neutral-400)'
    }
  }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: i < current ? 'var(--color-success)' : 'var(--color-neutral-200)',
      marginBottom: 24
    }
  }))));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Timeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/client-portal/Dashboard.jsx
try { (() => {
function Dashboard() {
  const {
    Navbar,
    Alert,
    Badge,
    Timeline,
    Avatar,
    Button,
    ComparisonCard
  } = window.AgataMacDesignSystem_19cc91;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--color-neutral-50)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    active: "\xC1rea do cliente",
    logoSrc: "../../assets/logo.png"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '40px 32px',
      display: 'flex',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      border: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--color-brand-900)',
      margin: 0
    }
  }, "Sa\xFAde Empresarial \u2014 Empresa Exemplo Ltda."), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, "Em an\xE1lise")), /*#__PURE__*/React.createElement(Timeline, {
    steps: ['Diagnóstico', 'Levantamento', 'Comparação', 'Proposta', 'Implantação', 'Acompanhamento'],
    current: 2
  })), /*#__PURE__*/React.createElement(Alert, {
    type: "warning",
    title: "Documento pendente"
  }, "Para concluir a an\xE1lise, envie o contrato social atualizado."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      color: 'var(--color-neutral-900)',
      marginBottom: 12
    }
  }, "Op\xE7\xF5es em an\xE1lise"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(ComparisonCard, {
    operadora: "Bradesco Sa\xFAde",
    plano: "Efetivo",
    acomodacao: "Enfermaria",
    abrangencia: "Nacional",
    copart: "Sim",
    preco: "R$ 580,00"
  }), /*#__PURE__*/React.createElement(ComparisonCard, {
    operadora: "Amil",
    plano: "S750",
    acomodacao: "Apartamento",
    abrangencia: "Nacional",
    copart: "N\xE3o",
    preco: "R$ 690,00",
    recommended: true
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 280,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 24,
      border: '1px solid var(--border-default)',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: "RC",
    size: 48
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--color-neutral-900)'
    }
  }, "Renata Costa"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-neutral-500)'
    }
  }, "Consultora respons\xE1vel"))), /*#__PURE__*/React.createElement(Button, {
    variant: "whatsapp"
  }, "Falar no WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-brand-900)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--color-cyan-200)',
      marginBottom: 8
    }
  }, "PR\xD3XIMO PASSO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }, "Aguardando envio do contrato social para avan\xE7ar \xE0 proposta final.")))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/client-portal/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
function HomePage() {
  const {
    Navbar,
    Button,
    ProductCard,
    IndicatorCard,
    ComparisonTable,
    FAQAccordion
  } = window.AgataMacDesignSystem_19cc91;
  const [tab, setTab] = React.useState('empresa');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Navbar, {
    active: "In\xEDcio",
    logoSrc: "../../assets/logo.png"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gradient-institutional)',
      color: '#fff',
      padding: '96px 32px',
      display: 'flex',
      gap: 48,
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '.08em',
      color: 'var(--color-cyan-300)',
      marginBottom: 16
    }
  }, "SEGUROS \xB7 SA\xDADE \xB7 BENEF\xCDCIOS"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 52,
      lineHeight: '60px',
      margin: 0,
      color: '#fff'
    }
  }, "Intelig\xEAncia para proteger o que importa."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: '30px',
      color: 'var(--color-brand-100)',
      marginTop: 20
    }
  }, "Ajudamos empresas, profissionais e fam\xEDlias a escolher as melhores alternativas de prote\xE7\xE3o \u2014 com clareza, agilidade e an\xE1lise t\xE9cnica."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "action"
  }, "Iniciar cota\xE7\xE3o"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-inverse"
  }, "Falar com especialista")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px',
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 32,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab('empresa'),
    style: {
      border: 'none',
      background: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: tab === 'empresa' ? 'var(--color-brand-900)' : 'var(--color-neutral-300)',
      cursor: 'pointer'
    }
  }, "Para sua empresa"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 28,
      color: 'var(--color-neutral-300)'
    }
  }, "/"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setTab('voce'),
    style: {
      border: 'none',
      background: 'none',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 28,
      color: tab === 'voce' ? 'var(--color-brand-900)' : 'var(--color-neutral-300)',
      cursor: 'pointer'
    }
  }, "Para voc\xEA e sua fam\xEDlia")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, tab === 'empresa' ? [{
    t: 'Saúde Empresarial',
    d: 'Soluções sob medida para sua equipe.',
    b: ['Melhores operadoras', 'Gestão de benefícios', 'Redução de custos'],
    h: true
  }, {
    t: 'Seguro Empresarial',
    d: 'Proteja o patrimônio da sua empresa.',
    b: ['Incêndio', 'Danos elétricos', 'Responsabilidade civil']
  }, {
    t: 'Cyber',
    d: 'Monitoramento e resposta a incidentes.',
    b: ['Escudo com circuito', 'Análise preditiva', 'Suporte especializado']
  }].map((c, i) => /*#__PURE__*/React.createElement(ProductCard, {
    key: i,
    title: c.t,
    description: c.d,
    bullets: c.b,
    highlighted: c.h
  })) : [{
    t: 'Seguro Auto',
    d: 'Proteção completa para você e seu veículo.',
    b: ['Roubo e furto', 'Colisão', 'Assistência 24h'],
    h: true
  }, {
    t: 'Plano de Saúde',
    d: 'Cuidado e prevenção para sua família.',
    b: ['Rede nacional', 'Carências claras', 'Reembolso ágil']
  }, {
    t: 'Vida',
    d: 'Planejamento para o futuro de quem você ama.',
    b: ['Cobertura por invalidez', 'Assistência funeral', 'Renda protegida']
  }].map((c, i) => /*#__PURE__*/React.createElement(ProductCard, {
    key: i,
    title: c.t,
    description: c.d,
    bullets: c.b,
    highlighted: c.h
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-neutral-50)',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(IndicatorCard, {
    value: "18%",
    label: "Economia potencial identificada",
    detail: "na revis\xE3o da carteira de benef\xEDcios"
  }), /*#__PURE__*/React.createElement(IndicatorCard, {
    value: "7",
    label: "Solu\xE7\xF5es de prote\xE7\xE3o",
    detail: "sa\xFAde, vida, auto, residencial, empresarial, patrimonial, cons\xF3rcio"
  }), /*#__PURE__*/React.createElement(IndicatorCard, {
    value: "Alphaville",
    label: "Atua\xE7\xE3o regional",
    detail: "atendimento consultivo pr\xF3ximo"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      color: 'var(--color-brand-900)',
      marginBottom: 8,
      textAlign: 'center'
    }
  }, "Comparativo t\xE9cnico"), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'center',
      color: 'var(--color-neutral-500)',
      marginBottom: 32
    }
  }, "Nunca destacamos apenas o pre\xE7o \u2014 o design favorece a an\xE1lise de adequa\xE7\xE3o."), /*#__PURE__*/React.createElement(ComparisonTable, {
    columns: ['Operadora', 'Plano', 'Acomodação', 'Abrangência', 'Copart.', 'Preço'],
    rows: [{
      cells: ['Bradesco Saúde', 'Efetivo', 'Enfermaria', 'Nacional', 'Sim', 'R$ 580,00']
    }, {
      cells: ['SulAmérica', 'Clássico', 'Apartamento', 'Nacional', 'Sim', 'R$ 620,00']
    }, {
      cells: ['Amil', 'S750', 'Apartamento', 'Nacional', 'Não', 'R$ 690,00'],
      recommended: true
    }, {
      cells: ['Omint', 'PME', 'Enfermaria', 'Nacional', 'Sim', 'R$ 540,00']
    }]
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--color-neutral-500)',
      marginTop: 12
    }
  }, "*Valores aproximados por vida. Consulte condi\xE7\xF5es comerciais.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 32px',
      maxWidth: 760,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 36,
      color: 'var(--color-brand-900)',
      marginBottom: 24,
      textAlign: 'center'
    }
  }, "Perguntas frequentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(FAQAccordion, {
    items: [{
      q: 'Quantas pessoas são necessárias para contratar um plano empresarial?',
      a: 'A quantidade mínima depende da operadora, da modalidade e do vínculo com a empresa. A Agata Mac analisa o CNPJ, a composição do grupo e as regras comerciais disponíveis antes de indicar uma alternativa.'
    }, {
      q: 'Qual o prazo de carência?',
      a: 'Varia por operadora e produto — apresentamos o comparativo completo antes da contratação.'
    }, {
      q: 'É possível incluir dependentes?',
      a: 'Sim, conforme as regras do plano e da operadora escolhida.'
    }]
  }))), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-brand-900)',
      color: '#fff',
      padding: '48px 32px',
      display: 'flex',
      gap: 32,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    style: {
      height: 28,
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("div", null, "(11) 4302-6044 \xB7 (11) 94288-0299"), /*#__PURE__*/React.createElement("div", null, "contato@agatamacsaude.com.br \xB7 www.agatamacsaude.com.br"), /*#__PURE__*/React.createElement("div", null, "Alameda Graja\xFA, 129, Alphaville, Barueri \u2014 SP")));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ComparisonCard = __ds_scope.ComparisonCard;

__ds_ns.IndicatorCard = __ds_scope.IndicatorCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Timeline = __ds_scope.Timeline;

})();
