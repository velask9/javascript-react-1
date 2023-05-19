import React from "react";
import "./Tweet.css";

export const Tweet = (properties) => {
  //console.log(props);
  const { tweetContent, color } = properties;

  // let className = "white";

  // if (props.color === "red") {
  //   className = "red";
  // } else if (props.color === "green") {
  //   className = "green";
  // } else if (props.color === "yellow") {
  //   className = "yellow";
  // }

  return (
    <div style={{backgroundColor:`${color}`}}>
      {tweetContent}
    </div>
  );
};
