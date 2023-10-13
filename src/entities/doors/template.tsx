import { useMemo } from "react"
import { ICONS } from "constants/icons"
import { Icon } from '../../components'

interface Props {
    name: string,
    state: string
}

export const DoorTemplate: React.FC<Props> = ({name, state}) => {

    const icon = useMemo(() => {
       if (state === 'open') return ICONS.UNLOCKED
       if (state === 'closed') return ICONS.LOCKED
       if (state === 'unknown') return ICONS.UNKNOWN
       if (state === 'unavailable') return ICONS.UNAVAILABLE
       return ICONS.LOCKED
    }, [state])

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h4 style={{margin: 0, padding: 0}}>{name}</h4>
            <Icon icon={icon} size='sm' />
        </div>
    )
}