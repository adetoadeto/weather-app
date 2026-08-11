import checkmark from "../../../assets/images/icon-checkmark.svg"

type Item = {
  heading: string;
  imperial: string;
  metric: string;
  isImperial: boolean
}

const UnitItem = ({ heading, imperial, metric, isImperial }: Item) => {
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
