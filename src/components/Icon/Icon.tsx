import { ICON_ELEMENTS } from '../../constants'

interface Props {
  icon: keyof typeof ICON_ELEMENTS,
  color?: string,
  size?: 'sm' | 'md' | 'lg'
}

export const Icon: React.FC<Props> = ({ icon, color = 'currentColor', size = 'md'  }) => {
  const Icon = ICON_ELEMENTS[icon]

  return (
    <Icon  width={24} height={24} color={color} fontSize={size} />
  )
}
