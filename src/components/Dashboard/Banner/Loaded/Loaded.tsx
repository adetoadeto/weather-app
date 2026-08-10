import { useContext } from "react"
import { WeatherContext } from "../../../../store/weather-context"
import "./loaded.css"
import { dateFormatter, displayStaticIcon } from "../../../../utils/util"

const Loaded = () => {
    const { location, weatherData } = useContext(WeatherContext)

    const current = weatherData?.current

    const date = current?.time.split("T")[0]
    const formattedDate = dateFormatter(date)

    const temperature = Math.round(current?.temperature_2m)
    
    const icon = current?.weather_code
    const weatherImg = displayStaticIcon(icon)

    return (
        <div className="loaded">
            <div>
                <p>{location}</p>
                <p>{formattedDate}</p>
            </div>
            <div>
                <img src={weatherImg} alt="image of a sun" />
                <strong>{temperature}°</strong>
            </div>
        </div>
    )
}

export default Loaded
