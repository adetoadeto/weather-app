import { useState } from "react"
import UnitDropdown from "../Dropdowns/Unit/UnitDropdown"

import logo from "../../assets/images/logo.svg"
import gear from "../../assets/images/icon-units.svg"
import dropdown from "../../assets/images/icon-dropdown.svg"

import "./nav.css"

const Nav = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav>
      <img src={logo} alt="brand logo" />
      <button className='unit' onClick={() => setIsDropdownOpen(prevState => !prevState)}>
        <img src={gear} alt="gear icon" />
        <p>Units</p>
        <img src={dropdown} alt="dropdown icon" />
      </button>

      {isDropdownOpen && <UnitDropdown />}

    </nav>
  )
}

export default Nav
