import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import HomeIntro from './home_intro';
import HomeRecentWork from './home_recent_work';
import HomeOtherWork from './home_other_work';
import ContactForm from './contact_form';

export default class home extends Component {
	componentWillMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div className="homepage container">
				<Helmet>
					<title>{`Justin Bond`} </title>
				</Helmet>
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
