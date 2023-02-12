import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import "./index.css";
import UserService from '../../../services/users';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RedirectToRegister, setRedirectToRegister] = useState(false);
  const [RedirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

   const HandleSubmit = async (evt) => {
       evt.preventDefault();
   
       try {
         await UserService.login({email: email,password: password});
         setRedirectToNotes(true);
       } catch (error) {
         setError(true)
       }
     }

  if (RedirectToRegister) 
  return <Redirect to={{ pathname: "/register" }} />
  else if (RedirectToNotes) 
  return <Redirect to={{ pathname: "/notes" }} />

  return (
    <Fragment>
             
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <form onSubmit={HandleSubmit}>
              <div class="mb-3">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  class="form-control"
                  placeholder="E-mail address"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="button1">
                <button type="submit" class="btn btn-light">
                  Login
                </button>
              </div>
              <div className="button2">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={(e) => setRedirectToRegister(true)}
                >
                  Register
                </button>
              </div>
              {error && (
                <button type="button" class="btn btn-danger">
                  Email or Password invalid
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
         
    </Fragment>
  );
}

export default LoginForm;
