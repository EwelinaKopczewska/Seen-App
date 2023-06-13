import React from "react";

const Login = () => {
    return(
    <div className="containerHome Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="">
            <label>Name</label>
            <input
              type="text"
              className="form_input"
              placeholder="Enter name"
            />
          </div>
          <div className="">
            <label>Email</label>
            <input
              type="email"
              className="form_input"
              placeholder="Enter email"
            />
          </div>
          <div className="">
            <label>Password</label>
            <input
              type="password"
              className="form_input"
              placeholder="Enter password"
            />
          </div>
          <div className="">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
)
}

export default Login