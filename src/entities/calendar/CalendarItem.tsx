import type { Event } from './index'
import { parseDateTime } from 'utils/helpers/parse-date-time'
import './calendar-panel.styles.scss'

interface Props {
  event: Event
}

export const CalendarItem = ({ event }: Props) => {
  const startEvent = new Date(event.start.dateTime)
  const endEvent = new Date(event.end.dateTime)

  const start = parseDateTime(startEvent)
  const end = parseDateTime(endEvent)

  console.log(event)

  if (start?.day === 'Invalid Date') return null

  return (
    <div className="calendar-item">
      <div className="calendar-dates">
        <span className="calendar-dates__day">{start?.day}</span>
        <span className="calendar-dates__date">{start?.date}</span>
        <span className="calendar-dates__month">{start?.month}</span>
      </div>
      <div className="calendar-content">
        <small>
          {start?.hours}:{start?.minutes}
        </small>
        <h4>{event.summary}</h4>
        <small>{event.location}</small>
      </div>
    </div>
  )
}
