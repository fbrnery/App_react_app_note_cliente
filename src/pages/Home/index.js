import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import presentationImage from "../../assets/images/presentation.png";
import "./index.css";

function Home() {
  return (
    <Fragment>
      <div class="container-fluid">
      <div class="col">
        <img
          src={presentationImage}
          class="col-md-6 float-md-end mb-3 ms-md-3"
          alt="..."
        />
        <h2> Create notes easily and access when you wants on the cloud</h2>
        <h6>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs.
          <br />
          <br />
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print.
        </h6>
        <button type="button" class="btn btn-outline-info">
          Register for free Nowstrong
        </button>
        </div>
        </div>
    </Fragment>
  );
}

export default Home;
