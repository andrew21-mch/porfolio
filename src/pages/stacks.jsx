import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";
import Stack from "../components/about/Stack";

const Stacks = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "stacks");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`My Stacks | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
              
            </Helmet>

            <div className="page-content">
                <NavBar active="stacks" />
                <div className="content-wrapper">
                    <div className="about-logo-container">
                        <div className="about-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-right-side">
                                <div className="title about-title">My Stacks - What I have ventured into for the past 4 years</div>

                                <div className="subtitle about-subtitle">
                                As a developer, I've worked with a variety of technologies at different levels of proficiency. Below are the technology stacks I'm familiar with, along with my level of experience:
                                </div>

                                <div className="stacks-container">
                                    <div className="stacks-grid">
                                        {INFO.stacks.map((stack, index) => (
                                            <Stack
                                                key={index}
                                                title={stack.title}
                                                description={stack.description}
                                                logo={stack.logo}
                                                level={stack.level}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                        <img
                                            src="about.png"
                                            alt="about"
                                            className="about-image"
                                        />
                                    </div>
                                </div>

                                <div className="about-socials">
                                    <Socials />
                                </div>
                            </div>
                        </div>
                        <div className="about-socials-mobile">
                            <Socials />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Stacks;
