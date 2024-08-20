import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import '../App.css';

export function Footer() {
    return (
        <footer className='footer'>
            Some text
            <div>
                <button className="icon" >
                    <FiGithub size={26} />
                </button>
                <button className="icon" >
                    <TbBrandLinkedin size={26} />
                </button>
            </div>
        </footer>
    );
}