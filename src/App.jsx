import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";
import './index.css';
import { Post } from "./components/Post";

export default function App() {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem('dark-theme');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    const handleDark = () => {
        setDark(prevDark => {
            const newDark = !prevDark;
            localStorage.setItem('dark-theme', JSON.stringify(newDark));
            return newDark;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    }, [dark]);



    return (
        <Router >
            <div className="App" >
                <Header handleDark={handleDark} />
                <Routes className="main-content">
                    <Route path="/" element={<Section name="Annotations" /> } />
                    <Route path="posts/:title" element={<Post />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}