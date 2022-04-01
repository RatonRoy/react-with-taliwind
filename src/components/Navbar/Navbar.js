import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Links from '../Links/Links';
import './Navbar.css';
const Navbar = () => {
	const routes = [
		{id : 1, name : "Home", link : '\Home'}, 
		{id : 2, name : "Products", link : '\Products'}, 
		{id : 3, name : "Shops", link : '\Shops'}, 
		{id : 4, name : "Deals", link : '\Deals'}, 
		{id : 5, name : "About Us", link : '\About Us'} 
	]
	const [open, setOpen] = useState(false);
	return (
		<nav className ='relative bg-blue-500 py-4'>
			<div className="navBar-container">
				<div className="w-6 h-6 md:hidden" onClick={() => {setOpen(!open)}}>
					{open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
				</div>
				<ul className= {`md:flex text-white justify-center md:static absolute duration-200 ease-in-out bg-blue-500 sm:text-center ${open ? 'top-14' : 'top-[-123px]'}`}>
					{
						routes.map(route => <Links route={route}
						key = {route.id}></Links>)
					}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;