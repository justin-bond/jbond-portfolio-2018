import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/jb-logo.svg';

export default class header extends Component {
	constructor(props) {
		super();

	}
	render() {
		const scrolled = this.props.scrollPosition > 200 ? 'scrolled' : '';
		console.log(this.props.scrollPosition);
		console.log(scrolled);
		return (
			<div className="header container">
				<div className="row">
					<Link to="/">
						<img src={logo} className="header__logo col-xs-1" alt="logo" />
					</Link>
				</div>
				<div id="site-menu" className={`site-menu ${scrolled}`}>
					<div className="site-menu__wrapper">
						<nav className="site-menu__navigation">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/">Work</Link></li>
								<li><Link to="/">Contact</Link></li>
							</ul>
						</nav>
					</div>
					<div className="site-menu__control">
						<div className="site-menu__menu-button">
							<div className="hamburger"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
