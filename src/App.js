
import Header from './components/Header/Header';
import './App.css';
import Hero from './components/Hero/Hero';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from './components/About/About';
import Features from './components/Features/Features';
import Register from './components/Register/Register';
import Contact from './components/contact_us/Contact';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';
import Meta from './components/metamask/metamask';

function getLibrary(provider)
{
  return new Web3(provider);
}


function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <div className="App">
      <Router>
        <Register/>
          <Routes>
          {/* <Route exact path="/" element={<Register/>}></Route> */}
            <Route exact path="Hero" element={<Hero/>}></Route>
            <Route exact path="About" element={<About/>}></Route>
            <Route exact path="Features" element={<Features/>}></Route>
            <Route exact path="Support" element={<Contact/>}></Route>
            <Route exact path="Connect" element={<Meta/>}></Route>
          </Routes>
      </Router>
    </div>
    </Web3ReactProvider>
  );
}

export default App;
