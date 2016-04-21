import React from 'react';
import $ from 'jquery';
//need this to use a react router
import {hashHistory} from 'react-router';
//need to import the nav bar
import Navigation from './Navigation';
import user from '../models/user';


//this component renders the registration view on the page
export default React.createClass({
//get the initial state of the Register view
	getInitialState: function() {
		console.log(getInitialState);
		return {
			//errors is an empty object initially
			errors: {},
			user: user

		};
	},

	//This renders the registration view on the page
	//First put the Nav bar on the page
	//Then have a form with a submit event handler and callback function submit
	//Have 4 input boxes: first name, last name, email and password
	//Finally, have a submit button
	render: function () {
		return (
			console.log('render');
			<section>
				<Navigation/>
				<h1>Register<h1>
				<form onSubmit={this.register}>
					<input type="text" placeholder="First name" ref="firstName"/>
					<input type="text" placeholder="Last name" ref="lastName"/>
					<input type="text" placeholder="Email" ref="email"/>
					<input type="password" placeholder="password" ref="password" />
					<button type="submit">Submit</button>
				</form>
			</section>
			);
	},



})

