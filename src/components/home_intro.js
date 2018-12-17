import React, { Component } from 'react';
import { Tween } from 'react-gsap';

export default class home_intro extends Component {
	render() {
		return (
			<div className="home-intro__container">
				<Tween from={{ opacity: 0, x: '100px', delay: 0.5}}>
					<h1 className="home-intro__text">
						Hello, I'm Justin Bond and I am a full-stack web developer in Orange County, California.
					</h1>
				</Tween>
				<div className="home-intro__bullets">
					<ul>
						<Tween from={{ opacity: 0, y: '70', delay: 1}}>
							<li>Skilled in Wordpress, Magento, Shopify, PHP, and Javascript.</li>
						</Tween>
						<Tween from={{ opacity: 0, y: '70', delay: 1.5}}>
							<li>When I am not coding I enjoy listening to music, watching football, golfing, riding motorcycles, and going on hikes with my pup.</li>
						</Tween>
					</ul>
				</div>
			</div>
		);
	}
}
