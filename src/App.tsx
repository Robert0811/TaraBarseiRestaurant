import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingActionMenu from './components/FloatingActionMenu';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Terasa from './pages/Terasa';
import Evenimente from './pages/Evenimente';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import './styles/global.css';
import './styles/3d-effects.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/terasa" element={<Terasa />} />
            <Route path="/evenimente" element={<Evenimente />} />
            <Route path="/meniu" element={<Menu />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
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