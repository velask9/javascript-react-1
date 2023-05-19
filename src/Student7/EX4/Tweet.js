import React from "react";
import "./Tweet.css";
import { Button } from './Button'

export const Tweet = (props) => {

return(
  <div className="Tweet">
    <div style={{backgroundColor:`${props.color}`}}>
      {props.tweetContent}
          <Button onLikeClick={props.onLikeClick}/>
  </div>
  </div>);
}