import React from 'react';
import './RightSideBar.css';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';


function RightSideBar() {
    return (
        <div className="rightSideBar ">
            <div className="rightSideBar__input">
                <SearchIcon className="rightSideBar__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="rightSideBar__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1422990222891966466"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="reactjs"
                    options={{ height: 400 }} />
            </div>

        </div>
    )
}

export default RightSideBar
