import styled, { css } from 'styled-components';

export const Container = styled.section(
  ({ theme }) => css`
    min-height: 80vh;
    width: 100%;
    display: grid;
    place-items: center;
    color: white;
    background: ${theme.colors.blue};
    margin-top: ${theme.spacing.hg};
    padding: ${theme.layout.laptop.y} ${theme.layout.laptop.x};
    ${theme.max('tablet')} {
      padding: ${theme.layout.tablet.y} ${theme.layout.tablet.x};
    }
    ${theme.max('mobile')} {
      padding: ${theme.layout.mobile.y} ${theme.layout.mobile.x};
    }
  `
);

export const Box = styled.div`
  display: flex;
  grid-gap: ${(props) => props.theme.spacing.hg};
`;

export const Title = styled.h2(
  ({ theme }) => css`
    font-size: ${theme.fontSize.gh};
    width: 50%;
    line-height: ${theme.fontHeight.sm};
  `
);

export const Accent = styled.span`
  color: ${(props) => props.theme.colors.yellow};
`;

export const Paragraph = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    line-height: ${theme.fontHeight.lg};
    width: 50%;
    margin-right: ${theme.spacing.lg};
    align-self: self-end;
  `
);

export const Word = styled.span`
  display: inline;
`;

export const Letter = styled.span`
  display: inline;
  opacity: ${(props) => props.$opacity};
`;
