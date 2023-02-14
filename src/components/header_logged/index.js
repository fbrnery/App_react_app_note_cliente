import React, { useState } from "react";
import logoImage from "../../assets/images/aplicativo_escolar.png";
import "./index.css";
import UsersService from "../../services/users";
import { Redirect, Link } from "react-router-dom";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome == true) 
  return <Redirect to={{ pathname: "/" }} />;

  return (
    <div className="loged">
      <br />
      <h1>Welcome to your grades page!!!</h1>
      <hr />
      <div className="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Fabricio
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Link
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <Link to="/users/edit">User Edit</Link>
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <a href="#" onClick={(e) => logOut()}>
                LogOut
              </a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderLogged;
