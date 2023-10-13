import './card.styles.scss'

interface Props {
    title: string,
    description?: string,
    columns?: number
    rows?: number
    component?: React.ReactNode
}

export const Card: React.FC<Props> = ({title, description, columns = 1, rows = 1, component}) => {

    return (
        <div className='card' style={{ gridColumn: `span ${columns}`, gridRow: `span ${rows}` }}>
            <h2>{title}</h2>
            <p>{description}</p>
            {component}
        </div>
    )
}