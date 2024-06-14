import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Car() {
  return (
    <div className='car'>
    <Carousel id="carouselExample" className="carousel slide">
      <Carousel.Item className="carousel-item active">
        <img src="images/logoGitHub.jpg" className="d-flex w-50 imagen" alt="Slide 1" />
      </Carousel.Item>
    </Carousel>
    </div>

  );
}
