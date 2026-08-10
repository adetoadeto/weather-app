import cloud from "../../assets/images/anime_icons/cloud.png"
import sun from "../../assets/images/anime_icons/sun.png"
import "./weather-icons.css"

const PartlyCloudy = () => {
  return (
    <div className="partly-cloudy-icon">
      <img src={cloud} alt="image of a cloud" />
      <img src={sun} alt="radiating sun" />
    </div>
  )
}

export default PartlyCloudy
