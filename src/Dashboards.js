import React from "react";
import "./Dashboards.css";
import Navigation from "./Navigation";
import  profilepic from "./images/common.png";

function Dashboards(props) {

  let choice = 'donor';
  let content = '';


  switch(choice){
    case 'donor':
      content = <div>
      <Navigation user="donor"/>
      <div className="container">
        <div className="dashboard">
          <h1>WELCOME {props.name}!</h1>
          <h2>YOUR DASHBOARD</h2>
          <div className='iconImage'>
            <img src={profilepic} className='donorIcon' />
            </div>
        </div>
        <div className="dashboardinfo">
          <h3>PERSONAL INFORMATION</h3>
          <ul>
            <li>
              NAME: <span>{props.name}</span>
            </li>
            <li>
              DATE OF BIRTH: {props.date}
            </li>
            <li>
              DONOR NUMBER: {props.number}
            </li>
            <li>
              ADDRESS: {props.address}
            </li>
            <li>
              TELEPHONE: {props.telephone}
            </li>
            <li>
              BLOOD TYPE:{props.bloodType}
            </li>
          </ul>

        </div>

      </div>

</div>
  break;
  case 'admin':
    content=<div>
    <Navigation user="admin"/>
    <div className="container">
      <div className="dashboard">
        <h1>WELCOME {props.name}!</h1>
        <h2>YOUR DASHBOARD</h2>
        <div className='iconImage'>
            <img src={profilepic}  className='adminIcon' />
            </div>
      </div>
      <div className="dashboardinfo">
        <h3>PERSONAL INFORMATION</h3>
        <ul>
          <li>
            NAME: {props.name}
          </li>
          <hr/>
          <div class="table">
          <li>
            Number of pending hospital requests   {props.pendinghospital}
          </li>
          <li>
          Number of pending blood bank requests   {props.pendingbloodbank}
          </li>
          <li>
          Number of accepted hospital requests  {props.acceptedhospital}
          </li>
          <li>
          Number of accepted blood bank requests  {props.acceptedbloodbank}
          </li>
          </div>
        </ul>
      </div>
    </div>
</div>
break;
case 'hospital':
  content=<div>
   <Navigation user="hospital"/>
  <div className="container">
    <div className="dashboard">
      <h1>WELCOME {props.name}!</h1>
      <h2>YOUR DASHBOARD</h2>
      <div className='iconImage'>
            <img src={profilepic}  className='hospitalIcon' />
            </div>
    </div>
    <div className="dashboardinfo">
      <h3>PERSONAL INFORMATION</h3>
      <ul>
        <li>
          NAME OF HOSPITAL: {props.name}
        </li>
        <li>
         DISTRICT OF THE HOSPITAL: {props.district}
        </li>
        <li>
          TELEPHONE NUMBER: {props.telephone}
        </li>
        <li>
          ADDRESS: {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;
case 'bloodbank':
  content=<div>
         <Navigation user="bloodbank"/>
  <div className="container">
    <div className="dashboard">
      <h1>WELCOME {props.name}!</h1>
      <h2>YOUR DASHBOARD</h2>
      <div className='iconImage'>
            <img src={profilepic}  className='bloodBankIcon' />
            </div>
    </div>
    <div className="dashboardinfo">
      <h3>PERSONAL INFORMATION</h3>
      <ul>
        <li>
          NAME OF BLOOD BANK: {props.name}
        </li>
        <li>
         DISTRICT OF BLOOD BANK:{props.district}
        </li>
        <li>
          TELEPHONE:{props.telephone}
        </li>
        <li>
          ADDRESS: {props.address}
        </li>
      </ul>
    </div>
  </div>
</div>
break;


  }
  return (
<div>
{content}
</div>
  );
}

export default Dashboards;

