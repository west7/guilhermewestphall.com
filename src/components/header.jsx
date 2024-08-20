import React from 'react';
import { CIcon } from '@coreui/icons-react';
import { cilSun, cilMoon, cilSearch } from '@coreui/icons';
import '../App.css';

export function Header({ handleDark }) {
    
    let dark = document.documentElement.getAttribute('data-theme') === 'dark'; 
    
    return (
        <nav className='header' >
            <a style={{ fontSize: 25, padding: 4, fontWeight: 'bold' }}>guilhermewestphall.com</a>
            <div className='div-header' >
                <button>
                    <CIcon icon={cilSearch} size='sm' height={24} style={{ alignSelf: "center" }} />
                </button>
                <button onClick={handleDark}>
                    <CIcon icon={dark ? cilMoon : cilSun} size='sm' height={24} style={{ alignSelf: "center" }} />
                </button>
            </div>
        </nav>
    );
}