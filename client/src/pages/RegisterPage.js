import React from "react";
import "./styles/RegisterPage.css";

const RegisterPage = () => {
  return (
    <div className="register-page">
      <h2>Create an Account</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm Password" required />
        <button className="search-button" type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <a href="/login">Log In</a>
      </p>
    </div>
  );
};

export default RegisterPage;
