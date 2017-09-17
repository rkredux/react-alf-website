import React from "react";
// import Image from  
const image = require("../Data/images/oldage.jpg"); 

const Carousel = () => {

	console.log(image); 

	const carouselStyle ={
		// border: "2px solid", 
		background: `url(${image})`, 
		height: 250, 
		marginTop: 0
	}

	return (
		<section style={carouselStyle}>
			<div>
				<h2>Ways To Give</h2>
				<p>With the support of donors like you, the American Liver Foundation can continue to promote education about liver wellness, provide assistance to those affected by and at risk for liver disease, and work to find cures and better treatments for all diseases of the liver. Help us to continue this vital work and make a donation now. </p>
			</div>
		</section>
		)
}

export default Carousel; 
