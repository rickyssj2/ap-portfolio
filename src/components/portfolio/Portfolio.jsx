import React, { useState } from 'react';
import './portfolio.css';
import Data from './Data';

const Portfolio = () => {
    const [items, setItems] = useState(Data);
    const filterItem = category => {
        const updatedItems = Data.filter(item => {
            return item.category.toLowerCase() === category.toLowerCase();
        });
        setItems(updatedItems);
    };

    return (
        <section className="work container section" id="work">
            <h2 className="section__title">Recent Works</h2>
            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Data)}>
                    Everything
                </span>
                <span
                    className="work__item"
                    onClick={() => filterItem('Creative')}
                >
                    Creative
                </span>
                <span className="work__item" onClick={() => filterItem('Art')}>
                    Art
                </span>
                <span
                    className="work__item"
                    onClick={() => filterItem('Design')}
                >
                    Design
                </span>
                <span
                    className="work__item"
                    onClick={() => filterItem('Branding')}
                >
                    Branding
                </span>
            </div>

            <div className="work__container grid">
                {items.map(item => {
                    const { id, image, title, category } = item;

                    return (
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img
                                    src={image}
                                    alt="work image"
                                    className="work__img"
                                />
                                <div className="work__mask"></div>
                            </div>
                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href="#" className="work__button">
                                <i className="icon-link work__button-icon"></i>
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Portfolio;
