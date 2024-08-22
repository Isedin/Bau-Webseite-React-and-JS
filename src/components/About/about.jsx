import React, { useRef } from "react";
import "./About.css";
import { Baustellenplanung, building_1, building_2, building_3 } from "../../assets";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
			timeline.from(".company_photo", { opacity: 0, x: -50 });
			timeline.from(".title", { opacity: 0, y: -50 });
			timeline.from(".sub_title", { opacity: 0, y: -50 });
			timeline.from(".box", { opacity: 0, x: 50, stagger: 0.5 });
			timeline.from(".description", { opacity: 0, y: 50 });
			timeline.from(".group", { opacity: 0, y: 50 });
			timeline.from(".buttons_container", { opacity: 0, y: 50 });
		},
		{ scope: container }
	);
	return (
		<section id="about" ref={container}>
			<div className="container">
				<div className="column company_photo">
					<img src={Baustellenplanung} alt="EB BAU" />
				</div>
				<div className="column">
					<h1 className="title">
						<span className="g-text">Über Uns</span>
					</h1>
					<h3 className="sub_title">
						Visionen durch fundamentale Fokussierung verwirklichen.
					</h3>
					<div className="company_media_container">
						<div className="box">
							<img src={building_1} alt="" />
						</div>
						<div className="box">
							<img src={building_2} alt="" />
						</div>
						<div className="box">
							<img src={building_3} alt="" />
						</div>
					</div>

					<p className="text_muted description">
						Wir sind ein Unternehmen, das sich auf die Entwicklung und den Bau
						von Wohn- und Gewerbeimmobilien spezialisiert hat. Wir sind stolz
						darauf, dass wir in den letzten Jahren mehrere Projekte erfolgreich
						abgeschlossen haben. Wir sind ein Team von Fachleuten, die sich
						darauf konzentrieren, die Bedürfnisse unserer Kunden zu erfüllen und
						gleichzeitig die höchsten Standards in Bezug auf Qualität und Design
						zu erfüllen. Wir sind bestrebt, die Erwartungen unserer Kunden zu
						übertreffen und ihnen ein Zuhause zu bieten, das sie lieben werden.
					</p>
					<div className="group">
						<div className="row">
							<div className="icon_container">
								<FaCheck />
							</div>
							<div className="details">
								<p className="text_muted">Beratung</p>
								<h3>Kostenlos</h3>
							</div>
						</div>

						<div className="row">
							<div className="icon_container">
								<FaCheck />
							</div>
							<div className="details">
								<p className="text_muted">Expert</p>
								<h3>Ingenieure</h3>
							</div>
						</div>

						<div className="row">
							<div className="icon_container">
								<FaCheck />
							</div>
							<div className="details">
								<p className="text_muted">Kunden</p>
								<h3>Unterstützung</h3>
							</div>
						</div>

						<div className="row">
							<div className="icon_container">
								<FaCheck />
							</div>
							<div className="details">
								<p className="text_muted">Qualität</p>
								<h3>Service</h3>
							</div>
						</div>
					</div>
					{/* <div className="buttons_container">
						<Link to="project" smooth={true} className="btn">
							Explore
						</Link>
						<Link to="contact" smooth={true} className="btn btn_primary">
							Get a quote
						</Link>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default About;
