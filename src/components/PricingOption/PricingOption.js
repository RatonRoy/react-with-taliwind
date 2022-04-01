import React from 'react';
import Benefit from '../Benefit/Benefit';
import './PricingOption.css';

const PricingOption = (props) => {
	const { name, price, benefits} = props.option; 
	return (
		<div className='PricingOption'>
			<div className="price-package">
				<div className="price-header">
					<h1 className="feature-name"> {name} </h1>
					<h3 className="feature-price"> {price} </h3>
				</div>
				<div className="benefits-container">
					{
						benefits.map(benefit => <Benefit
						benefit = {benefit}></Benefit>)
					}
				</div>
			</div>
		</div>
	);
};

export default PricingOption;