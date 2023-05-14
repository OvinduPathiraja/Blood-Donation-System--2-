import React from "react";
import "./Location2.css";
import Backbutton from "./Backbutton";
import image from "./images/backgroundimg.webp";


export default function Location2() {   
      return (
        <div className="container">
          <img src={image} />
          <div className="infocontainer">
            <h4>YOU HAVE SELECTED <span className="info">xxxxxxx</span> AS YOUR CLOSEST DISTRICT</h4>
            <hr/>
            <h4>THESE ARE THE BLOOD BANKS AVAILABLE</h4>            
            <Backbutton/>
          </div>
      
 
      </div>
       
      );
    }
  