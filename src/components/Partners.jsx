import React from 'react';

const Partners = () => {
    const partners = [
        {
            id: 'shystella',
            name: 'ShyStella - Hotaru',
            desc: '테크 오따끄 호타루의 공식 웹사이트!',
            link: 'https://shyhotaru.com/'
        },
        {
            id: 'whitenoise',
            name: 'WhiteNoise',
            desc: '치지직 스트리머 화이트노이즈!',
            link: 'https://chzzk.naver.com/9178825e6c5f0fcaefe652f1132788e8'
        }
    ];

    const onErrorImg = (e) => {
        e.target.onerror = null; // Prevent infinite loop
        e.target.src = `${import.meta.env.BASE_URL}images/default_project.svg`;
    };

    return (
        <section id="partners" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <h3 className="title">Partners & Contributors</h3>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    justifyContent: 'center'
                }}>
                    {partners.map((partner, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '1rem',
                            border: '1px solid #f3f4f6',
                            textAlign: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'default',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '350px',
                            width: '100%',
                            margin: '0 auto',
                            position: 'relative'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                                e.currentTarget.style.zIndex = '10';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = '#f3f4f6';
                                e.currentTarget.style.zIndex = '1';
                            }}
                        >
                            {/* Image Area */}
                            <div style={{
                                height: '160px',
                                backgroundColor: '#f1f5f9',
                                overflow: 'hidden',
                                borderBottom: '1px solid #f3f4f6'
                            }}>
                                <img
                                    src={`${import.meta.env.BASE_URL}images/${partner.id}.png`}
                                    alt={partner.name}
                                    onError={onErrorImg}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Content Area */}
                            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <div style={{
                                    fontWeight: 'bold',
                                    fontSize: '1.25rem',
                                    marginBottom: '0.5rem',
                                    color: '#1f2937'
                                }}>
                                    {partner.name}
                                </div>
                                <div style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                                    {partner.desc}
                                </div>

                                <a href={partner.link} style={{
                                    display: 'inline-block',
                                    backgroundColor: 'white',
                                    color: 'var(--primary-color)',
                                    border: '1px solid var(--primary-color)',
                                    padding: '0.5rem 1.25rem',
                                    borderRadius: '0.5rem',
                                    textDecoration: 'none',
                                    fontWeight: '600',
                                    transition: 'all 0.2s',
                                    alignSelf: 'center'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.backgroundColor = 'var(--primary-color)';
                                        e.target.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.backgroundColor = 'white';
                                        e.target.style.color = 'var(--primary-color)';
                                    }}
                                >
                                    Visit
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
