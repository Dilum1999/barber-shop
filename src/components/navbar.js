import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function NavBar() {
	return(
		<header>
			<nav>
				<ul className='nav__links'>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/contact-us'>Contact Us</Link></li>
					<li><Link to='/about-us'>About Us</Link></li>
				</ul>
			</nav>
			<Link className='cta' to='/book-appontment'>Book Now</Link>
		</header>
	);
}

export default NavBar;
// Not used