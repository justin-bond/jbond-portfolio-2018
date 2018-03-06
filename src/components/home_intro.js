import React, { Component } from 'react';

export default class home_intro extends Component {
	render() {
		return (
			<div className="home-intro__container">
				<h1 className="home-intro__text">
					Hello, I'm Justin Bond and I am a full-stack web developer from Costa Mesa, California.
				</h1>
				<div className="home-intro__bullets">
					<ul>
						<li>Skilled in Wordpress, Magento, PHP, and Javascript.</li>
						<li>When I am not coding I enjoy listening to music, watching football, golfing, riding motorcycles, and going on hikes with my pup.</li>
					</ul>
				</div>
			</div>
		);
	}
}
