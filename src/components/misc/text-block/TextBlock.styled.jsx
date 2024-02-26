import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Subtitle = styled(motion.h3)(
  ({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.gray[500]};
  `
);

export const Title = styled(motion.h1)(
  ({ theme }) => css`
    font-size: ${theme.fontSize.xl};
    line-height: ${theme.fontHeight.md};
    margin-bottom: ${theme.spacing.df};
  `
);

export const Paragraph = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSize.df};
    line-height: ${theme.fontHeight.xl};
    margin-top: ${theme.spacing.df};
  `
);
