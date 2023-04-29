import React, { useState } from 'react'
import './body.css'
import { Link } from 'react-router-dom';
import thumbnail from './sleep.jpg'
import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'

const Body = () => {

    const [bold , setBold] = useState('bold')
    const notBold = ()=> setBold('')
    const IsBold = ()=> setBold('bold')
    return(
        <div className='container'>

            <div className='recommend'>
                <ul className='recommend-list'>

                    <li className='recommend-items' >FOLLOWING</li>
                    <li className='recommend-items' style={{fontWeight:bold}} onClick={IsBold}>RECOMMENDED FOR YOU</li>

                </ul>
            </div>
            <div className='home-body'>
                <div className='article-body' >
            <Link to='/read/id'>
                    <img className='image-style' src={thumbnail} />
                    <p className='title-style'>why sleeping for atleast 8 hours is soo soo important</p>
                    <p className='p-style'>
                    Img elements must have an alt prop, either with
                    meaningful text, or an empty string for decorative 
                    images  ...
                    </p>
                    <ul className='profile-ul'>
                        <li><img src={pic1} className='profile-image'/></li>
                        <li className='profile-li'>F NEKHUNGUNI</li>
                        <li className='profile-li'>APR 8 . 5 min</li>
                        <li className='profile-li'>HEALTH</li>
                        <li className='profile-bookmark'> <i class='bi bi-bookmark-plus' ></i></li>
                    </ul>
                </Link>
                    <hr/>
                </div>
                <div className='side-article'>
                    <button className='search-btn'>SEARCH</button>
                    <div className='side-article'>
                        <ul className='side-article-ul'>
                        <a href={bold}>
                            <li className='side-article-li'>
                                <p >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloremque
                                    esse autem blanditiis eos mollitia est fugiat iure officia laboriosam 
                                </p>
                                <img className='side-article-image' src={pic1}/>
                            </li>
                            </a>
                            <ul className='profile-ul'>
                                <li><img src={pic2} className='profile-image'/></li>
                                <li className='profile-li'>F NEKHUNGUNI</li>
                                <li className='profile-li'>APR 8 . 5 min</li>
                                <li className='profile-li'>HEALTH</li>
                                <li className='profile-bookmark'> <i class='bi bi-bookmark-plus' ></i></li>
                            </ul>
                            <hr/>
                            <li className='side-article-li'>
                                <p>
                                    Consectetur adipisicing elit. Impedit doloremque
                                    esse autem blanditiis eos mollitia est fugiat iure officia laboriosam 
                                </p>
                                <img className='side-article-image' src={pic2}/>
                            </li>
                            <ul className='profile-ul'>
                                <li><img src={pic3} className='profile-image'/></li>
                                <li className='profile-li'>F NEKHUNGUNI</li>
                                <li className='profile-li'>APR 8 . 5 min</li>
                                <li className='profile-li'>HEALTH</li>
                                <li className='profile-bookmark'> <i class='bi bi-bookmark-plus' ></i></li>
                            </ul>
                            <hr/>
                            <li className='side-article-li'>
                                <p>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloremque
                             
                                </p>
                                <img className='side-article-image' src={pic3}/>
                            </li>
                            <ul className='profile-ul'>
                                <li><img src={pic1} className='profile-image'/></li>
                                <li className='profile-li'>F NEKHUNGUNI</li>
                                <li className='profile-li'>APR 8 . 5 min</li>
                                <li className='profile-li'>HEALTH</li>
                                <li className='profile-bookmark'> <i class='bi bi-bookmark-plus' ></i></li>
                            </ul>
                            <br/>
                        </ul>
                    </div>
                </div>
            </div>
            <h5> RECOMMENDED TOPICS </h5>
            <ul className='topic-ul' >
                <li className='topic-li'> health</li>
                <li className='topic-li'> education</li>
                <li className='topic-li'> technology</li>
            </ul>
        </div>
        )
}



export default Body
