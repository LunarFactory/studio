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
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginLeft: '20px' }}><a href="#vision" onClick={(e) => scrollToSection(e, 'vision')} className="nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</a></li>
          <li style={{ marginLeft: '20px' }}><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Project</a></li>
          <li style={{ marginLeft: '20px' }}><a href="#team" onClick={(e) => scrollToSection(e, 'team')} className="nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Team</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
