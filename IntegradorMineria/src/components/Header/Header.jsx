import React from 'react'
import style from './Header.module.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <div className={`main-dark-grey white-text ${style.header}`}>
            <h1>GitHub</h1>
            <NavBar/>
        </div>
    )
}

export default Header