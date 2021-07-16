import React from "react";
import "../styles/card.scss";

const Card = ({ heading, info, imgSrc, imgAlt, background }) => {
	return (
		<div className="card">
			<div className={background ? "card-image-container" : ""}>
				<img className="card-image" src={imgSrc} alt={imgAlt || ""} />
			</div>
			<div className="card-heading-wrapper">
				<h2 className="card-heading">{heading}</h2>
			</div>
			<p className="card-info">{info}</p>
		</div>
	);
};

export default Card;
