import './card.styles.scss'

interface Props {
    title: string,
    description?: string,
    columns?: number
    rows?: number
}

export const Card: React.FC<Props> = ({title, description, columns = 1, rows = 1}) => {

    console.log({columns})

    return (
        <div className='card' style={{ gridColumn: `span ${columns}`, gridRow: `span ${rows}` }}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}