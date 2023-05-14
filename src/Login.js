import React,{useState} from 'react';
import './Forms.css';

export default function Login(props) {
    
    const { value: user } = props;
    const [values, setValues] = useState({
      nationalId: '',
      userName: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const [validPassword, setValidPassword] = useState(false);
    const [validNationalId, setValidNationalId] = useState(false);

    const validateForm = (values, user) => {
      const newErrors = {};
  
      if (user === 'donor') {
        if (!values.nationalId) {
          newErrors.nationalId = 'NIC is required';
        }
      } else {
        if (!values.userName) {
          newErrors.userName = 'Username is required';
        }
      }
  
      if (!values.password) {
        newErrors.password = 'Password is required';
      } else if (values.password.length <= 7) {
        newErrors.password = 'Password should be at least 8 characters';
      }
  
      return newErrors;
    };
  
  

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: '' });
  
      if (name === 'password' && value.length <= 7) {
        setErrors({ ...errors, password: 'Password should be at least 8 characters' });
      }
      
      switch(name){
        case 'password':
          if (value.length >= 8) {
            setValidPassword(true);
          } else {
            setValidPassword(false);
          }
            break;
        case 'nationalId':
          if (!value) {
            setValidNationalId(false);
          } else {
            setValidNationalId(true);
          }
            break;
         
      }

      if (name === 'password') {
        if (value.length >= 8) {
          setValidPassword(true);
        } else {
          setValidPassword(false);
        }
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
           {user==='donor' && (<h2>Donor Login</h2>)}
           {user==='admin' && (<h2>Admin Login</h2>)}
           {user==='hospital' && (<h2>Hospital Login</h2>)}
           {user==='bloodBank' && (<h2>Blood Bank Login</h2>)}
          {user === 'donor' && (
            <>
            <div className='row'>
              {errors.nationalId && <p>{errors.nationalId}</p>}
              {validNationalId && <p>NIC is valid</p>}
              <label className='formlabel'>
                National Identity Card (NIC):
                <input className='forminput'
                  type="text"
                  name="nationalId"
                  value={values.nationalId}
                  onChange={handleChange}
                />
              </label>
              </div>
            </>
          )}
  
          {user !== 'donor' && (
            <>
               <div className='row'>
              {errors.userName && <p>{errors.userName}</p>}
              <label className='formlabel'>
                Username:
                <input className='forminput'
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                />
              </label>
              </div>
            </>
          )}

      
         <div className='row'>
         
          <label className='formlabel' >

            Password: 
          <span>{errors.password && <p>{errors.password}</p>}</span>  
          <span>  {validPassword && <p>Password is valid</p>}</span>  
            <input className='forminput'
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </label>
          </div>
          
          <button className='forminput' type="submit">Login</button>
          </form>
  
  

  
  
   
  </>
    
  )
}
