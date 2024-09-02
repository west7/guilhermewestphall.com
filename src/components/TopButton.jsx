import { IoIosArrowUp } from "react-icons/io";

export function TopButton() {
    
    const handleGoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <button className="go-back" onClick={handleGoTop}>
            <IoIosArrowUp style={{paddingRight: 5}}/>
            Go to top
        </button>
    );
}