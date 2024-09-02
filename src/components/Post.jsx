import React from "react";
import { BackButton } from "./BackButton";
import { useParams, useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "../App.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGfm from 'remark-gfm';
import rehypeSanitize from "rehype-sanitize";
import Mermaid from "./Mermaid";
import { TopButton } from "./TopButton";

export function Post() {
    const location = useLocation();
    const { markdownContent } = location.state || {markdownContent: ''};
    

    return (
        <div className="post">
            <BackButton></BackButton>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        /* if (!inline && match && match[1] ==='mermaid' ) {
                            return <Mermaid chart={String(children).replace(/\n$/, '')} />;
                        } */
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={oneDark}
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
                    }, 
                    table({node, ...props}) {
                        return (
                            <table className="markdown-table" {...props} />
                        );
                    }
                }}
            >
                {markdownContent}
            </ReactMarkdown>
            <TopButton />
        </div>
    );
}