import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Home from './home';
import NoMatch from './no_match';

class App extends Component {
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
								render={()=><Home />} />
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
