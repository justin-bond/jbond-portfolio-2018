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
					agency: '530medialab',
					logo: '/projects/logos/kushion-logo.svg',
					screenshot: '/projects/screenshots/Kushion.jpg',
					link: 'https://kushion.com',
					skills: [
						'Wordpress/WooCommerce',
						'Custom Wordpress Theme',
						'HTML/CSS/PHP/jQuery',
						'Custom Instagram API Feed',
					],
				},
				jason_mark: {
					companyName: 'Jason Markk',
					slug: 'jason_mark',
					agency: '530medialab',
					logo: '/projects/logos/jm-logo.svg',
					screenshot: '/projects/screenshots/JM.jpg',
					// video: '/projects/videos/jason-mark.mp4',
					video: '281115650',
					link: 'https://jasonmarkk.com/',
					skills: [
						'Wordpress/Magento',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
						'Custom Instagram API Feed',
					],
				},
				oliver_peoples: {
					companyName: 'Oliver Peoples',
					slug: 'oliver_peoples',
					agency: '530medialab',
					logo: '/projects/logos/op-logo.svg',
					screenshot: '/projects/screenshots/OliverPeoples.jpg',
					video: '281115671',
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
					agency: '530medialab',
					logo: '/projects/logos/ks-logo.svg',
					screenshot: '/projects/screenshots/Killspencer.jpg',
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
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/Mastercraft.jpg',
					link: 'http://www.mastercraft.com/',
					skills: [
						'Codeignitor',
						'HTML/CSS/PHP/jQuery',
					],
				},
				the_craft: {
					companyName: 'The Craft',
					slug: 'the_craft',
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/TheCraft.jpg',
					video: '281115682',
					link: 'https://craftlife.com/',
					skills: [
						'Wordpress/Magento 2',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
					],
				},
				armada: {
					companyName: 'Armada Skis',
					slug: 'armada',
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/ArmadaSkis.jpg',
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
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/Alainmikli.jpg',
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
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/TcsJerky.jpg',
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
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/Edge.jpg',
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
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/Superchips.jpg',
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
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/Diablosport.jpg',
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
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/AMI.jpg',
					link: 'https://amistyling.com/',
					skills: [
						'Wordpress/Magento 2',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
						'Custom Instagram API Feed',
					],
				},
				readylift: {
					companyName: 'Readylift',
					slug: 'readylift',
					agency: '530medialab',
					logo: '',
					screenshot: '/projects/screenshots/Readylift.jpg',
					link: 'https://www.readylift.com/',
					skills: [
						'Wordpress/Magento 2',
						'Custom Wordpress/Magento Theme',
						'HTML/CSS/PHP/jQuery',
						'Custom Instagram API Feed',
					],
				},
				tkfit: {
					companyName: 'TKFit',
					slug: 'tkfit',
					agency: '',
					logo: '',
					screenshot: '/projects/screenshots/TKFit1.jpg',
					link: 'https://tkfitep.com/',
					skills: [
						'Wordpress'
					],
				},
				condemned_le_mc: {
					companyName: 'Condemned LE MC',
					slug: 'condemned_le_mc',
					agency: '',
					logo: '',
					screenshot: '',
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
					agency: '',
					logo: '',
					screenshot: '',
					link: 'https://www.fitbodybootcamp.com/chinohillsfitnessbootcamp/',
					skills: [
						'Wordpress',
						'Custom Wordpress Theme',
						'HTML/CSS/PHP/jQuery',
					],
				}
			},
			recentWork: ['kushion', 'jason_mark', 'oliver_peoples', 'killspencer'],
			otherWork: ['mastercraft', 'the_craft', 'armada', 'alain_mikli', 'tcs_jerky', 'edgeproducts', 'superchips', 'diablosport', 'ami_styling', 'readylift', 'tkfit' ]
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
