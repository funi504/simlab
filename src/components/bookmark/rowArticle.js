import React from 'react';
import './rowArticle.css'

 const RowArrticles = ()=>{

    return (
        <div className='container'>
            <h3>Bookmarks</h3>
            <div className='Row-Article-body'>
                <li><p> The Biggest Goal I’ve Achieved So Far</p></li>
                <li>
                    <img className='side-article-image' src={'https://images.pexels.com/photos/5689042/pexels-photo-5689042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                </li>
            </div>
            <div className='Row-Article-body'>
                <li><p> The Biggest Goal I’ve Achieved So Far</p></li>
                <li>
                    <img className='side-article-image' src={'https://images.pexels.com/photos/5689042/pexels-photo-5689042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                </li>
            </div>

        </div>
        
        )

 }

 export default RowArrticles