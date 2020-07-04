import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './booking-appointment.css';
import Calendar from '../components/calendar';
import PopUp from '../components/popup';

class BookAppointment extends React.Component{
	constructor(props){
		super(props)
		let today = new Date()
		
		this.state = {
			currentYear: today.getFullYear(),
			currentMonth: today.getMonth(),
			display:"none",
			selectedDate:'',
			popUpForm: false,		
		};
		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
		this.displayPopUp = this.displayPopUp.bind(this);
		this.onNameChange = this.onNameChange.bind(this);
		this.onPopUpChange = this.onPopUpChange.bind(this);
	}
	

	//Getting the month name 
	monthName(month) {
		const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
		return monthNames[month]
	};


	//When clicked the popup opens
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
	

	//Navigating to the next month
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


	//Navigating to the previous month
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

	onNameChange(newName){
		this.setState({
			selectedDate:newName
		})
	};

	onPopUpChange(){
		this.setState({
			popUpForm: !this.state.popUpForm
		})
	}
	

	render(){
		
		return(
			<div>
			<Container>
			<Row>
			<Col className="booking" lg={6} md={10}>
			<h5>Book An Appointment</h5>
			</Col>
			<Col lg={6} md={10}>
				<Calendar 
					monthName = {this.monthName}
					currentMonth = {this.state.currentMonth}
					currentYear = {this.state.currentYear}
					previous = {this.previous}
					next = {this.next}
					displayPopUp={this.displayPopUp}
					onNameChange = {this.onNameChange}
				/>
			</Col>
			</Row>
			</Container>
			<PopUp
				display = {this.state.display}
				displayPopUp={this.displayPopUp}
				date = {this.state.selectedDate}
				month = {this.monthName(this.state.currentMonth)}
				popUpForm = {this.state.popUpForm}
				onPopUpChange = {this.onPopUpChange}
			/>
			</div>
		);
	}
}

export default BookAppointment;

