import { useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
    useEffect(() => {
        const elements = document.querySelectorAll('.floating-element');
        elements.forEach((element) => {
            const moveElement = () => {
                const x = Math.random() * 20 - 10;
                const y = Math.random() * 20 - 10;
                element.style.transform = `translate(${x}px, ${y}px)`;
            };
            moveElement();
            setInterval(moveElement, 3000);
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });
    }, []);

    return (
        <>
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <ScrollToTop />
        </>
    );
}

export default App;