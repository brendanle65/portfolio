import TextBlock from '@/components/misc/text-block';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.section(
  ({ theme, $offset }) => css`
    padding: 0 ${theme.layout.laptop.x};
    margin: ${theme.spacing.hg} 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${(props) => props.theme.spacing.df};
    margin-bottom: calc(${$offset} + ${theme.spacing.hg});
  `
);

export const Column = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.df};
`;

export const Image = styled.img`
  width: 100%;
`;

export const Text = styled(TextBlock)`
  margin: ${(props) => props.theme.spacing.df} 0;
`;
