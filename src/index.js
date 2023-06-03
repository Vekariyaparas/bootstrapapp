import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Top from './componant/Topbar'
import Head from './componant/Header';
import Nav from './componant/Navbar';
import Main from './componant/Main';  
import Foot from './componant/Footer';
import Slider from './componant/slider';
import Responsive from './componant/slickslider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import reportWebVitals from "./reportWebVitals";


const test=ReactDOM.createRoot(document.getElementById('bootstrap'))
test.render(
    <>
    <Top />
    <Head />
    <Nav />
    <Main />
    <Foot />
    <Slider />
    <Responsive />
    </>
);


reportWebVitals();