import React, { useContext } from 'react';
import styles from "../cssModule/SignupPage.module.css";
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate(); // Hook to perform navigation
  const handleSignup = async (event) => {
    
    event.preventDefault();
    const formData = new FormData(event.target);
    const signupData = Object.fromEntries(formData);

    if (signupData.password !== signupData.passwordConfirm) {
      alert("Password Didn't match")
    } else {
      console.log("signup completed");
      console.log(signupData);
      alert("Signup Completed")
      navigate("/login");
    }
    

  }
  return (
    <center>
      <form onSubmit={handleSignup} className={styles.signupPage}>
      <div className="mb-3">
          <label htmlFor="name" className={`${styles.textLabel} form-label`}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter your Full Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className={`${styles.textLabel} form-label`}>
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter your Email Id"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`${styles.textLabel} form-label`}>
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className={`${styles.textLabel} form-label`}>
            
          </label>
          <input
            type="password"
            name="passwordConfirm"
            className="form-control"
            id="passwordConfirm"
            placeholder="Confirm your password"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </center>
  )
}

export default SignupPage