import React from "react";
import Avatar from "../components/avatar";
import Layout from "../components/layout";
import "../styles/about.scss";

const About = () => {
	return (
		<Layout>
			<div className="about-page">
				<section className="about">
					<section className="about-intro">
						<h1 className="about-intro__heading">Who We are</h1>
						<p className="about-intro__hook">
							We are building the future of finance.
						</p>
						<p className="about-intro__info">
							Finicast is changing the way that financial analysts work and
							companies succeed.
						</p>
					</section>
					<section className="team">
						<Avatar
							name="Cesar Lee"
							position="Founder, Ceo"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e3465eb59899d1612447c65_5d360d9295a9bf62550f84b5_cesar3.png"
						/>
						<Avatar
							name="Marco Santiago"
							position="Co-founder"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e28f61c0ab615607551790b_5d3609df78c689d5b101abc9_marco.png"
						/>
						<Avatar
							name="Richard Man"
							position="Sr Director of Engineering, FiniDB"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e337e782524a2b5de213eee_0-_1_.jpg"
						/>
						<Avatar
							name="Chase Shen"
							position="Sr Director of Engineering"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/60bef0dad766f78c64bdd473_1623125767220.jpg"
						/>
						<Avatar
							name="Serena Do"
							position="Software Engineer"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5fbc737955a6084a22942bb2_serenaprofile.jpg"
						/>
						<Avatar
							name="Hugh Kim"
							position="Software Engineer"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e337ec9806f6d1d470182e1_0-_2_.jpg"
						/>
						<Avatar
							name="George King"
							position="Software Engineer"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5fbc75ab3ab5129b41bc4872_George%20King.jpg"
						/>
						<Avatar
							name="Jack Lucas"
							position="Software Engineer"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5fb9bdb768f67b3e273513c0_Image%20from%20iOS.jpg"
						/>
						<Avatar
							name="Adnan Yunus"
							position="Software Engineer"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5fbc7518c8cb1f88f61a2ffb_Picture1.jpg"
						/>
					</section>
				</section>
				<section className="investors">
					<h2 className="investors__title">Investors</h2>
					<div className="investors-container">
						<Avatar
							name="Michael Marks"
							position="Investor"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e2b69ad3ae71e9d88000ef5_MichaelMarks.jpg"
						/>
						<Avatar
							name="Pantas Sutardja"
							position="Technical Advisor & Investor"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e29d5e32613e248687d5472_5d360e1f0025212a68d59b3c_pantas-sutardja%402x.png"
						/>
						<Avatar
							name="Riverpark Ventures"
							position="Investor"
							imgSrc="https://global-uploads.webflow.com/5deea2e254c6bb904cf59c96/5e4355c208cbd195e6a9ab6e_0.png"
						/>
					</div>
				</section>
			</div>
		</Layout>
	);
};

export default About;
