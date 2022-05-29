import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [isLight, setIsLight] = useState(true);
  function toggleTheme() {
    setIsLight(!isLight);
  }

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  //if sidebar then add active class to body and header and toggle the icon of the #menu-btn
  return (
    <div className={sidebar ? 'App' : 'App active'}>
      <Router>
        <Header
          showSidebar={showSidebar}
          sidebar={sidebar}
          setSidebar={setSidebar}
          isLight={isLight}
          setIsLight={setIsLight}
          toggleTheme={toggleTheme}
        />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
