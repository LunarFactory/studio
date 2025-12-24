import React from 'react';

const Vision = () => {
    return (
        <section id="vision" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '1rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e293b' }}>🚀 프로젝트 목표 (Mission)</h3>
                    <p style={{ color: '#4b5563', marginBottom: '2rem', lineHeight: '1.7' }}>
                        여기에 프로젝트가 해결하고자 하는 문제와 핵심 목표를 적어주세요.
                        사용자들의 불편함을 해소하고, 더 직관적이고 효율적인 경험을 제공하는 것이 우리의 주된 미션입니다.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1e293b' }}>💡 우리의 핵심 가치</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {[
                            { label: '도전', desc: '두려워하지 않고 새로운 기술과 방법에 시도합니다.' },
                            { label: '협력', desc: '함께할 때 더 큰 시너지를 내고 더 나은 결과를 만듭니다.' },
                            { label: '혁신', desc: '기존의 방식을 넘어선 창의적인 해결책을 찾습니다.' }
                        ].map((item, index) => (
                            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#4b5563' }}>
                                <span style={{ width: '8px', height: '8px', backgroundColor: 'var(--primary-color)', borderRadius: '50%', marginRight: '0.75rem' }}></span>
                                <span><strong>{item.label}:</strong> {item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Vision;
