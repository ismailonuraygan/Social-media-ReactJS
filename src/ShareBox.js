import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import "./ShareBox.css"
import { collection, addDoc } from "firebase/firestore/lite"; 
import db from './firebase';





function ShareBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    
    const sendTweet = (e) => {
        e.preventDefault();
        console.log('clicked');
        
        (  async (db) => {
            const docRef = await addDoc(collection(db, "posts"), {
                displayName: "İsmail Onur Aygan",
                username: "ionuraygan",
                verified: true,
                text : tweetMessage,
                image : tweetImage, 
                avatar: "https://i.ibb.co/ZhcfZrz/dog2.png" 
              });
              console.log(docRef)
        
        }) (db)


    setTweetMessage("");
    setTweetImage("");
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
