import './button.styles.scss'

interface Props {
  label: string
  onClick: () => void
  disabled?: boolean
}

export const Button: React.FC<Props> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  )
}
