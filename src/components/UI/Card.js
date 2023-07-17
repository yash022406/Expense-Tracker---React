import './card.css'
import React from 'react'
function Card(props) {
    const classses = 'card '+props.className
    return <div className={classses}>
        
        {props.children}
    </div>

}
export default Card