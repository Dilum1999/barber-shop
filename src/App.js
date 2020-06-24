import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

//Page
import Home from './pages/home';
import NotFound from './pages/404';
import ContactUs from './pages/contact-us';

class App extends React.Component {
	render(){
		return (
    	<Router>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/contact-us' exact component={ContactUs}/>
					<Route path='/404' exact component={NotFound}/>
					<Redirect to='/404'/>
				</Switch>
			</Router>
		);
	}
}

export default App;
