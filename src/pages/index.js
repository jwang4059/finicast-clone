import * as React from "react";
import Button from "../components/button";
import Card from "../components/card";
import Layout from "../components/layout";
import "../styles/index.scss";

const IndexPage = () => {
	return (
		<Layout>
			<section></section>
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
			<section></section>
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
				<Button>Get in Touch to Learn More</Button>
			</section>
		</Layout>
	);
};

export default IndexPage;
