import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './header';
import Footer from './footer';
import Home from './home';
import Project from './project';
import NoMatch from './no_match';

class App extends Component {
	constructor() {
		super();
		this.state = {
			projects: {
				kushion: {
					companyName: 'Kushion',
					slug: 'kushion',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://kushion.com',
					skills: [
						'Wordpress/WooCommerce',
						'Custom Wordpress Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				jason_mark: {
					companyName: 'Jason Markk',
					slug: 'jason_mark',
					logo: 'http://justin-bond.com/projects/logos/jm-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/JM.jpg',
					link: 'https://jasonmarkk.com/',
					skills: [
						'Wordpress/Magento',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				oliver_peoples: {
					companyName: 'Oliver Peoples',
					slug: 'oliver_peoples',
					logo: 'http://justin-bond.com/projects/logos/op-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/OliverPeoples.jpg',
					link: 'https://oliverpeoples.com/',
					skills: [
						'Wordpress/Magento',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				killspencer: {
					companyName: 'Killspencer',
					slug: 'killspencer',
					logo: 'http://justin-bond.com/projects/logos/ks-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Killspencer.jpg',
					link: 'https://killspencer.com/',
					skills: [
						'Shopify',
						'Custom Shopify Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				mastercraft: {
					companyName: 'Mastercraft',
					slug: 'mastercraft',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'http://www.mastercraft.com/',
					skills: [
						'Codeignitor',
						'HTML/CSS/PHP/jQuery',
					],
				},
				the_craft: {
					companyName: 'The Craft',
					slug: 'the_craft',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://craftlife.com/',
					skills: [
						'Wordpress/Magento 2',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				armada: {
					companyName: 'Armada',
					slug: 'armada',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://armadaskis.com/',
					skills: [
						'Wordpress/WooCommerce',
						'Custom Wordpress Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				alain_mikli: {
					companyName: 'Alain Mikli',
					slug: 'alain_mikli',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'http://www.alainmikli.com/',
					skills: [
						'Wordpress/WooCommerce',
						'Custom Wordpress Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				tcs_jerky: {
					companyName: 'TCS Jerky',
					slug: 'tcs_jerky',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://www.tcsjerky.com/',
					skills: [
						'Wordpress/Magento',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				edgeproducts: {
					companyName: 'Edgeproducts',
					slug: 'edgeproducts',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://edgeproducts.com/',
					skills: [
						'Wordpress/Magento',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				superchips: {
					companyName: 'Superchips',
					slug: 'superchips',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://superchips.com/',
					skills: [
						'Wordpress/Magento',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				diablosport: {
					companyName: 'Diablosport',
					slug: 'diablosport',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'http://www.diablosport.com',
					skills: [
						'Wordpress/Magento',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				ami_styling: {
					companyName: 'AMI Styling',
					slug: 'ami_styling',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://amistyling.com/',
					skills: [
						'Wordpress/Magento 2',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				readylift: {
					companyName: 'Readylift',
					slug: 'readylift',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://www.readylift.com/',
					skills: [
						'Wordpress/Magento 2',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				tkfit: {
					companyName: 'TKFit',
					slug: 'tkfit',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://tkfitep.com/',
					skills: [
						'Wordpress'
					],
				},
				condemned_le_mc: {
					companyName: 'Condemned LE MC',
					slug: 'condemned_le_mc',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: '',
					skills: [
						'Wordpress',
						'Custom Wordpress Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				fit_body_boot_camp: {
					companyName: 'Fit Body Boot Camp',
					slug: 'fit_body_boot_camp',
					logo: 'http://justin-bond.com/projects/logos/kushion-logo.svg',
					screenshot: 'http://justin-bond.com/projects/screenshots/Kushion.jpg',
					link: 'https://www.fitbodybootcamp.com/chinohillsfitnessbootcamp/',
					skills: [
						'Wordpress',
						'Custom Wordpress Theme',
						'HTML/CSS/PHP/jQuery',
					],
				}
			},
			recentWork: ['kushion', 'jason_mark', 'oliver_peoples', 'killspencer'],
			otherWork: ['mastercraft', 'the_craft', 'armada', 'alain_mikli', 'tcs_jerky', 'edgeproducts', 'superchips', 'diablosport', 'ami_styling', 'readylift', 'tkfit', 'condemned_le_mc', 'fit_body_boot_camp' ]
		}
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
