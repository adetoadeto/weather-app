import React from "react";
import cloud from "../../assets/images/anime_icons/cloud.png";
import "./weather-icons.css"

const DrizzleIcon = () => {
  return (
    <div className="drizzle-icon">
      <img src={cloud} alt="image of a cloud" />
      <div>
        {[10, 4, 9].map(item => <span key={item} style={{ "--position": item } as React.CSSProperties}></span>)}

      </div>
    </div>
  )
}

export default DrizzleIcon
