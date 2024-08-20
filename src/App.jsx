import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Section } from "./components/section";
import './index.css';

export default function App() {
    const [dark, setDark] = useState(true);

    const handleDark = () => {
        setDark(!dark);
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