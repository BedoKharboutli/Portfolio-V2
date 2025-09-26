import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <>
    {/* Hero Section */}
    <section className='hero' id='home'>
      <div className='hero-content'>
        <div className='hero-text'>
          <div className='hero-badge'>
            <span className='badge-dot'></span>
            Available for work
          </div>
          
          <h1 className='hero-title'>
            Hi, I'm <span className='gradient-text'>Abdulrahman</span>
            <br />
            Fullstack Developer
          </h1>
          
          <p className='hero-description'>
            I specialize in creating exceptional digital experiences through modern web technologies 
            and AI automation. With a multicultural background and passion for innovation, I build 
            scalable solutions that solve real-world problems.
          </p>
          
          <br /> <br /> <br />
          
          <div className='hero-actions'>
            <a href="#projects" className='btn-primary'>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className='btn-secondary'>
              Get In Touch
            </a>
          </div>
        </div>

        <div className='hero-visual'>
          <div className='profile-container'>
            <img className='profile-image' src='./sora.png' alt="Abdulrahman Kharboutli" />
            <div className='profile-glow'></div>
          </div>
          
          <div className='floating-elements'>
            <div className='floating-card tech-card'>
              <div className='card-icon'>⚡</div>
              <div className='card-text'>
                <div className='card-title'>Fast Development</div>
                <div className='card-subtitle'>Optimized workflows</div>
              </div>
            </div>
            
            <div className='floating-card design-card'>
              <div className='card-icon'>🎨</div>
              <div className='card-text'>
                <div className='card-title'>Modern Design</div>
                <div className='card-subtitle'>User-centered approach</div>
              </div>
            </div>
            
            <div className='floating-card ai-card'>
              <div className='card-icon'>🤖</div>
              <div className='card-text'>
                <div className='card-title'>AI Integration</div>
                <div className='card-subtitle'>Smart automation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Skills Section */}
    <section className="skills-section">
      <div className="section-header">
        <h2 className='section-title'>Technical Expertise</h2>
        <p className='section-subtitle'>Technologies I work with to bring ideas to life</p>
      </div>
      
      <div className="skills-grid">
        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon">🎨</div>
            <h3 className="category-title">Frontend</h3>
          </div>
          <div className="skills-list">
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">React</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">CSS3</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Bootstrap</span>
          </div>
        </div>
        
        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon">⚙️</div>
            <h3 className="category-title">Backend</h3>
          </div>
          <div className="skills-list">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Flask</span>
            <span className="skill-tag">TypeScript</span>
            <span className="skill-tag">Next.js</span>
            <span className="skill-tag">Docker</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">MySQL</span>
          </div>
        </div>

        <div className="skill-category">
          <div className="category-header">
            <div className="category-icon">🛠️</div>
            <h3 className="category-title">Tools & DevOps</h3>
          </div>
          <div className="skills-list">
            <span className="skill-tag">Git</span>
            <span className="skill-tag">GitHub</span>
            <span className="skill-tag">Cursor</span>
            <span className="skill-tag">Bitbucket</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Postman</span>
            <span className="skill-tag">CI/CD</span>
            <span className="skill-tag">N8N</span>
          </div>
        </div>
      </div>
    </section>
      

    {/* Projects Section */}
    <section className='projects-section' id='projects'>
      <div className="section-header">
        <h2 className='section-title'>Featured Projects</h2>
        <p className='section-subtitle'>A showcase of my recent work and technical capabilities</p>
      </div>
      
      <div className='projects-grid'>
        <div className='project-card'>
          <div className='project-image-container'>
            <img className='project-image' src="https://static.scientificamerican.com/dam/m/128e9a2bf8a1939/original/DM0HT8_WEB.jpg?m=1714676104.168&w=1200" alt="3D Solar System" />
            <div className='project-overlay'>
              <div className='project-tech-stack'>
                <span className='tech-tag'>React</span>
                <span className='tech-tag'>Three.js</span>
                <span className='tech-tag'>NASA API</span>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <h3 className='project-title'>Interactive 3D Solar System</h3>
            <p className='project-description'>
              Space exploration platform featuring stunning 3D solar system visualization with real NASA planetary data integration and interactive features.
            </p>
            <div className='project-actions'>
              <a href='https://falak-space-app.vercel.app/' target='_blank' rel='noreferrer' className='btn-primary'>
                Live Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='project-image-container'>
            <img className='project-image' src="https://t3.ftcdn.net/jpg/02/52/12/40/360_F_252124067_aCtp9ZD934RboKmjJzkXiwYDL7XkNjpn.jpg" alt="Recipe Platform" />
            <div className='project-overlay'>
              <div className='project-tech-stack'>
                <span className='tech-tag'>Python</span>
                <span className='tech-tag'>Flask</span>
                <span className='tech-tag'>SQLite</span>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <h3 className='project-title'>Food Recipe Platform</h3>
            <p className='project-description'>
              Full-stack web application for storing and managing food recipes with user authentication and search functionality.
            </p>
            <div className='project-actions'>
              <a href='https://recipe-platform-my2aml003-bedokharboutlis-projects.vercel.app/' target='_blank' rel='noreferrer' className='btn-primary'>
                Live Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className='project-card'>
          <div className='project-image-container'>
            <img className='project-image' src="./snake.jpg" alt="Snake Game" />
            <div className='project-overlay'>
              <div className='project-tech-stack'>
                <span className='tech-tag'>JavaScript</span>
                <span className='tech-tag'>HTML5</span>
                <span className='tech-tag'>CSS3</span>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <h3 className='project-title'>Snake Game</h3>
            <p className='project-description'>
              Classic Snake game with modern styling, smooth animations, and responsive controls for an engaging gaming experience.
            </p>
            <div className='project-actions'>
              <a href='https://bedokharboutli.github.io/snakegame-JS/' target='_blank' rel='noreferrer' className='btn-primary'>
                Play Game
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className='project-card'>
          <div className='project-image-container'>
            <img className='project-image' src="./weath.jpg" alt="Weather App" />
            <div className='project-overlay'>
              <div className='project-tech-stack'>
                <span className='tech-tag'>React</span>
                <span className='tech-tag'>API</span>
                <span className='tech-tag'>CSS3</span>
              </div>
            </div>
          </div>
          <div className='project-content'>
            <h3 className='project-title'>Weather App</h3>
            <p className='project-description'>
              Responsive weather application with real-time data from OpenWeatherMap API, featuring location search and detailed forecasts.
            </p>
            <div className='project-actions'>
              <a href='https://api-weather-app-gray.vercel.app/' target='_blank' rel='noreferrer' className='btn-primary'>
                Live Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


  
      


    </>
  )
}
