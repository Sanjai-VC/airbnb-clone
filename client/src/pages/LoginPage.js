import React from "react";

function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <label>Email: <input type="email" name="email" required /></label>
      <label>Password: <input type="password" name="password" required /></label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;

