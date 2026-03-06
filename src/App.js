import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from './utils/ThemeContext';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import PageNotFound from './pages/PageNotFound';
//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
    <Router>
    <div className="App min-h-screen" style={{ backgroundColor: 'var(--color-bg)', transition: 'background-color 0.3s ease' }}>
        <nav>
        <Navbar />
        </nav>
        <div className='content max-w-[1140px] mx-auto'>
          <Routes >
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>
        <footer>
          <Footer />
        </footer>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
