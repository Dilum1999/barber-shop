import React from 'react';
import { Link } from 'react-router-dom';

 function NotFound(){
	 return(
		 <div>
		 		<h1>404 Not found</h1>
				<Link to="/" >Home Page</Link>
		 </div>
	 );
 };

 export default NotFound;