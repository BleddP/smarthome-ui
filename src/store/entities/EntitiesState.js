import { useReducer } from "react";
import { SET_ENTITIES, CLEAR_ENTITIES, SET_DOOR_ENTITIES, SET_WEATHER_ENTITIES, SET_HOMEPOD_ENTITIES, SET_LOADING} from "./types";
import { ENTITY_KEYS } from "constants";

import EntitiesReducer from "./entitiesReducer";
import EntitiesContext from './entitiesContext';

const EntitiesState = (props) => {
  const initialState = {
    entities: [],
    doors: [],
    weather: {},
    homepod: {
      isPlaying: false
    },
    loading: false
  };

  const [state, dispatch] = useReducer(EntitiesReducer, initialState);

  // --- Functions
  const setDoorEntities = (entities) => {
    const doorIsOpen = entities[ENTITY_KEYS.DOORS.FRIDGE].state === 'on' || entities[ENTITY_KEYS.DOORS.GARAGE].state === 'on'
    const doors = {
      [ENTITY_KEYS.DOORS.FRIDGE]: entities[ENTITY_KEYS.DOORS.FRIDGE],
      [ENTITY_KEYS.DOORS.GARAGE]: entities[ENTITY_KEYS.DOORS.GARAGE],
      doorIsOpen
    }

    dispatch({
      type: SET_DOOR_ENTITIES,
      payload: doors,
    });
  }

  const setWeatherEntities = (weather) => {
    dispatch({
      type: SET_WEATHER_ENTITIES,
      payload: weather,
    });
  }

  const setHomepodEntities = (homepod) => {
    dispatch({
      type: SET_HOMEPOD_ENTITIES,
      payload: homepod
    })
  }

  const setEntities = (entities) => {
    console.log(entities)
    dispatch({
      type: SET_ENTITIES,
      payload: entities,
    });
    
    setDoorEntities(entities)
    setWeatherEntities(entities[ENTITY_KEYS.WEATHER.HOME])
    setHomepodEntities(entities[ENTITY_KEYS.HOMEPOD])
  };

  const clearEntities = () => {
    dispatch({ type: CLEAR_ENTITIES });
  };

  const setLoading = (value) => {
    dispatch({ type: SET_LOADING, payload: value });
  };

  return (
    <EntitiesContext.Provider value={{
        entities: state.entities,
        doors: state.doors,
        weather: state.weather,
        homepod: state.homepod,
        loading: state.loading,
        setEntities,
        clearEntities,
        setLoading
    }}>{props.children}</EntitiesContext.Provider>
  );
};
export default EntitiesState;
