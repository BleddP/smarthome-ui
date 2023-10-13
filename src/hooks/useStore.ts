import { useContext } from 'react'

// Stores
import toasterContext from '../store/toaster/toasterContext'
import entitiesContext from '../store/entities/entitiesContext'

export const useStore = () => {
    const entities = useContext(entitiesContext)
    const toaster = useContext(toasterContext)
    return {
        entities,
        toaster
    }
}
