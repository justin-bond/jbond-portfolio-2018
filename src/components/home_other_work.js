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
				<li key={key}>{ work['companyName'] }</li>
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
					{this.props.otherWork.map(this.renderOtherWork)}
				</div>
			</div>
		);
	}
}
