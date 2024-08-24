import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const Mermaid = ({ chart }) => {
    const chartRef = useRef();

    useEffect(() => {
        console.log('Initializing Mermaid');
        mermaid.initialize({ startOnLoad: false });
    }, []);

    useEffect(() => {
        const renderMermaid = () => {
            if (chartRef.current) {
                const uniqueId = `mermaid-chart-${Math.random().toString(36).substr(2, 9)}`;
                chartRef.current.id = uniqueId;

                console.log('Rendering Mermaid chart with ID:', uniqueId);
                console.log('Chart content: \n', chart);

                mermaid.render(uniqueId, chart, (svgCode) => {
                    chartRef.current.innerHTML = svgCode;
                });
            } else {
                console.error('chartRef.current is not defined');
            }
        };

        if (document.readyState === 'complete') {
            renderMermaid();
        } else {
            window.addEventListener('load', renderMermaid);
            return () => window.removeEventListener('load', renderMermaid);
        }
    }, [chart]);

    return <div ref={chartRef} />;
};

export default Mermaid;