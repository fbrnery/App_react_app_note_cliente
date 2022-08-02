import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import presentationImage from "../../assets/images/presentation.png";
import "./index.css";

function Home() {
  return (
    <main>
   <h1 class="visually-hidden">Heroes examples</h1>

<div class="px-4 py-5 my-5 text-center">
<img src={presentationImage}/>
  <h1 class="display-5 fw-bold">App Note</h1>
  <div class="col-lg-6 mx-auto">
    <p class="lead mb-4">
    The application allows you to organize meetings in a virtual file. 
    There is even a Premium version, which the user can upload up to 10 GB of data per month.
    </p>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    <button type="button" className="btn btn-light">
    <Link to="/register">Login In</Link>
    </button>
    <button type="button" className="btn btn-light">
    <Link to="/">Sign Up</Link>
    </button>
    </div>
  </div>
</div>
    </main>
  );
}

export default Home;
