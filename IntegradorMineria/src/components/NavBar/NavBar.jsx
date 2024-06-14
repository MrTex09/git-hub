import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <ul className={`white-text ${styles.navbar}`}>
            <li>
                <a href="/home">Main</a>
            </li>
            <li>
                <a href="/gallery">Gallery</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    )
}

export default NavBar