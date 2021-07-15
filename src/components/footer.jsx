import React from "react";
import "../styles/footer.scss";

const Logo = () => {
	return (
		<div className="footer-logo">
			<img
				className="footer-logo__image"
				src="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e45e151f236a82c108b5b68_logo10.svg"
				alt=""
			/>
			<img
				className="footer-logo__text"
				src="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e45cc9946e3c4dd2aaf3a86_logo9.svg"
				alt=""
			/>
		</div>
	);
};

const Copyright = () => {
	return (
		<span className="footer-copyright">
			{"Copyright © "}
			{new Date().getFullYear()}{" "}
			<a className="footer-copyright__link" href="https://www.finicast.com/">
				Finicast, Inc
			</a>
			{"."}
		</span>
	);
};

const CTA = () => {
	return (
		<div className="footer-cta">
			<button className="footer-cta__button">Lets Get in Touch</button>
		</div>
	);
};

const Navbar = () => {
	return (
		<nav className="footer-navbar">
			<span className="footer-navbar__heading">About Us</span>
			<ul className="footer-navbar__list">
				<li className="footer-navbar__item">
					<a className="footer-navbar__link">Who We Are</a>
				</li>
				<li className="footer-navbar__item">
					<a className="footer-navbar__link">Careers</a>
				</li>
				<li className="footer-navbar__item">
					<a className="footer-navbar__link">Contact Us</a>
				</li>
			</ul>
		</nav>
	);
};

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__content">
				<CTA />
				<Navbar />
				<div className="footer-logo-group">
					<Logo />
					<Copyright />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
