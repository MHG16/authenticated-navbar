import React from 'react';
//this is needed to render components
import ReactDOM from 'react-dom';
//necessary to us a react router
import {Router, Route, hashHistory} from 'react-router';
//now import the pages we have made (these are components)
import HomePage from './components/Home.js';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/Dashboard.js';
import RegisterPage from './components/Register.js';

//now render your pages to the title div using a React router and the necessary components

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={HomePage} />
		<Route path="/Login" component={LoginPage} />
		<Route path="/Register" component={RegisterPage} />
	</Router>,
	document.queryselector('.title')
);



