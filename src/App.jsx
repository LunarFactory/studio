import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
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
        <Team />
      </main>
      <Footer />
    </div>
  );
}

export default App;
