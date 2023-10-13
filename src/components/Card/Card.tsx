import './card.styles.scss'

interface Props {
    title: string,
    description?: string
}

export const Card: React.FC<Props> = ({title, description}) => {
    return (
        <div className='card'>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}