import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar/> }
            {Icon && <Icon/> }
            {title && <h4> {title} </h4> }
        </div>
    )
}

export default SidebarRow
