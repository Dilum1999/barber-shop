import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './booking-appointment.css';
import Iframe from 'react-iframe';

class BookAppointment extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			haircut: "none",
			shave: "none",
			date: '',
			time: ''
		}
	}

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		})
	};

	handleEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	};

	handleHairCutChange = event => {
		this.setState({
			haircut: event.target.value
		})
	};

	handleShaveChange = event => {
		this.setState({
			shave: event.target.value
		})
	};

	handleDateChange = event => {
		this.setState({
			date: event.target.value
		})
	};

	handleTimeChange = event => {
		this.setState({
			time: event.target.value
		})
	};

	submit = () => {
		alert(this.state.name)
	}

	render(){
		const { name, email, haircut, shave, date, time} = this.state
		return(
			<Container>
			<Row>
			<Col className="booking">
			<h5>Book An Appointment</h5>
			<form id="booking-form" onSubmit={this.submit} >
				<label>
					Name: 
						<input type="text" name="name" value={name} onChange={this.handleNameChange}/>
				</label>
				<label>
					Email: 
						<input type="text" name="email" value={email} onChange={this.handleEmailChange}/>
				</label>
				<label>
					Hair Cut: 
						<select value={haircut} onChange={this.handleHairCutChange} >
							<option value="none">None</option>
							<option value="regular">Regular</option>
							<option value="specific">Specific</option>
						</select>
				</label>
				<label>
					Shave: 
						<select value={shave} onChange={this.handleShaveChange} >
							<option value="none">None</option>
							<option value="regular">Regular</option>
							<option value="specific">Specific</option>
						</select>
				</label>
				<label>
					Date: 
						<input type="date" name="date" value={date} onChange={this.handleDateChange} />
				</label>
				<label>
					Time: 
				 			<input type="time" name="time" value={time} onChange={this.handleTimeChange} />
				</label>
				<input type="submit" value="submit"/>
			</form>
			</Col>
			<Col>
				<Iframe url="https://calendar.google.com/calendar/embed?height=300&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FVancouver&amp;src=NWZzbzhqZ2lqZGFnbG82ZDhxa2QwM2NmNG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%239E69AF&amp;showPrint=0&amp;showCalendars=0&amp;showTitle=0"
				 width="100%" height="400px" style={{borderWidth:"0px"}}/>
			</Col>
			</Row>
			</Container>
		);
	}
}

export default BookAppointment;

