import React from 'react'
import './bottomNavStyles.css'
import {Link} from 'react-router-dom'

export default function BottomNav (){

    return(
        <div className='bottom-nav'>
            <ul className='bottom-nav-ul'>
                <Link to='/' className='link'>
                    <li className='bottom-nav-li'><i class='bi bi-house'></i></li>
                </Link>
                <Link to='#' className='link'>
                    <li className='bottom-nav-li'><i class='bi bi-search'></i></li>
                </Link>
                <Link to='/write' className='link'>
                    <li className='bottom-nav-li'><i class='bi bi-pen'></i></li>
                </Link>
                <Link to='#' className='link'>
                    <li className='bottom-nav-li'><i class='bi bi-bell'></i></li>
                </Link>
                <Link to='bookmarks' className='link'>
                    <li className='bottom-nav-li'><i class='bi bi-bookmarks'></i></li>
                </Link>
            </ul>
        </div>
        )
}