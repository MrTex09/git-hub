import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <ul className={`white-text ${styles.navbar}`}>
            <li>
                <a href="/">Inicio</a>
            </li>
            <li>
                <a href="/gallery">Actividades</a>
            </li>
        </ul>
    )
}

export default NavBar