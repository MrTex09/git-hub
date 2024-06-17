import React from 'react'
import styles from './Gallery.module.css'
import Header from '../../components/Header/Header'
import ImageCard from '../../components/ImageCard/ImageCard'
import image1 from "../../assets/gallery_1.jpg"

const Gallery = () => {
    return (
        <div>
            <Header />
            <div className={`main-night-grey white-text ${styles.gallery}`}>
                <div className={styles['gallery-text']}>
                    <h1>GitHub - Gallery</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='w-40'>
                    <ImageCard 
                        image={image1}
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery