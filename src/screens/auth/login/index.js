import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import loginLogo from "../../../assets/images/cadeado_aberto.png";

function Login() {
  return (
    <div>
      <Fragment>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Login successfully</h1>
              <img src={loginLogo} />
              <p class="lead text-muted">
              Your notes on the cloud
              </p>
              <p>
                <a href="#" class="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" class="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  );
}

export default Login;
