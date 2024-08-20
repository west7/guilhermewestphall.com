import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";
import '../App.css';

export function Header({ handleDark }) {
    
    let dark = document.documentElement.getAttribute('data-theme') === 'dark'; 
    
    return (
        <nav className='header' >
            <a style={{ fontSize: 25, padding: 4, fontWeight: 'bold' }}>guilhermewestphall.com</a>
            <div className='div-header' >
                <button className='icon'>
                    <IoSearch size={24} />
                </button>
                <button className='icon' onClick={handleDark}>
                    {dark ? <FiMoon size={24}/> : <FiSun size={24} />}
                </button>
            </div>
        </nav>
    );
}