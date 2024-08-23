import React from "react";
import { useNavigate } from "react-router-dom";


export function BackButton() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <button className="go-back" onClick={handleGoBack}>
            {"< Go back"}
        </button>

    );
}