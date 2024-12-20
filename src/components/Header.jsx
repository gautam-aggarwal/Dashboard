import React from 'react';
import { GoPerson } from "react-icons/go";
import { VscBellDot } from "react-icons/vsc";
import { BsJustify } from 'react-icons/bs';
import '../styles/header.css';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='header-icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>

      </div>
      <div className='header-right'>
        <VscBellDot className='header-icon' />

        <GoPerson className='header-icon' />
      </div>
    </header>
  )
}

export default Header


