import React, {useRef} from "react";
import "./Teams.css";
import { teams } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Teams = () => {
	const container = useRef(null);
	useGSAP(
		() => {
			const timeline = gsap.timeline({
				delay: 0.5,
				scrollTrigger: {
					trigger: container.current,
					start: "20% bottom",
					end: "bottom top",
				},
			});
			timeline.from(".title", { opacity: 0, y: -50 });
			timeline.from(".sub_title", { opacity: 0, y: -50 });
			timeline.fromTo(
				".team_card",
				{ x: 100, opacity: 0 },
				{ opacity: 1, stagger: 0.5, x: 0 }
			);
		},
		{ scope: container }
	);
	return (
		<section id="team" ref={container}>
			<div className="container">
				<h1 className="title">
					Unsere <span className="g-text">Teams</span>
				</h1>
				<h3 className="sub_title">
					Lernen Sie unseres vielfältigen Team aus kreativen Köpfen, Entwicklern
					und Strategen kennen – die treibende Kraft hinter dem Erfolg jedes
					Projekts.
				</h3>
				<div className="teams_container">
					{teams.map((team, index) => (
						<div className="team_card" key={index}>
							<div className="profile_container">
								<img src={team.profile} alt={team.name} />
							</div>
							<div className="details">
								<h3 className="name">{team.name}</h3>
								<p className="text_muted">{team.title}</p>
								<div className="social_container">
									{/* {team.social.map((item, i) => (
										<a
											href={item.url || "#"}
											target="_blank"
											key={i}
											className="icon_container"
										>
											{item.icon}
										</a>
									))} */}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Teams;
