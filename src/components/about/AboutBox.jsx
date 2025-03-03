import React from 'react';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">198</h3>
                    <div className="about__subtitle">Projects completed</div>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">5760</h3>
                    <div className="about__subtitle">Cup of coffee</div>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">427</h3>
                    <div className="about__subtitle">Clients</div>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">4</h3>
                    <div className="about__subtitle">Certifications</div>
                </div>
            </div>
        </div>
    );
};

export default AboutBox;
