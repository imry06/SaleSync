// import React from 'react'
import "../css/login.css";


const Login = () => {
  return (
    <div className="login-form">
      <form>
        <div className="form-header">
          <img
            src="https://intercom.help/scoutmotors/assets/favicon"
            alt="SaleSync Logo" className="login-logo"
          />
          <h1>SaleSync</h1>
          {/* <hr /> */}
        </div>

        <div className="form-group">
          <label htmlFor="username"><i className="fa-solid fa-user"></i> Username : </label> 
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>

        <div className="form-group">
          <label htmlFor="password"><i className="fa-solid fa-lock"></i> Password : </label> 
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>

        <div className="form-group-buttons">
          <button type="submit"> <i className="fa-solid fa-right-to-bracket"></i> Login</button>
          <button type="button"> <i className="fa-solid fa-door-open"></i> Exit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
