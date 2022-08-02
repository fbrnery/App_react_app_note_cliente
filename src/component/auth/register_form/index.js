import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import "./index.css";

function RegisterForm() {
  return (
    <Fragment>
      <div class="container-fluid">
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="buttom">
          <button type="submit" class="btn btn-primary">
            Login Or
          </button>
          <button type="submit" class="btn btn-outline-primary">
            Register
          </button>
        </div>
      </div>
            <form></form>   
    </Fragment>
  );
}

export default RegisterForm;
