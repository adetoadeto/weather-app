import thunderstorm from "../../assets/images/anime_icons/thunderstorm.png"
import thunder from "../../assets/images/anime_icons/thunder2.png"
import "./weather-icons.css"

const Thunderstorm = () => {
    return (
        <div className='thunderstorm-icon'>
            <img src={thunderstorm} alt="lightening zap" />
            <img src={thunder} alt="lightening" className='thunder' />
        </div>
    )
}

export default Thunderstorm
