import React, { Fragment } from "react";
import "./index.css";
import RegisterForm from "../../../components/auth/register_form";

function RegisterScreen() {
  return (
    <Fragment>
      <div class="container-fluid">
      <RegisterForm/>
      </div>
    </Fragment>
  );
}

export default RegisterScreen;
