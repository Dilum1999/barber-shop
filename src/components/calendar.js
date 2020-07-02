import React from 'react';
import Table from 'react-bootstrap/Table';

const Calendar = () => {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth();
	let day = today.getDay();

	const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
	];

	let monthName = monthNames[month];

	const generateRows = () => {
		const firstDay = new Date(year, month, 1)
		const endDay = new Date(year,month + 1, 0)
		return endDay.getDay() 
	}

	return(
		<div>
		<h1>{year}</h1>
		<h1>{generateRows()}</h1>
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
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>6</td>
						<td>7</td>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>6</td>
						<td>7</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default Calendar;