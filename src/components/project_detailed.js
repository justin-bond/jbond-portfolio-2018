import React, { Component } from 'react';
import ContactForm from './contact_form';

export default class project_detailed extends Component {
	render() {
		return (
			<div className="homepage container">
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						Project Details Go Here!
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<ContactForm />
					</div>
				</div>
			</div>
		);
	}
}
