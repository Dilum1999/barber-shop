import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './contact-us.css';
import Iframe from 'react-iframe';

function ContactUs(){
	return(
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>Contact Us</h1>
					<p>Email us with any question or inquires or call us. 
					We will try our best to respond in  a timely manner. If you what
					to make an online appointment please visit  
					<Link to='/book-appontment' style={{color:'rosybrown'}}> Book Now</Link> page
					for more details.
					</p>
				</Container>
			</Jumbotron>
			<Container style={{padding:'50px'}}>
					<Row>
						<Col md={6} sm={10}>
							<h3>Location</h3>
							<div className="google-map">
								<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.5181723946525!2d-122.83605118443236!3d49.19072897932143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d77929e479af%3A0xa540976e5c5658ff!2sJag%20(ov)%20hair!5e0!3m2!1sen!2sca!4v1593485310260!5m2!1sen!2sca"
									width="100%"  ariaHidden="false" height='300'
								 />
							</div>
						</Col>
						<Col md={6} sm={10}>
							<h3>Contact Information</h3>
							<div className="info">
								<h6>Adress : </h6>
								<h6>10360 140 St, Surrey, BC V3T 4N4</h6>
								<h6>Number : </h6>
								<h6>(654) 123-2587</h6>
								<h6>Email : </h6>
								<h6>example@example.com</h6>
							</div>
						</Col>
					</Row>
				</Container>
		</div>
	);
}
export default ContactUs;