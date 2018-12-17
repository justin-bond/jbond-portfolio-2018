import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../images/jb-logo.svg';
import { animateScroll as scroll } from 'react-scroll';
import { Tween } from 'react-gsap';

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
		let scroll = window.pageYOffset;
		this.setState({
			'scrollPosition': scroll
		});
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
						<Tween from={{ opacity: 0,delay: 0.2}}>
							<img src={logo} className="header__logo" alt="logo" />
						</Tween>
					</Link>
				</div>
				<Tween from={{ opacity: 0,delay: 0.2}}>
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
				</Tween>
			</div>
		);
	}
}
