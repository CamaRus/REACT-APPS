import React from "react";
import './MenuToggle.css';

const MenuToggle = props => {
    const cls = [
        'MenuToggle', 
        'bi',
        'bi-list'
    ]

    if (props.isOpen) {
        cls.push('bi-x')
        cls.push('open')
    } 
    // else {
    //     cls.push('bi-x')
    // }

    return (
        <i
            className={cls.join (' ')}
            onClick={props.onToggle}    
        />

    )
}

export default MenuToggle