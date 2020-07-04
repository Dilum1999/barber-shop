import React from 'react';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './nav.css';

const NavBar = () => {
	return(
		<Navbar collapseOnSelect expand='lg' 
		style={{backgroundColor:'black'}} className="d-flex justify-content-between ">
		<Navbar.Brand href='/' style={{color:'white'}}>Barber Shop</Navbar.Brand>
		<Navbar.Toggle arai-controls="responsive-navbar-nav" style={{backgroundColor:'grey' }}/>
		<Navbar.Collapse id='responsive-navbar-nav'>
			<Nav className='ml-auto' id="nav">
					<Nav.Link href="/" >Home</Nav.Link>
					<Nav.Link href="/contact-us" >Contact Us</Nav.Link>
					<Nav.Link href="/about-us" >About Us</Nav.Link>
					<Link className='btn' to='/book-appontment'>Book Now</Link>
			</Nav>
		</Navbar.Collapse>
		</Navbar>
	);}
export default NavBar;