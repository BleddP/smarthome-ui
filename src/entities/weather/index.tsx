import { useMemo } from 'react'
import { useStore } from '../../hooks'
import { Icon } from '../../components'
import { ICONS } from '../../constants'
import './weather-panel.styles.scss'

interface Forecast {
  condition: 'sunny' | 'partlycloudy' | 'cloudy'
  temperature: number
  precipitation: number
  templow: number
  wind_speed: number
  datetime: any
}

export const WeatherPanel = () => {
  const { entities } = useStore()
  const { weather } = entities

  const formatWeather = (state: string) => {
    switch (state) {
      case 'sunny':
        return {
          class: 'sunny',
          label: 'Sunny',
          icon: ICONS.SUNNY,
        }

      case 'partlycloudy':
        return {
          class: 'partly-cloudy',
          label: 'Partly cloudy',
          icon: ICONS.PARTLY_CLOUDY,
        }

      case 'cloudy':
        return {
          class: 'cloudy',
          label: 'Cloudy',
          icon: ICONS.CLOUDY,
        }

      case 'rainy':
        return {
          class: 'rainy',
          label: 'Rainy',
          icon: ICONS.RAINY,
        }

      default:
        return {
          class: '',
          label: 'Unknown',
          icon: ICONS.UNKNOWN,
        }
    }
  }

  const getTempColor = (temp: number) => {
    if (temp < 5) return '#6af4ff'
    if (temp > 25) return '#fda449'
    if (temp > 32) return '#f53f3f'
    return 'whitesmoke'
  }

  if (!weather?.attributes) return null

  const currentTemp = weather.attributes.temperature
  const tempColor = getTempColor(currentTemp)
  const currentWeather = formatWeather(weather.state)

  return (
    <div
      className={`weather ${weather.isNight ? 'night' : currentWeather.class}`}>
      <div className="weather__today">
        <span
          className="temp"
          style={{ color: tempColor }}>
          {currentTemp}°C
        </span>
        <div className="weather__today__state">
          <Icon icon={currentWeather.icon} />
          <span className="label">{currentWeather.label}</span>
        </div>
      </div>
      <h4>Forecast</h4>
      {weather.attributes.forecast.map((day: Forecast, i: number) => {
        const date = new Date(day.datetime)
        const dayWeather = formatWeather(day.condition)
        // Don't show today in the forecst
        if (i === 0) return null

        return (
          <div
            key={i}
            className="forecast">
            <span>
              {date.toLocaleDateString('en-GB', {
                day: 'numeric',
                weekday: 'short',
                month: 'short',
              })}
            </span>
            <div className="forecast__condition">
              <span>{day.temperature}°C</span>
              <Icon icon={dayWeather.icon} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
