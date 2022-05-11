import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(false);

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
        />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
