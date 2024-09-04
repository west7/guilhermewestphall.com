import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

const Mermaid = ({ chart }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: true });
    }, []);

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current.innerHTML = chart;
            mermaid.render('mermaidChart', chart, (svgCode) => {
                chartRef.current.innerHTML = svgCode;
            });
        }
    }, [chart]);

    return (
        <>
        <div className="mermaid" ref={chartRef} />
        </>
    );
};

export default Mermaid;