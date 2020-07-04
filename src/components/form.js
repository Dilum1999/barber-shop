import React from 'react';
import './form.css';
import { Col, Row, Table } from 'react-bootstrap';

class Form extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			name: '',
			email: '',
			haircut: "none",
			shave: "none",
		}
	};

	handleNameChange = event => {
		this.setState({
			name: event.target.value
		})
	};

	handleEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	};

	handleHairCutChange = event => {
		this.setState({
			haircut: event.target.value
		})
	};

	handleShaveChange = event => {
		this.setState({
			shave: event.target.value
		})
	};


	submit = () => {
		alert(this.state.name)
	};

	render(){
		const { name, email, haircut, shave} = this.state
		return(
			<Row>
			<Col lg={6} md={12} sm={12}>
			<form id="booking-form" onSubmit={this.submit} >
				<ul>
				<li>
				<label>
					Name
						<input type="text" name="name" value={name} onChange={this.handleNameChange}/>
				</label>
				</li>
				<li>
				<label>
				Email		
						<input type="text" name="email" value={email} onChange={this.handleEmailChange}/>
				</label>
				</li>
				<li>
				<label>
					Hair Cut
						<select value={haircut} onChange={this.handleHairCutChange} >
							<option value="none">None</option>
							<option value="regular">Regular</option>
							<option value="specific">Specific</option>
						</select>
				</label>
				</li>
				<li>
				<label>
					Shave: 
						<select value={shave} onChange={this.handleShaveChange} >
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
		);
	}
};

export default Form;