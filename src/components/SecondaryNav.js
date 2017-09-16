import React from "react"; 
import NavLinks from "./NavLinks.js"; 

const SecondaryNav = () => {

	const linkItems= ["YOUR LIFE", "PATIENTS & FAMILIES", "EDUCATION RESOURCES", "SUPPORT SERVICES", "HEALTHCARE PROFESSIONALS", "GLOSSARY"]; 

	return (
		<NavLinks linkItems={linkItems}/>
		)
}

export default SecondaryNav; 

