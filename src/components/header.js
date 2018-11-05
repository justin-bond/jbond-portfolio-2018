import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/jb-logo.svg';
import { animateScroll as scroll } from 'react-scroll';

export default class header extends Component {
	constructor(props) {
		super();
		this.state = {
			scrollPosition: 0,
			menuActive: false
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', ()=>this.listenScrollEvent());
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', ()=>this.listenScrollEvent());
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
	scrollTo(anchor) {
		if (anchor === 'top') {
			scroll.scrollToTop();
		} else if (document.getElementById(anchor) != null) {
			const anchorPosition = document.getElementById(anchor).getBoundingClientRect();
			scroll.scrollTo(anchorPosition.top + window.scrollY);
		}
	}
	handleClick() {
		this.setState({
			menuActive: !this.state.menuActive ? true : false
		});
	}
	render() {
		const scrolled = this.state.scrollPosition > 50 ? 'scrolled' : '';
		const menuActive = this.state.menuActive ? 'active' : '';
		return (
			<div className="header container">
				<div className="row">
					<Link to="/">
						<img src={logo} className="header__logo" alt="logo" />
					</Link>
				</div>
				<div id="site-menu" className={`site-menu ${scrolled} ${menuActive}`}>
					<div className="site-menu__wrapper">
						<nav className="site-menu__navigation">
							<ul>
								<li><Link to="/" onClick={()=>this.scrollTo('top')} className="link__underline">Home</Link></li>
								<li><Link to="/#work" onClick={()=>this.scrollTo('work')} className="link__underline">Work</Link></li>
								<li><Link to="#contact" onClick={()=>this.scrollTo('contact')} className="link__underline">Contact</Link></li>
							</ul>
						</nav>
					</div>
					<div className="site-menu__control" onClick={()=>this.handleClick()}>
						<div className="site-menu__menu-button">
							<div className="nav-top">
								<div className="nav-top__left"></div>
								<div className="nav-top__middle"></div>
								<div className="nav-top__right"></div>
							</div>
							<div className="nav-middle">
								<div className="nav-middle__left"></div>
								<div className="nav-middle__right"></div>
							</div>
							<div className="nav-bottom">
								<div className="nav-bottom__left"></div>
								<div className="nav-bottom__right"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
