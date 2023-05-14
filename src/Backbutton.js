import React from 'react';
import './Backbutton.css';
import { useHistory } from 'react-router-dom';

function Backbutton(){
  const history = useHistory();
  const goingback = () => {
    history.goBack();
  };

  return (
    <div className='Back'>
      <button onClick={goingback}>BACK</button>
    </div>
  );
};

export default Backbutton; 