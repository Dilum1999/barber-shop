import React from 'react';
import './popup.css';
import { Table } from 'react-bootstrap';

class PopUp extends React.Component{

	generateCells() {
		let keyValForRow = 1;
		let rows = [];
		for(let i = 9; i < 18 ;i++ ){
			let row = [];
			for(let j = 0; j < 60; j+=15){
				let cell = (j === 0) ?React.createElement('td',{key:`${i}:${j}0`}, `${i}:${j}0`) :React.createElement('td',{key:`${i}:${j}`}, `${i}:${j}`);
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
			<div className="popup">
				<div className="popup-inner">
					<h1>Hello World!</h1>
					<Table>
						<thead>
							<th>Available</th>
						</thead>
						{this.generateCells()}
					</Table>
					<button onClick={this.props.closePopup}>Close</button>
				</div>
			</div>
		);
		
	}
} 

export default PopUp;
