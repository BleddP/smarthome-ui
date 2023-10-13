import { ReactComponent as LockedIcon } from '../assets/icons/locked.svg'
import { ReactComponent as UnlockedIcon } from '../assets/icons/unlocked.svg'
import { ReactComponent as UnknownIcon } from '../assets/icons/question_mark.svg'
import { ReactComponent as UnavailableIcon } from '../assets/icons/unavailable.svg'

export const ICON_ELEMENTS = {
    LOCKED: LockedIcon,
    UNLOCKED: UnlockedIcon,
    UNKNOWN: UnknownIcon,
    UNAVAILABLE: UnavailableIcon
}

export const ICONS = {
    LOCKED: 'LOCKED',
    UNLOCKED: 'UNLOCKED',
    UNAVAILABLE: 'UNAVAILABLE',
    UNKNOWN: 'UNKNOWN',
} as const