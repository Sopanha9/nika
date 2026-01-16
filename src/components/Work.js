import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import workFintech from '../assets/work-fintech.webp';
import workFashion from '../assets/work-fashion.webp';
import { useLanguage } from '../context/LanguageContext';

const projectAssets = [
    {
        id: 1,
        image: workFintech,
        color: '#6c5ce7'
    },
    {
        id: 2,
        image: workFashion,
        color: '#fab1a0' // soft peach
    }
];

const Work = () => {
    const { t } = useLanguage();

    return (
        <section id="work" className="section-container">
            <div className="section-header">
                <h2 className="section-title">{t.work.title}</h2>
                <div className="section-line"></div>
            </div>

            <div className="work-grid">
                {t.work.projects.map((project, index) => {
                    const asset = projectAssets[index];
                    return (
                        <div key={index} className="work-card glass-card">
                            <div className="work-image-container">
                                <img src={asset.image} alt={project.title} className="work-image" loading="lazy" />
                                <div className="work-overlay">
                                    <button className="view-project-btn">
                                        {t.work.viewCase}
                                        <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="work-info">
                                <span className="work-category" style={{ color: asset.color }}>{project.category}</span>
                                <h3 className="work-title">{project.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Work;
