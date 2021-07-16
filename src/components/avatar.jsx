import React from "react";
import "../styles/avatar.scss";

const Avatar = ({ name, position, imgSrc, imgAlt }) => {
	return (
		<div className="avatar">
			<div className="profile-pic-container">
				<img className="profile-pic" src={imgSrc} alt={imgAlt} />
			</div>
			<span className="name">{name}</span>
			<span className="position">{position}</span>
		</div>
	);
};

export default Avatar;
