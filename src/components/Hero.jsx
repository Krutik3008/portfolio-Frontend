    import { useState, useEffect } from 'react';

    function Hero() {
        const [typedText, setTypedText] = useState('');
        const text = "Krutik Patel";
        let index = 0;

        useEffect(() => {
            const type = () => {
                if (index < text.length) {
                    setTypedText((prev) => prev + text.charAt(index));
                    index++;
                    setTimeout(type, 100);
                }
            };
            setTimeout(type, 100);
        }, []);

        return (
            <section id="home" className="hero h-screen flex items-center justify-center text-center relative overflow-hidden">
                <div className="floating-element absolute w-[200px] h-[200px] rounded-full bg-[rgba(99,102,241,0.1)] animate-[float_6s_ease-in-out_infinite] z-[-1] top-[10%] left-[10%]"></div>
                <div className="floating-element absolute w-[200px] h-[200px] rounded-full bg-[rgba(139,92,246,0.1)] animate-[float_6s_ease-in-out_infinite_2s] z-[-1] top-[20%] right-[10%]"></div>
                <div className="floating-element absolute w-[200px] h-[200px] rounded-full bg-[rgba(6,182,212,0.1)] animate-[float_6s_ease-in-out_infinite_4s] z-[-1] bottom-[10%] left-[20%]"></div>
                <div className="hero-content max-w-[800px] px-8 animate-[fadeInUp_1s_ease-out]">
                    <div className="hero-subtitle text-[1.2rem] text-[var(--accent)] mb-4 font-medium tracking-[2px] uppercase">Full-Stack Developer</div>
                    <h1 id="typed-text" className="hero-title text-[clamp(3rem,8vw,6rem)] font-extrabold mb-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent leading-[1.1] inline-block whitespace-nowrap overflow-hidden animate-[typing_1s_steps(9,end)_forwards]">
                        Krutik Patel
                    </h1>
                    <p className="hero-description text-[1.3rem] text-[var(--text-secondary)] mb-12 leading-[1.6]">
                        Transforming ideas into powerful web applications. Crafting end-to-end solutions with clean code, modern design and a passion for performance.
                    </p>
                    <button
                        className="cta-button inline-block px-10 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-[50px] font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] border-none cursor-pointer text-[1.1rem] hover:-translate-y-[3px] hover:shadow-[0_10px_40px_rgba(99,102,241,0.4)]"
                        onClick={() => document.getElementById('contact').scrollIntoView()}
                    >
                        Let's Work Together
                    </button>
                </div>
            </section>
        );
    }

    export default Hero;