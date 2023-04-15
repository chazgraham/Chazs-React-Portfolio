import React from "react";
import { Container } from "react-bootstrap";

import profileImg from '../../assets/profileImg/profileImg.jpg'

function Home() {
    return (
        <>
            <Container className="flex-box">
                <div className="home-content">
                    <h2>Full-Stack Web Developer</h2>
                    <p className="home-text">Hi I'm Chaz Graham. A passionate Full-stack web developer based out of San Antonio, TX</p>
                    <p className="home-skills">Technical Skills: JavaScript, React, MongoDb, HTML, Express, GraphQl</p>
                    <p className="home-skills">Soft Skills: JavaScript, React, MongoDb, HTML, Express, GraphQl</p>
                </div>
                <div className='profile-info'>
                    <img className='profile-img' src={profileImg} alt="chaz Graham" />
                </div>
            </Container>
        </>
    )
}

export default Home;