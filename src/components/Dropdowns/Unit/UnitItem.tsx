import { useContext } from "react"
import { WeatherContext } from "../../../store/weather-context"
import checkmark from "../../../assets/images/icon-checkmark.svg"

type Item = {
  heading: string;
  imperial: string;
  metric: string;
}

const UnitItem = ({ heading, imperial, metric }: Item) => {
  const {isImperial} = useContext(WeatherContext)
  
  return (
    <div className="unit-dropdown__content--items">
      <p className='heading'>{heading}</p>

      <div className={isImperial ? "active" : ""}>
        <span>{imperial}</span>
        <img src={checkmark} alt="checkmark image" className="checkmark" />
      </div>
      <div className={!isImperial ? "active" : ""}>
        <span>{metric}</span>
        <img src={checkmark} alt="checkmark image" className="checkmark" />
      </div>
      <hr />

    </div>
  )
}

export default UnitItem
