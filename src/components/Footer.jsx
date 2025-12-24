import React from 'react';

const Footer = () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer style={{
            backgroundColor: 'var(--header-bg)',
            color: '#9ca3af',
            padding: '4rem 2rem 2rem',
            marginTop: 'auto'
        }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <a href="#vision" onClick={(e) => scrollToSection(e, 'vision')} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
                    <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Project</a>
                    <a href="#team" onClick={(e) => scrollToSection(e, 'team')} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Team</a>
                    <a href="#partners" onClick={(e) => scrollToSection(e, 'partners')} style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Partners</a>
                </div>

                <div style={{ width: '100%', height: '1px', backgroundColor: '#374151' }}></div>

                <div style={{ textAlign: 'center', fontSize: '0.9rem' }}>
                    &copy; 2025 LunarFactory. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
