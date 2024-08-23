import React from 'react';
import { IoSearch } from "react-icons/io5";
import { FiSun, FiMoon } from "react-icons/fi";
import '../App.css';

export function Header({ handleDark }) {
    
    let dark = document.documentElement.getAttribute('data-theme') === 'dark'; 
    
    return (
        <nav className='header' >
            <a className='header-title' href='/'>guilhermewestphall.com</a>
            <div className='div-header' >
                {window.innerWidth < 1050 ? (
                    <button className='icon'>
                        Mostrar mais
                    </button>
                ) : (
                    <>
                        <button className='icon'>
                            <IoSearch size={24} />
                        </button>
                        <button className='icon' onClick={handleDark}>
                            {dark ? <FiMoon size={24}/> : <FiSun size={24} />}
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}