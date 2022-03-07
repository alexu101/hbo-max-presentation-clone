import React from 'react'
import "./Option.css"
function Option({ Icon, title, subtitle }) {
    return (
        <div className='Option'>
            <Icon clasName="icon" style={{ fontSize: 100 }} />
            <div className="title">{title}</div>
            <div className="subtitle">
                {subtitle}
            </div>
        </div>
    )
}

export default Option