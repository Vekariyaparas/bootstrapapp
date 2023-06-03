import React, { Component } from "react";
import Slider from "react-slick";
import annar from '../images/annar.jpg';
import dragan from '../images/dragan.jpg';
import kiwi from '../images/kivi.jpg';
import mix from '../images/mix.jpg';
import san from '../images/santru.jpg';
import dry from '../images/dry frut.jpg';
import brinj from '../images/brinjal.jpg';
import full from '../images/fulavar.jpg';
import gavu from '../images/guvar.jpg';
import mixveg from '../images/ix.jpg';
import kanda from '../images/onion.jpg';
import tam from '../images/slidimg.png';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container text-center mx-auto m-0 p-0 mt-4">
        <Slider {...settings}>
          <div className="text-center shadow">
            <img src={annar} alt="dadam" className="small m-auto shadow" />
            <h6 className="shadow">Pomegranate</h6>
          </div>
          <div className="">
            <img src={mixveg} alt="" className="small m-auto" />
            <h6>Mix Veg.</h6>
          </div>
          <div className="">
            <img src={dragan} alt="" className="small m-auto shadow" />
            <h6 className="shadow">Dragon Fruit</h6>
          </div>
          <div className="">
            <img src={tam} alt="" className="small m-auto" />
            <h6>Mix Fruit</h6>
          </div>
          <div className="">
            <img src={kiwi} alt="" className="small m-auto shadow" />
            <h6 className="shadow">Kiwi</h6>
          </div>
          <div className="">
            <img src={mix} alt="" className="small m-auto" />
            <h6>Graps</h6>
          </div>
          <div className="">
            <img src={san} alt="" className="small m-auto shadow" />
            <h6 className="shadow">Aurantium</h6>
          </div>
          <div className="">
            <img src={dry} alt="" className="small m-auto" />
            <h6>Dry Fruit</h6>
          </div>
          <div className="">
            <img src={brinj} alt="" className="small m-auto shadow" />
            <h6 className="shadow">Brinjal</h6>
          </div>
          <div className="">
            <img src={full} alt="" className="small m-auto" />
            <h6> Broccoli</h6>
          </div>
          <div className="">
            <img src={gavu} alt="" className="small m-auto shadow" />
            <h6 className="shadow">Cluster Bean</h6>
          </div>
          <div className="">
            <img src={kanda} alt="" className="small m-auto" />
            <h6>Onion</h6>
          </div>
        </Slider>
      </div>
    );
  }
}