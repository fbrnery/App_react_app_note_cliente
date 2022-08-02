import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../../component/Header";
import LogoImage from "../../../assets/images/logo.png";
import "./index.css";
import RegisterForm from "../../../component/auth/register_form";

function Register() {
  return (
    <Fragment>
      <div class="container-fluid">
      <RegisterForm/>
      </div>
    </Fragment>
  );
}

export default Register;
