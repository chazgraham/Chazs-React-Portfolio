import React from 'react'

import photo0 from '../../assets/projectImg/0.jpg';
import photo1 from '../../assets/projectImg/1.jpg';
import photo2 from '../../assets/projectImg/2.jpg';
import photo3 from '../../assets/projectImg/3.jpg';
import photo4 from '../../assets/projectImg/4.jpg';
import photo5 from '../../assets/projectImg/5.jpg';

function Portfolio() {
  return (
    <div className="flex-row">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
      <div className='image'>
        <img className="img-thumbnail" src={photo0} alt="Music Playlist"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://chazgraham.github.io/Music--Playlist/" >Music Playlist </a>
            |
            <a href= "https://github.com/chazgraham/Music--Playlist" >  <i class="fa fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo1} alt="The Collective"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://social-collective-app.herokuapp.com/" >The Collective </a>
            |
            <a href= "https://github.com/DXHASE/Collective-Social-App" >  <i class="fa fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo2} alt="Run Buddy"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://chazgraham.github.io/Run-Buddy/" >Run Buddy </a>
            |
            <a href= "https://github.com/chazgraham/Run-Buddy" >  <i class="fa fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo3} alt="JavaScript Test"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://chazgraham.github.io/Chazs-JavaScript-Knowledge-Test/" >JavaScript Test </a>
            |
            <a href= "https://github.com/chazgraham/Chazs-JavaScript-Knowledge-Test" >  <i class="fa fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo5} alt="Note Taker"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://chazs-note-taker.herokuapp.com/" >Note Taker </a>
            |
            <a href= "https://github.com/chazgraham/Chazs-Note-Taker" >  <i class="fa fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo4} alt="Random Password Generator"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://chazgraham.github.io/Chazs-Random-Password-Generator/" >Random Pass-Gen </a>
            |
            <a href= "https://github.com/chazgraham/Chazs-Random-Password-Generator" >  <i class="fa fa-github fa-2x"></i></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;