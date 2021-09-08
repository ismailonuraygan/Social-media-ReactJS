import React from 'react'
import './LeftSideBar.css'
import LeftSideIcons from './LeftSideIcons';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';

function LeftSideBar() {
    //console.log(NotificationsNoneIcon)
    return (
        <div className = "sidebar">
            

            <LeftSideIcons Icon={HomeIcon} text="Home" />
            <LeftSideIcons Icon={PermIdentityIcon} text="Profile" />   
            <LeftSideIcons Icon={MailOutlineIcon} text="Messages" />
            <LeftSideIcons Icon={NotificationsNoneIcon} text="Notifications" />
            <LeftSideIcons Icon={BookmarkBorderIcon} text="Bookmarks" />
            <LeftSideIcons Icon={ListAltIcon} text="Lists" />
            <LeftSideIcons Icon={SearchIcon} text="Explore" />
            <LeftSideIcons Icon={MoreHorizIcon} text="More" />   
            
            
        </div>
    )
}

export default LeftSideBar
