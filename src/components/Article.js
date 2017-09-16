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
