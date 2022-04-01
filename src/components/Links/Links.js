import React from 'react';

const Links = (props) => {
	const { name, link } = props.route;
	return (
		<div>
			<li className='mr-9 f-s-10'>
				<a href={link}>{name}</a>
			</li>
		</div>
	);
};

export default Links;