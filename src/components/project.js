import React, { Component } from 'react';

export default class project extends Component {
	render() {
		console.log(this.props.match.params.project);
		return (
			<div></div>
		);
	}
}
