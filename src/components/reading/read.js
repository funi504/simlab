import React from 'react';
import './readStyles.css'
import { useSpeechSynthesis } from "react-speech-kit";
import profilepic from "./profilepic.jpg";
import pic1 from './1.jpg'
import pic2 from './2.jpg'
import pic3 from './3.jpg'



const Read = ()=>{
    const [value, setValue] = React.useState(" feature not yet ready, sorry.");
    const { speak } = useSpeechSynthesis();

    return(
        <div className='body'>
            <div className='article-read'>
                <ul className='ul-article-read'>
                    <li>Nekhunguni Funi</li>
                    <li className='ul-article-date'>Jun .12 </li>
                    <li className='ul-article-date'>3 min</li>
                    <li onClick={() => speak({ text: value })} style={{color:'rgb(147, 227, 229)'}}>

                        <i class="bi bi-play-circle-fill " ></i>Listen    
                    </li>
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>
                    <li><i class="bi bi-link"></i></li>
                    <li><i class="bi bi-bookmark-plus"></i></li>
                    <li><i class="bi bi-three-dots-vertical"></i></li>
                </ul>
                <hr/>
               <div className='article'>
                <div>
                    this is the first article by funi,blog like post
                    i don have much to say just sad and excited at the same time
                    , what a feeling.

                    expressing my feelings is not easy as i thought but yaah.
                </div>
               </div>
            </div>
            <div className='vertical-line'></div>
            <div className='sidebar-profile'>
                <ul className='sidebar-profile-details'>
                    <li ><img className='sidebar-profile-image' src={profilepic}/></li>
                    <li className='sidebar-profile-name'> Nekhunguni Funanani <i style={{color:'rgb(147, 227, 229)'}} class="bi bi-patch-check-fill"></i></li>
                </ul>
                <div className='sidebar-profile-followers'>
                    <li>12 articles</li>
                    <li>4.3k followers</li>
                </div>
                <div className='sidebar-profile-follow-button'>
                    <button>Follow</button>
                    <button><i class="bi bi-envelope-plus"></i></button>
                </div>
                <div className='sidebar-profile-follow-paragraph' >
                    <p>
                    I am ambitious and driven. I thrive on challenge and constantly set goals for myself,
                     so I have something to strive towards. I am not comfortable with settling,
                     and I am always looking for an opportunity to do better and achieve greatness.
                    </p>
                </div>
                <div>
                <br/>
                <hr/>
                <br/>
                <p></p>
                <ul className='side-article-ul'>
                <a href='#' >
                    <li className='side-article-li'>
                        <p className='sidebar-profile-paragraph'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloremque
                            esse autem blanditiis eos mollitia est fugiat iure officia laboriosam 
                        </p>
                        <img className='side-article-image' src={pic1}/>
                    </li>
                    </a>
                    <ul className='profile-ul'>
                        <li><img src={pic2} className='profile-image'/></li>
                        <li className='profile-li'>F NEKHUNGUNI</li>
                        <li className='profile-bookmark'> <i class='bi bi-bookmark-plus' ></i></li>
                    </ul>
                    
                    <hr/>
                    <li className='side-article-li'>
                        <p className='sidebar-profile-paragraph'>
                            Consectetur adipisicing elit. Impedit doloremque
                            esse autem blanditiis eos mollitia est fugiat iure officia laboriosam 
                        </p>
                        <img className='side-article-image' src={pic2}/>
                    </li>
                    
                    <ul className='profile-ul'>
                        <li><img src={pic3} className='profile-image'/></li>
                        <li className='profile-li'>F NEKHUNGUNI</li>
                        <li className='profile-bookmark'> <i class='bi bi-bookmark-plus' ></i></li>
                    </ul>
                    <hr/>
                    <li className='side-article-li'>
                        <p className='sidebar-profile-paragraph'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit doloremque
                        </p>
                        <img className='side-article-image' src={pic3}/>
                    </li>
                    <ul className='profile-ul'>
                        <li><img src={pic1} className='profile-image'/></li>
                        <li className='profile-li'>F NEKHUNGUNI</li>
                        <li className='profile-bookmark'> <i class='bi bi-bookmark-plus' ></i></li>
                    </ul>
                    <br/>
                </ul>
                </div>
            
            </div>
        </div>
        
        )
}

export default Read