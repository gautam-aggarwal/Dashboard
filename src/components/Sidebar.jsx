import React from 'react'
import sideimage from '../img/side.png';
import Logo from '../img/logo.png';
import { FaHandFist } from "react-icons/fa6";
import { SlBriefcase } from "react-icons/sl";
import { VscCalendar } from "react-icons/vsc";
import { TbActivityHeartbeat } from "react-icons/tb";
import {
BsSpeedometer,
BsFileEarmarkText
}
    from 'react-icons/bs';
import '../styles/Sidebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <div className='brand-logo'>
                        <img src={Logo} alt="image of the logo" className='logo' />
                    </div>
                    <div className='brand'>Jur</div>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsSpeedometer className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <SlBriefcase className='icon' /> My Cases
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <TbActivityHeartbeat className='icon' /> Activities
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <VscCalendar className='icon' /> Calendar
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFileEarmarkText className='icon' /> Files
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <FaHandFist className='icon' /> Open a Dispute
                    </a>
                </li>
            </ul>
            <div className="sidebar-image">
                <img src={sideimage} alt="Sidebar Visual" className="sidebar-visual" />
            </div>
        </aside>
    )
}


export default Sidebar