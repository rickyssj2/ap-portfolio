import React, { useState } from 'react';
import './sidebar.css';
import Logo from '../../assests/logo.svg';

const Sidebar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    AP
                    <span className="nav__logo-period">.</span>
                </a>
                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link">
                                    <i className="icon-home"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link">
                                    <i className="icon-user-following"></i>
                                </a>
                            </li>
                            {/* <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li> */}
                            <li className="nav__item">
                                <a href="#resume" className="nav__link">
                                    <i className="icon-briefcase"></i>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#work" className="nav__link">
                                    <i className="icon-layers"></i>
                                </a>
                            </li>
                            {/* <li className="nav__item">
                            <a href="#blog" className="nav__link">
                                <i className="icon-note"></i>
                            </a>
                        </li> */}
                            <li className="nav__item">
                                <a href="#contact" className="nav__link">
                                    <i className="icon-bubble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="nav__footer">
                    <span className="copyright">
                        &copy; {new Date().getFullYear()} -{' '}
                        {new Date().getFullYear() + 1}.
                    </span>
                </div>
            </aside>

            <div
                className={
                    toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'
                }
                onClick={() => setToggle(!toggle)}
            >
                <i
                    className={toggle ? 'icon-arrow-left' : 'icon-arrow-right'}
                ></i>
            </div>
        </>
    );
};

export default Sidebar;
