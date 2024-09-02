import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";


export function BackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className="go-back" onClick={handleGoBack}>
            <IoIosArrowBack style={{alignSelf: 'center', paddingRight: 5}}/>
            Go back
        </button>

    );
}   