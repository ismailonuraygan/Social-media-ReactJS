import React, {useState, useEffect} from 'react';
import "./Feed.css";
import ShareBox from './ShareBox';
import Post from './Post'
import { collection, getDocs } from 'firebase/firestore/lite';
import db from './firebase';
import FlipMove from 'react-flip-move';


function Feed() {
    const [posts, setPosts] = useState ([]);


    /* useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts([snapshot.docs.map(doc => doc.data())])
        ))
    }, [])
    console.log(posts);
    console.log(posts.length) */

    useEffect(  () => {
        ( async (db1) => {
                const postCol = collection(db1, 'posts');
                const postSnapshot = await getDocs(postCol);
                const postList = postSnapshot.docs.map(doc => doc.data());
            setPosts(postList)
        }) (db)

        }, []);

    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            
            {/* TweetBox */}
            <ShareBox />

            <FlipMove>
            {posts.map(post => (
            <Post
             key = {post.text}
             displayName = {post.displayName}
             username = {post.username}
             verified = {post.verified}
             text = {post.text}
             avatar = {post.avatar}
             image = {post.image}

             />
            ))}
            </FlipMove>
            

        </div>
    )
}

export default  Feed 

