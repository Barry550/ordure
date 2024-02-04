import React, { Component } from 'react';
import './slider.css'
import image1 from './slider_img/image1.jpg'
import image2 from './slider_img/image2.jpg'
import image3 from './slider_img/image3.jpg'
import image4 from './slider_img/image4.jpg'
import image5 from './slider_img/image5.jpg'

export default function DemoCarousel() {
  return (
    <div>
    <div>
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
    </ol>
    <div className="carousel-inner">
      <div className="slider-car carousel-item active">
      
        <img src={image3}  className="d-block w-100" alt="ordure" />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div className="slider-car carousel-item">
        <img src={image2}  className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="slider-car carousel-item">
        <img src={image3}  className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <div className="slider-car carousel-item">
        <img src={image4}  className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Quatre slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <div className="slider-car carousel-item">
        <img src={image5} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5>Cinq slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
    
  )
}
