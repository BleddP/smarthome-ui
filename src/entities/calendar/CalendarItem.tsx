import './calendar-panel.styles.scss'

interface Props {
    item: {
        title: string,
        description?: string,
        day: string,
        date: number,
        month: string,
        start: string,
        end: string
    }
}

export const CalendarItem: React.FC<Props> = ({ item }) => {
    const { title, description, day, date, month, start, end } = item
    return (
        <div className="calendar-item">
            <div className='calendar-dates'>
                <span className='calendar-dates__day'>{day}</span>
                <span className='calendar-dates__date'>{date}</span>
                <span className='calendar-dates__month'>{month}</span>
            </div>
            <div className='calendar-content'>
                <h4>{title}</h4>
                {description && <span>{description}</span>}
                <span>{start} until {end}</span>
            </div>
        </div>
    )
}