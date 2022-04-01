import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import './Header.css';

const Header = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="heder-info">
				<h1 className="title">What are you thinking Please take our products </h1>
			</div>
		</div>
	);
};

export default Header;