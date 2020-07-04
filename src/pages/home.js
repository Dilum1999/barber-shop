import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap/';

//Components
import ControlledCarousel from '../components/carousel';
import CardImage from '../components/card-image';
import Card from '../components/cards';

//Images
import HairCut from '../images/hair-cut-1.jpg';
import alert from  '../images/alert.png';

function Home() {
	const [cardState] = useState({
		serivecs: [
			{
				name: "Hair Cut",
				description: "We offer a wide variety of haircuts",
				img: HairCut
			},{
				name: "Shaving",
			}
		]
	});
	return(
		<div>
			<ControlledCarousel />
			<CardImage/>
			<Container className="text-center py-4">
				<h4>Our Services</h4>
				<hr />
				<Row>
					<Col lg={4} md={6} sm={10}>
						<Card img={cardState.serivecs[0].img} 
								title = {cardState.serivecs[0].name}
								description = {cardState.serivecs[0].description} />
					</Col>
					<Col lg={4} md={6} sm={10}>
						<Card img={cardState.serivecs[0].img} 
								title = {cardState.serivecs[0].name}
								description = {cardState.serivecs[0].description} />
					</Col>
					<Col lg={4} md={6} sm={10}>
						<Card img={cardState.serivecs[0].img} 
							title = {cardState.serivecs[0].name}
							description = {cardState.serivecs[0].description} />
						</Col>
						<Col lg={4} md={6} sm={10}>
						<Card img={cardState.serivecs[0].img} 
							title = {cardState.serivecs[0].name}
							description = {cardState.serivecs[0].description} />
						</Col>
						<Col lg={4} md={6} sm={10}>
						<Card img={cardState.serivecs[0].img} 
							title = {cardState.serivecs[0].name}
							description = {cardState.serivecs[0].description} />
						</Col>
					</Row>
				</Container>
				<hr/>
				<Container >
					<h4><Image src={alert} 
					style={{width:'30px', height:'auto', margin: '10px'}}/>
					 COVID-19 SAFETY MEASURES</h4>
					<p className='font-weight-bold'>In order to ensure a safe ennvironment for all our custormers
					we have some few safety measures that we would like to insist you on.</p>
					<ul className='pl-5'>
						<li>Please be on time for your appointment as we are trying to 
							limit the number of people in our shop at all times.</li>
						<li>
							we would encourage you to wear a mask if possible 
						</li>
						<li>
							We have hand sanitizers in the shop for you to use.
						</li>
					</ul>
				</Container>
		</div>
	);
}

export default Home;