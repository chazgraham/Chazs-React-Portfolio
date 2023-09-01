import React, { useState } from "react";
import { Link } from 'react-router-dom';

import chaz_pic from "../../assets/images/D92A2039.jpeg"

function Home() {

    const [photos] = useState([
        {
            name: 'Arcadium',
            languages: ['React, ', 'JavaScript, ', 'CSS'],
            description: 'An application that allows the user to choose a game that is posted on the homepage and allow them to play the game and view their score. All logic coded in JavaScript.',
            gitHub: 'https://github.com/chazgraham/Arcadium',
            heroku: 'https://chazgraham.github.io/Arcadium/'
        },
        {
            name: 'Game Seeker',
            languages: ['React, ', 'JavaScript, ', 'Apollo, ', 'MongoDb, ', 'GraphQl, ', 'Express, ', 'Bcrypt'],
            description: 'The application allows users to track games they have played, are playing, and have completed. It also allows the user to make friends and view the same list on their profiles.',
            gitHub: 'https://github.com/chazgraham/Game-Seeker',
            heroku: 'https://game-seeker.herokuapp.com/'
        },
        {
            name: 'The Collective',
            languages: ['JavaScript, ', 'Handlebars, ', 'Express, ', 'Sequelize, ', 'MySQL, ', 'Node.js'],
            description: 'A social media platform that allows users to log in to an existing account or sign up. Once the user is logged in they will be able to create, update, and delete their own posts.',
            gitHub: 'https://github.com/DXHASE/Collective-Social-App',
            heroku: 'https://social-collective-app.herokuapp.com/'
        },
        {
            name: 'Express-shop',
            languages: ['React, ', 'JavaScript, ', 'Apollo, ', 'MongoBb, ', 'GraphQl, ', 'Express, ', 'Bcrypt, ', 'Stripe'],
            description: 'A ecommerce application that users can add/remove items to their cart. Stripe checkout session will be utilized, once completed the user will be redirected to the homepage.',
            gitHub: 'https://github.com/chazgraham/Foodies',
            heroku: 'https://express-shop-a80244ad7590.herokuapp.com/'
        },
    ]);

    return (
        <>
            <section className="img_container">
                <div className="centered">
                    <h1>I am Chaz Graham</h1>
                    <h2>A passionte Full-stack web developer</h2>
                    <Link to='/resume'><button className="resume_btn1">Resume</button></Link>
                </div>
            </section>
            <section className="about">
                <div className="self_container">
                    <img className="self_pic" src={chaz_pic} alt="pic of chaz" />
                </div>
                <div className="text">
                    <h3>About me</h3>
                    <p>I am a former medic for the United States Air Force, I served for six years before separating to further my education with my newly acquired benefits. I went into the nursing profession to further build the medical skills I already possessed. Two semesters into my degree I found I really did not like nursing or practicing medicine as a whole. After searching for careers on the web I found the profession of software engineer. After being told I was tech savvy by my friends and family I decided to change the course of my career. During my time coding I find myself more engaged and have a heightened drive to continue learning. Instead of dreading going to work I wake up with drive to finish my projects and solve the problems that sit before me.</p>
                </div>
            </section>
            <section>
                <h2 className="featured">Featured Applications</h2>
                <div className="divider"></div>
                <div className="collum">
                    {photos.map((image, i) => (
                        <div className='project_card'>
                            <a href={image.heroku} target="_blank" rel="noreferrer">
                                <video className="img-thumbnail" src={require(`../../assets/videos/${i}.webm`)} width="600" height="300" on onMouseEnter={event => event.target.play()} onMouseOut={event => event.target.pause()} />
                            </a>
                            <h4>{image.name}</h4>
                            <p className="project_text">{image.description}</p>
                            <h5>Technologies Used</h5>
                            <p className="tech_text">{image.languages}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section>
                <div className="get_in_touch">
                    <h2 className="get_in_touch_h2">Get in Touch</h2>
                    <p className="get_in_touch_p">Have any questions? I am always open to talk about my skills, new projects, creative opportunities and how I can help you.</p>
                    <Link to='/contact'><button className="get_in_touch_btn">Contact</button></Link>
                </div>
            </section>
        </>
    )
}

export default Home;