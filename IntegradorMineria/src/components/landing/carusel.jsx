import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/directivos-volver-oficina-empleados.jpg'
import image2 from '../../assets/oficina_minimalista.webp'
import image3 from '../../assets/algoritmos-para-mapear-al-narco.webp'

const carouselImageStyle = {
  height: '650px',
  objectFit: 'cover', 
  margin: "50px"
};

export default function Carusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption className="text-secondary main-night-grey main-transparent">
          <h3 className="display-4">Versión Controlada con Git</h3>
          <p className="lead">Organiza y controla todas tus versiones de código con facilidad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption className="text-secondary main-night-grey main-transparent">
          <h3 className="display-4">Colaboración Eficiente</h3>
          <p className="lead">Trabaja junto a tu equipo sin conflictos y con un control preciso.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
          style={carouselImageStyle}
        />
        <Carousel.Caption className="text-secondary main-night-grey main-transparent">
          <h3 className="display-4">Flujos de Trabajo Personalizados</h3>
          <p className="lead">Adapta Git a las necesidades específicas de tu proyecto.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
