import DailyForecastItem from "./DailyForecastItem"
import "./daily-forecast.css"

const DailyForecast = () => {

    return (
        <div className="daily-forecast">
            <h3>Daily forecast</h3>
            <div>
                {[1,2,3,4,5,6].map((item, index) =>
                    <DailyForecastItem key={item} index={index} />
                )}
            </div>
        </div>
    )
}

export default DailyForecast
