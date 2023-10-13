import carImage from '../../assets/visuals/f10_transparent.webp'
import './car-panel.styles.scss'

export const CarVisual = () => {
    return (
        <div className='car-visual'>
            <img src={carImage} alt="car" width={300} height='auto'/>
        </div>
    )
}