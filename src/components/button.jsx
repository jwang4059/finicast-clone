import React from "react";
import "../styles/button.scss";

const Button = ({ className, children }) => {
	return <button className={className}>{children}</button>;
};

export default Button;
