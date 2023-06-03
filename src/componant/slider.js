import React from "react";
import sldimg from '../images/slidimg.png';
import sldimg1 from '../images/slideimg1.png';
import sldimg2 from '../images/slidimg2.png';

function Slider() {
    return (
        <>
            <div id="carouselExampleIndicators" className="container carousel slide p-0 h-50" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div className="carousel-item active sld">
                        <div className="d-flex">
                            <div className="col-7">
                                <h2 className="text-white cng">Don't miss amazing <br /> grocery deals</h2>
                                <p className="text-white cng1">Sign up for the daily newsletter</p>
                                <div className="input-group mb-3 w-50 cng1">
                                    <span className="input-group-text bg-white border-right-0"><i className="bi bi-cursor"></i></span>
                                    <input type="text" className="form-control border-0" aria-label="Amount (to the nearest dollar)" />
                                        <button className="input-group-text bg-success slidbnt">Button</button>
                                </div>
                            </div>
                            <div className="col-5">
                                <img src={sldimg} alt="photo" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item sldbk">
                        <div className="d-flex">
                            <div className="col-7">
                                <img src={sldimg1} alt='photo' className="size text-center" />
                            </div>
                            <div className="col-5">
                                <img src={sldimg2} alt="photo" className="size1 text-center mt-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container mt-4">
                <span className="fs-2">Featured Categories</span>
                <span className="fs-6 ms-5">
                    <li><a href="#">Cake & Milk</a></li>
                    <li><a href="#">Coffes & Teas</a></li>
                    <li><a href="#" className="text-primary">Pet Foods</a></li>
                    <li><a href="#"> Vegitables</a></li>
                </span>
            </div>
        </>
    )
};
export default Slider;