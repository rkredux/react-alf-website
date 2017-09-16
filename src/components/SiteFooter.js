import React from "react"; 
import Article from "./Article.js"; 
import NavLinks from "./NavLinks.js"; 

const  SiteFooter= () => {

	const linkItems1 = ["Privacy Policy", "RSS Feeds", "Careers" , "Tax Information" , "Media and Press Room"]; 
	const linkItems2 = ["Facebook", "Twitter", "Linkedin", "Youtube", "Instagram"]; 

	return(
	  <nav>
		<NavLinks linkItems={linkItems1}/>
		<div>© Copyright 2016 American Liver Foundation. All Rights Reserved. The American Liver Foundation is a member of the World Hepatitis Alliance.</div>
		<NavLinks linkItems={linkItems2}/>
	  </nav>
		)
}

export default SiteFooter; 
