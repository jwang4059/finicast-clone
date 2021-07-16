import React from "react";
import Layout from "../components/layout";
import Input from "../components/input";
import Button from "../components/button";
import "../styles/contact.scss";

const Contact = () => {
	const onSubmit = (event) => {
		event.preventDefault();
		window.location.reload();
	};

	return (
		<Layout>
			<div className="contact-banner">
				<h1 className="banner-text">Contact Us</h1>
			</div>
			<div className="form">
				<h2 className="form-heading">Get in touch</h2>
				<p className="form-description">
					Email us at contact@finicast.com or reach us by filling out the form
					below!
				</p>
				<form>
					<Input
						label="First Name"
						name="firstName"
						type="text"
						placeholder="First Name *"
						required
					/>
					<Input
						label="Last Name"
						name="lastName"
						type="text"
						placeholder="Last Name *"
						required
					/>
					<Input
						label="Email"
						name="email"
						type="email"
						placeholder="Email *"
						required
					/>
					<Input
						label="Company"
						name="company"
						type="text"
						placeholder="Company *"
						required
					/>
					<Input
						label="Country"
						name="country"
						type="text"
						placeholder="Country *"
						requied
					/>
					<Input
						label="Phone Number"
						name="phoneNumber"
						type="text"
						placeholder="Phone Number"
					/>
					<Input
						label="Your Message"
						name="message"
						type="textarea"
						placeholder="Your Message"
					/>
					<div className="submit-wrapper">
						<Button className="submit" onClick={onSubmit}>
							Submit
						</Button>
					</div>
				</form>
			</div>
		</Layout>
	);
};

export default Contact;
