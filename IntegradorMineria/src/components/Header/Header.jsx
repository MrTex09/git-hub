import React from 'react'
import style from './Header.module.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <div className={`main-dark-grey white-text ${style.header}`}>
            <h2>GitHub</h2>
            <NavBar/>
        </div>
    )
}

export default Header