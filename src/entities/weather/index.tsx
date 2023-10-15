import { useStore } from '../../hooks'
import './weather-panel.styles.scss'

interface Forecast {
    condition: 'sunny' | 'partlycloudy' | 'cloudy',
    temperature: number,
    precipitation: number,
    templow: number,
    wind_speed: number,
    datetime: any
}

export const WeatherPanel = () => {

    const { entities } = useStore()
    const { weather } = entities

    if (!weather?.attributes) return null

    return (
        <div className='weather'>
            <div className='weather__today'>
            <span className='temp'>
                {weather.attributes.temperature}°C
            </span>
            <span className='state'>
                {weather.state}
            </span>
            </div>
            <h4>Forecast</h4>
            {weather.attributes.forecast.map((day: Forecast) => {

                const date = new Date(day.datetime)

                return (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span >
                            {date.toLocaleDateString('en-GB', { day: 'numeric', weekday: 'long', month: 'long' })}
                        </span>
                        <span
                            style={{ fontWeight: 500 }}
                        >{day.temperature}</span>
                    </div>
                )
            })}

        </div>
    )
}