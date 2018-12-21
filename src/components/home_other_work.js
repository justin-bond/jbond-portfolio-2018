import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Tween } from 'react-gsap';
import ScrollTrigger from 'react-scroll-trigger';

export default class home_other_work extends Component {
	constructor() {
		super();
		this.renderOtherWork = this.renderOtherWork.bind(this);
		this.onEnterViewport = this.onEnterViewport.bind(this);

		this.state = {
			visible: false
		}
	}
	renderOtherWork(key, index) {
		const work = this.props.projects[key];
		if (work) {
			if (this.state.visible) {
				return (
					// eslint-disable-next-line
					<Tween from={{ opacity: 0, x: '200px', delay: 0.25 * index}} key={key}>
						<li><Link to={`/project/${key}`} className="code-color-blue link__underline">{ work['companyName'] }</Link></li>
					</Tween>
				)
			} else {
				return (
					<li key={key}><Link to={`/project/${key}`} className="code-color-blue link__underline">{ work['companyName'] }</Link></li>
				)
			}
		}
	}
	onEnterViewport() {
		this.setState({
	      visible: true,
	    });
	}
	render() {
		const bullet = '//';
		const {
	      visible,
	    } = this.state;
		return (
			<div className="home-other">
				<div className="home-other__text">
					<span className="code-color-blue">{bullet}</span>Other Work
				</div>
				<div className="home-other__work--list">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-md-push-1">
								<ScrollTrigger onEnter={this.onEnterViewport}>
									<ul className={`${visible ? 'container-animate' : ''}`}>
										{this.props.otherWork.map(this.renderOtherWork)}
									</ul>
								</ScrollTrigger>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
