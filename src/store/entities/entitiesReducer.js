import { SET_ENTITIES, CLEAR_ENTITIES, SET_DOOR_ENTITIES, SET_WEATHER_ENTITIES, SET_HOMEPOD_ENTITIES, SET_LOADING } from './types'

const EntitiesReducer = (state, action) => {
    switch (action.type) {
        case SET_ENTITIES:
            return {
                ...state,
                entities: action.payload
            }

        case CLEAR_ENTITIES:
            return {
                ...state,
                entities: null
            }

        case SET_DOOR_ENTITIES:
            return {
                ...state,
                doors: action.payload
            }

        case SET_WEATHER_ENTITIES:
            return {
                ...state,
                weather: action.payload
            }


        case SET_HOMEPOD_ENTITIES:
            return {
                ...state,
                homepod: action.payload
            }

        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
    }
}

export default EntitiesReducer
