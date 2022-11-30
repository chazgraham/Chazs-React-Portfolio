import React from 'react'
import profileImg from '../../assets/profileImg/profileImg.jpg'

function About() {

  return (
    <section className="" >
      <h2 id="about">About Me</h2>
      <img className='profile-img' src={profileImg} alt="chaz Graham"/>
      <div className="">
        <p>
        I am a former medic for the United States Air Force, I served for six years before separating to further my education with my newly acquired benefits. I went into the nursing profession to further build the medical skills I already possessed. Two semesters into my degree I found I really did not like nursing or practicing medicine as a whole. After searching for careers on the web I found the profession of coding. After being told I was tech savvy by my friends and family I decided to change the course of my career. During my time coding I find myself more engaged and have a heightened drive to continue learning. Instead of dreading going to work I wake up with drive to finish my projects and solve the problems that sit before me.
      </p>
      </div>
    </section>
  )
}

export default About