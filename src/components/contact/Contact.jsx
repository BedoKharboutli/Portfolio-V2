import React from 'react'
import './contact.css'

export default function Contact() {
  const contactInfo = [
    {
      label: "Email",
      value: "Bedo.kharboutli@hotmail.com",
      href: "mailto:Bedo.kharboutli@hotmail.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      label: "Phone",
      value: "+46 729 086 978",
      href: "tel:+46729086978",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M22 16.92V19.92C22 20.52 21.39 21 20.92 21C9.24 21 1 12.76 1 1.08C1 0.61 1.48 0 2.08 0H5.08C5.68 0 6.08 0.39 6.08 0.92C6.08 3.29 6.67 5.62 7.74 7.74C7.94 8.13 7.84 8.61 7.5 8.9L5.79 10.61C7.24 13.86 10.14 16.76 13.39 18.21L15.1 16.5C15.39 16.16 15.87 16.06 16.26 16.26C18.38 17.33 20.71 17.92 23.08 17.92C23.61 17.92 24 18.31 24 18.92Z" fill="currentColor"/>
        </svg>
      )
    },
    {
      label: "Location",
      value: "Malmö, Sweden",
      href: "https://maps.google.com/?q=Malmö,Sweden",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 5.03 7.03 1 12 1S21 5.03 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/BedoKharboutli",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C20.565 21.795 24 17.295 24 12C24 5.37 18.63 0 12 0Z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/bedo-kharboutli-2172a6278/",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/bedo.kh",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM18.406 4.155C18.406 4.955 17.761 5.6 16.961 5.6C16.161 5.6 15.516 4.955 15.516 4.155C15.516 3.355 16.161 2.71 16.961 2.71C17.761 2.71 18.406 3.355 18.406 4.155Z"/>
        </svg>
      )
    }
  ]

  return (
    <section className='contact-section' id='contact'>
      <div className='contact-container'>
        <div className='contact-header'>
          <h2 className='section-title'>Let's Work Together</h2>
          <p className='section-subtitle'>
            Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with amazing people.
          </p>
        </div>

        <div className='contact-content'>
          <div className='contact-info'>
            <h3 className='contact-info-title'>Get In Touch</h3>
            <div className='contact-methods'>
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className='contact-method'
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className='contact-icon'>
                    {item.icon}
                  </div>
                  <div className='contact-details'>
                    <span className='contact-label'>{item.label}</span>
                    <span className='contact-value'>{item.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className='social-section'>
            <h3 className='social-title'>Follow Me</h3>
            <p className='social-subtitle'>Stay connected and see what I'm working on</p>
            <div className='social-links'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Follow me on ${social.name}`}
                >
                  <div className='social-icon'>
                    {social.icon}
                  </div>
                  <span className='social-name'>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='contact-cta'>
          <div className='cta-content'>
            <h3 className='cta-title'>Ready to start a project?</h3>
            <p className='cta-description'>
              Let's discuss your ideas and create something amazing together.
            </p>
            <a href="mailto:Bedo.kharboutli@hotmail.com" className='btn-primary cta-button'>
              Send me an email
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
