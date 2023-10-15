import { ReactComponent as LockedIcon } from '../assets/icons/locked.svg'
import { ReactComponent as UnlockedIcon } from '../assets/icons/unlocked.svg'
import { ReactComponent as UnknownIcon } from '../assets/icons/question_mark.svg'
import { ReactComponent as UnavailableIcon } from '../assets/icons/unavailable.svg'
import { ReactComponent as CloudyIcon } from '../assets/icons/weather_cloudy.svg'
import { ReactComponent as NightClearIcon } from '../assets/icons/weather_night_clear.svg'
import { ReactComponent as NightCloudyIcon } from '../assets/icons/weather_night_cloudy.svg'
import { ReactComponent as PartlyCloudyIcon } from '../assets/icons/weather_partly_cloudy.svg'
import { ReactComponent as RainyIcon } from '../assets/icons/weather_rainy.svg'
import { ReactComponent as SunnyIcon } from '../assets/icons/weather_sunny.svg'

export const ICON_ELEMENTS = {
  LOCKED: LockedIcon,
  UNLOCKED: UnlockedIcon,
  UNKNOWN: UnknownIcon,
  UNAVAILABLE: UnavailableIcon,
  CLOUDY: CloudyIcon,
  PARTLY_CLOUDY: PartlyCloudyIcon,
  RAINY: RainyIcon,
  SUNNY: SunnyIcon,
  NIGHT_CLEAR: NightClearIcon,
  NIGHT_CLOUDY: NightCloudyIcon,
}

export const ICONS = {
  LOCKED: 'LOCKED',
  UNLOCKED: 'UNLOCKED',
  UNAVAILABLE: 'UNAVAILABLE',
  UNKNOWN: 'UNKNOWN',
  CLOUDY: 'CLOUDY',
  PARTLY_CLOUDY: 'PARTLY_CLOUDY',
  RAINY: 'RAINY',
  SUNNY: 'SUNNY',
  NIGHT_CLEAR: 'NIGHT_CLEAR',
  NIGHT_CLOUDY: 'NIGHT_CLOUDY',
} as const
