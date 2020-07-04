import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import './card-image.css';

const CardImage = () => {

	return(
		<Card className="text-white text-center" id="card" >
			<Card.Body>
				<Card.Title>Book An Appointment</Card.Title>
				<Button variant="outline-dark text-white my-3" href='/book-appontment'>Book Now</Button>
				<Card.Text>We value our custormers health and safety. 				
				</Card.Text>
				<Card.Text>
				So we have decided to create an online appointment system to reduce 
				close contacting.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default CardImage;