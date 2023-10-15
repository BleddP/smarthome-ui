import { Button } from '../../components'
import { CarVisual } from './visual'

import './car-panel.styles.scss'

export const CarPanel = () => {
  return (
    <div className="car-panel">
      <ul className="entities-list">
        <li>Range: 150km</li>
        <li>Petrol: 15L</li>
        <li>
          <Button
            label="Activate A/C"
            onClick={() => console.log('activate AC')}
          />
        </li>
        <li>
          <Button
            label="Flash lights"
            onClick={() => console.log('flash lights')}
          />
        </li>
      </ul>
      <CarVisual />
    </div>
  )
}
