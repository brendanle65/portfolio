import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Cursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  transform: translate(-50%, -50%);
  border-radius: 100%;
  background: ${(props) => props.theme.colors.yellow};
  z-index: 9999 !important;
`;
