import React from "react";
import "./styles/LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h2>Log In</h2>
      <form>
        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />
        <button className="search-button" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
