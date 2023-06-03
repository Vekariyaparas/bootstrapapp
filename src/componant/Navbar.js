import React from "react";
import hot from '../images/hot.png'

function Nav() {
    return (
        <>
            <div className="container-fluid border border-bottom-1 p-0">
                <div className="container d-flex p-0 topbar">
                    <div className="col-2 pt-3">
                        <li class="nav-item dropdown border w-75 text-center bg-success text-white">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-grid"></i> All Categories
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Patato</a></li>
                                <li><a class="dropdown-item" href="#">Kiwi</a></li>
                                <li><a class="dropdown-item" href="#">Brinjal</a></li>
                                <li><a class="dropdown-item" href="#">Onion</a></li>
                                <li><a class="dropdown-item" href="#">Gralic</a></li>
                                <li><a class="dropdown-item" href="#">Graps</a></li>
                            </ul>
                        </li>
                    </div>
                    <div className="col-8 pt-1">
                        <span>
                            <img src={hot} alt="small" className="m-0 mb-1 me-1 p-0 navimg" />
                            <b className="fs-4">Hot Deals</b>
                            <b className="ms-3">
                                <li><a href="#" className="text-primary">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle border-0 ps-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>Shop</b>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle border-0 ps-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>Vendors</b>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle border-0 ps-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>Mega menu</b>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle border-0 ps-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>Blog</b>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle border-0 ps-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <b>Page</b>
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li><a href="#">Contact</a></li>

                            </b>
                        </span>
                    </div>
                    <div className="col-2">
                        <div className="d-flex ps-4">
                            <div className="col-2">
                                <i className="bi bi-headset m-0 p-0 m-auto fs-3"></i>
                            </div>
                            <div className="col-10">
                                <h4 className="m-0 p-0 text-success">1900-888</h4>
                                <p className="m-0 p-0">24*4 Service center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Nav; 