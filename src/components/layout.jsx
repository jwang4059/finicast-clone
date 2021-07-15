import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.scss";

const Layout = ({ children }) => {
	return (
		<>
			<div className="layout">
				<div className="layout__content">
					<Header />
					<main>{children}</main>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
