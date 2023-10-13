import { Card } from '../index'
import { DoorsPanel, CarPanel, CalendarPanel } from '../../entities'
import './controls.styles.scss'

export const Controls = () => {

    const cards = [
        {
            id: 1,
            title: "Events",
            description: "",
            component: <CalendarPanel />,
            columns: 2,
            rows: 2
        },
        {
            id: 2,
            title: 'Car',
            description: 'Lorem ipsum whatever comes here next.',
            component: <CarPanel />,
            columns: 2
        },
        {
            id: 3,
            title: 'Weather',
            description: 'Lorem ipsum whatever comes here next.',
            component: null,
            rows: 2
        },

        {
            id: 4,
            title: 'Doors',
            description: 'The doors',
            component: <DoorsPanel />,
            rows: 2,
        },
        {
            id: 5,
            title: 'Music',
            description: 'Lorem ipsum whatever comes here next.',
            component: null,
            columns: 2,
        },
        {
            id: 6,
            title: 'TV',
            description: 'Lorem ipsum whatever comes here next.',
            component: null,
            columns: 3
        }
    ]

    return (
        <div className='grid'>
            {cards.map((card) => <Card title={card.title} description={card.description} columns={card.columns} rows={card.rows} component={card.component} />)}
        </div>
    )
}