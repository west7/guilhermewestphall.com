import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export function Section({ name, urls }) {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const fetchedPosts = await Promise.all(
                urls.map(async (url) => {
                    const response = await fetch(url);
                    const text = await response.text();
                    const title = text.match(/^# (.*$)/m)[1];
                    return { title, url, content: text };
                })
            );
            setPosts(fetchedPosts);
        };
        fetchPosts().catch((error) => console.error("Erro ao buscar os arquivos Markdown:", error))
    }, [urls]);


    /* useEffect(() => {
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
    }, []); */

    return (
        <section className="section">
            <h2>{name}</h2>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link
                            className="section-link"
                            to={`/posts/${post.url.split('/').pop().replace('.md', '')}`}
                            state={{ markdownContent: post.content }}
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
} 