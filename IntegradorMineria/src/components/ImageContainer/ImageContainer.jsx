import React from 'react'
import styles from './ImageContainer.module.css'
import ImageCard from '../ImageCard/ImageCard'

const ImageContainer = ({ images }) => {



    return (
        <div 
            className={`
                ${styles["images-container"]} 
                ${images.length == 3 ? styles["images-container-3"] : styles["images-container-2"]}
            `}
        >
            {
                images.map((image, index) => (
                    <ImageCard
                        image={image.image}
                        key={index}
                        info={image.info}
                    />
                ))
            }
        </div>
    )
}

export default ImageContainer