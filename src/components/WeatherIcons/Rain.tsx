import cloud from "../../assets/images/anime_icons/cloud.png";
import droplet from "../../assets/images/anime_icons/droplet.png";
import "./weather-icons.css"

const RainIcon = () => {

    return (
        <div className="rain-icon">
            <img src={cloud} alt="image of a cloud" />
            <div className="droplets">
                <Droplet />
                <Droplet />
                <Droplet />
            </div>
        </div>
    )
}

export default RainIcon;

const Droplet = () => {
    return (
        <img src={droplet} alt="rain droplet" />
    )
}