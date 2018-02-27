import React, { Component } from 'react';
import HomeIntro from './home_intro';
import HomeRecentWork from './home_recent_work';
import HomeOtherWork from './home_other_work';
import ContactForm from './contact_form';

export default class home extends Component {
	render() {
		return (
			<div className="homepage container">
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<HomeIntro />
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<HomeRecentWork
							projects={this.props.state.projects}
							recentWork={this.props.state.recentWork}
							props={this.props}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<HomeOtherWork
							projects={this.props.state.projects}
							otherWork={this.props.state.otherWork}
						/>
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
