import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Section } from "./components/section";
import './index.css';

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
        <div className="App" >
            <Header handleDark={handleDark} />
            <Section title='Articles' />
            <Section title='Projects' />
            <Section title='Annotations' />
            <Footer />
        </div>
    );
}