import React from 'react';
import './Benefit.css'; 

const Benefit = (props) => {
	return (
		<div>
			<ul>
				<li>{ props.benefit}</li>
			</ul>
		</div>
	);
};

export default Benefit;