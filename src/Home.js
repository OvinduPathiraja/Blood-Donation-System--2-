import React,{useState,useEffect} from 'react'
import Icons from './Icons'
import SignUpAdmin from './SignUpAdmin'
import SignUpDonor from './SignUpDonor'
import Login from './Login'
import DonorLogin from './DonorLogin'
import './Home.css'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import SignUpHospitalAndBloodBank from './SignUpHospitalAndBloodBank'
import Dashboard from './Dashboard'
import SignUp from './SignUp';
import './Forms.css';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);
  const [content, setContent] = useState(<SignUp value={'donor'} />);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);


  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };
  
  const handleSidebarButtonClick = (userType) => {
    setUserType(userType);
    updateContent(userType);
   
  };

  const handleNavbarButtonClick = (buttonType) => {
    if (userType === '') {
      if (buttonType === 'login') {
        setContent(<Login value={'donor'}/>);
      
      } else if (buttonType === 'signup') {
        setContent(<SignUp value={'donor'} />);
      }
    } else {
      if (buttonType === 'login') {
         switch(userType){
          case 'donor':
            setContent(<Login value={userType}/>)
          break;
          case 'admin':
            setContent(<Login value={userType}/>)
          break;
          case 'hospital':
            setContent(<Login value={userType}/>)
          break;
          case 'bloodBank':
            setContent(<Login value={userType}/>)
          break;
        }
       
       
      } else if (buttonType === 'signup') {
        switch(userType){
          case 'donor':
            setContent(<SignUp value={userType} />)
          break;
          case 'admin':
            setContent(<SignUp value={userType} />) 
           
          break;
          case 'hospital':
            setContent(<SignUp value={userType} />)
          break;
          case 'bloodBank':
            setContent(<SignUp value={userType} />)
          break;
        }
     
      }
    }
  };

  const updateContent = (userType) => {
    switch(userType){
      case 'donor':
        setContent(<SignUp value={userType} />)
      break;
      case 'admin':
        setContent(<SignUp value={userType} />)
      break;
      case 'hospital':
        setContent(<SignUp value={userType} />)
      break;
      case 'bloodBank':
        setContent(<SignUp value={userType} />)
      break;
    }
  
  };
  

  return (
    <div className="container">
       <div className="LeftSection">
          <div><button onClick={handleButtonClick}>Select User</button></div>
            <div className={`IconSection ${isClicked ? 'visible' : ''}`} >
                <div className='IconBorder'>
                   <div className={`SelectedUser ${isClicked ? 'visible' : ''}`}>{userType === ''?(<p>Please Select A User </p>):(<p>You have selected {userType}</p>)}</div>
                   <div ><button  className={`IconBtn firstButton ${isClicked ? 'visible' : ''}`} onClick={() => handleSidebarButtonClick('donor')}>Donor</button></div >
                   <div ><button  className={`IconBtn ${isClicked ? 'visible' : ''}`} onClick={() => handleSidebarButtonClick('admin')}>Admin</button></div>
                   <div ><button  className={`IconBtn ${isClicked ? 'visible' : ''}`} onClick={() => handleSidebarButtonClick('hospital')}>Hospital</button></div>
                   <div ><button  className={`IconBtn lastButton ${isClicked ? 'visible' : ''}`} onClick={() => handleSidebarButtonClick('bloodBank')}>Blood Bank</button></div>
                </div>
         </div>
      </div>
      <div className="RightSection">
         <div className="formNav">
             <div ><button className='formBtn' onClick={() => handleNavbarButtonClick('login')}>Login</button></div>
             <div > < button className='formBtn'  onClick={() => handleNavbarButtonClick('signup')}>Signup</button></div>
         </div>
         <div className="formContainer"><div>{content}</div></div>
    </div>
    </div>
    
  )
}
