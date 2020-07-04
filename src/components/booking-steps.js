import React from 'react';
import './booking-steps.css';
import calendarPic from '../images/bk-bg.png';

const BookingSteps = () => {
	return(
		<div className="con">
			<h5>Book an appointment with the following steps</h5>
				<ul className="steps">
					<li>Click the date that you want to book</li>
					<li>Then you will be asked to select a time slot</li>
					<li>Finally, fill the details required and submit</li>
					<li>Thank you!</li>
				</ul>
				<img src={calendarPic} alt="calendar" width="150px" height="auto"/>
		</div>
	);
}
export default BookingSteps;