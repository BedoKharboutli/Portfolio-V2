import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='tags'>

      <h2>You can find me on these social platforms:</h2>
      <br /><br />
      <div className='icons'>
      <a href="https://github.com/BedoKharboutli" target="_blank" rel="noopener noreferrer">
          <img className="imgg" src="github.jpg" alt="GitHub" />
      </a>
      <a href="https://www.instagram.com/bedo.kh" target="_blank" rel="noopener noreferrer">
          <img className="imgg" src="./Insta.png" alt="Instagram" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img className="imgg" src="email.jpg" alt="Email" />
      </a>
      <a href="https://www.linkedin.com/in/bedo-kharboutli-2172a6278/" target="_blank" rel="noopener noreferrer">
          <img className="imgg" src="Linked.svg" alt="LinkedIn" />
      </a>
    
      
      </div>
      
    </div>
  )
}
