import React, { Component } from 'react';
import SiteHeader from "./components/Header.js"; 
import PrimaryNav from "./components/PrimaryNav.js"; 
import SecondaryNav from "./components/SecondaryNav.js"; 
import Carousel from "./components/Carousel.js"; 
import DocumentLinks from "./components/DocumentLinks.js";
import Testimonial from "./components/Testimonial.js";
import SiteFooter from "./components/SiteFooter.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <SiteHeader/>
        <PrimaryNav></PrimaryNav>
        <SecondaryNav></SecondaryNav>
        <Carousel></Carousel>
        <DocumentLinks></DocumentLinks>
        <Testimonial></Testimonial>
        <SiteFooter></SiteFooter>
      </div>
    );
  }
}

export default App;
