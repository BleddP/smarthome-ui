import { Card } from '../index'
import './controls.styles.scss'

export const Controls = () => {

    const cards = [
        {
            id: 1,
            title: 'Card 1',
            description: 'Lorem ipsum whatever comes here next.',
            columns: 2,
        },
        {
            id: 2,
            title: 'Card 2',
            description: 'Lorem ipsum whatever comes here next.'
        },
        {
            id: 3,
            title: 'Card 3',
            description: 'Lorem ipsum whatever comes here next.'
        },
        {
            id: 4,
            title: 'Card 4',
            description: 'Lorem ipsum whatever comes here next.',
            rows: 2,
        },
        {
            id: 5,
            title: 'Card 5',
            description: 'Lorem ipsum whatever comes here next.',
            columns: 3,
        },
        {
            id: 6,
            title: 'Card 5',
            description: 'Lorem ipsum whatever comes here next.'
        }
    ]

    return (
        <div className='grid'>
            {cards.map((card) => <Card title={card.title} description={card.description} columns={card.columns} rows={card.rows} />)}
        </div>
    )
}