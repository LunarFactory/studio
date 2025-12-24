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
                <h2 className="title" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>우리는 새로운 가치를 만듭니다</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                    기술을 통해 더 나은 세상을 만드는 것이 우리의 목표입니다.<br />
                    복잡한 설치 없이, 오직 코드와 열정으로 시작합니다.
                </p>
                <a href="#team" onClick={scrollToTeam} className="btn">
                    팀원 만나보기 &rarr;
                </a>
            </div>
        </section>
    );
};

export default Hero;
