import React from 'react';
import './admin.css';
import { Table } from 'react-bootstrap';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

class Admin extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLogin: false,
			bookingDetails: [],
			cookieKey: 'loginCookie',
			cookieValue: 'cookievalueforacessingbooking',
			cookieStartDate: '',
		}
		this.usernameEl = React.createRef();
		this.passwordEl = React.createRef();
	}


	setCookie = () => {
		bake_cookie(this.state.cookieKey, this.state.cookieValue)
	}

	submitHandler = event => {
		event.preventDefault();
		const username = this.usernameEl.current.value;
		const password = this.passwordEl.current.value;

		if(username.trim().length === 0 || password.trim().length === 0){
			return;
		}

		let requestbody = {
			query: `
				query {
					login(username: "${username}", password: "${password}"){
						userId
						token
						tokenExpiration
					}
				}
			`
		};

		fetch('http://localhost:4000/graphql', {
			method: "POST",
			body: JSON.stringify(requestbody),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if(res.status !== 200 && res.status !== 201){
				throw new Error('Failed');
			}
			return res.json();
		})
		.then(resData => {
			this.setCookie()
			this.getData()
		})
		.catch(err => {
			console.log(err);
		});
	};

	getData = () => {
		let requestbody = {
			query: ` 
				query {
					bookings {
						_id
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
			body: JSON.stringify(requestbody),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if(res.status !== 200 && res.status !== 201){
				throw new Error('Failed');
			}
			return res.json();
		}).then(resData => {
			console.log(resData)
			this.setState({bookingDetails: resData.data.bookings})
			this.setState({isLogin: true });
		}).catch(err => {
			console.log(err)
		})
	}

	removeBooking = (event) => {
		let key = event.target.value
		console.log(key)
		let requestbody = {
			query: `
				mutation {
					cancelBooking(bookingId: "${key}"){
						name
						date
					}
				}
			`
		}

		fetch('http://localhost:4000/graphql', {
			method: "POST",
			body: JSON.stringify(requestbody),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if(res.status !== 200 && res.status !== 201){
				throw new Error('Failed');
			}
			return res.json();
		}).then(resData => {
			console.log(resData)
			this.getData()
		}).catch(err => {
			console.log(err)
		});
	}


	generatingData = () => {
		let bookingDetails = this.state.bookingDetails;
		let tableRow = bookingDetails.map(info => {	
			let { date, email, haircutType, name, shaveType, time, _id } = info
			return(
				<tr key={_id}>
					<td>{date}</td>
					<td>{time}</td>
					<td>{name}</td>
					<td>{email}</td>
					<td>{haircutType}</td>
					<td>{shaveType}</td>
					<td className="delete-b"><button onClick={this.removeBooking} value={_id}>Delete</button></td>
				</tr>
			);
		})
		return React.createElement('tbody', {}, tableRow)
	}

	logoutsubmitHandler = () => {
		this.setState({isLogin: false})
		delete_cookie(this.state.cookieKey)
	}

	bookedAppointmentTabel = () => {
		
		return(
			<React.Fragment>
			<div className='logout-btn'>
			<button onClick={this.logoutsubmitHandler} >Log Out</button>
			</div>
			<div className="booked-info">
				<h3>Booking Details</h3>
				<Table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Time</th>
							<th>Name</th>
							<th>Email</th>
							<th>Haircut</th>
							<th>ShaveType</th>
							<th>Delete Booking</th>
						</tr>
					</thead>
						{this.generatingData()}
				</Table>
			</div>
			</React.Fragment>
		);
	}

	loginForm = () => {
		return(
			<div className="login-form">
				<form onSubmit={this.submitHandler}>
				<ul>
				<li>
					<label>
						Username
						<input type='text' name='username' ref={this.usernameEl}/>
					</label>
					</li>
					<li>
					<label>
						Password
						<input type="password" name="password" ref={this.passwordEl} />
					</label>
					</li>
					<li>
						<input type="submit" value="submit" />
					</li>
					</ul>
				</form>
			</div>
		);
	}

	componentDidMount() {
		if(read_cookie(this.state.cookieKey) === this.state.cookieValue){
			this.getData()
		}
	}

	componentWillUnmount() {
		delete_cookie(this.state.cookieKey)
	}

	render(){
		return(
			<React.Fragment>
				{!this.state.isLogin
				? this.loginForm()
				: this.bookedAppointmentTabel()
				}
			</React.Fragment>
		)
	}

}
export default Admin;