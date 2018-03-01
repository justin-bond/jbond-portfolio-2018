import React, { Component } from 'react';
import ProjectDetailed from './project_detailed';
import NoMatch from './no_match';

export default class project extends Component {
	findProject() {
		const projectSlug = this.props.match.params.project;

		if (this.props.state.projects[projectSlug]) {
			return <ProjectDetailed project={this.props.state.projects[projectSlug]}/>;
		} else {
			return <NoMatch />;
		}
	}
	render() {
		return (
			<div>
				{this.findProject()}
			</div>
		);
	}
}
