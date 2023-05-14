import React, { useState } from 'react';
import './Location1.css';
import Navigation from "./Navigation";

function Location1() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    <Navigation userType="donor"/>
    <div className="container">

      <h1>FIND NEAREST BLOOD BANK</h1>
      <br/>
      <h3>SELECT THE NEAREST DISTRICT TO YOUR LOCATION</h3>
      <div class="dropdowncontainer">
      <div className="dropdowncontent">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="1">Ampara</option>
          <option value="2">Anuradhapura</option>
          <option value="3">Badulla</option>
          <option value="4">Batticaloa</option>
          <option value="5">Colombo</option>
          <option value="6">Galle</option>
          <option value="7">Gampaha</option>
          <option value="8">Hambantota</option>
          <option value="9">Jaffna</option>
          <option value="10">Kalutara</option>
          <option value="11">Kandy</option>
          <option value="12">Kegalla</option>
          <option value="13">Kilinochchi</option>
          <option value="14">Kurunegala</option>
          <option value="15">Mannar</option>
          <option value="16">Matale</option>
          <option value="17">Matara</option>
          <option value="18">Moneragala</option>
          <option value="19">Mullaitivu</option>
          <option value="20">Nuwara Eliya</option>
          <option value="21">Polonnaruwa</option>
          <option value="22">Puttalam</option>
          <option value="23">Ratnapura</option>
          <option value="24">Trincomalee</option>
          <option value="25">Vavuniya</option>
        </select>
        <span className="custom-arrow"></span>
        <button>NEXT</button>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Location1;
