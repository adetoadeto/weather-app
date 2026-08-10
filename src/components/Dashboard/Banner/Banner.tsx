import { useContext } from "react"
import { WeatherContext } from "../../../store/weather-context"
import Loaded from "./Loaded/Loaded"
import Loading from "./Loading/Loading"

const Banner = () => {
    const { weatherData } = useContext(WeatherContext)

    return (
        <div className="banner">
            {!weatherData ? <Loading /> : <Loaded />}
        </div>
    )
}

export default Banner
