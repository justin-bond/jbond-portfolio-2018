import React, { Component } from 'react';

export default class contact_form extends Component {
	submitForm(event) {
		event.preventDefault();
	}
	handleChange(e) {
		// console.log(e.target.value);
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
					<form className="contact--form" ref={(input) => this.contactForm = input} onSubmit={(e) => this.submitForm(e)}>
						<div className="contact--form__name">
							<label htmlFor="name">Your Name*</label>
							<input onChange={(e) => this.handleChange(e)} ref={(input) => {this.name = input}} type="text" name="name" id="name" required/>
						</div>
						<div className="contact--form__email">
							<label htmlFor="email">Email Address*</label>
							<input onChange={(e) => this.handleChange(e)} ref={(input) => {this.email = input}} type="text" name="email" id="email" required/>
						</div>
						<div className="contact--form__phone">
							<label htmlFor="phone">Phone*</label>
							<input onChange={(e) => this.handleChange(e)} ref={(input) => {this.phone = input}} type="text" name="phone" id="phone" required/>
						</div>
						<div className="contact--form__company">
							<label htmlFor="company">Company</label>
							<input onChange={(e) => this.handleChange(e)} ref={(input) => {this.company = input}} type="text" name="company" id="company" />
						</div>
						<div className="contact--form__message">
							<label htmlFor="message">Message*</label>
							<input onChange={(e) => this.handleChange(e)} ref={(input) => {this.message = input}} type="text" name="message" id="message" required/>
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
