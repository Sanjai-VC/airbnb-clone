import React from "react";

function RegisterPage() {
  const handleRegister = (e) => {
    e.preventDefault();
    // Add register logic here
  };

  return (
    <form onSubmit={handleRegister}>
      <h1>Register</h1>
      <label>Full Name: <input type="text" name="fullName" required /></label>
      <label>Email: <input type="email" name="email" required /></label>
      <label>Password: <input type="password" name="password" required /></label>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterPage;

