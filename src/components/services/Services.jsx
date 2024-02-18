import React, { useState } from 'react';
import "./services.css";
import '../animation/Animation.css';
import Frontend from "../../assets/frontend_updated.png";
import Backend from "../../assets/backend_updated.png";
import UiUx from "../../assets/uiux_updated.png";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section animate" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What i offer</span>

            <div className="services__container container grid animate">
                <div className="services__content">
                    <div >
                        <i className='services__icon'> <img src={Frontend} alt="" /></i>
                        <h3 className="services__title">Frontend <br /> Developer </h3>

                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More<i className="uil uil-arrow-right services__button-icon "></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Frontend</h3>
                            <p className="services__modal-description">2 years of experience.</p>

                            <ul className="ul services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Responsive Website Development: Creating websites that adapt to different devices and screen sizes.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">API Integration: Integrating third-party APIs to add specific functionalities to websites or applications.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Performance Optimization: Improving loading speed and overall performance of the website.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className='services__icon'> <img src={UiUx} alt="" /></i>
                        <h3 className="services__title">Ui/Ux <br /> Designer</h3>

                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More<i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Ui/Ux Designer</h3>
                            <p className="services__modal-description">2 years of experience.</p>

                            <ul className="ul services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">User Interface Design: Crafting intuitive and visually appealing interfaces for websites and applications.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">User Testing: Conducting user tests to evaluate the usability and effectiveness of interfaces.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">User Research: Conducting research to understand user needs and behaviors.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="services__content">
                    <div>
                        <i className='services__icon'> <img src={Backend} alt="" /></i>
                        <h3 className="services__title">Backend <br /> Developer</h3>

                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Backend</h3>
                            <p className="services__modal-description">1 years of experience.</p>

                            <ul className="ul services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">API Development: Building application programming interfaces to enable communication between the frontend and the database.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Database Management: Setting up and maintaining databases to store and retrieve data efficiently.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Process Automation: Developing scripts and tools to automate repetitive tasks.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services