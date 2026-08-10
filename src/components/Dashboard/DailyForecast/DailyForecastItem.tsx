import { useContext } from "react"
import { WeatherContext } from "../../../store/weather-context"
import { displayAnimatedIcon } from "../../../utils/util"
import "../../WeatherIcons/weather-icons.css"

const DailyForecastItem = ({ index }: { index: number }) => {

    const { weatherData } = useContext(WeatherContext)
    const daily = weatherData?.daily
    const dayOfWeek = new Date(daily?.time[index + 1]).toLocaleDateString("default", { weekday: "short" }).split(",")[0]
    const weatherCode = daily?.weather_code[index + 1]

    const weatherIcon = displayAnimatedIcon(weatherCode)

    return (
        <div className='daily-forecast__item'>
            {weatherData && <>
                <p>{dayOfWeek}</p>
                {weatherIcon}
                <div>
                    <p>{Math.round(daily?.temperature_2m_min[index + 1])}°</p>
                    <p>{Math.round(daily?.temperature_2m_max[index + 1])}°</p>
                </div>
            </>}
        </div>
    )
}

export default DailyForecastItem
