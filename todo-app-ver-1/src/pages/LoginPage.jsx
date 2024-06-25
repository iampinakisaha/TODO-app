import React, { useContext } from "react";
import styles from "../cssModule/LoginPage.module.css";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate(); // Hook to perform navigation

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData);

    try {
      
      // Assuming your AuthContext login function returns a promise
      const { email, password } = loginData;
      await login(email, password);

      // fetch('https://dummyjson.com/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
          
      //     username: 'emilys',
      //     password: 'emilyspass',
      //     expiresInMins: 30, // optional, defaults to 60
      //   })
      // })
      // .then(res => res.json())
      // .then(console.log);
    

      // Navigate to the desired location after successful login
      navigate("/todos"); // Replace with the appropriate route
    } catch (error) {
      console.error("Login error:", error);
      // Handle login errors here
    }
  };

  return (
    <center>
      <form onSubmit={handleSubmit} className={styles.loginPage}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Enter your Email Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </center>
  );
};

export default LoginPage;
