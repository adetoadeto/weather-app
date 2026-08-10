import { useContext } from 'react'
import Hero from './Hero/Hero'
import Banner from './Banner/Banner'
import TodayForecast from './TodayForecast/TodayForecast'
import DailyForecast from './DailyForecast/DailyForecast'
import HourlyForecast from './HourlyForecast/HourlyForecast'
import ResultNotFound from "./ResultNotFound/ResultNotFound"
import { WeatherContext } from '../../store/weather-context'

import "./dashboard.css"

const Dashboard = () => {
  const { notFound, serverError } = useContext(WeatherContext)
  if(serverError) {
    return
  }

  return (
    <section className='dashboard'>
      <Hero />
      {notFound ? <ResultNotFound /> :
        <main>
          <section>
            <div>

            <Banner />
            <TodayForecast />
            </div>
            <DailyForecast />
          </section>
          <HourlyForecast />
        </main>}
    </section>

  )
}

export default Dashboard
