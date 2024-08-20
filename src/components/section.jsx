import React from "react";
import "../App.css"

export function Section(props) {
    return (
        <div style={{flex: 1,  padding: 8, marginLeft: 'auto', marginRight: 'auto', width: '44%' }}>
            <h2>{props.title}</h2>
            <ul style={{listStyle: 'none', paddingLeft: 0, fontSize: 18}}>
                <li>{props.title} 1</li>
                <li>{props.title} 2</li>
                <li>{props.title} 3</li>
                <li>{props.title} 4</li>
                <li>{props.title} 1</li>
                <li>{props.title} 2</li>
                <li>{props.title} 3</li>
                <li>{props.title} 4</li>
                <li>{props.title} 1</li>
                <li>{props.title} 2</li>
                <li>{props.title} 3</li>
                <li>{props.title} 4</li>
            </ul>
        </div>
    );
}