import { useState } from 'react'
import { motion } from 'framer-motion'
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
  const [scale, setScale] = useState<number>(1)

  const handleBounceAnimation = () => {
    setScale(0.95)
    setTimeout(() => {
      setScale(1)
    }, 100)
  }

  return (
    <motion.div
      className={`card ${alert ? 'alert' : ''}`}
      onClick={handleBounceAnimation}
      animate={{ scaleX: scale, scaleY: scale }}
      transition={{ type: 'spring', bounce: 0.5 }}>
      <h2>{title}</h2>
      <p>{description}</p>
      {component}
    </motion.div>
  )
}
