import './card.styles.scss'

interface Props {
  title: string
  description?: string
  component?: React.ReactNode
  alert?: boolean | undefined
}

export const Card: React.FC<Props> = ({
  title,
  description,
  component,
  alert = false,
}) => {
  return (
    <div className={`card ${alert ? 'alert' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      {component}
    </div>
  )
}
