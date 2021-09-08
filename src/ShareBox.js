import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import "./ShareBox.css"





function ShareBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    
    const sendTweet = (e) => {
        e.preventDefault();
        console.log('clicked');
    
    }

    


    return (
        <div className="tweetBox" >
            <form>
                <div className="tweetBox__input" >
                    <Avatar src="https://i.ibb.co/ZhcfZrz/dog2.png" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?">
                    </input>

                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Enter image URL"
                    type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Share</Button>
            </form>
        </div>
    )
}

export default ShareBox
