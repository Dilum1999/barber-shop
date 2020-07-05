import React from 'react';
import Table from 'react-bootstrap/Table';
import './calendar.css';

import Right from '../images/right-arrow.png';
import Left from '../images/left-arrow.png';

class Calendar extends React.Component {
	constructor(props){
		super(props)
		this.onDateClick = this.onDateClick.bind(this);
		this.generateRows = this.generateRows.bind(this);
	}
	
	onDateClick(e) {
		this.props.displayPopUp()
		this.props.onDateClick(e.target.innerText)
	}

	generateRows(month, year){
		let firstDay = new Date(year, month, 1).getDay();
		let numberOfDays = new Date(year, month + 1, 0).getDate();
		let today = new Date()

		//Clearing the tabel
		let tbody = [];
		let date = 1;
		let keyVal = 1;
		
		// Outer for loop is for creating colums
		for(let i = 0; i < 6; i++){
			
			let data = []; //This is to store cells temporarly

			//creating induvidual cells and filling them with values
			for(let j = 0; j < 7; j++){
				// The first column of calendar
				if(i === 0 && j < firstDay) {
					let cell = React.createElement('td', {key : keyVal}, "")
					data.push(cell)
				}else if(date > numberOfDays){
						break;
				}
				else {
					let popupButton;
					if (today.getDate() > date && month === today.getMonth() && year === today.getFullYear()){
						popupButton = React.createElement('button', {
							onClick:this.onDateClick, disabled:true
						}, date)
					}else{
						popupButton = React.createElement('button', {
							onClick:this.onDateClick}, date)
					}
					let cell = React.createElement('td', {key : keyVal}, popupButton)
					data.push(cell)
					date++;
				}
				keyVal ++;
			}
			//create a tabel row
			let row = React.createElement('tr', {key:i}, data)
			tbody.push(row) //appending all the rows innto the calendar body
			data = [];// Removing the previous cells after adding them to the table body
		}
		return React.createElement('tbody', {}, tbody)
	};
	
	render(){
		return(
			<div className="calendar">
			<h3>{this.props.monthName(this.props.currentMonth)} {this.props.currentYear}</h3>
				<Table >
					<thead>
						<tr>
							<th>Sun</th>
							<th>Mon</th>
							<th>Tue</th>
							<th>Wed</th>
							<th>Thu</th>
							<th>Fri</th>
							<th>Sat</th>
						</tr>
					</thead>
					{this.generateRows(this.props.currentMonth,this.props.currentYear)}
				</Table>
				<div className="btns"> 
					<img src={Left} className={this.props.classNameOfArrow} onClick={this.props.previous} alt="Previous month"/>
					<img src={Right} className="arrow" onClick={this.props.next} alt="next month"/>
				</div>
			</div>
		);
	};
}
	

export default Calendar;