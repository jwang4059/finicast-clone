import React from "react";
import "../styles/button.scss";

const Button = ({ children }) => {
	return <button className="cta">{children}</button>;
};

export default Button;
