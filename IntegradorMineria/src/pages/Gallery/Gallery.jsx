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
                    <h1>GitHub - Gallery</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <ImageContainer 
                    images={[image1, image2]}
                />
                <ImageContainer 
                    images={[image3, image4, image5]}
                />
            </div>
        </div>
    )
}

export default Gallery