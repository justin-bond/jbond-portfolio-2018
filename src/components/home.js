import React, { Component } from 'react';
import HomeIntro from './home_intro';

export default class home extends Component {
	render() {
		return (
			<div className="homepage container">
				<div className="row">
					<div className="col-md-9 col-md-push-1">
						<HomeIntro />
					</div>
				</div>
			</div>
		);
	}
}
