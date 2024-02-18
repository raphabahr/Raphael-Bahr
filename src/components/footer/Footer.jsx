import React from 'react';
import "./footer.css";
import Map from '../maps/Map';
import "../maps/map.css";

const Footer = () => {
    return (
        <footer className="footer">
            <h1 className="footer__title">Raphael Bahr</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>

                <li>
                    <a href="#my-projects" className="footer__link">My projects</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>
            <div className='footer__container container'>
                <div className="footer__social">
                    <h1 className="findme__title">Find me</h1>

                    <div className="footer__social-icons">
                        <a href="https://www.facebook.com/RaphaBahr" className="footer__social-link" target="_blank">
                            <i class="bx bxl-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/raphaelbahr/" className="footer__social-link" target="_blank">
                            <i class="bx bxl-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/raphael-bahr/" className="footer__social-link" target="_blank">
                            <i class="bx uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/raphabahr" className="footer__social-link" target="_blank">
                            <i class="bx uil-github-alt"></i>
                        </a>
                    </div>
                </div>

                <div className="map__container">
                    <h1>Location</h1>
                    <Map />
                </div>

                <div className='copy__container'>
                    <span className='footer__copy'>&#169; RaphaBahr. All rigths reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer