import { DoorTemplate } from "./template"
import { ENTITY_KEYS } from "../../constants"
import { useStore } from '../../hooks'

export const DoorsPanel = () => {

    const { entities } = useStore()
    const { FRIDGE, GARAGE } = ENTITY_KEYS.DOORS

    const parseEntity = (entity: any) => {
        if (!entity) return null
        return {
            id: entity.entity_id,
            name: entity.attributes.friendly_name.replace(' Identify', ''),
            state: entity.state
        }
    }

    const fridge = parseEntity(entities.doors[FRIDGE])
    const garage = parseEntity(entities.doors[GARAGE])

    return (
        <div>
            {fridge && <DoorTemplate name={fridge.name} state={fridge.state} />}
            {garage && <DoorTemplate name={garage.name} state={garage.state} />}
        </div>
    )
}