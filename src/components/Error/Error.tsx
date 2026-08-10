import { useContext } from "react"
import { WeatherContext } from "../../store/weather-context"
import notFoundIcon from "../../assets/images/icon-error.svg"
import retryIcon from "../../assets/images/icon-retry.svg"

import "./error.css"

const Error = () => {
  const { serverError, handleRetry } = useContext(WeatherContext)

  if (!serverError) {
    return
  }
  return (
    <section className="error">
      <img src={notFoundIcon} alt="not found icon" />
      <h1>Something went wrong</h1>
      <p>We couldn't connect to the server(API error). Please try again in a few moments</p>
      <button onClick={handleRetry}><img src={retryIcon} alt="" />Retry</button>

    </section>
  )
}

export default Error
