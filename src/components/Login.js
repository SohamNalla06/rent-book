import React from "react";
const Login = () => {
  return (
    <div>
      <form>
        <div className="container">
          <div className="header">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="enter email" />
          </div>
        </div>
        <div className="input">
          <label htmlFor="email">Password</label>
          <input type="email" placeholder="enter password" />
        </div>
        <button className="btn btn-success">Log in </button>
        <div className="input" placeholder="password">
          <input type="password" />
        </div>
        <div className="forgot-passowrd">
          lost password ?<span>Click here!!</span>
        </div>
        <div className="submit-container"></div>
        <div className="submit">Sign-up</div>
        <div className="submit">Login</div>
      </form>
    </div>
  );
};

export default Login;
