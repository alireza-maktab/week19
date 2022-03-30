import React from "react";

export default function LoginPage() {
  return (
    <div className="login-container">
      <form className="login-form">
        <h1>Login</h1>
        <div className="controller">
          <input name="userName" type="text" required />
          <label>User Name:</label>
        </div>
        <div className="controller">
          <input name="password" type="password" required />
          <label>Password:</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
