import React from 'react';
import Table from 'react-bootstrap/Table';
import './calendar.css';

class Calendar extends React.Component {
	constructor(props){
		super(props)
		let today = new Date()
		
		this.state = {
			currentYear: today.getFullYear(),
			currentMonth: today.getMonth()		
		};
		this.previous = this.previous.bind(this);
		this.next = this.next.bind(this);
		this.generateRows = this.generateRows.bind(this);
	}
	// let day = today.getDay();
	
	monthName(month) {
		const monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
		return monthNames[month]
	}
	
	next() {
		if(this.state.currentYear === 11){
			this.setState({
				currentYear: this.state.currentYear + 1
			})
		}
		this.setState({
			currentMonth:(this.state.currentMonth + 1) % 12
		});
		//generateRows(currentMonth,currentYear)
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
		//generateRows(currentMonth,currentYear)
	};


	 generateRows(month, year){
		let firstDay = new Date(year, month, 1).getDay();
		let numberOfDays = new Date(year, month + 1, 0).getDate();


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
					let cell = React.createElement('td', {key : keyVal}, date)
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
			<div>
			<h1>{this.monthName(this.state.currentMonth)}</h1>
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
					{this.generateRows(this.state.currentMonth,this.state.currentYear)}
				</Table>
				<div className="btns"> 
					<button onClick={this.previous}>Previous</button>
					<button onClick={this.next}>Next</button>
				</div>
			</div>
		);
	};
}
	

export default Calendar;