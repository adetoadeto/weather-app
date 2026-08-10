import { useContext, useEffect, useState } from "react"
import Weekday from "../../Dropdowns/Weekdays/Weekdays"
import HourlyForecastItem from "./HourlyForecastItem"
import { WeatherContext } from "../../../store/weather-context"
import { filterHourlyData } from "../../../utils/util"
import { daysOfTheWeek } from "../../../utils/data"
import dropdown from "../../../assets/images/icon-dropdown.svg"
import "./hourly-forecast.css"

const HourlyForecast = () => {
    const { weatherData } = useContext(WeatherContext)
    
    const dayToday = new Date().getDay()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [selectedDay, setSelectedDay] = useState<number>(dayToday)
    const [hourlyData, setHourlyData] = useState<Record<string, any>[] | null>(null)

    const handleSelectedDay = (selected: number) => {
        setSelectedDay(selected)
    }

    useEffect(() => {
        const result = filterHourlyData(weatherData, selectedDay)
        setHourlyData(result)
    }, [selectedDay, weatherData])

    return (
        <section className="hourly-forecast">
            <div className="heading">
                <h3>Hourly forecast</h3>
                <button onClick={() => setIsDropdownOpen(prevState => !prevState)}>

                    <p>{daysOfTheWeek[selectedDay].day}</p>
                    <img src={dropdown} alt="dropdown icon" />
                    {isDropdownOpen && <Weekday onSelect={handleSelectedDay} />}
                    
                </button>
            </div>

            <div>
                {Array.from({ length: 8 }).map((item, index) =>
                    <HourlyForecastItem index={index} data={hourlyData} />
                )}
            </div>

        </section>
    )
}

export default HourlyForecast

