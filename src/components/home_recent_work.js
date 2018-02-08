import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class home_recent_work extends Component {
	constructor() {
		super();
		this.renderRecentWork = this.renderRecentWork.bind(this);
		this.state = {
			recentWork: {
				kushion: {
					companyName: 'Kushion',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Kushion',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Kushion'
				},
				jason_mark: {
					companyName: 'Jason Markk',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Jason%20Markk',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Jason%20Markk'
				},
				oliver_peoples: {
					companyName: 'Oliver Peoples',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Oliver%20Peoples',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Oliver%20Peoples'
				},
				killspencer: {
					companyName: 'Killspencer',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Killspencer',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Killspencer'
				}
			}
		}
	}
	renderRecentWork(key) {
		const work = this.state.recentWork[key];
		var sectionStyle = {
			backgroundImage: `url(${work['screenshot']}`
		}
		return (
			<div className="home-recent__work">
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
			<div className="home-recent">
				<h1 className="home-recent__text">
					Recent Work
				</h1>
				<div className="home-recent__top">
					{Object.keys(this.state.recentWork).map(this.renderRecentWork)}
				</div>
			</div>
		);
	}
}
