import { MouseEventHandler } from 'react'

interface CalendarProps {
  handleClick: MouseEventHandler<HTMLDivElement>
}

const Calendar = ({ handleClick }: CalendarProps) => {
  return <div onClick={handleClick}>Calendar</div>
}

export default Calendar
