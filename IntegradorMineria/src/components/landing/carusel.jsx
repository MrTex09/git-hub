import React from 'react';
import { Carousel } from 'react-bootstrap';

const carouselImageStyle = {
  height: '650px', // Alto de 650px
  objectFit: 'cover', // Ajuste de la imagen para cubrir completamente el contenedor
  margin: "50px"
};

export default function Car() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/2jGsYZgp/images.png"
          alt="First slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption className="text-secondary">
          <h3 className="display-4">Versión Controlada con Git</h3>
          <p className="lead">Organiza y controla todas tus versiones de código con facilidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/2jGsYZgp/images.png"
          alt="Second slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption className="text-secondary">
          <h3 className="display-4">Colaboración Eficiente</h3>
          <p className="lead">Trabaja junto a tu equipo sin conflictos y con un control preciso.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/2jGsYZgp/images.png"
          alt="Third slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption className="text-secondary">
          <h3 className="display-4">Flujos de Trabajo Personalizados</h3>
          <p className="lead">Adapta Git a las necesidades específicas de tu proyecto.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
