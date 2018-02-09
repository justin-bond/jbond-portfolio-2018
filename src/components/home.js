import React, { Component } from 'react';
import HomeIntro from './home_intro';
import HomeRecentWork from './home_recent_work';
import HomeOtherWork from './home_other_work';
import ContactForm from './contact_form';

export default class home extends Component {
	constructor() {
		super();
		this.state = {
			projects: {
				kushion: {
					companyName: 'Kushion',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Kushion',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Kushion'
				},
				jason_mark: {
					companyName: 'Jason Markk',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Jason%20Markk',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Jason%20Markk'
				},
				oliver_peoples: {
					companyName: 'Oliver Peoples',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Oliver%20Peoples',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Oliver%20Peoples'
				},
				killspencer: {
					companyName: 'Killspencer',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Killspencer',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Killspencer'
				},
				mastercraft: {
					companyName: 'Mastercraft',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=mastercraft',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=mastercraft'
				},
				the_craft: {
					companyName: 'The Craft',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=the_craft',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=the_craft'
				},
				armada: {
					companyName: 'Armada',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=armada',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=armada'
				},
				alain_mikli: {
					companyName: 'Alain Mikli',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=alain_mikli',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=alain_mikli'
				},
				tcs_jerky: {
					companyName: 'TCS Jerky',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=tcs_jerky',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=tcs_jerky'
				},
				edgeproducts: {
					companyName: 'Edgeproducts',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=edgeproducts',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=edgeproducts'
				},
				superchips: {
					companyName: 'Superchips',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=superchips',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=superchips'
				},
				diablosport: {
					companyName: 'Diablosport',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=diablosport',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=diablosport'
				},
				ami_styling: {
					companyName: 'AMI Styling',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=ami_styling',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=ami_styling'
				},
				readylift: {
					companyName: 'Readylift',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=readylift',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=readylift'
				},
				tkfit: {
					companyName: 'TKFit',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=tkfit',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=tkfit'
				},
				condemned_le_mc: {
					companyName: 'Condemned LE MC',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=condemned_le_mc',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=condemned_le_mc'
				},
				fit_body_boot_camp: {
					companyName: 'Fit Body Boot Camp',
					logo: 'http://dummyimage.com/135x135/4d494d/686a82.gif&text=Fit%20Body%20Boot%20Camp',
					screenshot: 'http://dummyimage.com/498x300/4d494d/686a82.gif&text=Fit%20Body%20Boot%20Camp'
				}
			},
			recentWork: ['kushion', 'jason_mark', 'oliver_peoples', 'killspencer'],
			otherWork: ['mastercraft', 'the_craft', 'armada', 'alain_mikli', 'tcs_jerky', 'edgeproducts', 'superchips', 'diablosport', 'ami_styling', 'readylift', 'tkfit', 'condemned_le_mc', 'fit_body_boot_camp' ]
		}
	}
	render() {
		return (
			<div className="homepage container">
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<HomeIntro />
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<HomeRecentWork
							projects={this.state.projects}
							recentWork={this.state.recentWork}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<HomeOtherWork
							projects={this.state.projects}
							otherWork={this.state.otherWork}
						/>
					</div>
				</div>
				<div className="row">
					<div className="col-md-10 col-md-push-1">
						<ContactForm />
					</div>
				</div>
			</div>
		);
	}
}
