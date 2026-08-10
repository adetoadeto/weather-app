import loading from "../../../assets/images/icon-loading.svg"
import "./in-progress.css"

const InProgress = () => {
  return (
    <div className="in-progress">
      <img src={loading} alt="searching icon" />
      <p>Search in progress</p>
    </div>
  )
}

export default InProgress
