import React from 'react'
import '../animation/Animation.css';
import { FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaJs, FaReact, FaGitAlt, FaPhp } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";

const Frontend = () => {
    return (
        <div className="skills__content animate ">
            <h3 className="skills__title">Frontend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i><FaHtml5 /></i>

                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i><FaPhp /></i>

                        <div>
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i><FaCss3Alt /></i>

                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i><FaSass /></i>

                        <div>
                            <h3 className="skills__name">SASS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i><FaBootstrap /></i>

                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i><FaJs /></i>

                        <div>
                            <h3 className="skills__name">JavaSript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i><FaReact /></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i><BiLogoTypescript /></i>

                        <div>
                            <h3 className="skills__name">TypeScript</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i><FaGitAlt /></i>

                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend