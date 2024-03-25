import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import './darkmode.css'
import { colorModeContext } from '../ToggleColorMode'

const DarkMode = () => {

    const colorMode = useContext(colorModeContext)





    return (
        <div className='absolute right-20 top-8'>
            <input type="checkbox" onClick={colorMode.ToggleColorMode} className="checkbox" id="checkbox" />
            <label  className="checkbox-label">
                <i className="fas fa-moon"><FontAwesomeIcon icon={faMoon} /></i>
                <i className="fas fa-sun"><FontAwesomeIcon icon={faSun} /></i>
                <span className="ball"></span>
            </label>
        </div>
    )
}

export default DarkMode