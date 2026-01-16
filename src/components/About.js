import React from 'react';
import { Code, PenTool, Layout, Monitor } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const skillIcons = [
    <Layout size={18} />,
    <Monitor size={18} />,
    <PenTool size={18} />,
    <Code size={18} />
];

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about" className="section-container">
            <div className="glass-card about-card">
                <div className="about-content">
                    <div className="about-header">
                        <h2 className="section-title">{t.about.title}</h2>
                        <div className="section-line"></div>
                    </div>

                    <div className="about-body">
                        <h3 className="about-headline">
                            {t.about.headline}
                        </h3>
                        <p className="about-text">
                            {t.about.text1}
                        </p>
                        <p className="about-text">
                            {t.about.text2}
                        </p>

                        <div className="skills-container">
                            {t.about.skills.map((skillName, index) => (
                                <div key={index} className="skill-pill">
                                    {skillIcons[index]}
                                    <span>{skillName}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
