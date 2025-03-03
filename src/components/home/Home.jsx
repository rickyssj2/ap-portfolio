import React from 'react';
import './home.css';
import Me from '../../assests/avatar-1.svg';
import Me2 from '../../assests/home-avatar.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me2} alt="Aryan Pandey" className="home__img" />
                <h1 className="home__name">Aryan Pandey</h1>
                <span className="home__education">
                    I'm a Software Developer
                </span>
                <HeaderSocials />
                <a href="#" className="btn">
                    Resume
                </a>
                <ScrollDown />
            </div>
            <Shapes />
        </section>
    );
};

export default Home;
