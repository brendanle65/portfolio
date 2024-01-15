import styled from 'styled-components';
import { motion } from 'framer-motion';

// this will be translated around screen, not the cursor itself
export const Container = styled(motion.div)`
  pointer-events: none;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999 !important;
`;

export const Cursor = styled(motion.div)`
  background: ${(props) => props.theme.colors.yellow};
  transform: translate(-50%, -50%);
  border-radius: 100%;
`;
