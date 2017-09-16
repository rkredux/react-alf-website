import React from "react"; 
import WaysToGive from "../Data/WaysToGive.js"; 
import Article from "./Article.js"; 

const DocumentLinks = () => {

	// console.log(WaysToGive); 
	return(
		<section>
		  {WaysToGive.map((elm, index) => <Article key={index} heading={elm.heading} content={elm.description} />)}
		</section>
		)
}

export default DocumentLinks; 
