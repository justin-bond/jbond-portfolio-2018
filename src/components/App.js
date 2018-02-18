import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Home from './home';
import NoMatch from './no_match';

class App extends Component {
	constructor(props) {
		super(props);
		this.listenScrollEvent = this.listenScrollEvent.bind(this);
		this.state = {
			scrollPosition: 0,
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.listenScrollEvent);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.listenScrollEvent);
	}

	listenScrollEvent(event) {
		// let supportPageOffset = window.pageXOffset !== undefined;
		// let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
		// let scroll = {
		// 	x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
		// 	y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
		// };
		let scroll = window.pageYOffset;
		this.setState({
			'scrollPosition': scroll
		});
		// if(scroll.y > 3000){ // 3000px (arbitrary - put whatever point you need there.)
		//     console.log('fire!');
		// }
		
	}
	render() {
		return (
			<Router>
				<div className="portfolio">
					<Header scrollPosition={this.state.scrollPosition} />
					<div className="main-content">
						<Switch>
							<Route 
								path="/" 
								exact 
								render={(props)=><Home {...props} />} />
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
