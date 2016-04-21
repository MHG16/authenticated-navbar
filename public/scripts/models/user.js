//need to import Backbone as this is a backbone model
import Backbone from 'backbone';

//defines a user to have an id, firstName, lastName, email address
//createdAt, updatedAt with default values
const UserModel = Backbone.Model.extend({
	defaults: {
		id: null,
		firstName: '',
		lastName: '',
		email: '',
		createdAt: '',
		updatedAt: ''

	},

	idAttribute: 'id'


});

export default new UserModel(window.user);