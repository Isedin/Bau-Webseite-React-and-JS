import React, {useRef} from "react";
import "./Project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
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
				".slick-slide",
				{ x: 100, opacity: 0 },
				{ opacity: 1, stagger: 0.5, x: 0 }
			);
		},
		{ scope: container }
	);
	const settings = {
		infinite: true,
		speed: 2000,
		slidesToShow: 2,
		centerMode: true,
		pauseOnHover: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{ breakpoint: 600, settings: { slidesToShow: 1, centerPadding: 0 } },
		],
	};
	return (
		<section id="project" ref={container}>
			<div className="project_top">
				<h1 className="title">
					Unsere <span className="g-text">Projekte</span>
				</h1>
				<h3 className="sub_title">
					Innovative Bauprojekte, außergewöhnliche Handwerkskunst.
				</h3>
			</div>
			<Slider {...settings} className="projects_container">
				{projects.map((project, index) => (
					<React.Fragment key={index}>
						<div className="image_container">
							<img src={project.image} alt={project.title} />
						</div>
						<div className="box">
							<h1 className="name">{project.title}</h1>
						</div>
						<div className="details">
							<h3 className="name">{project.title}</h3>
							<p className="text_muted_description">{project.description}</p>
							{/* <button className="btn">Read more</button> */}
						</div>
					</React.Fragment>
				))}
			</Slider>
		</section>
	);
};

export default Project;
