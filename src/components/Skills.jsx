function Skills() {
    const skills = [
        { icon: '🌐', title: 'Frontend Development', description: 'HTML, CSS, React.js, Next.js, Tailwind CSS, JavaScript' },
        { icon: '⚙', title: 'Backend Development', description: 'Node.js, Python, Express, Django, RESTful APIs, GraphQL, PHP' },
        { icon: '☁', title: 'Cloud & DevOps', description: 'GitHub, Docker, Vercel, GitHub Actions, render' },
        { icon: '🗄', title: 'Database & Storage', description: 'PostgreSQL, MongoDB, MySQL' },
        { icon: '🎨', title: 'UI/UX Design', description: 'Figma, Motiff' },
        { icon: '📱', title: 'Mobile Development', description: 'Flutter, Android, Cross-platform' },
        { icon: '💻', title: 'Technical Skills', description: 'C, Java, .NET, Modern JavaScript' },
    ];

    return (
        <section id="skills" className="fade-in px-8 py-20 max-w-[1200px] mx-auto">
            <h2 className="section-title text-[3rem] font-bold text-center mb-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Skills & Expertise</h2>
            <div className="skills-grid grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-12">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card hover-effect bg-[var(--dark-light)] p-8 rounded-[15px] border border-white/10 transition-all duration-300 relative overflow-hidden hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)]">
                        <div className="skill-icon text-[3rem] mb-4 text-[var(--accent)]">{skill.icon}</div>
                        <h3 className="skill-title text-[1.5rem] font-semibold mb-4">{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;