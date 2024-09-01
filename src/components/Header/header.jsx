import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { Baustellenplanung } from "../../assets";
import Achievement from "../Achievement/achievement";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
	const container = useRef(null);
	useGSAP(
		() => {
			const timeline = gsap.timeline({ delay: 1, stagger: 1 });
			timeline.fromTo(
				".image_container",
				{ scale: 0.5, opacity: 0, y: 0 },
				{ scale: 1, ease: "sine.in", opacity: 1, y: 0 }
			);
			timeline.from(".title", { opacity: 0, y: -30 });
			timeline.from(".description", { opacity: 0, y: -30 });
			timeline.from(".description", { opacity: 0, y: 40 });
		},
		{ scope: container }
	);
	return (
		<header id="header" ref={container}>
			<div className="container full_height">
				<div className="row">
					<div className="column">
						<h1 className="title">
							Träume bauen, {" "} <span className="g-text">Realität schaffen</span>
						</h1>
						<p className="text_muted description">
							Wir haben es uns zur Aufgabe gemacht, Ihre Visionen in greifbare Meisterwerke zu verwandeln. Mit jahrelanger Erfahrung und einem Team aus qualifizierten sind wir auf die Bereitstellung hochwertiger spezialisiert, die auf die individuellen Bedürfnisse jedes Kunden zugeschnitten sind.
						</p>
						<div className="buttons_container">
							<Link to="services" className="btn" smooth={true} duration={1000}>
								Dienstleistungen
							</Link>
							<Link
								to="contact"
								className="btn btn_primary"
								smooth={true}
								duration={1000}
							>
								Kontakt
							</Link>
						</div>
					</div>
					<div className="column">
						<div className="image_container">
							<img src={Baustellenplanung} alt="header" />
						</div>
					</div>
				</div>
				<Achievement />
			</div>
		</header>
	);
};

export default Header;
