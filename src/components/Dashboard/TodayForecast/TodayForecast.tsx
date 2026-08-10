import { useContext } from "react"
import { WeatherContext } from "../../../store/weather-context"
import "./today-forecast.css"

const TodayForecast = () => {
    const { weatherData } = useContext(WeatherContext)
    const current = weatherData?.current
    const currentUnits = weatherData?.current_units

    const summaryHeading = [
        { heading: "Feels like", value: current ? `${Math.round(current?.temperature_2m)}°` : "-" },
        { heading: "Humidity", value: current ? `${current?.relative_humidity_2m}${currentUnits?.relative_humidity_2m}` : "-" },
        { heading: "Wind", value: current ? `${Math.round(current?.wind_speed_10m)} ${currentUnits?.wind_speed_10m}` : "-" },
        { heading: "Precipitation", value: current ? `${Math.round(current?.precipitation)} ${currentUnits?.precipitation}` : "-" }
    ]

    return (
        <div className="today-forecast">
            {summaryHeading.map(item =>
                <div>
                    <p>{item.heading}</p>
                    <p>{item.value}</p>
                </div>
            )}
        </div>
    )
}

export default TodayForecast

