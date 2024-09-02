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

    const urls = [
        'https://raw.githubusercontent.com/west7/EDA2/main/docs/apostila/HashTable.md',
        'https://raw.githubusercontent.com/west7/EDA2/main/docs/apostila/%C3%81rvoreRedBlack.md',
        'https://raw.githubusercontent.com/west7/EDA2/main/docs/apostila/FiladePrioridades.md',
        'https://raw.githubusercontent.com/west7/EDA2/main/docs/apostila/Grafos.md',
        'https://raw.githubusercontent.com/west7/EDA2/main/docs/apostila/Quickselect.md',
    ]

    const titles = [
        'Hash Table',
        'Árvore Red-Black',
        'Fila de Prioridades',
        'Grafos',
        '',
    ]

    // TODO: Criar componente Home para configurar todas as Sections visíveis na tela inicial
    //       Realizar rederização dinâmica das Sections e vincular a cada Post
    //       Agrupar Posts?   
    //       Colocar as urls em um arquivo de config JSON

    return (
        <Router >
            <div className="App" >
                <Header handleDark={handleDark} />
                <Routes className="main-content">
                    <Route path="/" element={<Section name="Software Engineering" urls={urls} titles={titles}/> /*Home*/} />
                    <Route path="posts/:title" element={<Post />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}