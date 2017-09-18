import React from "react";
// import Image from  
const image = require("../Data/images/oldage.jpg"); 

const Carousel = () => {

	// console.log(image); 

	const carouselStyle ={ 
		background: `url(${image})`, 
		height: 400, 
		margin: 0, 
		borderTop: ".5px solid white", 
		position: "relative"
	}

	const contentStyle ={
		position: "absolute", 
		top: 50, 
		left:100
	}

	const headerStyle ={
		fontWeight: "lighter", 
		fontSize: 40, 
		letterSpacing: 1
	}


	const paraStyle = {
		maxWidth: 350, 
		fontSize: 15, 
		letterSpacing: 1, 
		wordSpacing: 1, 
		lineHeight:1.5
	}

	return (
		<section style={carouselStyle}>
			<div style={contentStyle}>
				<h2 style={headerStyle}>WAYS TO GIVE</h2>
				<p style={paraStyle}>With the support of donors like you, the American Liver Foundation can continue to promote education about liver wellness, provide assistance to those affected by and at risk for liver disease, and work to find cures and better treatments for all diseases of the liver. Help us to continue this vital work and make a donation now. </p>
			</div>
		</section>
		)
}

export default Carousel; 



//change image in media queries for smaller 
//screen size or use SVG