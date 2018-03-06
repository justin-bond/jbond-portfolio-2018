import React, { Component } from 'react';

export default class footer extends Component {
	render() {
		const date = (new Date()).getFullYear();
		return (
			<div className="footer container">
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						Justin Bond© {date}
					</div>
				</div>
			</div>
		);
	}
}
