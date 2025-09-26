import './index.css'

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App() {
    return(
      <div className='container'>
        <Header />
        <Hero/>
        <div className='section-divider'/>
        <Contact/>
        <Footer/>
      </div>
    )
}

export default App;
