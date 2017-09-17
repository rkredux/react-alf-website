import React from "react"; 
import WaysToGive from "../Data/WaysToGive.js"; 
import Article from "./Article.js"; 

const DocumentLinks = () => {

	const sectionStyle ={
		display: "flex", 
		flexWrap: "wrap"
	}

	const articleStyle = {
		border: "2px solid"
	}


	return(
		<section style={sectionStyle}>
		  {WaysToGive.map((elm, index) => <Article style={articleStyle} key={index} heading={elm.heading} content={elm.description} />)}
		</section>
		)
}

export default DocumentLinks; 
