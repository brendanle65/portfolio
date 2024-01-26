import styled, { css } from 'styled-components';
import Link from '@/components/core/Link';

export const Container = styled.section(
  ({ theme }) => css`
    margin-bottom: ${theme.spacing.lg};
    padding-bottom: ${theme.spacing.hg};
    padding-left: ${theme.layout.laptop.x};
    padding-right: ${theme.layout.laptop.x};
    ${theme.max('tablet')} {
      padding-left: ${theme.layout.laptop.x};
      padding-right: ${theme.layout.laptop.x};
    }
    ${theme.max('mobile')} {
      padding-left: ${theme.layout.laptop.x};
      padding-right: ${theme.layout.laptop.x};
    }
  `
);

// header

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.hg};
`;

export const Title = styled.h2`
  white-space: nowrap;
  font-size: ${(props) => props.theme.fontSize.gh};
`;

export const Accent = styled.span(
  ({ theme }) => css`
    border-bottom: solid ${theme.borderHeight.xl} ${theme.colors.blue};
  `
);

export const Divider = styled.div(
  ({ theme }) => css`
    width: 100%;
    margin-left: ${theme.spacing.df};
    border: ${theme.borderHeight.df} solid black;
    margin-top: ${theme.spacing.sm};
  `
);

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-gap: ${(props) => props.theme.spacing.hg};
  height: 80vh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Works = styled.div`
  display: grid;
`;

export const Name = styled.h3(
  ({ theme }) => css`
    position: absolute;
    left: ${theme.spacing.df};
    top: 50%;
    transform: translateY(-50%);
    font-size: ${theme.fontSize.gh};
    font-weight: ${theme.fontWeight.md};
  `
);

export const Details = styled.div(
  ({ theme }) => css`
    margin-top: ${theme.spacing.sm};
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.gray[500]};
    display: flex;
    justify-content: space-between;
    position: relative;
  `
);

export const Project = styled(Link)(
  ({ theme }) => css`
    border-top: ${theme.borderHeight.df} solid black;
    position: relative;
    padding: 0 ${theme.spacing.df};

    &:nth-last-child(1) {
      border-bottom: ${theme.borderHeight.df} solid black;
    }

    &:hover {
      background: ${theme.colors.blue};
    }

    &:hover ${Details} {
      color: white;
    }

    &:hover ${Name} {
      color: ${theme.colors.yellow};
    }
  `
);

export const Date = styled.span`
  white-space: nowrap;
  position: absolute;
  left: 35%;
`;

export const Bold = styled.span`
  font-weight: ${(props) => props.theme.fontWeight.md};
`;
