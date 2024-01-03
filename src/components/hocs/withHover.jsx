import { useContext } from 'react';
import { cursorStateContext, CURSOR_STATE } from '@/contexts/CursorContext';

/**
 * The withHover HOC wraps JSX elements that when hovered over change the cursor.
 */
const withHover = (Component, hoverState = CURSOR_STATE.HOVER) => {
  return (props) => {
    const { style, onMouseEnter, onMouseLeave, ...rest } = props;
    const { setCursorState } = useContext(cursorStateContext);

    return (
      <Component
        {...rest}
        style={{ ...style, cursor: 'pointer' }}
        onMouseEnter={() => {
          setCursorState(hoverState);
          if (onMouseEnter) {
            onMouseEnter();
          }
        }}
        onMouseLeave={() => {
          setCursorState(CURSOR_STATE.IDLE);
          if (onMouseLeave) {
            onMouseLeave();
          }
        }}
      />
    );
  };
};

export default withHover;
