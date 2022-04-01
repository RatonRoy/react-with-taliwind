import React from 'react';
import PricingOption from '../PricingOption/PricingOption';
import './Pricing.css';

const Pricing = () => {
	const pricingOptions = [
        {id: 1, name: 'Free', price: 0, benefits: [
            'lifetime free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 2, name: 'Regular', price: 9.99, benefits: [
            'everything on free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals',
            'crazy deals'
        ]},
        {id: 3, name: 'Premium', price: 19.99, benefits: [
            'everything on Regular', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals',
            'crazy deals'
        ]},
    ]
	return (
		<div className='pricing-container'>
			<h1 className='title'> Our Features </h1> 
			<div className="pricing-item">
				{
					pricingOptions.map(option => <PricingOption
					option = {option} key = {option.id}></PricingOption>)
				}			
			</div>
		</div>
	);
};

export default Pricing;