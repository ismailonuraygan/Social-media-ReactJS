import React from 'react'
import "./LeftSideIcons.css";

function LeftSideIcons( { active, text, Icon } ) {
    //console.log(Icon)
    return (
        <div className = {`sidebarOption ${active && 'sideOption--active' } `} >
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default LeftSideIcons
