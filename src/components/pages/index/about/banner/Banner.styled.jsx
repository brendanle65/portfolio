import styled, { css, keyframes } from 'styled-components';
import Arrow from '@/images/arrow-down.svg';
import { motion } from 'framer-motion';

export const Container = styled.section(
  ({ theme }) =>
    css`
      height: 100vh;
      padding: ${theme.layout.laptop.y} ${theme.layout.laptop.x};
      font-size: ${theme.fontSize.gh};
      color: ${theme.colors.blue};
      line-height: ${theme.fontHeight.md};
      display: grid;
      place-items: center;
      position: relative;
    `
);

export const DynamicBox = styled.div`
  width: 0;
  white-space: nowrap;
  display: flex;
`;

export const LineOne = styled.div`
  display: flex;
`;

export const LineTwo = styled.div`
  display: flex;
  margin-left: ${(props) => props.theme.spacing.hg};
`;

export const LineThree = styled.div`
  margin-left: ${(props) => props.theme.spacing.lg};
  display: flex;
  align-items: end;
  position: relative;
`;

export const Plus = styled(motion.span)`
  color: ${(props) => props.theme.colors.green};
`;

export const Underline = styled(motion.span)(
  ({ theme }) => css`
    &:after {
      display: block;
      content: '';
      border-bottom: solid ${theme.borderHeight.lg} ${theme.colors.blue};
    }
  `
);

export const Cursor = styled(motion.div)(
  ({ theme, $hide }) => css`
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: ${theme.colors.yellow};
    margin-left: ${theme.spacing.sm};
    transform: translateY(-${theme.spacing.sm}px);
    opacity: ${$hide ? 0 : 1};
    flex-shrink: 0;
    align-self: flex-end;
  `
);

const bob = keyframes`
  /* Define the keyframes of the animation */
  0%, 100% {
    /* At 0% and 100%, the element is at its original position */
    transform: translateY(3px);
  }
  50% {
    /* At 50%, the element is moved up by 5 pixels */
    transform: translateY(-3px);
  }
`;

export const Scroll = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${(props) => props.theme.spacing.xl};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: black;
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.theme.fontWeight[500]};
  animation: ${bob} 1.5s ease-in-out infinite;
  opacity: ${(props) => props.$opacity};
`;

export const Icon = styled(Arrow)`
  width: 16px;
  height: 16px;
  margin-left: 2px;
`;
