import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div(
  ({ theme }) => css`
    padding: ${theme.layout.laptop.y} ${theme.layout.laptop.x};
    height: 100vh;
    color: white;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
  `
);

export const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: ${(props) => props.theme.colors.blue};
  z-index: -1;
`;

export const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 75px;
  overflow: hidden;
`;

export const Bio = styled(motion.div)`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.fontHeight.md};
`;

export const A = styled.div`
  margin-top: auto;
  margin-bottom: ${(props) => props.theme.spacing.df};
  overflow: hidden;
`;

export const Progress = styled(motion.div)(
  ({ theme }) => css`
    margin-left: calc(${theme.layout.laptop.x} * 2);
    font-size: ${theme.fontSize.hg};
  `
);

export const Pound = styled.span`
  color: ${(props) => props.theme.colors.yellow};
`;

export const Line = styled(motion.hr)`
  width: 100%;
  margin-left: 0;
  border-color: ${(props) => props.theme.colors.yellow};
  border-style: dashed;
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const Amount = styled(motion.div)`
  display: inline-block;
  transform: translateX(-100%);
`;
