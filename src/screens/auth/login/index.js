import React, { Fragment } from "react";
import LoginForm from "../../../components/auth/login_form/index";
import "./index.css";

function LoginScreen() {
  return (
    <div>
      <Fragment>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <h1 class="fw-light"> Log in !!! </h1>
            <LoginForm />
          </div>
        </section>
      </Fragment>
    </div>
  );
}

export default LoginScreen;
