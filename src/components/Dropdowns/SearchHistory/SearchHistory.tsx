import { useContext } from "react"
import { WeatherContext } from "../../../store/weather-context"
import "./search-history.css"

const SearchHistory = () => {
    const { searchHistory, handleSelectHistory } = useContext(WeatherContext)

    return (
        <div className='search-dropdown'>
            {searchHistory?.map((item) => {
                return <button type="button" key={item} onClick={() => handleSelectHistory(item)}>{item}</button>
            })}
        </div>
    )
}

export default SearchHistory
