import { useReducer } from "react";
import { SET_ENTITIES, CLEAR_ENTITIES, SET_DOOR_ENTITIES, SET_LOADING} from "./types";
import { ENTITY_KEYS } from "constants";

import EntitiesReducer from "./entitiesReducer";
import EntitiesContext from './entitiesContext';

const EntitiesState = (props) => {
  const initialState = {
    entities: [],
    doors: [],
    loading: false
  };

  const [state, dispatch] = useReducer(EntitiesReducer, initialState);

  // --- Functions
  const setDoorEntities = (entities) => {

    const doors = {
      [ENTITY_KEYS.DOORS.FRIDGE]: entities[ENTITY_KEYS.DOORS.FRIDGE],
      [ENTITY_KEYS.DOORS.GARAGE]: entities[ENTITY_KEYS.DOORS.GARAGE]
    }

    dispatch({
      type: SET_DOOR_ENTITIES,
      payload: doors,
    });
  }

  const setEntities = (entities) => {
    dispatch({
      type: SET_ENTITIES,
      payload: entities,
    });
    
    setDoorEntities(entities)
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
        loading: state.loading,
        setEntities,
        clearEntities,
        setLoading
    }}>{props.children}</EntitiesContext.Provider>
  );
};
export default EntitiesState;
