import React from "react";
import Navigation from "./Navigation";
import './Donorpoints.css';

export default function Donorpoints(props) {
     return (
       <div>
         <Navigation user="donor"/>
         <div className="box">
          <br/>
          <p className="space"></p>
         <h1 className="heading">DONOR POINTS</h1>
         <hr></hr>
         <p className="paragraph">DONOR POINTS EARNED ARE:</p>
         <p className="minibox">{props.points} pints</p>
         </div>
       </div>
     );
}