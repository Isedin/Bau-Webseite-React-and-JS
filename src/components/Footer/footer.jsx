import React from "react";
import "./Footer.css";
import Logo from "../Logo/logo";
import { footer } from "../../data";
import { Link } from "react-scroll";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="column">
						<Logo />
						{/* <form action="" className="newsletter">
							<h3>Subscribe to our newsletter</h3>
							<div className="control_container">
								<input
									type="email"
									placeholder="Enter your email"
									className="control"
								/>
								<button type="button" className="btn">
									Subscribe
								</button>
							</div>
						</form> */}
					</div>
					{footer.map((list, index) => (
						<div className="column" key={index}>
							<div className="routes name">{list.name}</div>
							<div className="routes_container">
								{list.routes.map((route, i) => (
									<Link to={route.id} className="route_item" key={i}>
										<p className="name">{route.name}</p>
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="copyright">
				<div className="container">
					<h3>Copyright &copy; Alle Rechte vorbehalten -| 2024</h3>
					<p className="text_muted">Argent Software Solutions</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
