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
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Kushion',
					link: 'https://kushion.com',
					skills: ['',''],
				},
				jason_mark: {
					companyName: 'Jason Markk',
					slug: 'jason_mark',
					logo: 'http://justin-bond.com/projects/jm-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Jason%20Markk',
					link: 'https://jasonmarkk.com/',
					skills: ['',''],
				},
				oliver_peoples: {
					companyName: 'Oliver Peoples',
					slug: 'oliver_peoples',
					logo: 'http://justin-bond.com/projects/op-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Oliver%20Peoples',
					link: 'https://oliverpeoples.com/',
					skills: ['',''],
				},
				killspencer: {
					companyName: 'Killspencer',
					slug: 'killspencer',
					logo: 'http://justin-bond.com/projects/ks-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Killspencer',
					link: 'https://killspencer.com/',
					skills: ['',''],
				},
				mastercraft: {
					companyName: 'Mastercraft',
					slug: 'mastercraft',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=mastercraft',
					link: 'http://www.mastercraft.com/',
					skills: ['',''],
				},
				the_craft: {
					companyName: 'The Craft',
					slug: 'the_craft',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=the_craft',
					link: 'https://craftlife.com/',
					skills: ['',''],
				},
				armada: {
					companyName: 'Armada',
					slug: 'armada',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=armada',
					link: 'https://armadaskis.com/',
					skills: ['',''],
				},
				alain_mikli: {
					companyName: 'Alain Mikli',
					slug: 'alain_mikli',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=alain_mikli',
					link: 'http://www.alainmikli.com/',
					skills: ['',''],
				},
				tcs_jerky: {
					companyName: 'TCS Jerky',
					slug: 'tcs_jerky',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=tcs_jerky',
					link: 'https://www.tcsjerky.com/',
					skills: ['',''],
				},
				edgeproducts: {
					companyName: 'Edgeproducts',
					slug: 'edgeproducts',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=edgeproducts',
					link: 'https://edgeproducts.com/',
					skills: ['',''],
				},
				superchips: {
					companyName: 'Superchips',
					slug: 'superchips',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=superchips',
					link: 'https://superchips.com/',
					skills: ['',''],
				},
				diablosport: {
					companyName: 'Diablosport',
					slug: 'diablosport',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=diablosport',
					link: 'http://www.diablosport.com',
					skills: ['',''],
				},
				ami_styling: {
					companyName: 'AMI Styling',
					slug: 'ami_styling',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=ami_styling',
					link: 'https://amistyling.com/',
					skills: ['',''],
				},
				readylift: {
					companyName: 'Readylift',
					slug: 'readylift',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=readylift',
					link: 'https://www.readylift.com/',
					skills: ['',''],
				},
				tkfit: {
					companyName: 'TKFit',
					slug: 'tkfit',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=tkfit',
					link: 'https://tkfitep.com/',
					skills: ['',''],
				},
				condemned_le_mc: {
					companyName: 'Condemned LE MC',
					slug: 'condemned_le_mc',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=condemned_le_mc',
					link: '',
					skills: ['',''],
				},
				fit_body_boot_camp: {
					companyName: 'Fit Body Boot Camp',
					slug: 'fit_body_boot_camp',
					logo: 'http://justin-bond.com/projects/kushion-logo.svg',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Fit%20Body%20Boot%20Camp',
					link: 'https://www.fitbodybootcamp.com/chinohillsfitnessbootcamp/',
					skills: ['',''],
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
