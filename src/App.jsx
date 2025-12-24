import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Projects from './components/Projects';
import Team from './components/Team';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Projects />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
