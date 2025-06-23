function About() {
    return (
        <section id="about" className="fade-in px-8 py-20 max-w-[1200px] mx-auto">
            <h2 className="section-title text-[3rem] font-bold text-center mb-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">About Me</h2>
            <div className="about-content grid grid-cols-[1fr_2fr] gap-16 items-center">
                <div className="about-image hover-effect w-full h-[400px] bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-[20px] flex items-center justify-center text-[6rem] text-white shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 relative overflow-hidden hover:-translate-y-[5px] hover:shadow-[0_20px_40px_rgba(99,102,241,0.2)]">
                     👨‍💻
                </div>
                <div className="about-text text-[1.2rem] leading-[1.8] text-[var(--text-secondary)]">
                    <p className="mb-4">Hello! I’m Krutik Patel, a passionate Full-Stack Developer crafting modern, responsive web applications that deliver real value. My journey began with a simple curiosity for the web and quickly turned into a love for building seamless digital experiences that are both functional and beautiful.</p>
                    <p className="mb-4">I specialize in technologies like React.js, Node.js, Django, and MongoDB, with hands-on experience developing full-stack solutions for real-world clients. From dynamic frontends to secure backend systems, I enjoy bringing ideas to life through clean code and thoughtful design.</p>
                    <p className="mb-4">When I’m not coding, I’m exploring new tech, improving my skills, or collaborating on creative side projects. I believe in continuous growth, strong collaboration, and building tools that truly make a difference.</p>
                </div>
            </div>
        </section>
    );
}

export default About;