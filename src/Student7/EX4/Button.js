import React from "react";

export const Button = props => {
    return(
        <button
        onClick={()=>{
            props.onLikeClick();
        }}

        >
            Like
        </button>
    );

};
