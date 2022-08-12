import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import "./index.css";

import UserService from "../../../services/users";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

   const handleSubmit = async (evt) => {
       evt.preventDefault();
   
       try {
         const user = await UserService.register({name: name,email: email,password: password});
         setRedirectToLogin(true);
       } catch (error) {
         setError(true)
       }
     }
   
  if (redirectToLogin) return <Redirect to={{ pathname: "/login" }} />;

  return (
    <fragment>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Your notes on the cloud</h1>
            <form onSubmit={handleSubmit}>
            <div className="col">
              
             <input 
             value={name}
             onChange={e => setName(e.target.value)}
             type="text" 
             class="form-control" 
             placeholder="Name" 
             aria-label="First name"/>
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  
                </label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                <label for="exampleInputPassword1" class="form-label">
                  
                </label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type="password"
                  class="form-control"
                  placeholder="Password" 
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="button1">
              <button type="submit" class="btn btn-light" onClick={e => setRedirectToLogin(true)} >
                Login Or
              </button>
              </div>
              <div className="button2">
              <button type="submit" class="btn btn-primary">
                Register
              </button>
              </div>
              { error && <button type="button" class="btn btn-danger">Email or Password invalid</button>}
            </form>
          </div>
        </div>
      </section>
    </fragment>
  );
}

export default RegisterForm;
