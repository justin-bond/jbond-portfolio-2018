import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

export default class home_recent_work extends Component {
	constructor() {
		super();
		this.renderRecentWork = this.renderRecentWork.bind(this);
	}
	componentDidMount() {
		const hash = this.props.props.location.hash.replace('#', '');
		if (hash === 'work') {
			const anchorPosition = document.getElementById(hash).getBoundingClientRect();
			scroll.scrollTo(anchorPosition.top + window.scrollY);
		}
	}
	renderRecentWork(key) {
		const work = this.props.projects[key];
		var sectionStyle = {
			backgroundImage: `url(${work['screenshot']}`
		}
		return (
			<div className="home-recent__work" key={key}>
				<Link to="/">
					<div className="recent__work--loaded">
						<img src={ work['logo'] } alt="company_logo" />
					</div>
					<div className="recent__work--hover" style={ sectionStyle }>
						{ work['companyName'] }
					</div>
				</Link>
			</div>
		)
	}
	render() {
		return (
			<div className="home-recent" id="work">
				<h1 className="home-recent__text">
					Recent Work
				</h1>
				<div className="home-recent__top">
					{this.props.recentWork.map(this.renderRecentWork)}
				</div>
			</div>
		);
	}
}
