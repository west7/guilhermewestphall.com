import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import '../App.css';

export function Footer() {
    return (
        <footer className='footer'>
            <div>
                <button className="icon" style={{ padding: 0 }}>
                    <FiGithub size={26} />
                </button>
                <button className="icon" style={{ padding: 0 }}>
                    <TbBrandLinkedin size={26} />
                </button>
            </div>
        </footer>
    );
}