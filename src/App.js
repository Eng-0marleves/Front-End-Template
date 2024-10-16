import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getCssVariableValue } from './utils/getCssVariable';
import Header from './components/layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import { createTheme, ThemeProvider } from '@mui/material';
import { useEffect, useState } from 'react';
import Footer from './components/layout/Footer';
import Portfolio from './pages/Portfolio';
import PortfolioItem from './pages/PortfolioItem';
import Teams from './pages/Teams';
import TeamDetails from './pages/TeamDetails';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import ScrollTop from './components/layout/ScrollTop';
import Pricing from './pages/Pricing';
import NotFound from './pages/NotFound';
import ThemeSettings from './components/layout/ThemeSettings';

const fallbackTheme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
  },
});

function App() {
  const [theme, setTheme] = useState(fallbackTheme);

  useEffect(() => {
    const skinColor = getCssVariableValue('--skin-color') || '#3498db';

    const muiTheme = createTheme({
      palette: {
        primary: {
          main: skinColor,
        },
      },
    });

    setTheme(muiTheme);
  }, []);

  const handleSkinColorChange = (newColor) => {
    document.documentElement.style.setProperty('--skin-color', newColor);

    const muiTheme = createTheme({
      palette: {
        primary: {
          main: newColor,
        },
      },
    });

    setTheme(muiTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />

          <ThemeSettings changeColor={handleSkinColorChange} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioItem />} />

            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamDetails />} />

            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />

            <Route path="/pricing" element={<Pricing />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>

        <ScrollTop />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
