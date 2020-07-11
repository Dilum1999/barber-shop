import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

//Page
import Home from './pages/home';
import NotFound from './pages/404';
import ContactUs from './pages/contact-us';
import BookAppointment from './pages/book-appointment';
import AboutUs from './pages/about-us';
import Admin from './pages/admin';
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import NavBar from './components/Navbar.jsx';
import Footer from './components/footer';

class App extends React.Component {
	render(){
		return (
    	<Router>
				<NavBar/>
				<Switch>
					<Route path='/' exact component={Home}/>
					<Route path='/contact-us' exact component={ContactUs}/>
					<Route path='/book-appontment' exact component={BookAppointment}/>
					<Route path='/about-us' exact component={AboutUs} />
					<Route path='/admin' exact component={Admin} />
					<Route path='/404' exact component={NotFound}/>
					<Redirect to='/404'/>
				</Switch>
				<Footer/>
			</Router>
		);
	}
}

export default App;
