import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import presentationImage from '../../assets/images/presentation.png';
import './index.css'


function Home() {
  return (
    <Fragment>
    <div class="container-fluid">
  <div class="row">
    <div class="col">
    <h1 class="display-5 fw-bold"> Create notes easily and access when you wants on the cloud</h1>
        <p class="col-md-8 fs-4">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br/><br/>
Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.</p>
        <button class="btn btn-primary btn-lg" type="button">Register for free Nowstrong</button>
    </div>
    <div class="col">
    <a className="navbar-brand" href="#">
            <img src={presentationImage} />
          </a>
    </div>
  </div>
   </div>


</Fragment>
 

      );
}

      export default Home;
