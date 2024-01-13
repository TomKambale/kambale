import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
