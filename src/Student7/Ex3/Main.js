import React from "react";
import "./Main.css";
import { Tweets } from "./Tweets";

export const Main = () => {
  return (
    <div className="Main">
      Tweet Storm
      <Tweets />
    </div>
  );
};
