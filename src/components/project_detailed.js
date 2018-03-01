import React, { Component } from 'react';
import ContactForm from './contact_form';

export default class project_detailed extends Component {
	componentWillMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<div className="project-page container">
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<div className="project__container">
							<div className="project__image">
								<img src={this.props.project.screenshot} alt={this.props.project.slug}/>
							</div>
							<div className="project__name">
								<h1>{this.props.project.companyName}</h1>
							</div>
						</div>
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
