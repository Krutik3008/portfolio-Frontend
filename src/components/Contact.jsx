import { useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://portfolio-backend-1wk99936t-krutik-patel-s-projects.vercel.app";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrorMessage('');

        try {
            console.log('Submitting form with data:', formData);
            const response = await axios.post(`${BASE_URL}/api/contact`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log('Response from backend:', response.data);
            setSuccessMessage('Message sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            console.error('Error submitting form:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                headers: error.response?.headers,
            });
            setErrorMessage(error.response?.data?.message || 'Failed to send message. Please try again.');
        }
    };

    return (
        <section id="contact" className="fade-in px-8 py-20 max-w-[1200px] mx-auto">
            <div className="contact-content text-center max-w-[600px] mx-auto">
                <h2 className="section-title text-[3rem] font-bold text-center mb-12 bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">Let's Connect</h2>
                <p className="text-[1.2rem] text-[var(--text-secondary)] mb-8">
                    Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
                </p>
                {successMessage && (
                    <p className="text-white text-[1.2rem] mb-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] py-2 px-4 rounded-[10px] shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                        {successMessage}
                    </p>
                )}
                {errorMessage && (
                    <p className="text-red-400 text-[1.2rem] mb-4">{errorMessage}</p>
                )}
                <div className="contact-box rounded-[15px] p-8">
                    <form onSubmit={handleSubmit} className="contact-form grid gap-6 mt-12">
                        <div className="form-row grid grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="bg-[var(--dark-light)] border border-white/10 rounded-[10px] p-4 text-[var(--text)] text-[1rem] transition-all duration-300 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="bg-[var(--dark-light)] border border-white/10 rounded-[10px] p-4 text-[var(--text)] text-[1rem] transition-all duration-300 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="bg-[var(--dark-light)] border border-white/10 rounded-[10px] p-4 text-[var(--text)] text-[1rem] transition-all duration-300 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className="bg-[var(--dark-light)] border border-white/10 rounded-[10px] p-4 text-[var(--text)] text-[1rem] transition-all duration-300 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)] resize-y min-h-[120px]"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="cta-button inline-block px-10 py-4 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-[50px] font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.3)] border-none cursor-pointer text-[1.1rem] hover:-translate-y-[3px] hover:shadow-[0_10px_40px_rgba(99,102,241,0.4)]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;