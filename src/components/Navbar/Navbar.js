import React from 'react'
import { useState } from 'react';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faClose, faHSquare, faListDots, faListSquares, faMarsAndVenus, faSquareArrowUpRight, faSquareCaretDown, faSquareFull, faSquareNfi, faSquarePollHorizontal, faSquareShareNodes, faTriangleCircleSquare, faUser } from '@fortawesome/free-solid-svg-icons';





const Navbar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (

        <div className='navbar absolute left-0 right-0 top-0 z-20'>

            <div className={`sidebar   ${isSidebarOpen ? 'open' : ''}`} >
                <div className="logo-details">
                    <i className='bx bxl-c-plus-plus icon'></i>
                    <div className="logo_name ">Dramao</div>
                    <i className='bx bx-menu ' onClick={toggleSidebar} id="btn">{isSidebarOpen ? /*<box-icon name='x'></box-icon>*/ <FontAwesomeIcon className='' icon={faClose}></FontAwesomeIcon> : <FontAwesomeIcon className='' icon={faListDots}></FontAwesomeIcon> /*<box-icon name='menu-alt-right'></box-icon>*/}</i>
                </div>
                <ul className="nav-list ">
        
                    <li >
                        <a to="/">
                            <i className='bx bx-user'><FontAwesomeIcon className='' icon={faUser}></FontAwesomeIcon></i>
                            <span className="links_name">User</span>
                        </a>
                        <span className="tooltip">User</span>
                    </li>
                    <li >
                        <a to="/">
                            <i className='bx bx-chat'>
                                <FontAwesomeIcon className='' icon={faSquarePollHorizontal}></FontAwesomeIcon>
                                </i>
                            <span className="links_name">Categories</span>
                        </a>
                        <span className="tooltip">Categories</span>
                    </li>
                    
                    <li >
                        <a to="/">
                            <i className='bx bx-heart'></i>
                            <span className="links_name">Saved</span>
                        </a>
                        <span className="tooltip">Saved</span>
                    </li>
                    <li >
                        <a to="/">
                            <i className='bx bx-cog'>0</i>
                            <span className="links_name">Log Out</span>
                        </a>
                        <span className="tooltip">Log Out from the session</span>
                    </li>

                </ul>
            </div>
        </div>

    );
};

export default Navbar;