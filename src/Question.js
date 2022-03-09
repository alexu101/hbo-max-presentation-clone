import React from 'react'
import { useState } from 'react';
import "./Questions.css"

function Question({ title, content, key }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="question">
            <div className="question__title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            <div className="question__content">
                {isActive && content}
            </div>
        </div>
    )
}

export default Question