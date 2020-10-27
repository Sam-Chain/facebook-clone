import React, { useState } from 'react'
import './Header.css'

import { Avatar, IconButton } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
// import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAlRounded';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SubscriptionsRoundedIcon from '@material-ui/icons/SubscriptionsRounded';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StorefrontIcon from '@material-ui/icons/Storefront';


import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

function Header() {
    const [value, setValue] = useState(0);


    return (
        <div className="header">
            <div className="header__left">
                <img 
                    className="header__leftLogo"
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" 
                    alt="logo"
                />
                <div className="header__leftInput">
                    <SearchIcon/>
                    <input type="text"
                        placeholder="Search Facebook"
                    />
                </div>
            </div>
            <div className="header__center">

                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction icon={<HomeOutlinedIcon />} />
                    <BottomNavigationAction icon={<PeopleAltOutlinedIcon />} />
                    <BottomNavigationAction icon={<SubscriptionsOutlinedIcon />} />
                    <BottomNavigationAction icon={<StorefrontIcon />} />
                    <BottomNavigationAction icon={<SupervisedUserCircleOutlinedIcon />} />
                </BottomNavigation>

            </div>
            <div className="header__right">
                <div className="header__rightInfo">
                    <Avatar src="" />
                    <h4>saddamrh</h4>
                </div>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon/>
                    </IconButton>
            </div>
        </div>
    )
}

export default Header
