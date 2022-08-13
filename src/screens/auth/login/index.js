import React, { Fragment } from "react";
import LoginForm from "../../../component/auth/login_form/index";
import loginLogo from "../../../assets/images/cadeado_aberto.png";
import "./index.css";

function Login() {
  return (
    <div>
      <Fragment>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <h1 class="fw-light">Login screen</h1>
            <h1 class="fw-light"> Your notes on the cloud</h1>
            <LoginForm />
          </div>
        </section>
      </Fragment>
    </div>
  );
}

export default Login;
