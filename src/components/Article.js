import React from "react"; 

const Article = (props) => {

	const articleStyle ={
		border: "2px solid"
	}

	return(
		<article style={articleStyle}>
			<h4>{props.heading}</h4>
			<p>{props.content}</p>
		</article>

		)

}


export default Article; 

//declare prop types to be an object please. props must have
//heading = string value and content= string value 
//prop type is compulsory
