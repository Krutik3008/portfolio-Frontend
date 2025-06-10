import { useState, useEffect } from 'react';

function Nav() {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const [navBg, setNavBg] = useState('rgba(15, 23, 42, 0.8)');

    useEffect(() => {
        const handleScroll = () => {
            setNavBg(window.scrollY > 100
                ? isLightTheme ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)'
                : isLightTheme ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.8)');
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLightTheme]);

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
        document.body.classList.toggle('light-theme');
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-0 w-full p-4 backdrop-blur-[20px] border-b border-white/10 z-[1000] transition-all duration-300" style={{ background: navBg }}>
            <div className="nav-container max-w-[1200px] mx-auto flex justify-between items-center">
                <div className="logo text-[1.5rem] font-bold bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">KP</div>
                <ul className="nav-links flex gap-8 list-none">
                    {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                className="text-[var(--text-secondary)] font-medium hover:text-[var(--text)] relative transition-all duration-300 hover:-translate-y-[2px]"
                                onClick={(e) => handleNavClick(e, section)}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
                <button onClick={toggleTheme} className="theme-toggle text-[1.2rem] cursor-pointer text-[var(--text)] transition-transform duration-300 hover:rotate-180 bg-transparent border-none">
                    {isLightTheme ? '🌞' : '🌙'}
                </button>
            </div>
        </nav>
    );
}

export default Nav;