import React from 'react';
import './popup.css';
import { Table } from 'react-bootstrap';
import Form from '../components/form';

class PopUp extends React.Component{
	generateCells() {
		let keyValForRow = 1;
		let rows = [];
		for(let i = 9; i < 18 ;i++ ){
			let row = [];
			for(let j = 0; j < 60; j+=15){
				let popUpButton = (j === 0)? React.createElement('button',{
					onClick:this.props.onPopUpChange
				}, `${i}:${j}0` ): React.createElement('button',{
					onClick:this.props.onPopUpChange
				}, `${i}:${j}` )
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
				<button onClick={this.props.displayPopUp}>Close</button>
					{!this.props.popUpForm
					? <div>
							<h4>{this.props.month} {this.props.date}</h4>
							<h4>Availability</h4>
							<Table>
								{this.generateCells()}
							</Table>
						</div>
					: <Form />
					}
				</div>
			</div>
		);
		
	}
} 

export default PopUp;
