import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: '루나팩토리 마인크래프트 서버',
            description: '정기적으로 테마를 변경하는 마인크래프트 서버입니다.',
            tags: ['Minecraft', 'Modded'],
            link: '#', // 나중에 실제 링크로 변경
            image: `${import.meta.env.BASE_URL}images/default_project.svg` // 나중에 실제 이미지로 변경
        },
        {
            id: 2,
            title: '앨리스의 대저택',
            description: '기억을 되찾기 위해 미궁화된 저택을 탐험하는 앨리스의 이야기입니다.',
            tags: ['Game', 'Rogue-Lite', 'Godot'],
            link: '#',
            image: `${import.meta.env.BASE_URL}images/default_project.svg`
        },
        {
            id: 3,
            title: '거울에 떨어진 저주 세 방울',
            description: '평행세계의 자신과 세계의 거대한 법칙을 파헤치는 소설입니다.',
            tags: ['Novel'],
            link: '#',
            image: `${import.meta.env.BASE_URL}images/default_project.svg`
        },
        {
            id: 4,
            title: '파라다이스 인 노웨어',
            description: '디스토피아적 도시에서 살아남기 위한 사람들의 이야기입니다.',
            tags: ['Game', 'Deck-Building'],
            link: '#',
            image: `${import.meta.env.BASE_URL}images/default_project.svg`
        }
        // 여기에 새로운 프로젝트를 추가하세요
    ];

    const onErrorImg = (e) => {
        // e.target.src = 'https://via.placeholder.com/400x250?text=No+Image'; // Fallback
        e.target.style.backgroundColor = '#e5e7eb'; // Gray background if no image
    };

    return (
        <section id="projects" className="section" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="section-header">
                    <h3 className="title">Project</h3>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} style={{
                            backgroundColor: '#fff',
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            transition: 'all 0.3s ease',
                            border: '1px solid #f3f4f6',
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: '500px',
                            width: '100%',
                            margin: '0 auto',
                            position: 'relative'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                                e.currentTarget.style.zIndex = '10';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                e.currentTarget.style.zIndex = '1';
                            }}
                        >
                            {/* Project Image Area */}
                            <div style={{
                                height: '200px',
                                backgroundColor: '#f1f5f9',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onError={onErrorImg}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>

                            {/* Content Area */}
                            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                <h4 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '1rem',
                                    color: '#1f2937'
                                }}>
                                    {project.title}
                                </h4>

                                <p style={{
                                    color: '#4b5563',
                                    fontSize: '1rem',
                                    lineHeight: '1.6',
                                    marginBottom: '1.5rem',
                                    flexGrow: 1
                                }}>
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            backgroundColor: '#eff6ff',
                                            color: '#2563eb',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '9999px',
                                            fontSize: '0.875rem',
                                            fontWeight: '600'
                                        }}>
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link Button */}
                                <a href={project.link} style={{
                                    display: 'inline-block',
                                    backgroundColor: '#111827',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    borderRadius: '0.5rem',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    transition: 'background-color 0.2s'
                                }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#111827'}
                                >
                                    자세히 보기
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
