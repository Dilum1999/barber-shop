import React from 'react';
import Table from 'react-bootstrap/Table';
import './calendar.css';

const Calendar = () => {
	let today = new Date();
	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth();
	// let day = today.getDay();

	const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
	];

	
	const next = () => {
		currentYear = (currentYear === 11) ? currentYear + 1 : currentYear;
		currentMonth = (currentMonth + 1) % 12;
		generateRows(currentMonth,currentYear)
	};

	const previous = () => {
		currentYear = (currentYear === 0) ? currentYear - 1 : currentYear;
		currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
		generateRows(currentMonth,currentYear)
	}


	const generateRows = (month, year) => {
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
	}
	let monthName = monthNames[currentMonth];

	return(
		<div>
		<h1>{ monthName}</h1>
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
				{generateRows(currentMonth,currentYear)}
			</Table>
			<div className="btns"> 
				<button onClick={previous}>Previous</button>
				<button onClick={next}>Next</button>
			</div>
		</div>
	);
};

export default Calendar;