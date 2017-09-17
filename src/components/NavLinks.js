import React from "react"; 

const NavLinks = (props) => {

	const unorderedStyle = {
		display: "flex", 
		justifyContent:'center', 
		listStyle: "none", 
		margin: 0, 
		paddingLeft: 0, 
		backgroundColor: props.backGroundColor, 
		height: props.height
	}

	const listStyle = {
		display: "flex", 
		flexDirection: "column", 
		justifyContent: "center",  
		flex: 1
	}

	const linkStyle ={
		textDecoration: "none",
		color: "black", 
		fontSize: props.fontSize,  
		borderRight: props.border, 
		padding: 5
	}


	return (		
			<ul style={unorderedStyle}>
			 {props.linkItems.map((elm) => 
			 	<li 
			 		style={listStyle} 
			 		key={elm}>
				 		<a 
				 			style={linkStyle} 
				 			href="#">
				 			{elm}
				 		</a>
			 	</li>
			 	)}
			</ul>	
	)

}

export default NavLinks; 

//props is an array of link items(this is what it must be called) 
//to be rendered in the navigation bar. props type is compulsory. 
