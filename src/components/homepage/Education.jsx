import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/educations.css";

const Educations = () => {
    return (
        <div className="educations">
            <Card
                icon={faSchool}
                title="education"
                body={
                    <div className="educations-body">
                        <div className="education">
                            <img
                                src="./alx.jpeg"
                                alt="facebook"
                                className="education-image"
                            />
                            <div className="education-title">ALX Africa</div>
                            <div className="education-subtitle">
                                Software Engineering
                            </div>
                            <div className="education-duration">2023 - 2023</div>
                        </div>

                        <div className="education">
                            <img
                                src="./nahpi.jpeg"
                                alt="facebook"
                                className="education-image"
                            />
                            <div className="education-title">National Higher Polytechnic Institute ( UBA )</div>
                            <div className="education-subtitle">
                                Bachelor Of Engineering in Computer Engineering
                            </div>
                            <div className="education-duration">2019 - 2023</div>
                        </div>

                        <div className="education">
                            <img
                                src="./nahpi.jpeg"
                                alt="facebook"
                                className="education-image"
                            />
                            <div className="education-title">National Higher Polytechnic Institute ( UBA )</div>
                            <div className="education-subtitle">
                                Master Of Engineering in Computer Engineering
                            </div>
                            <div className="education-duration">Mar 22 - Oct 22</div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Educations;
