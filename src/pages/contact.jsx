import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import ContactForm from "../components/contact/contact";


import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";
import "./styles/about.css";


const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>


					<div className="contact-container">
						<div className="title contact-title">
							Let's Get in Touch
						</div>


						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							me. If you have a specific question or comment, please feel free to email me directly at
							{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Alternatively, you can use the contact form on my website to get in touch.
						</div>
					</div>

					<div className="about-main">
						<div className="about-left-side shadow-lg rounded-md p-4">
							<div className="socials-container">
								<div className="contact-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-right-side shadow-lg rounded-md p-2">
							<div>
								<ContactForm />
							</div>
						</div>
					</div>


					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div >
		</React.Fragment >
	);
};

export default Contact;
