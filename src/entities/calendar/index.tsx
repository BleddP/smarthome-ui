import { CalendarItem } from "./CalendarItem"

interface Event {
    id: number | string,
    title: string,
    description?: string,
    day: string,
    date: number,
    month: string,
    start: string,
    end: string
}

export const CalendarPanel = () => {

    const events: Event[] = [
        {
            id: 1,
            title: 'Stephan Vaccine',
            day: 'Monday',
            date: 23,
            month: 'Oct',
            start: '09:30',
            end: '10:30'
        }
    ]

    return (
        <div>
            <h4>Today</h4>
            {events.map(event => <CalendarItem key={event.id} item={event} />)}
            <h4>This weekend</h4>
            {events.map(event => <CalendarItem key={event.id} item={event} />)}
        </div>
    )
}