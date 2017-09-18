import React from "react"; 
const image = require("../Data/images/alflogo.jpg")


const Logo = () => {

	const logoContainerStyle ={
		padding: 10, 
		// height: 50
	}

	const imageStyle ={
		// border: "2px solid black", 
		height: 60, 
		width: 60
	}

	return (
		<div className="logo" style={logoContainerStyle}>
			<img style={imageStyle} src={image} alt="American Liver Foundation"/>
		</div>
		
		)
}

export default Logo; 
