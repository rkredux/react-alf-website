import React from "react"; 
import Logo from "./Logo.js"; 
import NavLinks from "./NavLinks.js"; 
import SearchBar from "./SearchBar.js"; 

const PrimaryNav = () => {

	const primaryNavStyle = {
		display: "flex", 
		justifyContent: 'space-between', 
		border: "2px solid"
	}

	const linkItems= ["ABOUT US", "EVENTS", "FORMS", "WAYS TO GIVE", "CONTACT"]; 

	return (
		<nav style={primaryNavStyle}>
			<Logo/>
			<NavLinks 
			   linkItems={linkItems}
			   // backGroundColor="#c3e6fc"
			   height="60px"
			   // border="1px solid white"
			   fontSize="1.2vw"	   
			/>
			<SearchBar/>
		</nav>
		)

}

export default PrimaryNav; 

