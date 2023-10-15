import './grid.styles.scss'

interface Props {
  children: React.ReactNode
}

export const Grid: React.FC<Props> = ({ children }) => {
  return <div className="grid">{children}</div>
}
