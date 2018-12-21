import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';
import { Tween } from 'react-gsap';
import ScrollTrigger from 'react-scroll-trigger';

export default class home_recent_work extends Component {
	constructor() {
		super();
		this.renderRecentWork = this.renderRecentWork.bind(this);
		this.onEnterViewport = this.onEnterViewport.bind(this);

		this.state = {
			visible: false
		}
	}
	componentDidMount() {
		const hash = this.props.props.location.hash.replace('#', '');
		if (hash === 'work') {
			const anchorPosition = document.getElementById(hash).getBoundingClientRect();
			scroll.scrollTo(anchorPosition.top + window.scrollY);
		}
	}
	renderRecentWork(key, index) {
		const work = this.props.projects[key];
		const sectionStyle = {
			backgroundImage: `url(${work['screenshot']}`
		}
		if (this.state.visible) {
			return (
				<Tween from={{ opacity: 0, delay: 0.5 * index}} key={key}>
					<div className="home-recent__work">
						<Link to={`/project/${key}`}>
							<div className="recent__work--loaded">
								<img src={ work['logo'] } alt="company_logo" />
							</div>
							<div className="recent__work--hover" style={ sectionStyle }>
								{ work['companyName'] }
							</div>
						</Link>
					</div>
				</Tween>
			)
		} else {
			return (
				<div className="home-recent__work" key={key}>
					<Link to={`/project/${key}`}>
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
	}
	onEnterViewport() {
		this.setState({
	      visible: true,
	    });
	}
	render() {
		const {
	      visible,
	    } = this.state;
		return (
			<div className="home-recent" id="work">
				<h1 className="home-recent__text">
					Recent Work
				</h1>
				<ScrollTrigger onEnter={this.onEnterViewport}>
					<div className={`home-recent__top ${visible ? 'container-animate' : ''}`}>
						{this.props.recentWork.map(this.renderRecentWork)}
					</div>
				</ScrollTrigger>
			</div>
		);
	}
}
