import React from 'react'
import styles from "./ImageCard.module.css"

const ImageCard = ({ image }) => {
    return (
        <div className={`${styles['image-card']} main-dark-grey white-text`}>
            <img src={image} alt="image" />
            <h3>Example Text</h3>
            <div className={`w-100 ${styles['buttons-container']}`}>
                <button className='main-white light-grey-text'>Description</button>
                <button className='main-white light-grey-text'>Learn more</button>
            </div>
        </div>
    )
}

export default ImageCard