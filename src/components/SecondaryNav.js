import React from "react"; 
import NavLinks from "./NavLinks.js"; 

const SecondaryNav = () => {

	const linkItems= ["YOUR LIFE", "PATIENTS & FAMILIES", "EDUCATION RESOURCES", "SUPPORT SERVICES", "HEALTHCARE PROFESSIONALS", "GLOSSARY"]; 

	return (
		<NavLinks 
		   linkItems={linkItems}
		   backGroundColor="#c3e6fc"
		   height="60px"
		   border="1px solid white"
		   fontSize="1.2vw"	   
		/>
		)
}

export default SecondaryNav; 

