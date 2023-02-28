import "./Seasons.css";
import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const seasonConfig = {
  winter: {
    text: "Burr, it's chilly!",
    iconName: "snowflake",
  },
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <div className={`${season} textPosition`}>
        <i className={`${iconName} icon massive left`}></i>
        <h1>{text}</h1>
        <i className={`${iconName} icon massive right`}></i>
      </div>
    </div>
  );
};

export default SeasonDisplay;
