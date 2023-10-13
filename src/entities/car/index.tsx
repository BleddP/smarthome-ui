import { CarVisual } from "./visual"

import './car-panel.styles.scss'

export const CarPanel = () => {
    return (
        <div className="car-panel">
            <ul className="entities-list">
                <li>Range: 150km</li>
                <li>Petrol: 15L</li>
                <li>Activate A/C</li>
                <li>Flash lights</li>
            </ul>
            <CarVisual />
        </div>
    )
}