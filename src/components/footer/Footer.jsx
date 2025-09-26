import React from 'react'
import './footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/BedoKharboutli' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/bedo-kharboutli-2172a6278/' },
    { name: 'Instagram', href: 'https://www.instagram.com/bedo.kh' }
  ]

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-brand'>
            <div className='brand-text'>AK</div>
            <p className='footer-description'>
              Fullstack Developer passionate about creating exceptional digital experiences 
              through modern web technologies and innovative solutions.
            </p>
          </div>

          <div className='footer-links'>
            <div className='footer-section'>
              <h4 className='footer-title'>Quick Links</h4>
              <ul className='footer-list'>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className='footer-link'>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='footer-section'>
              <h4 className='footer-title'>Connect</h4>
              <ul className='footer-list'>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className='footer-link'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='footer-section'>
              <h4 className='footer-title'>Get In Touch</h4>
              <div className='footer-contact'>
                <a 
                  href="mailto:Bedo.kharboutli@hotmail.com" 
                  className='footer-contact-link'
                >
                  Bedo.kharboutli@hotmail.com
                </a>
                <a 
                  href="tel:+46729086978" 
                  className='footer-contact-link'
                >
                  +46 729 086 978
                </a>
                <span className='footer-location'>Malmö, Sweden</span>
              </div>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <div className='footer-bottom-content'>
            <p className='footer-copyright'>
              © {currentYear} Abdulrahman Kharboutli. All rights reserved.
            </p>
            <p className='footer-built'>
              Built with React & modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
