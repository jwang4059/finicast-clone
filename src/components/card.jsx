import React from "react";
import "../styles/card.scss";

const Card = ({ heading, info, imgSrc, imgAlt }) => {
	return (
		<div className="card">
			<div className="card-image-container">
				<img className="card-image" src={imgSrc} alt={imgAlt || ""} />
			</div>
			<h2 className="card-heading">{heading}</h2>
			<p className="card-info">{info}</p>
		</div>
	);
};

export default Card;
