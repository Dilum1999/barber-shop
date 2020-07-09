import React from 'react';
import './form.css';
import { Col, Row, Table } from 'react-bootstrap';

class Form extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			bookingInfo: [],
			displayInfo: false
		}
		this.nameEl = React.createRef();
		this.emailEl = React.createRef();
		this.haircutEl = React.createRef();
		this.shaveEl = React.createRef();
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.props.removeBackButton();
		const name = this.nameEl.current.value;
		const email = this.emailEl.current.value;
		const haircut = this.haircutEl.current.value;
		const shave = this.shaveEl.current.value;
		const date = (parseInt(this.props.selectedDate) < 10) ? `0${this.props.selectedDate}`: this.props.selectedDate ;
		const time = this.props.selectedTime;
		const month = (parseInt(this.props.selectedMonth) + 1 < 10)? `0${this.props.selectedMonth+1}`: this.props.selectedMonth + 1 ;
		const year = this.props.selectedYear;
		if(name.trim().length === 0 || email.trim().length === 0 || (haircut === "None" && shave === "None")){
			return;
		}
		let requestBody = {
			query: `
				mutation {
					createBooking(bookingInput: {name: "${name}", email: "${email}", haircutType: "${haircut}", shaveType: "${shave}", time:"${time}", date: "${year}-${month}-${date}"}) {
						name
						email
						haircutType
						shaveType
						time
						date
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
			return res.json();
		}).then(resData => {
			this.setState({bookingInfo: resData.data.createBooking});
			this.setState({displayInfo: true});
			this.props.onDateClick(0)
		}).catch(err => {
			console.log(err);
		});

	};


	render(){
		return(
			<div>
			{!this.state.displayInfo ?
			<Row>
			<Col lg={6} md={12} sm={12}>
			<form id="booking-form" onSubmit={this.submitHandler} >
				<ul>
				<li>
				<label>
					Name
						<input type="text" name="name" ref={this.nameEl}/>
				</label>
				</li>
				<li>
				<label>
				Email		
						<input type="email" name="email" ref={this.emailEl}/>
				</label>
				</li>
				<li>
				<label>
					Hair Cut
						<select ref={this.haircutEl} >
							<option value="none">None</option>
							<option value="regular">Regular</option>
							<option value="specific">Specific</option>
						</select>
				</label>
				</li>
				<li>
				<label>
					Shave: 
						<select ref={this.shaveEl} >
							<option value="none">None</option>
							<option value="regular">Regular</option>
							<option value="specific">Specific</option>
						</select>
				</label>
				</li>
				<li>
				<input type="submit" value="submit"/>
				</li>
				</ul>
			</form>
			</Col>
			<Col lg={6} md={12} sm={12}>
			<h5>Prices</h5>
				<Table>
				<thead>
					<tr>
						<td>Service</td>
						<td>Price</td>
					</tr>
				</thead>
					<tbody>
						<tr>
							<td>Hair Cut</td>
						</tr>
						<tr>
							<td>Regular</td>
							<td>$20.00</td>
						</tr>
						<tr>
							<td>Regular</td>
							<td>$20.00</td>
						</tr>
						<tr>
							<td>Shave</td>
						</tr>
						<tr>
							<td>Regular</td>
							<td>$20.00</td>
						</tr>
						<tr>
							<td>Regular</td>
							<td>$20.00</td>
						</tr>
					</tbody>
				</Table>
			</Col>
			</Row>
			: 
			<div className='booking-info'>
				<ul>
					<li>Name: {this.state.bookingInfo.name}</li>
					<li>Email: {this.state.bookingInfo.email}</li>
					<li>Selected Haircut: {this.state.bookingInfo.haircutType}</li>
					<li>Selected Shave: {this.state.bookingInfo.shaveType}</li>
					<li>Time: {this.state.bookingInfo.time}</li>
					<li>Date: {this.state.bookingInfo.date}</li>
				</ul>
			</div>
		}
		</div>
		);
	}
};

export default Form;