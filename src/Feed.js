import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post 
                profilePic='https://lh3.googleusercontent.com/a-/AOh14Ghm7CCj-6_hc8o8YW0SwZHJiRVQXyTIJ-Gz5Ogw7w=s88-c-k-c0x00ffffff-no-rj-mo' 
                username='SADDAM' timestamp='12-12-2020' 
                message='Hello guys'
                image='https://images.unsplash.com/photo-1495954147468-729898cbe8aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' 
            />
            
            <Post 
                profilePic='https://lh3.googleusercontent.com/a-/AOh14Ghm7CCj-6_hc8o8YW0SwZHJiRVQXyTIJ-Gz5Ogw7w=s88-c-k-c0x00ffffff-no-rj-mo' 
                username='SADDAM' timestamp='12-12-2020' 
                message='Hello guys thats cool'
            />
        </div>
    )
}

export default Feed
