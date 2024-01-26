import styled, { css } from 'styled-components';

export const Subtitle = styled.h3(
  ({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    color: ${theme.colors.gray[500]};
  `
);

export const Title = styled.h1(
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
