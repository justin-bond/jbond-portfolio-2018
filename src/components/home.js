import React, { Component } from 'react';
import HomeIntro from './home_intro';
import HomeRecentWork from './home_recent_work';

export default class home extends Component {
	render() {
		return (
			<div className="homepage container">
				<div className="row">
					<div className="col-md-9 col-md-push-1">
						<HomeIntro />
					</div>
				</div>
				<div className="row">
					<div className="col-md-9 col-md-push-1">
						<HomeRecentWork />
					</div>
				</div>
			</div>
		);
	}
}
