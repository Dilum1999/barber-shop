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
		let firstDay = new Date(year, month, 1);
		let endDay = new Date(year,month + 1, 0);
		let numberOfDays = new Date(year, month + 1, 0).getDate();
		let tbl = document.getElementById('calendar-body');

		//Clearing the tabel
		tbl.innerHTML = "";
		
		for(let i = 0; i < 6; i++){
			//create a tabel row
			let row = document.createElement('tr');

			let date = 1;
			//creating induvidual cells and filling them with values
			for(let j = 0; j < 7; j++){
				// The first column of calendar
				if(i === 0 && j < firstDay) {
					let cell = document.createElement('td');
					let cellText = document.createTextNode("");
					cell.appendChild(cellText)
					row.appendChild(cell);
				}else if(date > numberOfDays){
						break;
				}
				else {
					let cell = document.createElement('td');
					let cellText = document.createTextNode(date);
					cell.appendChild(cellText);
					row.appendChild(cell);
					date++;
				}
			}
			tbl.appendChild(row) //appending all the rows innto the calendar
		}
	}
	generateRows(currentMonth,currentYear)

	return(
		<div>
		<h1>{currentYear}</h1>
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
				<tbody id="calendar-body">
					
				</tbody>
			</Table>
		</div>
	);
};

export default Calendar;