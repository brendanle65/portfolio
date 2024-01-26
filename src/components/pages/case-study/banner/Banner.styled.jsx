import styled, { css } from 'styled-components';
import NavLink from '@/components/core/Link';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${(props) => props.theme.spacing.lg};
    padding: ${theme.layout.laptop.y} ${theme.layout.laptop.x};
    padding-right: 0;
  `
);

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  margin-bottom: ${(props) => props.theme.spacing.df};
`;

export const Description = styled.h2`
  font-size: ${(props) => props.theme.fontSize.df};
  line-height: ${(props) => props.theme.fontHeight.md};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  max-width: 85%;
`;

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: ${(props) => props.theme.spacing.lg};
  grid-column-gap: ${(props) => props.theme.spacing.hg};
`;

export const Subtitle = styled.h4`
  color: ${(props) => props.theme.colors.blue};
  text-transform: uppercase;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-weight: ${(props) => props.theme.fontWeight.md};
`;

export const Content = styled.p`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing.cm};
  }
`;

export const Link = styled(NavLink)(
  ({ theme }) => css`
    display: inline-block;

    &:after {
      display: block;
      content: '';
      margin-bottom: -${theme.borderHeight.lg};
      border-bottom: solid ${theme.borderHeight.lg} ${theme.colors.gray[400]};
      transform: scaleX(0);
      transform-origin: 100% 50%;
      transition: transform 250ms ease-in-out;
    }

    &:hover {
      color: ${theme.colors.gray[400]};
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: 0% 50%;
    }
  `
);

export const Image = styled.img`
  width: 100%;
  height: 65vh;
  object-fit: cover;
  margin-left: auto;
`;
