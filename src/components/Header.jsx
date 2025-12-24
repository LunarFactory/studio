import React from 'react';

const Header = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header" style={{
      backgroundColor: 'var(--header-bg)',
      color: 'white',
      padding: '1rem 2rem',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>LunarFactory</h1>
      <nav>
        <a href="#vision" onClick={(e) => scrollToSection(e, 'vision')} style={{ marginLeft: '20px', fontWeight: 'bold' }}>Vision</a>
        <a href="#team" onClick={(e) => scrollToSection(e, 'team')} style={{ marginLeft: '20px', fontWeight: 'bold' }}>Team</a>
      </nav>
    </header>
  );
};

export default Header;
