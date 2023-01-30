
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from './components/About/About';
import Features from './components/Features/Features';
import Contact from './components/contact_us/Contact';
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Hero/>}></Route>
            <Route exact path="Features" element={<Features/>}></Route>
            <Route exact path="Support" element={<Contact/>}></Route>
            <Route exact path="About" element={<About/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
