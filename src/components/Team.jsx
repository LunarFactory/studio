import React from 'react';

const Team = () => {
    const members = [
        { name: 'PixelVoxel', role: 'Leader', desc: '프로젝트의 방향성을 잡고 일정을 체계적으로 관리합니다.', icon: '👨‍💻' },
        { name: 'CMTRUY', role: 'Lead Developer', desc: '핵심 기능을 견고하게 구현하고 시스템 아키텍처를 설계합니다.', icon: '💻' }
    ];

    return (
        <section id="team" className="section" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <h3 className="title" style={{ borderBottom: '2px solid #e5e7eb', display: 'inline-block', paddingBottom: '1rem', marginBottom: '3rem' }}>함께하는 사람들</h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {members.map((member, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                            textAlign: 'center',
                            border: '1px solid #f3f4f6',
                            transition: 'transform 0.3s',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                width: '80px', height: '80px',
                                backgroundColor: '#e2e8f0', borderRadius: '50%',
                                margin: '0 auto 1.5rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '2rem'
                            }}>{member.icon}</div>
                            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{member.name}</div>
                            <div style={{ color: 'var(--primary-color)', fontSize: '0.875rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.05em' }}>{member.role}</div>
                            <p style={{ color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.6' }}>{member.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
