import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Education from './components/Education/Education';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <h2>Hello world!</h2>
      <Header />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Education /> */}
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
