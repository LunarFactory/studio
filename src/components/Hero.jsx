import React from 'react';

const Hero = () => {
    const scrollToTeam = (e) => {
        e.preventDefault();
        document.getElementById('team').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" style={{
            padding: '160px 20px 100px', // Top padding for fixed header
            textAlign: 'center',
            backgroundColor: '#f4f4f5'
        }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 className="title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>LunarFactory, Dreams come true</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                    누구나, 언제나, 무엇이든.<br />
                    루나팩토리는 새로운 꿈을 펼치는 장소입니다.<br />
                </p>
                <a href="#team" onClick={scrollToTeam} className="btn">
                    팀원 만나보기 &rarr;
                </a>
            </div>
        </section>
    );
};

export default Hero;
