import { useState, useEffect } from 'react';

function Projects() {
    const [filter, setFilter] = useState('all');

    const projects = [
        { tech: 'React Node.js MongoDB Stripe', title: 'Travelling website  ', description: 'A responsive travel booking platform with dynamic UI, showcasing destinations, booking forms, and interactive components using JavaScript.', tags: ['HTML', 'CSS', 'JavaScript', 'BOOTSTRAP'], icon: '🚀' },
        { tech: 'Vue.js Python PostgreSQL', title: 'Unique Tution Classes', description: 'An educational website for managing tuition classes with student registration, schedules, and contact forms using PHP and JavaScript.', tags: ['HTML', 'CSS', 'JavaScript', 'PHP'], icon: '📊' },
    ];

    return (
        <section id="projects" className="fade-in px-8 py-20 max-w-[1200px] mx-auto">
            <h2 className="section-title text-[3rem] font-bold text-center mb-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Featured Projects</h2>
            <div className="filter-controls flex justify-center gap-4 mb-8 flex-wrap">
                {['all', 'HTML', 'PHP'].map((tech) => (
                    <button
                        key={tech}
                        className={`filter-btn bg-[var(--dark-light)] border border-white/10 text-[var(--text)] px-4 py-2 rounded-[20px] cursor-pointer transition-all duration-300 ${filter === tech ? 'active bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none' : ''}`}
                        onClick={() => setFilter(tech)}
                        data-tech={tech}
                    >
                        {tech.charAt(0).toUpperCase() + tech.slice(1)}
                    </button>
                ))}
            </div>
            <div className="projects-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
                {projects.map((project, index) => {
                    const shouldShow = filter === 'all' || project.tags.includes(filter);
                    return (
                        <div
                            key={index}
                            className={`project-card hover-effect bg-[var(--dark-light)] rounded-[15px] overflow-hidden border border-white/10 transition-all duration-300 relative ${shouldShow ? 'block fade-in' : 'hidden'} hover:-translate-y-[10px] hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)]`}
                            data-tech={project.tech}
                        >
                            <div className="project-image h-[200px] bg-gradient-to-r from-[#667eea] to-[#764ba2] flex items-center justify-center text-[4rem] text-white">{project.icon}</div>
                            <div className="project-content p-8">
                                <h3 className="project-title text-[1.5rem] font-semibold mb-4">{project.title}</h3>
                                <p className="project-description text-[var(--text-secondary)] leading-[1.6] mb-6">{project.description}</p>
                                <div className="project-tech flex gap-2 flex-wrap">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tech-tag bg-[rgba(99,102,241,0.2)] text-[var(--primary)] px-3 py-1 rounded-[20px] text-[0.9rem] font-medium">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;
