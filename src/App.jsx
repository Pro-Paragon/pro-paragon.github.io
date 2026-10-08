import { useEffect } from 'react';
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

export default function App() {
  const { pathname } = useLocation();
  // The store-facing privacy policy stands alone, with no navigation back into the site.
  const hideHeader = pathname.startsWith('/blockcade/privacy');

  return (
    <>
      <ScrollToTop />
      {!hideHeader && (
        <header className="site-header">
          <div className="wrap bar">
            <Link to="/" className="brand">Pro Paragon Software</Link>
            <nav>
              <NavLink to="/blockcade">Blockcade</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/support">Support</NavLink>
            </nav>
          </div>
        </header>
      )}
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
