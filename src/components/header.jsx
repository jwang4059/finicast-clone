import { Link } from "gatsby";
import React from "react";
import "../styles/header.scss";
import Button from "./button";

const Header = () => {
	return (
		<header className="header">
			<div className="header__content">
				<div className="header-logo">
					<Link to="/">
						<img
							src="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5f887df85a2b176d90ddf64e_headerlogo.svg"
							alt=""
						/>
					</Link>
				</div>
				<nav className="header-navbar">
					<ul className="header-navbar__list">
						<li className="header-navbar__item">
							<Link className="header-navbar__link" to="/">
								Home
							</Link>
						</li>
						<li className="header-navbar__item">
							<Link className="header-navbar__link" to="/about">
								About Us
							</Link>
						</li>
						<li className="header-navbar__item">
							<Link className="header-navbar__link" to="/contact">
								<Button className="navbar__button">Try It</Button>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
