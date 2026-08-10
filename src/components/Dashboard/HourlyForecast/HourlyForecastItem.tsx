
import { displayStaticIcon } from "../../../utils/util"

const HourlyForecastItem = ({ index, data }: { index: number, data: Record<string, any> | null }) => {
    if(!data) {
        return
    }
    const weatherCode = data[index]?.weatherCode
    const image = displayStaticIcon(weatherCode)
    const temperature = Math.round(data[index]?.temperature)

    return (
        <div className='loading-effect hourly-forecast__item'>
            {data.length > 0 && <>
                <div>
                    {image && <img src={image} alt="image icon of" />}
                    <p>{data[index]?.time}</p>
                </div>
                <p>{isNaN(temperature) ? "": `${temperature}°`}</p>
            </>}

        </div>
    )
}

export default HourlyForecastItem
