import styled, { css } from 'styled-components';

export const Container = styled.section(
  ({ theme }) =>
    css`
      font-size: ${(props) => props.theme.fontSize.lg};
      margin: ${theme.spacing.hg} 0;
      padding: ${theme.layout.laptop.y} ${theme.layout.laptop.x};
      ${theme.max('tablet')} {
        padding: ${theme.layout.tablet.y} ${theme.layout.tablet.x};
      }
      ${theme.max('mobile')} {
        padding: ${theme.layout.mobile.y} ${theme.layout.mobile.x};
      }
    `
);

export const Title = styled.h2`
  position: sticky;
  top: 32px;
  float: left;
  width: max-content;
`;

export const Grid = styled.div`
  margin-left: auto;
  width: 66%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: ${(props) => props.theme.spacing.hg};
`;

export const Enumeration = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: ${(props) => props.theme.colors.gray[500]};
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSize.df};
  line-height: ${(props) => props.theme.fontHeight.lg};
  margin-top: ${(props) => props.theme.spacing.sm};
`;
