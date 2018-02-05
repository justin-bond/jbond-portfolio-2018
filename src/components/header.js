import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/jb-logo.svg';

export default class header extends Component {
	render() {
		return (
			<div className="header container">
				<div className="row">
					<Link to="/">
						<img src={logo} className="header__logo" alt="logo" />
					</Link>
				</div>
				<div id="site-menu" class="site-menu">
					<div class="site-menu__wrapper">
						<nav class="site-menu__navigation">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/">Work</Link></li>
								<li><Link to="/">Contact</Link></li>
							</ul>
						</nav>
					</div>
					<div class="site-menu__control">
						<div class="site-menu__menu-button">
							<div class="hamburger"></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
