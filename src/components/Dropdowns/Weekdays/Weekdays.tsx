import { daysOfTheWeek } from "../../../utils/data"
import "./weekdays.css"

interface WeekdayProps {
    onSelect: (selected: number) => void
}
const Weekday = ({ onSelect }: WeekdayProps) => {
    return (
        <div className="weekdays-dropdown">
            {daysOfTheWeek.map(item => <button key={item.day} onClick={() => onSelect(item.value)}>{item.day}</button>)}
        </div>
    )
}

export default Weekday

