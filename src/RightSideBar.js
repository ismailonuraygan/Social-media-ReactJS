import React from 'react';
import './RightSideBar.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
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

                <TwitterTweetEmbed tweetId={"1402320383932502021"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="WealthyEminence"
                    options={{ height: 400 }} />
                <TwitterShareButton url={"https://twitter.com/ayganismailonur"}
                    options={{ text: "front-end web development", via: "10UR" }} />
            </div>

        </div>
    )
}

export default RightSideBar
