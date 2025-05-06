import React from 'react';
import { useState } from 'react';

import './header.css'



export default function Header() {

  const [showList, setshowList] = useState(false)

  return (
    <header className='flex'>

      <button onClick={() => {
          setshowList(true)
        }} className='menu' >☰ </button>
      <div/>

      <nav className='nav'>
        <ul className='flex'>

        <a href="#home">HOME</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>


        </ul>
      </nav>
      <div/>

      {showList && (
        <div className='fixed' >
          <ul className='list'>
            <li className='unshowList' >
              <button onClick={()=> {
                setshowList(false)
              }} >❌</button>
            </li>
            <li className='lines'> <a href="">HOME</a> </li>
            <li className='lines'> <a href="">PROJECTS</a> </li>
            <li className='lines'> <a href="">CONTACT</a> </li>

          </ul>
        </div>


      )}
      


    </header>
  );
}
