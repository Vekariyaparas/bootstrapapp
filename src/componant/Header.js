import React from "react";
import logo from '../images/logo.png'

function Head() {
    return (
        <>
            <div className="container-fluid border border-bottom-1 p-0 pt-2">
                <div className="container d-flex p-0 topbar">
                    <div className="col-2">
                        <div className="d-flex">
                            <div className="col-3">
                                <img src={logo} alt="logo" className="mt-1 w-75" />
                            </div>
                            <div className="col-9">
                                <h4 className="text-success p-0 m-0">Nest</h4>
                                <p className="m-0 p-0 fs-6">Fruit & Vegetables</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 ms-5 me-5">
                        <form>
                            <div class="input-group mt-2">
                                <span className="input-group-text bg-white border-right-0">All Categori</span>
                                <input type="text" className="form-control border-left-0" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                            </div>
                        </form>
                    </div>
                    <div className="col-5 ms-2">
                        <p className="mt-3">

                            <select className="ms-1">
                                <option>Your Location</option>
                                <option>Rajkot</option>
                                <option>Ahemdabad</option>
                                <option>Surat</option>
                                <option>Vadodara</option>
                            </select>
                            <b className="ms-2">
                                <i class="bi bi-bullseye position-relative">
                                    <span class="badge badge-pill badge-success bg-success position-absolute left-0">9</span>
                                </i> Compare</b>
                            <b className="ms-2"><i class="bi bi-heart position-relative"><span class="badge badge-pill badge-success bg-success position-absolute left-0">6</span></i> Wishist</b>
                            <b className="ms-2"><i class="bi bi-cart position-relative"><span class="badge badge-pill badge-success bg-success position-absolute left-0">4</span></i> Cart</b>
                            <b className="ms-2"><i class="bi bi-person-fill"></i> Account</b>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Head;