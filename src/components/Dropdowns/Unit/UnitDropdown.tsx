import { useContext } from "react"
import UnitItem from "./UnitItem"
import { unitItems } from "../../../utils/data"
import "./unit-dropdown.css"
import { WeatherContext } from "../../../store/weather-context"

const UnitDropdown = () => {

  const {isImperial, handleUnitSwitch} = useContext(WeatherContext)
  const buttonText = isImperial ? "Metric" : "Imperial"

  return (
    <div className="unit-dropdown">
      <div className='unit-dropdown__content'>
        <button onClick={handleUnitSwitch}>Switch to {buttonText}</button>
        {unitItems.map(item =>

          <UnitItem key={item.heading} {...item} />
         

        )}
      </div>
    </div>
  )
}

export default UnitDropdown;

