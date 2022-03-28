import classes from '../../styles/Calendar.module.css'
import CalendarComponent from '../../components/Calendar'

const Calendar = () => {
  const handleClick = () => {
    console.log('hello')
  }

  return (
    <div className={classes.root}>
      <CalendarComponent handleClick={handleClick} />
    </div>
  )
}

export default Calendar
