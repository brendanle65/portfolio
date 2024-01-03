import { createContext, useState } from 'react';

export const CURSOR_STATE = {
  HIDDEN: 'HIDDEN', // when the cursor needs to be completely hidden
  IDLE: 'IDLE', // when the cursor is not hovering over anything special - the default state
  HOVER: 'HOVER', // when the cursor is hovering over an interactable element
};

export const cursorStateContext = createContext(null);

/**
 * The CursorStateProvider component shares cursor data and methods to update it via the context API.
 */
const CursorStateProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState(CURSOR_STATE.IDLE);

  return <cursorStateContext.Provider value={{ cursorState, setCursorState }}>{children}</cursorStateContext.Provider>;
};

export default CursorStateProvider;
