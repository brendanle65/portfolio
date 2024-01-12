import React, { useContext, useEffect, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'styled-components';
import { CURSOR_STATE, cursorStateContext } from '@/contexts/CursorContext';
import * as Styled from './Cursor.styled';

/**
 * The Cursor component is a custom element that acts as a cursor
 * (it's a supplement, not a replacement to the browser's default cursor).
 */
const Cursor = () => {
  const [cursorStyle, setCursorStyle] = useState({});
  const { cursorState: state } = useContext(cursorStateContext);
  const theme = useTheme();
  const cursorX = useMotionValue(-100); // starts off-screen
  const cursorY = useMotionValue(-100); // starts off-screen

  const springConfig = { damping: 100, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  });

  useEffect(() => {
    let style = {};

    if (state === CURSOR_STATE.IDLE) {
      style = theme.cursor.idle;
    } else if (state === CURSOR_STATE.HOVER) {
      style = theme.cursor.hover;
    } else if (state === CURSOR_STATE.HIDDEN) {
      style = theme.cursor.hidden;
    }

    setCursorStyle({
      width: style.size,
      height: style.size,
      opacity: style.opacity,
    });
  }, [state]);

  return (
    <Styled.Cursor
      initial={cursorStyle}
      animate={cursorStyle}
      style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
    />
  );
};

export default Cursor;
