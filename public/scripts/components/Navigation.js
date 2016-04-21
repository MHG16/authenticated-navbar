import React from 'react';
//need this to use a react router
import {Link} from 'react-router';

import $ from jquery;  

export default React.createClass({
	getIntialState: function () {
		return {
			//get initialState always returns an object, but why is this user: user?
			user: user
		};
	},

	componentDidMount: function () {
		//event handler.  When the user state changes, 
		this.state.user.on('change', () => {
				console.log('the user was changed');
				//set the state of this user to user- but why?
				this.setState({
						user: user 
				});
			})
	},

	//function to put the nav bar on the page
	render: function() {
		console.log('navbar render');
		//when the user has an id - when a user is logged in the navbar should look like this.
		//This is using a react router.  
		//First link is to Home page
		//Second is to Dashboard Page
		//Third is to logout page with an event handler
		if(this.state.user.get('id')) {
			return (
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/Dashboard'>Dashboard</Link>
					<a href='#' onClick={this.logout}>Logout</a>
				</nav>
			);

		}
		//if not yet logged in diplay the following nav bar
		//a React Router is used here
		//First link is to the Home Page
		//Second is to the Login Page
		//Third is to the Register Page
		else  {
				return (
					<nav>
						<Link to="/">Home</Link>
						<Link to="/Login">Login</Link>
						<Link to="/Register">Register</Link>
					</nav>
				);
		}

	}

	//function that runs when event handler logout is run
	logout: function(e) {
		//prevent the default event
		e.preventDefault();
		console.log('User clicked logout');
		this.state.user.clear();
		//send message to the server that user logged out, disconnect user from server
		$.ajax({
			type: 'POST',
			url: 'auth/logout'

		})

	}

)};





















