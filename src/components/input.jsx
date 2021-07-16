import React, { useState } from "react";
import "../styles/input.scss";

const Input = ({ label, type, ...props }) => {
	const [state, setState] = useState("");

	const onChange = (event) => {
		setState(event.value);
	};

	return (
		<>
			<label className="sr-only" htmlFor={props.id || props.name}>
				{label}
			</label>
			{type && type === "textarea" ? (
				<textarea rows="4" cols="50" {...props} />
			) : (
				<input type={type} onChange={onChange} value={state} {...props} />
			)}
		</>
	);
};

export default Input;
