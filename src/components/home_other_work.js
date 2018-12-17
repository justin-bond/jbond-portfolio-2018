import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Tween } from 'react-gsap';

export default class home_other_work extends Component {
	constructor() {
		super();
		this.renderOtherWork = this.renderOtherWork.bind(this);
	}
	renderOtherWork(key, index) {
		const work = this.props.projects[key];
		if (work) {
			return (
				// eslint-disable-next-line
				<Tween staggerFrom={{ opacity: 0, x: '200px', delay: 0.25 * index}} key={key}>
				<li ><Link to={`/project/${key}`} className="code-color-blue link__underline">{ work['companyName'] }</Link></li>
				</Tween>
			)
		}
	}
	render() {
		const bullet = '//';
		return (
			<div className="home-other">
				<div className="home-other__text">
					<span className="code-color-blue">{bullet}</span>Other Work
				</div>
				<div className="home-other__work--list">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-md-push-1">
								<ul>
									{this.props.otherWork.map(this.renderOtherWork)}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
