import React from 'react';
import Table from 'react-bootstrap/Table';

const Calendar = () => {
	let today = new Date();
	let currentYear = today.getFullYear();
	let currentMonth = today.getMonth();
	let day = today.getDay();

	const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
	];

	let monthName = monthNames[currentMonth];
	

	const generateRows = (month, year) => {
		let firstDay = new Date(year, month, 1).getDay();
		let numberOfDays = new Date(year, month + 1, 0).getDate();


		//Clearing the tabel
		let tbody = [];
		let date = 1;
		
		// Outer for loop is for creating colums
		for(let i = 0; i < 6; i++){
			
			let data = []; //This is to store cells temporarly

			//creating induvidual cells and filling them with values
			for(let j = 0; j < 7; j++){
				// The first column of calendar
				if(i === 0 && j < firstDay) {
					let cell = React.createElement('td', {}, "")
					data.push(cell)
				}else if(date > numberOfDays){
						break;
				}
				else {
					let cell = React.createElement('td', {}, date)
					data.push(cell)
					date++;
				}
			}
			//create a tabel row
			let row = React.createElement('tr', {}, data)
			tbody.push(row) //appending all the rows innto the calendar body
			data = [];// Removing the previous cells after adding them to the table body
		}
		return React.createElement('tbody', {}, tbody)
	}
	

	return(
		<div>
		<h1>{currentYear, monthName}</h1>
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
		</div>
	);
};

export default Calendar;