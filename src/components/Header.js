import React from "react"; 



const SiteHeader = () => {

    const headerStyle = {
    	backgroundColor: "#222", 
    	height: 30, 
    	padding: 20, 
    	color: "white", 
    	display: "flex", 
    	justifyContent: "center", 
    	letterSpacing: 1
    }

    const divStyle ={
    	fontSize: 15,
    	padding: 10
    }

	return (
		<header style={headerStyle}>
			<div style={divStyle}>QUESTIONS ABOUT LIVER DISEASE?</div>
			<div style={divStyle}> NEED SUPPORT OR RESOURCE INFO?</div>
			<div style={divStyle}>CALL OUR HELPLINE AT 1-800-465-4837</div>
		</header>
		)
}

export default SiteHeader; 




 