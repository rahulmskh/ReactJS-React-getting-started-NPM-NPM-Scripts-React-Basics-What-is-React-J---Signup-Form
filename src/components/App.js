import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const initialValues = { username: '', email: '', gender: '', phoneNumber: '', password: ''};
  //let UserName;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 // const [userName, setUserName] = useState('');

  const handleChange =(event) =>{
    const{name,value} = event.target;
    setFormValues({...formValues, [name]: value})
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    setFormErrors(validation(formValues));
    //UserName = 'Hello '+ formValues.email.split('@')[0];
   // setUserName(UserName);
   // console.log(UserName);
    setIsSubmit(true);
  }
  const validation = (values) => {
      const errors = {};
      const regexEmail = /[@]/gi;
      const regexUserName =  /\d/i;
      const regexphoneNumber = /[^\d+-]/i;

      if(!values.username){
        errors.username = "All fields are mandatory";
      } else if(regexUserName.test(values.username)){
        errors.username = "Name is not alphanumeric";
      }
      if(!values.email){
        errors.email = "All fields are mandatory";
      } else if(!regexEmail.test(values.email)){
        errors.email = "Email must contain @";
      }
      
      if(!values.gender){
        errors.gender = "All fields are mandatory";
      }
      else if(!values.gender.length === 0){
        errors.gender = "Please identify as male, female or others";
      }
      if(!values.phoneNumber){
        errors.phoneNumber = "All fields are mandatory";
      } else if(regexphoneNumber.test(values.phoneNumber)){
        errors.phoneNumber = "Phone Number must contain only numbers";
      }
  
      if(!values.password){
        errors.password = "All fields are mandatory";
      } else if(values.password.length <= 6){
        errors.password = "Password must contain atleast 6 letters";
      } 
      return errors;
  }

  return (
    <div id="main">
       {(Object.keys(formErrors).length === 0 && isSubmit) ? (<h1>{'Hello '+ (formValues.email.split('@')[0])}</h1>) :( <></>)}
       {/* console.log(UserName); */}
      <form onSubmit={handleSubmit}>
      <h1>Sign Up Form</h1>
        <div>
        <label>Name : </label>
        <input
              data-testid = 'name'
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
            {!(Object.keys(formErrors).length === 0 && isSubmit)  && <p>{formErrors.username}</p>}
        </div><br></br>
        <div>
            <label>Email : </label>
            <input
              data-testid = 'email'
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            {!(Object.keys(formErrors).length === 0 && isSubmit)  && <p>{formErrors.email}</p>}
          </div><br></br>
          <div> <label>Gender : </label>
            <select  
            data-testid = 'gender'
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            //defaultValue='male'
            > 
              <option value='male'>male</option>
              <option value='female'>female</option>
              <option value='others'>others</option>
            </select>
            {!(Object.keys(formErrors).length === 0 && isSubmit) && <p>{formErrors.gender}</p>}
          </div>
          <br></br>
          <div>
            <label>Phone Number : </label>
            <input
             data-testid = 'phoneNumber'
              type="phoneNumber"
              name="phoneNumber"
              placeholder="phoneNumber"
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
            {!(Object.keys(formErrors).length === 0 && isSubmit) && <p>{formErrors.phoneNumber}</p>}
          </div><br></br>
          <div className="field">
            <label>Password : </label>
            <input
              data-testid = 'password'
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
            {!(Object.keys(formErrors).length === 0 && isSubmit) && <p>{formErrors.password}</p>}
          </div><br></br>
          <button data-testid = 'submit' type='submit'>Submit</button>
      </form>
    </div>
  )
}


export default App;
