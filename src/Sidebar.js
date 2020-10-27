import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import EmojiFlagsOutlinedIcon from '@material-ui/icons/EmojiFlagsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://lh3.googleusercontent.com/a-/AOh14Ghm7CCj-6_hc8o8YW0SwZHJiRVQXyTIJ-Gz5Ogw7w=s88-c-k-c0x00ffffff-no-rj-mo" title="Saddamrh" />
            <SidebarRow Icon={LocalHospitalOutlinedIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsOutlinedIcon} title="Pages" />
            <SidebarRow Icon={PeopleAltOutlinedIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messages" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Video" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar
