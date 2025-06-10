import { useState, useEffect } from 'react';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-to-top fixed bottom-8 right-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white border-none rounded-full w-[50px] h-[50px] text-[1.5rem] cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] ${isVisible ? 'opacity-100' : 'opacity-0'} hover:scale-110`}
        >
            ↑
        </button>
    );
}

export default ScrollToTop;