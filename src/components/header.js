import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/jb-logo.svg';

export default class header extends Component {
	constructor(props) {
		super();
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			menuActive: false
		}
	}
	handleClick() {
		if (!this.state.menuActive) {
			this.setState({
				menuActive: true
			});
		} else {
			this.setState({
				menuActive: false
			});
		}
	}
	render() {
		const scrolled = this.props.scrollPosition > 200 ? 'scrolled' : '';
		const menuActive = this.state.menuActive ? 'active' : '';
		console.log(this.props.scrollPosition);
		console.log(scrolled);
		return (
			<div className="header container">
				<div className="row">
					<Link to="/">
						<img src={logo} className="header__logo col-xs-1" alt="logo" />
					</Link>
				</div>
				<div id="site-menu" className={`site-menu ${scrolled} ${menuActive}`}>
					<div className="site-menu__wrapper">
						<nav className="site-menu__navigation">
							<ul>
								<li><Link to="/">Home</Link></li>
								<li><Link to="/">Work</Link></li>
								<li><Link to="/">Contact</Link></li>
							</ul>
						</nav>
					</div>
					<div className="site-menu__control" onClick={this.handleClick}>
						<div className="site-menu__menu-button">
							<img src="http://dummyimage.com/65x25/4d494d/686a82.gif&text=placeholder+image" alt="site-menu" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
