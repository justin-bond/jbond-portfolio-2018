import React, { Component } from 'react';
import ContactForm from './contact_form';
import { Link } from "react-router-dom";

export default class project_detailed extends Component {
	constructor() {
		super();
		this.renderSkills = this.renderSkills.bind(this);
	}
	componentWillMount() {
		window.scrollTo(0, 0);
	}
	renderSkills(key) {
		if (key) {
			return (
				<li className="" key={key}>{key}</li>
			); 
		} else {
			return;
		}
	}
	renderProjectLink() {
		if (this.props.project.link) {
			return (
				<a href={this.props.project.link} target="_blank">Website Link</a>
			);
		} else {
			return;
		}
	}
	render() {
		const { project } = this.props;
		console.log(project);
		return (
			<div className="project-page container">
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<div className="project__container">
							<div className="project__image">
								<img src={project.screenshot} alt={project.slug}/>
							</div>
							<div className="project__name">
								<h1>{project.companyName}</h1>
							</div>
							<div className="project__link">
								{this.renderProjectLink()}
							</div>
							<div className="project__skills">
								{project.skills.map(this.renderSkills)}
							</div>
							<div className="project__home">
								<Link to="/" className="btn--primary">Back to Home</Link>
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
