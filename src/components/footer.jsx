import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './footer.css';

//Images
import location from '../images/location.PNG';
import phone from '../images/phone.ico';

const Footer = () => {
	return(
		<div className='footer-bar'>
			<Container className='py-4'>
				<Row>
					<Col md={3} sm={4} xs={6}>
						<h5>Contact Details</h5>
						<hr/>
						<ul>
							<span>Address <br/>10360 140 St, Surrey, BC V3T 4N4<br/>
							<br/>
							<Image src={phone} className='mr-2'/>	
							(602)1 789-206</span>
						</ul>
					</Col>
					<Col md={3} sm={4} xs={6} className='d-none d-sm-block'>
						<h5>Quickk Links</h5>
						<hr/>
						<span><Link to='/'>Home</Link><br/>
							<Link to='/contact-us'>Contact Us</Link><br/>
							<Link to='/about-us'>About Us</Link><br/>
							<Link to='/book-appontment'>Book Now</Link><br/>
						</span>
					</Col>
					<Col md={3} sm={4} xs={6}>
						<h5>Open Hours</h5>
						<hr/>
							<span>
							Week-Days<br/>10 am - 5 pm<br/>
							Week-Ends<br/>9 am - 5 pm 
							</span>
					</Col>
					<Col md={3} sm={6} className='d-none d-lg-block'>
						<h5>Location</h5>
						<hr/>
						<Image src={location} style={{width:'200px', height: 'auto'}}/>
					</Col>
				</Row>
				<hr className='my-hr-line'/>
				<Row className='ml-5' >
					<p>@copy: {new Date().getFullYear()} Barber Shop.com</p>
				</Row>
			</Container>
		</div>
	);
}
export default Footer;