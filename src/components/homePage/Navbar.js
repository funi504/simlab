import React, { useState } from 'react';
import logo from './vision.jpg'
import menuIcon from './menu.png'
import './NavbarStyles.css'
import { Link } from 'react-router-dom';


export default function Header (){

        const [display ,setDisplay] = useState('none')
        const displayAll = ()=> setDisplay('block')
        const displayNone = ()=> setDisplay('none')
    
 return (
     <div className='nav'>  
        <div style={Styles.Navbar}> 
            <ul className='list'>
                <li className='logo'>
                    <img style={Styles.Image} src={logo}/> 
                </li>
                <Link to='/'  className=' link'><li className='i-items'><i class='bi bi-house'></i></li></Link>
                <Link to='/write' className='link'><li className='i-items'><i class='bi bi-pen'></i></li></Link>
                <Link to='#' className='link'><li className='i-items'><i class='bi bi-bell'></i></li></Link>
                <Link to='bookmarks' className='link'><li className='i-items'><i class='bi bi-bookmarks'></i></li></Link>
                <li className=' btn'>
                    <img style={Styles.Image} src={menuIcon} onClick={displayAll}/> 
                </li>
            </ul>
        </div>
        <div style={{display:display}}>
            <ul className='Sidebar'>
                <li className='x' onClick={displayNone}> x</li>
                <li className='sidebar-items'>WRITING</li>
                <li className='sidebar-items'>MARKET PLACE</li>
                <li className='sidebar-items'>LOGIN</li>
                <li className='sidebar-items'>SIGNIN</li>
            </ul>
        </div>
    </div>
 )
};

const Styles = {
 
    Navbar: {

        backgroundColor: 'white',
        boxShadow:'1px 2px 9px grey',
        
        
    },

    H3:{
    
    },

    Image:{
        width:60,
        hieght:15,

    }
}