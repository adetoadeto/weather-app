import snow from "../../assets/images/anime_icons/snowflake.png"
import cloud from "../../assets/images/anime_icons/cloud.png";
import "./weather-icons.css"


const SnowIcon = () => {
    return (
        <div className='snow-icon'>
            <img src={cloud} alt="image of a cloud" />
            <div>
                <SnowFlakes />
                <SnowFlakes />
                <SnowFlakes />
            </div>
        </div>
    )
}
export default SnowIcon

const SnowFlakes = () => {
    return (
        <img src={snow} alt="snowflakes" />
    )
}


