import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './booking-appointment.css';
import Calendar from '../components/calendar';
import PopUp from '../components/popup';
import BookingSteps from '../components/booking-steps';

class BookAppointment extends React.Component{
	constructor(props){
		super(props)
		let today = new Date()
		
		this.state = {
			currentYear: today.getFullYear(),
			currentMonth: today.getMonth(),
			display:"none",
			selectedDate:'',
			selectedTime:'',
			popUpForm: false,	
			classNameArrow: "disableanim",
		};
		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
		this.displayPopUp = this.displayPopUp.bind(this);
		this.onDateClick = this.onDateClick.bind(this);
		this.onPopUpChange = this.onPopUpChange.bind(this);
		this.onTimeSlotClick = this.onTimeSlotClick.bind(this);
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
		if(this.state.popUpForm){
			this.setState({
				popUpForm:false
			})
		}
	};
	

	//Navigating to the next month
	next() {
		this.setState({
			classNameArrow:"arrow"
		});
		if(this.state.currentMonth === 11){
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
		let { currentMonth, currentYear } = this.state
		//Disabling the button if the month is already passed in real time
		if(currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth()){
			this.setState({
				classNameArrow:"disableanim"
			});
			return
		}
		// Change the year
		if(currentMonth === 0){
			this.setState({
				currentYear: currentYear - 1
			})
		}
		//Change the month
		if(currentMonth === 0){
			this.setState({
				currentMonth: 11
			})
		}else{
			this.setState({
				currentMonth: currentMonth - 1
			})
		}
	};

	onDateClick(newDate){
		this.setState({
			selectedDate:newDate
		})
	};

	onPopUpChange(){
		this.setState({
			popUpForm: !this.state.popUpForm
		})
	}
	
	onTimeSlotClick(newTime){
		this.setState({
			selectedTime:newTime
		})
	}

	render(){
		
		return(
			<div>
			<Container>
			<Row>
			<Col lg={6} md={10}>
				<Calendar 
					monthName = {this.monthName}
					currentMonth = {this.state.currentMonth}
					currentYear = {this.state.currentYear}
					previous = {this.previous}
					next = {this.next}
					displayPopUp={this.displayPopUp}
					onDateClick = {this.onDateClick}
					classNameOfArrow = {this.state.classNameArrow}
				/>
			</Col>
			<Col className="booking" lg={6} md={10}>
				<BookingSteps />
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
				onTimeSlotClick = {this.onTimeSlotClick}
			/>
			</div>
		);
	}
}

export default BookAppointment;

