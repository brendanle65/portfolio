import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    overflow: hidden;
    background: ${theme.colors.blue};
    display: flex;
    flex-direction: column;
    color: white;
    position: relative;
    padding: ${theme.spacing.hg} ${theme.layout.laptop.x};
    ${theme.max('tablet')} {
      padding: ${theme.spacing.hg} ${theme.layout.tablet.x};
    }
    ${theme.max('mobile')} {
      padding: ${theme.spacing.hg} ${theme.layout.mobile.x};
    }
    padding-bottom: 0px;
  `
);

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.gh};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const Accent = styled.span`
  color: ${(props) => props.theme.colors.yellow};
`;

export const Hire = styled.h4(
  ({ theme }) => css`
    font-size: ${theme.fontSize.df};
    font-weight: ${theme.fontWeight.md};
    margin-bottom: ${theme.spacing.sm};
  `
);

export const Paragraph = styled.p(
  ({ theme }) => css`
    margin-right: ${theme.spacing.hg};
    font-size: ${theme.fontSize.sm};
    line-height: ${theme.fontHeight.md};
  `
);

export const Flex = styled.div`
  display: flex;
`;
