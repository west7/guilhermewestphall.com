import React, { useState, useEffect } from "react";
import "../App.css";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export function Section(props) {
    const [posts, setPosts] = useState('');
    const [title, setTitle] = useState('');


    /* useEffect(() => {
        fetch(HASH)
            .then(response => response.text())
            .then((post) => {
                setPosts(post);
            })

        console.log(posts);
    }, []); */

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/west7/EDA2/main/docs/apostila/Quickselect.md') 
            .then(response => response.text())
            .then((post) => {
                setPosts(post);
                
                const title = post.match(/^# (.*$)/m); 
                if (title) {
                    setTitle(title[1]);
                } 
            })
            .catch(error => console.error('Erro ao buscar o arquivo Markdown:', error));
    }, []);

    return (
        <div className="section">
            <h2>{props.title}</h2>
            <ul>
                <li>
                    {title}
                </li>
            </ul>
        </div>
    );
} 