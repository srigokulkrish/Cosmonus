const LINKS = ['Solutions', 'Products', 'Company', 'Resources']

function Logo() {
  return (
    <a href="/" className="hp-brand" aria-label="Cosmonus home">
      <img src="/images/logo-dark.png" alt="Cosmonus" />
    </a>
  )
}

export default function HeaderPreviewPage() {
  return (
    <main className="hp-page">
      <style>{CSS}</style>

      {/* ── V1 — Left-aligned product nav ───────────────────────── */}
      <section className="hp-block">
        <span className="hp-tag">V1 — Left-aligned product nav</span>
        <div className="hp-stage">
          <header className="hpv1">
            <div className="hpv1__left">
              <Logo />
              <nav className="hpv1__links">
                {LINKS.map((l) => (
                  <a key={l} href="#" className="hpv1__link">{l}</a>
                ))}
              </nav>
            </div>
            <div className="hpv1__right">
              <a href="#" className="hpv1__signin">Sign in</a>
              <a href="/contact" className="btn-cosmonus btn--sm btn-arrow">Contact us</a>
            </div>
          </header>
          <div className="hp-filler" />
        </div>
      </section>

      {/* ── V2 — Floating glass pill ────────────────────────────── */}
      <section className="hp-block">
        <span className="hp-tag">V2 — Floating glass pill</span>
        <div className="hp-stage hp-stage--pill">
          <header className="hpv2">
            <Logo />
            <nav className="hpv2__links">
              {LINKS.map((l) => (
                <a key={l} href="#" className="hpv2__link">{l}</a>
              ))}
            </nav>
            <a href="/contact" className="btn-cosmonus btn--sm btn-arrow">Contact us</a>
          </header>
          <div className="hp-filler" />
        </div>
      </section>

      {/* ── V3 — Split centered wordmark ────────────────────────── */}
      <section className="hp-block">
        <span className="hp-tag">V3 — Split centered wordmark</span>
        <div className="hp-stage">
          <header className="hpv3">
            <nav className="hpv3__links hpv3__links--left">
              <a href="#" className="hpv3__link">Solutions</a>
              <a href="#" className="hpv3__link">Products</a>
            </nav>
            <Logo />
            <nav className="hpv3__links hpv3__links--right">
              <a href="#" className="hpv3__link">Company</a>
              <a href="#" className="hpv3__link">Resources</a>
              <a href="/contact" className="btn-cosmonus btn--sm btn-arrow">Contact us</a>
            </nav>
          </header>
          <div className="hp-filler" />
        </div>
      </section>
    </main>
  )
}

const CSS = `
.hp-page { padding: 3rem 1.25rem 6rem; max-width: 1180px; margin: 0 auto; }
.hp-block { margin-bottom: 4rem; }
.hp-tag {
  display: inline-block;
  font-family: var(--font-geist-mono), monospace;
  font-size: 0.72rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--fg-subtle);
  margin-bottom: 0.85rem;
}
.hp-stage {
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  overflow: hidden;
  background: var(--bg);
}
.hp-stage--pill { padding-top: 0; background: transparent; }
.hp-filler {
  height: 180px;
  background:
    radial-gradient(120% 140% at 15% 0%, rgba(99,91,255,0.14), transparent 55%),
    radial-gradient(110% 130% at 90% 10%, rgba(56,189,248,0.12), transparent 50%);
}
.hp-brand { display: inline-flex; align-items: center; flex-shrink: 0; }
.hp-brand img { height: 24px; width: auto; }

/* ── V1 — Left-aligned ─────────────────────────────── */
.hpv1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  height: 60px;
  padding: 0 1.25rem;
  border-bottom: 1px solid var(--border);
  background: var(--nav-bg);
  backdrop-filter: saturate(180%) blur(14px);
}
.hpv1__left { display: flex; align-items: center; gap: 2rem; }
.hpv1__links { display: flex; align-items: center; gap: 0.25rem; }
.hpv1__link {
  color: var(--fg-subtle);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  padding: 0.4rem 0.7rem;
  border-radius: var(--r-sm);
  text-decoration: none;
  transition: color 0.15s ease, background 0.15s ease;
}
.hpv1__link:hover { color: var(--fg); background: var(--bg-elev-2); }
.hpv1__right { display: flex; align-items: center; gap: 1.1rem; }
.hpv1__signin {
  color: var(--fg);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
}
.hpv1__signin:hover { color: var(--brand); }

/* ── V2 — Floating pill ────────────────────────────── */
.hpv2 {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  height: 58px;
  margin: 1rem 1.25rem -3.5rem;
  padding: 0 0.6rem 0 1.15rem;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--nav-bg);
  backdrop-filter: saturate(180%) blur(18px);
  -webkit-backdrop-filter: saturate(180%) blur(18px);
  box-shadow: var(--shadow-lg);
}
.hpv2 .hp-brand { justify-self: start; }
.hpv2__links { display: flex; align-items: center; gap: 0.25rem; justify-self: center; }
.hpv2__link {
  color: var(--fg-subtle);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  padding: 0.4rem 0.75rem;
  border-radius: var(--r-sm);
  text-decoration: none;
  transition: color 0.15s ease, background 0.15s ease;
}
.hpv2__link:hover { color: var(--fg); background: var(--bg-elev-2); }
.hpv2 .btn-cosmonus { justify-self: end; }

/* ── V3 — Split centered wordmark ──────────────────── */
.hpv3 {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 66px;
  padding: 0 1.5rem;
  border-bottom: 1px solid var(--border);
  background: var(--nav-bg);
  backdrop-filter: saturate(180%) blur(14px);
}
.hpv3 .hp-brand { justify-self: center; }
.hpv3 .hp-brand img { height: 26px; }
.hpv3__links { display: flex; align-items: center; gap: 1.75rem; }
.hpv3__links--left { justify-self: start; }
.hpv3__links--right { justify-self: end; gap: 1.5rem; }
.hpv3__link {
  color: var(--fg-subtle);
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  text-decoration: none;
  transition: color 0.15s ease;
}
.hpv3__link:hover { color: var(--fg); }

@media (max-width: 860px) {
  .hpv1__links, .hpv2__links, .hpv3__links { display: none; }
  .hpv2 { grid-template-columns: auto 1fr; }
  .hpv3 { grid-template-columns: auto 1fr; }
  .hpv3 .hp-brand { justify-self: start; }
}
`
