//need Backbone as this is a Backbone model
import backbone from 'backbone';
//need to import the nav bar
import Navigation from '.Navigation';

//this will create the view for the Login page
//We first put the navigation bar on the page
//contains an email text box, a password text box and a submit button
export default React.createClass({
	render: function() {
		return (
			<section>
				<Navigation/>
				<form>
					<h1>Login</h1><input type="text" placeholder="email"></input> 
					<h1>Password</h1><input type="text" placeholder="password"></input>
					<button type="submit">Submit</button>
				</form>
			</section>  
			);
	}
});
