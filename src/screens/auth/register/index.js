import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header from '../../../component/Header';
import LogoImage from '../../../assets/images/logo.png';
import './index.css'

function Register() {
    return (
        <Fragment>
            <div class="card-group">
                <div class="card">
                    <img src={LogoImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card Notes</h5>
                        <p class="card-text"> Your notes on the cloud</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </Fragment >
    );
}

export default Register;