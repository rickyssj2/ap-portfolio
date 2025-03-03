import React from 'react';
import './about.css';
import AboutImage from '../../assests/home-avatar.png';
import AboutBox from './AboutBox';

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me</h2>
            <div className="about__container grid">
                <img
                    src={AboutImage}
                    alt="Aryan Pandey Image"
                    className="about__img"
                />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            I am Aryan Pandey, software developer from
                            California, USA. I have experience in building APIs
                            and robust backend systems.
                        </p>
                        <a href="" className="btn">
                            Download Resume
                        </a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">DS & Algo</h3>
                                <span className="skills__number">90%</span>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__percentage skills-1"></div>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Java</h3>
                                <span className="skills__number">70%</span>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__percentage skills-2"></div>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Python</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                                <div className="skills__percentage skills-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox />
        </section>
    );
};

export default About;
