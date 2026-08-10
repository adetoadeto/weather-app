import DailyForecastItem from "./DailyForecastItem"
import "./daily-forecast.css"

const DailyForecast = () => {

    return (
        <div className="daily-forecast">
            <h3>Daily forecast</h3>
            <div>
                {Array.from({ length: 6 }).map((item, index) =>
                    <DailyForecastItem index={index} />
                )}
            </div>
        </div>
    )
}

export default DailyForecast
