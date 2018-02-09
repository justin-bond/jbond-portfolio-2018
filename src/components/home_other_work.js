import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class home_other_work extends Component {
	constructor() {
		super();
		this.renderOtherWork = this.renderOtherWork.bind(this);
	}
	renderOtherWork(key) {
		const work = this.props.projects[key];
		if (work) {
			return (
				<li key={key}><Link to="" className="code-color-blue">{ work['companyName'] } <span>,</span></Link></li>
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
