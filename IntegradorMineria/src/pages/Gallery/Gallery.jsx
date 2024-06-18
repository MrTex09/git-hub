import React from 'react'
import styles from './Gallery.module.css'
import Header from '../../components/Header/Header'
import image1 from "../../assets/gallery_1.jpg"
import image2 from "../../assets/gallery_2.jpg"
import image3 from "../../assets/gallery_3.jpg"
import image4 from "../../assets/gallery_4.jpg"
import image5 from "../../assets/gallery_5.jpg"
import ImageContainer from '../../components/ImageContainer/ImageContainer'

const Gallery = () => {


    return (
        <div>
            <Header />
            <div className={`main-night-grey white-text ${styles.gallery}`}>
                <div className={styles['gallery-text']}>
                    <h1>GitHub - Actividades</h1>
                    <p>Aquí vas a encontrar las diversas actividades que te ofrece GitHub.</p>
                </div>
                <ImageContainer 
                    images={[{image: image1,
                        info:{
                            title:"Aprende nuevas tecnologías"
                        }
                        },
                     {image: image2, info:{
                        title:"Participa en eventos"
                     }}
                    ]}
                />
                <ImageContainer 
                images={[{image: image3,
                        info:{
                            title:"Forma parte de proyectos colaborativos"
                        }
                        },
                     {image: image4, info:{
                        title:"Introducete en el desarrollo de software"
                     },
                     
                    },
                    {image: image5,
                         info:{
                        title:"Unete a la comunidad"
                        }
                    }
                    ]}
                />
            </div>
            <footer className="App-footer">
                <p>Contacto:</p>
                <ul>
                <li>Email: contacto@ejemplo.com</li>
                <li>Teléfono: 123-456-7890</li>
                </ul>
            </footer>
        </div>
    )
}

export default Gallery