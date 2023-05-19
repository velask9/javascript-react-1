import React, {useState} from "react";
import {Tweet} from './Tweet'
import "./Tweets.css"

export const Tweets = () => {
    let [likes, setLikes] = useState(0);

    const handleLikesClick = () => {
        setLikes(likes ++)
    };
 
 
    return(
    <div className='Tweets'>
        <div>Likes Count:{likes} </div>
        <Tweet 
            tweetContent="It's pay day!!!" 
            color="green"
            onLikeClick={handleLikesClick}
            />

        <Tweet tweetContent="I just bought a new car!" 
        color="yellow"
        onLikeClick={handleLikesClick}
        />
       
        <Tweet tweetContent="I just smashed my new car." 
        color ="red"
        onLikeClick={handleLikesClick}
         />
    </div>
 )
}
