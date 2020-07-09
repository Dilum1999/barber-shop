import React from 'react';
import './popup.css';
import { Table } from 'react-bootstrap';
import Form from '../components/form';

class PopUp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			selectedTime: '',
			bookedTimeSlots: [],
			hide: false
		}
		this.OntTimeSlotClick = this.OntTimeSlotClick.bind(this);
		this.generateCells = this.generateCells.bind(this);
	}

	removeBackButton = () => {
		this.setState({hide: !this.state.hide})
	}

	OntTimeSlotClick(e) {
		this.props.onPopUpChange()
		this.setState({selectedTime:e.target.innerText})
	}

	getBookedTimeslots = () => {
		const selectedDate = this.props.date;
		const selectedMonth = this.props.currentMonth;
		const selectedYear = this.props.currentYear;
		let requestBody = {
			query: `
				query {
					bookings {
						date
						time
					}
				}
			`
		};

		fetch('http://localhost:4000/graphql', {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if(res.status !== 200 && res.status !== 201){
				throw new Error('Failed!');
			}
			return res.json()
		}).then(resData => {
			if(!resData){
				return;
			}
			const bookedTimeSlots = resData.data.bookings.map(result => {
				let date = result.date.split('-')
				let year = parseInt(date[0]);
				let month = parseInt(date[1]);
				let day = parseInt(date[2]);
				if(year === selectedYear && month === (selectedMonth + 1) && day === parseInt(selectedDate)){
					return result.time;
				}
				return date;
			});
			this.setState({
				bookedTimeSlots: bookedTimeSlots
			})
		}).catch(err => {
			console.log(err)
		})
	};

	componentDidUpdate = (preProps) => {
		if(this.props.date !== preProps.date){
			this.getBookedTimeslots()
		}
	}

	generateCells() {
		let keyValForRow = 1;
		let rows = [];
		for(let i = 9; i < 18 ;i++ ){
			let row = [];
			for(let j = 0; j < 60; j+=15){
				let popUpButton;
				if(j === 0){ 
					let disable = this.state.bookedTimeSlots.find(time => {return time === `${i}:${j}0`})
					popUpButton = React.createElement('button',{onClick:this.OntTimeSlotClick, disabled:disable}, `${i}:${j}0` )
				} else{
					let disable = this.state.bookedTimeSlots.find(time => {return time === `${i}:${j}`}) 
					popUpButton = React.createElement('button',{onClick:this.OntTimeSlotClick,  disabled:disable}, `${i}:${j}` )
				}
				let cell = (j === 0) ?React.createElement('td',{key:`${i}:${j}0`}, popUpButton) :React.createElement('td',{key:`${i}:${j}`}, popUpButton);
				row.push(cell);
			}
			let createRow = React.createElement('tr',{key:keyValForRow}, row)
			keyValForRow ++;
			rows.push(createRow);
		}
	return React.createElement('tbody',{},rows);
	}


	render() {
		return(
			<div className="popup" style={{display:this.props.display}}>
				<div className="popup-inner">
					{!this.props.popUpForm
					? <div>
							<button onClick={this.props.displayPopUp}>Close</button>
							<h4>{this.props.month} {this.props.date}</h4>
							<h4>Availability</h4>
							<Table>
								{this.generateCells()}
							</Table>
						</div>
					: <div>
							<div className="navigate">
								<button onClick={this.props.onPopUpChange} hidden={this.state.hide}>Back</button>
								<button onClick={this.props.displayPopUp}>Close</button>
							</div>
							<Form selectedMonth = {this.props.currentMonth}
								selectedYear = {this.props.currentYear}
								selectedDate = {this.props.date}
								selectedTime = {this.state.selectedTime}
								removeBackButton = {this.removeBackButton}
								onDateClick = {this.props.onDateClick}
							/>
						</div>
					}
				</div>
			</div>
		);
		
	}
} 

export default PopUp;
