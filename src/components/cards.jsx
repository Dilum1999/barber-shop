import React from 'react';
import Card from 'react-bootstrap/Card';

const card = (props) => {
	return(
		<Card  className='m-4'>
			<Card.Img variant='top' src={props.img} className="d-none d-sm-block"></Card.Img>
			<Card.Body className='shadow-lg '>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>{props.description}</Card.Text>
			</Card.Body>
		</Card>
	);
}
export default card;