import React from 'react'
import Lottie from "lottie-react";
import codeAnimation from '../../../public/mmm.json'
import './hero.css'




export default function Hero() {
  return (
    <>
    {/* Hero container ___________________________________________________ */}
    <section className='hero flex'>
      <div className='left-section'>

        <img className='image' src='./sora.png' alt="" />
        <img className='vari' src="./vari.png" alt="" />
        <h1 className='title'> Junior Fullstack Developer</h1>
        <p className='sub-title'>My name is Abdulrahman Kharboutli, I have a strong interest in technology and a diverse multicultural background, I
                have developed expertise in Information Technology (IT) and the Internet of Things
                (IoT). Through my experiences, I have gained a distinct viewpoint and a
                comprehensive range of technical abilities, enabling me to address intricate
                problems and create innovative solutions on a worldwide scale. </p>
      </div>

      <div className='right-section'>

          <Lottie className='animation1' animationData={codeAnimation} />
      </div>
      
      
    </section>

      <br /> <br /> <br /> <br /> <br /> <br />

    {/* Skills container ___________________________________________________ */}


      <div className="skills">
          <h2 className='my-skills'>My Skills</h2>
          
          <div className="skills-container">
            <div className="front-sec">
              <h3>Frontend</h3>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            
            <div className="back-sec">
              <h3>Backend</h3>
              <ul>
                <li>Python</li>
                <li>Flask</li>
                <li>Docker</li>
                <li>Postman</li>
                <li>REST APIs</li>
                <li>MySQL</li>
              </ul>
            </div>

            <div className="other-sec">
              <h3>Other Skills</h3>
              <ul>
                <li>Git</li>
                <li>Visual studio</li>
                <li>Bitbucket</li>
                <li>GitHub</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
      </div>
      

      {/* Projects container ___________________________________________________ */}


<div className='projects-sec'>
  <h2 className='section-title my-skills'>My Projects</h2>
  
  <div className='projects-grid '>
    <div className='project-card '>
      <h3 className='project-title'>Food Recipe Platform</h3>
      <img className='food-img' src="https://t3.ftcdn.net/jpg/02/52/12/40/360_F_252124067_aCtp9ZD934RboKmjJzkXiwYDL7XkNjpn.jpg" alt="" />
      <p className='project-desc'>Developed a web application to store and manage food recipes. <br /> <br />  <strong>Tech stack:</strong> Python SQLite APIs Docker Bootstrap Flask  JS.</p>
      <br />
      <a href='https://recipe-platform-my2aml003-bedokharboutlis-projects.vercel.app/' target='_blank' rel='noreferrer' className='view-btn'>View Project</a>
    </div>

    <div className='project-card'>
      <h3 className='project-title'>Snake Game</h3>
      <img className='food-img' src="./snake.jpg" alt="" />
      <p className='project-desc'>A classic Snake game built using HTML, CSS, and JavaScript. Control the snake, eat the food,  <br/> <br /> and try to get the highest score without hitting the walls or yourself!.</p>
      <a href='https://bedokharboutli.github.io/snakegame-JS/' target='_blank' rel='noreferrer' className='view-btn'>View Project</a>
    </div>
    
    <div className='project-card'>
      <h3 className='project-title'>Todo App</h3>
      <img className='todo-img' src="./sooner.jpg" alt="" />
      <p className='project-desc'>A simple todo app with authentication and real-time sync using Firebase <br/> <br /> A simple todo app with authentication and real-time sync using Firebase. <br /></p>
      <a href='https://your-link.com' target='_blank' rel='noreferrer' className='view-btn'>View Project</a>
    </div>
    

    {/* Add more cards as needed */}
  </div>
</div>


  
      


    </>
  )
}
