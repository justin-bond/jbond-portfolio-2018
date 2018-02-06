import React, { Component } from 'react';

export default class home_intro extends Component {
	render() {
		const bullet = '//';
		return (
			<div className="home-intro__container">
				<h1 className="home-intro__text">
					Hello, I'm Justin Bond and I am a full-stack web developer from Costa Mesa, California.
				</h1>
				<div className="home-intro__bullets">
					<ul>
						<li><span className="code-color-blue">{bullet}</span>Skilled in Wordpress, Magento, PHP, and Javascript.</li>
						<li><span className="code-color-blue">{bullet}</span>Enjoys...</li>
					</ul>
				</div>
			</div>
		);
	}
}
