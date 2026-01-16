import React from 'react';
import { Mail, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TiktokIcon = ({ size = 24, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Contact = () => {
    const { t } = useLanguage();
    return (
        <section id="contact" className="section-container contact-section">
            <div className="glass-card contact-card">
                <div className="contact-content">
                    <h2 className="contact-title">{t.contact.title}</h2>
                    <p className="contact-text">
                        {t.contact.text}
                    </p>

                    <a href="mailto:nikaa270322@gmail.com" className="glass-button contact-button">
                        <Mail size={20} />
                        nikaa270322@gmail.com
                    </a>

                    <div className="social-links">
                        <a href="https://www.facebook.com/sunngodnikaa" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Facebook size={24} />
                        </a>
                        <a href="https://www.instagram.com/thenumber1girlinureyes/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.tiktok.com/@sunngodnikaa" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <TiktokIcon size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <footer className="footer-copyright">
                {t.contact.copyright}
            </footer>
        </section>
    );
};

export default Contact;
