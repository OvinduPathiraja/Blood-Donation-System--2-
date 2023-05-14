import React,{useState} from 'react'
import './Forms.css'
import donorProfile from './images/donorProfile.png';


export default function SignUpAdmin(props) {
    
    const { value: user } = props;
    const [values, setValues] = useState({
      nationalId: '',
      fullName:'',
      userName: '',
      nameOfHospitalOrBloodBank:'',
      gender:'',
      dateOfBirth:'',
      bloodType:'',
      district:'',
      telephone:'',
      address:'',
      password: '',

    });
    const [errors, setErrors] = useState({});
    const [validPassword, setValidPassword] = useState(false);
    const [validNationalId, setValidNationalId] = useState(false);
    const [validDateOfBirth, setvalidDateOfBirth] = useState(false);
    const [validtelephone, setValidTelephone]=useState(false);

    const validateForm = (values, user) => {
      const newErrors = {};
      if(user === 'donor'){
        if (!values.nationalId) {
          newErrors.nationalId = 'NIC is required';
        }
        if(!values.fullName){
          newErrors.fullName = 'Full name is required';
        }
        if (!values.dateOfBirth) {
          newErrors.dateOfBirth = 'Date of Birth is required';
        } else {
          const currentDate = new Date();
          const selectedDate = new Date(values.dateOfBirth);
    
          if (selectedDate > currentDate) {
             newErrors.dateOfBirth = 'Invalid Date Of Birth';
          } else {
            const diffInYears = (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365);
            if (diffInYears < 18) {
              newErrors.dateOfBirth = 'You must be at least 18 years old to sign up';
            }
          }
        }
        
        if (!values.telephone) {
          newErrors.telephone = 'Telephone Number is required';
        } else if (!/^\d{10}$/.test(values.telephone)) {
          newErrors.telephone = 'Telephone Number should be 10 digits';
        }  

        if(!values.password) {
          newErrors.password = 'Password is required';
        } else if(values.password.length <= 7) {
          newErrors.password = 'Password should be at least 8 characters';
        }
       }
       else {
        if (!values.userName) {
          newErrors.userName = 'Username is required';
        }
        if(!values.password) {
          newErrors.password = 'Password is required';
        } else if(values.password.length <= 7) {
          newErrors.password = 'Password should be at least 8 characters';
        }
       }

      if(user === 'bloodBank'|| user ==='hospital'){
       
        if(!values.address){
          newErrors.address = 'Address is required';
        }
        if (!values.telephone) {
          newErrors.telephone = 'Telephone Number is required';
        } else if (!/^\d{10}$/.test(values.telephone)) {
          newErrors.telephone = 'Telephone Number should be 10 digits';
        }  

        
      }
      
      if(user === 'bloodBank'|| user ==='hospital'){
       
        if(!values.nameOfHospitalOrBloodBank){
          newErrors.nameOfHospitalOrBloodBank = `Name Of ${user} is required`;
        }
        if(!values.address){
          newErrors.address = 'Address is required';
        }
        
      }
    
     
  
  
      return newErrors;
    };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: '' });
     
      switch(name){
        case 'password':
          if (value.length <= 7) {
            setValidPassword(false);
            setErrors({ ...errors, password: 'Password should be at least 8 characters' });
          }
          else if(!value){
            setValidPassword(false);
          }
          else{
            setValidPassword(true);
          }
        break;

        case 'dateOfBirth':
          if (name === 'dateOfBirth') {
            const currentDate = new Date();
            const selectedDate = new Date(value);
        
            if (selectedDate > currentDate) {
              setvalidDateOfBirth(false);
              setErrors({ ...errors, dateOfBirth: 'Invalid Date Of Birth' });
            } else {
              const diffInYears = (currentDate - selectedDate) / (1000 * 60 * 60 * 24 * 365);
              if (diffInYears < 18) {
                setvalidDateOfBirth(false);
                setErrors({ ...errors, dateOfBirth: 'You must be at least 18 years old to sign up' });
    
              } else {
                setvalidDateOfBirth(true);
                setErrors({ ...errors, dateOfBirth: '' }); 
              }
            }
          }

          break;

          case 'telephone':
            if (name === 'telephone') {
             
              if (!value) {
                setValidTelephone(false);
                setErrors({ ...errors, telephone: 'Telephone Number is required' });
              } else if (!/^\d{10}$/.test(value)) {
                setValidTelephone(false);
                setErrors({ ...errors, telephone: 'Telephone Number should be 10 digits' });
              } else {
                setValidTelephone(true);
                setErrors({ ...errors, telephone: '' }); 
              }
            }

        
          
        break;
      }
    
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = validateForm(values, user);
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        
        switch (user) {
          case 'donor':
            window.location.href = '/donorDashboard';
            console.log('admin login successful');
            break;
          case 'admin':
            window.location.href = '/adminDashboard';
            console.log('admin login successful');
            break;
          case 'hospital':
            window.location.href = '/hospitalDashboard';
            console.log('hospital login successful');
            break;
          case 'bloodBank':
            window.location.href = '/bloodBankDashboard';
            console.log('Blood bank login successful');
            break;
          default:
            window.location.href = '/donorDashboard';
            console.log('Donor login successful');
            break;
        }
      }
   
    }

  
 return(
  <>
 
  <form className="Form" onSubmit={handleSubmit}>
          <div>
          {user==='donor' && (<div className='formHeadingContent'><div className='formHeading'><h2>Donor SignUp</h2></div><div className='formImg'><img src={donorProfile}  className='donorIcon' /></div> </div>)}
           {user==='admin' && (<div className='formHeadingContent'><div className='formHeading'><h2>Admin SignUp</h2></div><div className='formImg'><img src={donorProfile}  className='adminIcon' /></div> </div>)}
           {user==='hospital' && (<div className='formHeadingContent'><div className='formHeading'><h2>Hospital SignUp </h2></div><div className='formImg'><img src={donorProfile}  className='hospitalIcon' /></div> </div>)}
           {user==='bloodBank' && (<div className='formHeadingContent'><div className='formHeading'><h2>Blood Bank SignUp</h2></div><div className='formImg'><img src={donorProfile}  className='bloodBankIcon' /></div> </div>)}
          </div>
          {user === 'donor' && (
            <>
          <div className='row'>
            <div  className='rowContent'><label className='formlabel'>National Identity Card (NIC):</label></div>
            <span className='feedBack'>{errors.nationalId && <span className='error'>{errors.nationalId}</span>}</span>
            <div  className='rowContent'><input className='forminput' placeholder="Enter your NIC"  type="text" name="nationalId" value={values.nationalId} onChange={handleChange}/></div>
          </div>

          <div className='row'>
            
              <div  className='rowContent'> <label className='formlabel'>Full Name :</label></div>
              <span className='feedBack'>{errors.fullName && <span className='error'>{errors.fullName}</span>}</span>
              <div  className='rowContent'><input className='forminput' placeholder="Enter your Full Name"  type="text" name="fullName" value={values.fullName} onChange={handleChange}/></div>
         </div>

         <div className='row'>
              <div  className='rowContent'> <label className='formlabel'>Gender :</label></div>
              <span><label> Male: <input  type="radio"  name="gender" value="male" checked={values.gender === 'male'} onChange={handleChange}/></label>
              <label>Female: <input  type="radio" name="gender" value="female" checked={values.gender === 'female'} onChange={handleChange}/></label>
              </span>
         </div>

        <div className='row'>
          < div > <div  className='rowContent'> <label className='formlabel'>Blood Type :</label></div>
            <select  name="bloodType" value={values.bloodType} onChange={handleChange}>
             <option >Select Blood Type</option>
             <option value="A+">A+</option>
             <option value="A-">A-</option>
             <option value="B+">B+</option>
             <option value="B-">B-</option>
             <option value="AB+">AB+</option>
             <option value="AB-">AB-</option>
             <option value="O+">O+</option>
             <option value="O-">O-</option>
             </select>
          </div>
        </div>
            
            
            {/*
             <div className='row'>
              {errors.nationalId && <p>{errors.nationalId}</p>}
              {validNationalId && <p>NIC is valid</p>}
              <label className='formlabel'> National Identity Card (NIC):
              <input className='forminput' type="text" name="nationalId" value={values.nationalId} onChange={handleChange}/>
              </label>
          </div>

            <div className='row'>
              {errors.fullName && <p>{errors.fullName}</p>}
              {validNationalId && <p>NIC is valid</p>}
              <label className='formlabel'>Full Name :
              <input className='forminput' type="text" name="fullName" value={values.fullName} onChange={handleChange}/>
              </label>
            </div>

            <div className='row'>
              <label> Gender:<label>
              Male</label><label>
              <input  type="radio"  name="gender" value="male" checked={values.gender === 'male'} onChange={handleChange}/>
              Female</label><label>
              <input  type="radio" name="gender" value="female" checked={values.gender === 'female'} onChange={handleChange}/>
             
            </label></label>
            </div>  

           <div >Blood Type:
             <select  name="bloodType" value={values.bloodType} onChange={handleChange}>
             <option value="">Select Blood Type</option>
             <option value="A+">A+</option>
             <option value="A-">A-</option>
             <option value="B+">B+</option>
             <option value="B-">B-</option>
             <option value="AB+">AB+</option>
             <option value="AB-">AB-</option>
             <option value="O+">O+</option>
             <option value="O-">O-</option>
             </select></div>

          <div className='row'>
          {errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
          {validDateOfBirth && <p>Date Of Birth is Valid</p>}
          <label className='formlabel'>Date of Birth:
          <input className='forminput' type="date" name="dateOfBirth" value={values.dateOfBirth} onChange={handleChange}/>
          </label>
          </div>*/}
          </>
          )}

          {(user !== 'donor'|| user == 'admin' || user == 'hospital' || user == 'bloodBank' ) && (
            <>
            <div className='row'>
              <div className='rowContent'><label className='formlabel'> Username: </label></div>
              <span className='feedBack'>{errors.userName && <span className='error'>{errors.userName}</span>}</span>
              <div className='rowContent'> <input className='forminput' placeholder="Enter your Username" type="text" name="userName" value={values.userName} onChange={handleChange}/></div>
            </div>
             {/*<div className='row'>
              {errors.userName && <p>{errors.userName}</p>}
              <label className='formlabel'> Username:
              <input className='forminput' type="text" name="userName" value={values.userName} onChange={handleChange}/>
              </label>
          </div>*/}
          </>
          )} 

          {(user !== 'admin' && user !== 'donor' || user === 'hospital' || user === 'bloodBank' ) && (
            <>
            <div className='row'>
              <div className='rowContent'><label className='formlabel'> Name of {user}: </label></div>
              <span className='feedBack'>{errors.nameOfHospitalOrBloodBank && <span className='error'>{errors.nameOfHospitalOrBloodBank}</span>}</span>
              <div className='rowContent'> <input className='forminput' placeholder="Enter your Username" type="text" name="nameOfHospitalOrBloodBank" value={values.nameOfHospitalOrBloodBank} onChange={handleChange}/></div>
            </div>
            
              {/*<div className='row'>
              {errors.nameOfHospitalOrBloodBank && <p>{errors.nameOfHospitalOrBloodBank}</p>}
              <label className='formlabel'> Name of {user} :
              <input className='forminput' type="text" name="nameOfHospitalOrBloodBank" value={values.nameOfHospitalOrBloodBank} onChange={handleChange}/>
              </label>
              </div>
              <div className='row'>
              {errors.district && <p>{errors.district}</p>}
              <label className='formlabel'>District  {user} is Located In:
              <input className='forminput' type="text" name="district" value={values.district} onChange={handleChange}/>
          </label>
              </div>*/}
           </>
             )}
  
          {(user !== 'admin'|| user == 'donor' || user == 'hospital' || user == 'bloodBank' ) && (
            <>
            <div className='row'>
              <div className='rowContent'><label className='formlabel'> Telephone Number: </label></div>
              <span className='feedBack'>{errors.telephone && <span className='error'>{errors.telephone}</span>}</span>
              <div className='rowContent'> <input className='forminput' placeholder="Enter your Username" type="text" name="telephone" value={values.telephone} onChange={handleChange}/></div>
            </div>
            <div className='row'>
              <div className='rowContent'><label className='formlabel'> Address: </label></div>
              <span className='feedBack'>{errors.address && <span className='error'>{errors.address}</span>}</span>
              <div className='rowContent'> <input className='forminput' placeholder="Enter your Username" type="text" name="address" value={values.address} onChange={handleChange}/></div>
            </div>
           
              {/*<div className='row'>
              {errors.telephone && <p>{errors.telephone}</p>}
              {validtelephone && <p>Telephone Number is Valid</p>}
              <label className='formlabel'>Telephone Number:
              <input className='forminput' type="text" name="telephone" value={values.telephone} onChange={handleChange}/>
              </label>
             </div>
              <div className='row'>
              {errors.address && <p>{errors.address}</p>}
              <label className='formlabel'>Address:
              <input className='forminput' type="text" name="address" value={values.address} onChange={handleChange}/>
              </label>
          </div>*/}
            </>
          )}
          <div className='row'>
         {errors.password && <p>{errors.password}</p>}
          {validPassword && <p>Password is valid</p>}
          <label className='formlabel' >Password:
          <input className='forminput'  type="password" name="password" value={values.password} onChange={handleChange}/>
          </label>
          </div>
  
          <button className='forminput' type="submit">SignUp</button>
          </form>
  </>
    
  )
}

    