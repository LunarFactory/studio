import React from 'react';

const Team = () => {
    const members = [
        { id: 'pixelvoxel', name: 'PixelVoxel', role: 'Leader', desc: '루나팩토리의 리더입니다. 여러분의 꿈을 응원합니다.' },
        { id: 'cmtruy', name: 'CMTRUY', role: 'Lead Developer', desc: '멤버 한 마디' },
        { id: 'flymuhwah2', name: 'Flymuhwah2', role: 'Artist', desc: '멤버 한 마디' }
    ];

    const onErrorImg = (e) => {
        e.target.src = '/images/default_profile.svg';
    };

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
                            <img
                                src={`/images/${member.id}.png`}
                                onError={onErrorImg}
                                alt={member.name}
                                style={{
                                    width: '120px', height: '120px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    margin: '0 auto 1.5rem',
                                    display: 'block',
                                    border: '4px solid #e2e8f0',
                                    backgroundColor: '#f1f5f9'
                                }}
                            />
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
