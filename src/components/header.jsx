import React from "react";
import "../styles/header.scss";

const Header = () => {
	return (
		<header className="header">
			<div className="header__content">
				<div className="header-logo">
					<img
						src="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5f887df85a2b176d90ddf64e_headerlogo.svg"
						alt=""
					/>
				</div>
				<nav className="header-navbar">
					<ul className="header-navbar__list">
						<li className="header-navbar__item">
							<a className="header-navbar__link" href="#">
								Home
							</a>
						</li>
						<li className="header-navbar__item">
							<a className="header-navbar__link" href="#">
								About Us
							</a>
						</li>
						<li className="header-navbar__item">
							<a className="header-navbar__link" href="#">
								Try It
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
