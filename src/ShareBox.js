import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core';
import "./ShareBox.css"
//import { getDatabase, ref, set } from "firebase/database";
//import { doc, setDoc } from "firebase/firestore"; 




function ShareBox() {
    const [shareMessage, setShareMessage] = useState("");
    const [shareImage, setShareImage] = useState("");

    


    return (
        <div className="tweetBox" >
            <form>
                <div className="shareBox__input" >
                    <Avatar src="https://i.ibb.co/ZhcfZrz/dog2.png" />
                    <input
                        onChange={(e) => setShareMessage(e.target.value)}
                        value={shareMessage}
                        placeholder="What's happening?">
                    </input>

                </div>
                <input
                    value={shareImage}
                    onChange={(e) => setShareImage(e.target.value)}
                    className="shareBox__imageInput"
                    placeholder="Enter image URL"
                    type="text" />
                <Button type="submit" className="shareBox__shareButton">Share</Button>
            </form>
        </div>
    )
}

export default ShareBox
