import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./skye8.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Skye8 Ltd</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Feb 20 - PRESENT</div>
						</div>

						<div className="work">
							<img
								src="./nasia.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Nasia Tech LLC</div>
							<div className="work-subtitle">
								Software Engineer Intern 
							</div>
							<div className="work-duration">Feb 22 - Aug 22</div>
						</div>

						<div className="work">
							<img
								src="./zuri.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Zuri Inc</div>
							<div className="work-subtitle">
								Software Developer - PHP/Laravel
							</div>
							<div className="work-duration">Mar 22 - Oct 22</div>
						</div>

						<div className="work">
							<img
								src="./idealbox.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">IdealBox</div>
							<div className="work-subtitle">
								Backend Developer - NestJs
							</div>
							<div className="work-duration">Oct 22 - Feb 23</div>
						</div>

						<div className="work">
							<img
								src="./antic.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">ANTIC</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Feb 24 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
