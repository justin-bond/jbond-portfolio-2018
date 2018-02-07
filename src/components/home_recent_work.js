import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class home_recent_work extends Component {
	render() {
		var sectionStyle = {
			backgroundImage: `url(http://dummyimage.com/498x300/4d494d/686a82.gif&text=498x300)`
		}
		return (
			<div className="home-recent">
				<h1 className="home-recent__text">
					Recent Work
				</h1>
				<div className="home-recent__top">
					<div className="home-recent__work">
						<Link to="/">
							<div className="recent__work--loaded">
								<img src="http://dummyimage.com/135x135/4d494d/686a82.gif&text=135x135" alt="135x135" />
							</div>
							<div className="recent__work--hover" style={ sectionStyle }>
								Kushion
							</div>
						</Link>
					</div>
					<div className="home-recent__work">
						<Link to="/">
							<div className="recent__work--loaded">
								<img src="http://dummyimage.com/135x135/4d494d/686a82.gif&text=135x135" alt="135x135" />
							</div>
							<div className="recent__work--hover" style={ sectionStyle }>
								Jason Markk
							</div>
						</Link>
					</div>
					<div className="home-recent__work">
						<Link to="/">
							<div className="recent__work--loaded">
								<img src="http://dummyimage.com/135x135/4d494d/686a82.gif&text=135x135" alt="135x135" />
							</div>
							<div className="recent__work--hover" style={ sectionStyle }>
								Oliver Peoples
							</div>
						</Link>
					</div>
					<div className="home-recent__work">
						<Link to="/">
							<div className="recent__work--loaded">
								<img src="http://dummyimage.com/135x135/4d494d/686a82.gif&text=135x135" alt="135x135" />
							</div>
							<div className="recent__work--hover" style={ sectionStyle }>
								Killspencer
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
