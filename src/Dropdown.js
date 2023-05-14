import React from 'react';
import './Dropdown.css'; 
import { useState } from "react";


function Dropdown(props) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [optionSelected, setOptionSelected] = useState("");

  const handleClick = (choice) => {
    setOptionSelected(choice);
    setOpenDropdown(false);
    props.onSelect(choice);
  };

  return (
    <div className="dropdown">
      <button className="dropdownbutton" onClick={() => setOpenDropdown(!openDropdown)}>
        {props.title}
      </button>
      {openDropdown && (
        <div className="dropdowninfo">
          {props.items.map((item, index) => (
            <div key={index} onClick={() => handleClick(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
      {optionSelected && (
        <div className="option">You selected: {optionSelected}</div>
      )}
    </div>
  );
}

export default Dropdown;