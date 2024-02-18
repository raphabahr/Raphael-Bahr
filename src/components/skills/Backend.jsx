import React from 'react'
import '../animation/Animation.css';
import { FaNode, FaPython, FaPhp } from "react-icons/fa6";
import { SiCsharp, SiDotnet, SiMysql, SiMongodb } from "react-icons/si";

const Backend = () => {
    return (
        <div className="skills__content animate">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i><FaNode /></i>

                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">Basic</span>
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
                        <i><SiMysql /></i>

                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i> <FaPython /> </i>

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i> <SiCsharp /> </i>

                        <div>
                            <h3 className="skills__name">C#</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>


                    <div className="skills__data">
                        <i> <SiDotnet /> </i>

                        <div>
                            <h3 className="skills__name">.Net</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i> <SiMongodb /> </i>

                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend