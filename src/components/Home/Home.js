import React from "react";

import chaz_pic from "../../assets/images/D92A2039.jpeg"

function Home() {
    return (
        <>
            <section className="img_container">
                <div className="centered">
                    <h1>I am Chaz Graham</h1>
                    <h2>A passionte Full-stack web developer</h2>
                    <button className="resume_btn">Resume</button>
                </div>
            </section>
            <section className="about">
                <div className="text">
                    <h3>About me</h3>
                    <p>I am a former medic for the United States Air Force, I served for six years before separating to further my education with my newly acquired benefits. I went into the nursing profession to further build the medical skills I already possessed. Two semesters into my degree I found I really did not like nursing or practicing medicine as a whole. After searching for careers on the web I found the profession of software engineer. After being told I was tech savvy by my friends and family I decided to change the course of my career. During my time coding I find myself more engaged and have a heightened drive to continue learning. Instead of dreading going to work I wake up with drive to finish my projects and solve the problems that sit before me.</p>
                </div>
                <div>
                    <img className="self_pic" src={chaz_pic}  alt="pic of chaz"/>
                </div>
            </section>
            <section>
                <h2 className="featured">Featured Applications</h2>
                <div className="divider"></div>
            </section>
        </>
    )
}

export default Home;