import React from 'react'
import styles from "./ImageCard.module.css"

const ImageCard = ({ image, info }) => {
    return (
        <div className={`${styles['image-card']} main-dark-grey white-text`}>
            <img src={image} alt="image" />
            <h3>{info.title}</h3>
            <div className={`w-100 ${styles['buttons-container']}`}>
                <button className='main-violet white-text'>Description</button>
                <button className='main-violet white-text' onClick={() => window.open("https://github.com/", "_blank")}>Learn more</button>
            </div>
        </div>
    )
}

export default ImageCard