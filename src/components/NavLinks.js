import React from "react"; 



const NavLinks = (props) => {

	const unorderedStyle = {
			border: "2px solid", 
			display: "flex", 
			justifyContent:'space-between', 
			listStyle: "none", 
			padding: 0, 
			margin: 0
	}

	return (		
			 <ul style={unorderedStyle}>
			 {props.linkItems.map((elm) => <li key={elm}><a href="#">{elm}</a></li>)}
			 </ul>	
	)

}


export default NavLinks; 

//props is an array of link items to be rendered in the 
//navigation bar. props type is compulsory. 
