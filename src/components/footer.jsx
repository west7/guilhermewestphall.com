import { cibGithub } from '@coreui/icons';
import { CIcon } from '@coreui/icons-react';
import '../App.css';

export function Footer() {
    return (
        <footer className='footer'>
            Some text
            <div>
                <a style={{ fontSize: 16, padding: 4 }}>
                    <CIcon icon={cibGithub} size='sm' height={22}  />
                </a>
                <a style={{ fontSize: 16, padding: 4 }}>linkedin logo</a>
            </div>
        </footer>
    );
}