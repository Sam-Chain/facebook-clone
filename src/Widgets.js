import React from 'react'
import './widgets.css'
function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
                // src="https://www.facebook.com/plugins/page.php?href=&tabs=timeline&width=340&height=1500&small_header=false&
                // adapt_container_width=true&hide_cover=false&show_facepile=true&appID" 
                src="https://www.facebook.com/mohamad.fither"
                frameborder="0"
                width="340"
                height="100%"
                style={{
                    border:'none',
                    overflow:'hidden',
                }}
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
            />
        </div>
    )
}

export default Widgets
