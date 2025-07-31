import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingActionMenu from './components/FloatingActionMenu';
import LoadingAnimation from './components/LoadingAnimation';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import PageTransition from './components/PageTransition';
import NatureBackground from './components/NatureBackground';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Terasa from './pages/Terasa';
import Evenimente from './pages/Evenimente';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import { usePWA } from './hooks/usePWA';
import './styles/global.css';
import './styles/3d-effects.css';

// Component to handle scroll to top on route change
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function App() {
  // Initialize PWA hooks
  const { requestNotificationPermission } = usePWA();

  const handlePWAInstall = () => {
    // Request notification permission after installation
    requestNotificationPermission();
  };

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <div className="App relative">
        <NatureBackground />
        <LoadingAnimation />
        <PWAInstallPrompt onInstall={handlePWAInstall} />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/restaurant" element={
              <PageTransition>
                <Restaurant />
              </PageTransition>
            } />
            <Route path="/terasa" element={
              <PageTransition>
                <Terasa />
              </PageTransition>
            } />
            <Route path="/evenimente" element={
              <PageTransition>
                <Evenimente />
              </PageTransition>
            } />
            <Route path="/meniu" element={
              <PageTransition>
                <Menu />
              </PageTransition>
            } />
            <Route path="/galerie" element={
              <PageTransition>
                <Galerie />
              </PageTransition>
            } />
            <Route path="/contact" element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <FloatingActionMenu />
      </div>
    </Router>
  );
}

export default App;