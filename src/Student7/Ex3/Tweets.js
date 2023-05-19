import React from "react";
import {Tweet} from './Tweet'
import "./Tweets.css"

export const Tweets = () => {
 return(
    <div className='Tweets'>
        <Tweet tweetContent="It's pay day!!!" color="green"/>
        <Tweet tweetContent="I just bought a new car!" color="yellow"/>
        <Tweet tweetContent="I just smashed my new car." color ="red" />
    </div>
 )
}