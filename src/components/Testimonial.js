import React from "react"; 

const  Testimonial= () => {

	const sectionStyle={
		// border: "2px solid red",
		background: "#c3e6fc", 
		color: "white", 
		letterSpacing: 1,
		paddingTop: 50, 
		paddingBottom: 25 
	}

	const quoteStyle ={ 
		fontSize: 20, 
		fontStyle: "italic", 
		lineHeight: 2, 
		wordSpacing: 3, 
		maxWidth: 600, 
		margin: "auto", 
		padding: 20
	}

	const authorStyle={
		fontSize: 15, 
		marginBottom: 0, 
		fontWeight: "bold"
	}

	const detailStyle ={
		margin: 0, 
		fontSize: 12, 
		marginTop: 0
	}

	return (
		<section style={sectionStyle}>
			<p style={quoteStyle}>"When I got a liver cancer diagnosis, I was terrified. You were the only person to answer all of my questions. You gave me time and hope."</p>
			<p style={authorStyle}>ANGELA</p>
			<p style={detailStyle}>CALLER TO OUR FREE HELPLINE</p>
		</section>
		)
}

export default Testimonial; 
