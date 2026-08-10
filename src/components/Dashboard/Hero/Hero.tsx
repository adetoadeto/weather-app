import { useContext, useState } from "react"
import { WeatherContext } from "../../../store/weather-context"
import SearchHistory from '../../Dropdowns/SearchHistory/SearchHistory'
import InProgress from "../../Dropdowns/InProgress/InProgress"
import searchIcon from "../../../assets/images/icon-search.svg"

import "./hero.css"

const Hero = () => {
  const [IsSearching, setIsSearching] = useState(false)
  const { inProgress, enteredLocation, getWeatherData } = useContext(WeatherContext)

  return (
    <header className='hero-section'>
      <h1>How's the sky looking today? </h1>

      <form>
        <div className="search-box">
          <button type='button' className="input-field">
            <label htmlFor="search" aria-label='search-icon'><img src={searchIcon} alt="search-icon" /></label>
            <input ref={enteredLocation} type="text" placeholder='Search for a place...' onFocus={() => setIsSearching(true)} onBlur={() => setIsSearching(false)} />
          </button>
          {inProgress && <InProgress />}
          {IsSearching && <SearchHistory />}
        </div>

        <button className="submit-btn" type="button" onClick={getWeatherData}>Search</button>
      </form>
    </header>
  )
}

export default Hero
