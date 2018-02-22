import React, { Component } from 'react';

export default class contact_form extends Component {
	constructor(props) {
	    super(props);
		this.state = {
			form: '',
			formName: '',
			formEmail: '',
			formPhone: '',
			formCompany: '',
			formMessage: '',
		};
  	}
	submitForm(event) {
		event.preventDefault();
		// console.log(event);

		const data = {
			name: this.state.formName,
			email: this.state.formEmail,
			phone: this.state.formPhone,
			company: this.state.formCompany,
			message: this.state.formMessage,
		};
		// console.log(data);

		fetch("http://justin-bond.com/sendmail/test.php", {
			method: "POST",
			body: JSON.stringify(data),
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
		}).then(
			res => res.json()
		)
		.catch(
			error => console.error('Error:', error)
		)
		.then(
			response => {
				console.log('Success:', response);
				if (response['status'] === 1){
					this.setState({form: 'completed'});
				} else {
					this.setState({form: response['error']});
				}
			}
		);
	}
	handleChange(e) {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
		
		if (e.target.value) {
			e.target.classList.add("has-text");
		} else {
			e.target.classList.remove("has-text");
		}
	}
	render() {
		return (
			<div className="contact--container" id="contact">
				<div className="contact--form__container">
					<div className="contact--form__title">
						Lets Talk
					</div>
					<form className="contact--form" onSubmit={(e) => this.submitForm(e)}>
						<div className="contact--form__name">
							<label htmlFor="name">Your Name*</label>
							<input onChange={(e) => this.handleChange(e)} type="text" name="formName" id="name" required/>
						</div>
						<div className="contact--form__email">
							<label htmlFor="email">Email Address*</label>
							<input onChange={(e) => this.handleChange(e)} type="text" name="formEmail" id="email" required/>
						</div>
						<div className="contact--form__phone">
							<label htmlFor="phone">Phone*</label>
							<input onChange={(e) => this.handleChange(e)} type="text" name="formPhone" id="phone" required/>
						</div>
						<div className="contact--form__company">
							<label htmlFor="company">Company</label>
							<input onChange={(e) => this.handleChange(e)} type="text" name="formCompany" id="company" />
						</div>
						<div className="contact--form__message">
							<label htmlFor="message">Message*</label>
							<input onChange={(e) => this.handleChange(e)} type="text" name="formMessage" id="message" required/>
						</div>
						<div className="contact--form__submit">
							<input type="submit" className="btn--primary" value="Submit Message" />
						</div>
					</form>
				</div>
				<div className="contact--social">
					<div>GitHub</div>
					<div>social</div>
				</div>
			</div>
		);
	}
}
