import React, { useReducer } from "react";
import { SHOW_TOASTER, CLOSE_TOASTER, CLEAR_TOASTER } from "./types";

import ToasterReducer from "./toasterReducer";
import ToasterContext from './toasterContext';

const ToasterState = (props) => {
  const initialState = {
    open: false,
    severity: "",
    title: "",
    content: "",
  };

  const [state, dispatch] = useReducer(ToasterReducer, initialState);

  // --- Functions
  const show = (content, timeout = 5000) => {
    dispatch({
      type: SHOW_TOASTER,
      payload: content,
    });

    setTimeout(() => {
      close()
    }, timeout);
  };

  const close = () => {
    dispatch({ type: CLOSE_TOASTER });
    setTimeout(() => {
      clearToaster()
    }, 500);
  };

  const clearToaster = () => {
    dispatch({ type: CLEAR_TOASTER });
  };

  return (
    <ToasterContext.Provider value={{
        open: state.open,
        severity: state.severity,
        title: state.title,
        content: state.content,
        show,
        close
    }}>{props.children}</ToasterContext.Provider>
  );
};
export default ToasterState;
