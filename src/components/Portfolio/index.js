import React from 'react'

import photo0 from '../../assets/projectImg/0.jpg';
import photo1 from '../../assets/projectImg/1.jpg';
import photo2 from '../../assets/projectImg/2.jpg';

function Portfolio() {
  return (
    <div className="flex-row">
      <div className='image'>
        <img className="img-thumbnail" src={photo0} alt="Music Playlist"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://chazgraham.github.io/Music--Playlist/" >Music Playlist</a>
            <a href= "https://github.com/chazgraham" >GitHub</a>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo1} alt="The Collective"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://social-collective-app.herokuapp.com/" >The Collective</a>
            <a href= "https://github.com/chazgraham" >GitHub</a>
          </div>
        </div>
      </div>
      <div className='image'>
        <img className="img-thumbnail" src={photo2} alt="Run Buddy"/>
        <div className="img__overlay">
          <div className="img_gitHub">
            <a href= "https://chazgraham.github.io/Run-Buddy/" >Run Buddy</a>
            <a href= "https://github.com/chazgraham" >GitHub</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Portfolio;