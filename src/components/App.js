import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Home from './home';
import Project from './project';
import NoMatch from './no_match';

import { data } from '../data.js';

class App extends Component {
	constructor() {
		super();
		this.state = data;
	}
	render() {
		return (
			<Router>
				<div className="portfolio">
					<Header />
					<div className="main-content">
						<Switch>
							<Route 
								path="/" 
								exact 
								render={(props)=><Home {...props} state={this.state}/>} />
							<Route 
								path="/project/:project" 
								exact 
								render={(props)=><Project {...props} state={this.state}/>} />
							<Route component={NoMatch}/>
						</Switch>
						<Footer />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
