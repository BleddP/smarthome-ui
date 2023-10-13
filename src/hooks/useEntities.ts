import { useMemo, useState } from "react"
import { ENTITY_KEYS } from "../constants"

interface Entity {
    attributes: {
        friendly_name: string
        icon: string
    }
    context: {
        id: string
        parent_id: string | null
        user_id: string | null
    }
    entity_id: string
    last_changed: string
    last_updated: string
    state: 'on' | 'off' | 'unknown' | 'unavailable'
}

export const useEntities = () => {
    // const [carEntities, setCarEntities] = useState(null)
    const [doorEntities, setDoorEntities] = useState<object | null>(null)
    // const [motionEntities, setMotionEntities] = useState(null)
    // const [lightEntities, useLightEntities] = useState(null)

    const [entities, setEntities] = useState<any>(null)

    useMemo(() => {
        const devices = []
        if (entities) {
            for (const [key, value] of Object.entries(entities)) {
                devices.push({
                    id: key,
                    data: value
                })
            }

        }

        if (!devices.length) return null
        return {
            [ENTITY_KEYS.DOORS.FRIDGE]: devices.find(id => id === entities[ENTITY_KEYS.DOORS.FRIDGE]),
            [ENTITY_KEYS.DOORS.GARAGE]: devices.find(id => id === entities[ENTITY_KEYS.DOORS.GARAGE])
        }

    }, [entities])

    return {
        entities,
        doorEntities,
        setEntities
    }
}