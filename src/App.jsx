import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blockcade from './pages/Blockcade.jsx';
import Support from './pages/Support.jsx';
import BlockcadePrivacy from './pages/BlockcadePrivacy.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SiteHeader() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
      <div className="wrap bar">
        <Link to="/" className="brand">Pro Paragon Software</Link>
        <button
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true" />
        </button>
        <nav id="site-nav" onClick={() => setMenuOpen(false)}>
          <NavLink to="/blockcade">Blockcade</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/support">Support</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  const { pathname } = useLocation();
  // The store-facing privacy policy stands alone, with no navigation back into the site.
  const hideHeader = pathname.startsWith('/blockcade/privacy');

  return (
    <>
      <ScrollToTop />
      {!hideHeader && <SiteHeader />}
      <div className="page">
      <main className="wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blockcade" element={<Blockcade />} />
          <Route path="/support" element={<Support />} />
          <Route path="/blockcade/privacy" element={<BlockcadePrivacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      </div>
      <footer className="site-footer">
        <div className="wrap">
          <span>&copy; {new Date().getFullYear()} Pro Paragon Software LLC</span>
          <a href="mailto:support@proparagonsoftware.com">support@proparagonsoftware.com</a>
        </div>
      </footer>
    </>
  );
}
