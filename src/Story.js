import { Avatar } from '@material-ui/core'
import React from 'react'
import './Story.css'
function Story({storyImage, profileImage, title}) {
    return (
        <div className="story"
            style={{
                backgroundImage: `url(${storyImage})`,
                
            }}
        >
            <Avatar src={profileImage} className="story__avatar"/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
