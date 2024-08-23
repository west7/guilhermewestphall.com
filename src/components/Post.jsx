import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import { BackButton } from "./BackButton";

export function Post() {
    const { title } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/west7/EDA2/main/docs/apostila/${title}.md`) //${title}
            .then(response => response.text())
            .then((post) => {
                setContent(post);
            })
            .catch(error => console.error('Erro ao buscar o arquivo Markdown:', error));
    }, [title]);

    return (
        <div className="post">
            <BackButton></BackButton>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={materialDark}
                                language={match[1].toLowerCase()}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >{content}</ReactMarkdown>
        </div>
    );
}