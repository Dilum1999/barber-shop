import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './booking-appointment.css';
import Calendar from '../components/calendar';
import Form from '../components/form';
import PopUp from '../components/popup';

class BookAppointment extends React.Component{
	constructor(props){
		super(props)
		let today = new Date()
		
		this.state = {
			currentYear: today.getFullYear(),
			currentMonth: today.getMonth(),
			display:"none",		
		};
		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
		this.displayPopUp = this.displayPopUp.bind(this);
	}
	// let day = today.getDay();
	
	monthName(month) {
		const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
		return monthNames[month]
	};

	displayPopUp() {
		if(this.state.display === "none"){
			this.setState({
				display:"flex"
			})
		}else{
			this.setState({
				display:"none"
			})
		}
	};
	
	next() {
		if(this.state.currentYear === 11){
			this.setState({
				currentYear: this.state.currentYear + 1
			})
		}
		this.setState({
			currentMonth:(this.state.currentMonth + 1) % 12
		});
	};

	previous(){
		if(this.state.currentYear === 0){
			this.setState({
				currentYear: this.state.currentYear - 1
			})
		}
		if(this.state.currentMonth === 0){
			this.setState({
				currentMonth: 11
			})
		}else{
			this.setState({
				currentMonth: this.state.currentMonth - 1
			})
		}
	};

	

	render(){
		
		return(
			<div>
			<Container>
			<Row>
			<Col className="booking" lg={6} md={10}>
			<h5>Book An Appointment</h5>
			<Form/>
			</Col>
			<Col lg={6} md={10}>
				<Calendar 
					monthName = {this.monthName}
					currentMonth = {this.state.currentMonth}
					currentYear = {this.state.currentYear}
					previous = {this.previous}
					next = {this.next}
					displayPopUp={this.displayPopUp}
				/>
			</Col>
			</Row>
			</Container>
			<PopUp
				display = {this.state.display}
				displayPopUp={this.displayPopUp}
			/>
			</div>
		);
	}
}

export default BookAppointment;

