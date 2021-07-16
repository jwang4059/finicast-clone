import * as React from "react";
import { Link } from "gatsby";
import Button from "../components/button";
import Card from "../components/card";
import Layout from "../components/layout";
import "../styles/index.scss";

const Role = ({ heading, imgSrc, imgAlt }) => {
	return (
		<div className="role">
			<span className="role-heading">{heading}</span>
			<img className="role-image" src={imgSrc} alt={imgAlt || ""} />
		</div>
	);
};

const IndexPage = () => {
	return (
		<Layout>
			<section className="banner">
				<div className="overlay">
					<span className="overlay__caption">Forecast infinitely</span>
					<div className="overlay__content">
						<h1 className="home-banner-text">
							Business Intelligence, FP&A and Collaboration in One Platform
						</h1>
						<Link to="/contact">
							<Button className="start">Get Started</Button>
						</Link>
					</div>
				</div>
				<video autoPlay muted loop>
					<source
						src="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb108af59dce_business-worker-at-work-5FENLW2-transcode.mp4"
						type="video/mp4"
					/>
					<source
						src="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb108af59dce_business-worker-at-work-5FENLW2-transcode.webm"
						type="video/mp4"
					/>
				</video>
			</section>
			<section className="container">
				<div className="card-container">
					<Card
						heading="Business Intelligence"
						info="Centrally manage historical data, forecasts and business logic."
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb3f63f59d0a_icons8-analyze.svg"
						background
					/>
					<Card
						heading="Financial Planning & Analysis"
						info="Build models that scale and automate FP&A workflows."
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb402af59d76_icons8-ratings.svg"
						background
					/>
					<Card
						heading="Visual Collaboration"
						info="Create and share beautiful dashboards and collaborate in real-time."
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb7b74f59d01_icons8-bank-cards%20(1).svg"
						background
					/>
				</div>
			</section>
			<section className="container role-background">
				<h2 className="role-description">
					UNIFY AND ANALYZE data from every part of your company
				</h2>
				<div className="role-container">
					<Role
						heading="Finance"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb61bef59d93_icons8-profit.svg"
					/>
					<Role
						heading="Accounting"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb71bcf59cff_icons8-online-money-transfer%20(2).svg"
					/>
					<Role
						heading="Workforce"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb7437f59d7a_icons8-team%20(1).svg"
					/>
					<Role
						heading="Sales"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb85f3f59cfd_icons8-coin-in-hand%20(1).svg"
					/>
					<Role
						heading="Marketing"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bbca8df59d2c_icons8-callback.svg"
					/>
					<Role
						heading="IT"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb6c30f59d7b_icons8-folder.svg"
					/>
				</div>
			</section>
			<section className="container">
				<div className="card-container">
					<Card
						heading="Pivot-based Modelling"
						info="Define a model once and repeat it across thousands of permutations"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bbaef6f59dc1_icons8-broken-link.svg"
					/>
					<Card
						heading="Fast and Scalable"
						info="Create detailed models that trace back to original data sources"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb6072f59d92_icons8-profit%20(1).svg"
					/>
					<Card
						heading="Familiar Formula Syntax"
						info="Build and audit models with a familiar formula syntax"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb6a6cf59ce0_icons8-treatment.svg"
					/>
					<Card
						heading="Version Control"
						info="Collaborate in real-time with a sophisticated version control system"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bbea1df59ce9_icons8-neutral-trading-64.png"
					/>
					<Card
						heading="Beautiful Interface"
						info="Model with ease using an interface designed by analysts"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb6f45f59ce2_icons8-bank-cards.svg"
					/>
					<Card
						heading="Built for Integrations"
						info="Our API-first engineering approach connects data seamlessly"
						imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5deea2e254c6bb498bf59ce8_icons8-online-money-transfer%20(1).svg"
					/>
				</div>
			</section>
			<section className="container">
				<Link to="/contact">
					<Button className="cta">Get in Touch to Learn More</Button>
				</Link>
			</section>
		</Layout>
	);
};

export default IndexPage;
