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

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />

            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioItem />} />

            <Route path="/teams" element={<Teams />} />
            <Route path="/teams/:id" element={<TeamDetails />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>

        <Footer />
      </div>
    </ThemeProvider >
  );
}

export default App;
