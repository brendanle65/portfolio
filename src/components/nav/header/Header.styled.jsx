import styled, { css } from 'styled-components';
import Image from 'next/image';
import Link from '@/components/core/Link';

// Layout
export const Container = styled.header(
  ({ theme, $secondary }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    position: ${$secondary ? 'static' : 'absolute'};
    top: 0;
    z-index: 500;
    padding: ${theme.layout.laptop.y} ${theme.layout.laptop.x};
    ${theme.max('tablet')} {
      padding: ${theme.layout.tablet.y} ${theme.layout.tablet.x};
    }
    ${theme.max('mobile')} {
      padding: ${theme.layout.mobile.y} ${theme.layout.mobile.x};
    }
  `
);

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

// Branding
export const Brand = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Memoji = styled(Image).attrs({
  src: '/memoji.png',
  width: 60,
  height: 60,
})`
  width: 60px;
  height: 60px;

  ${(props) => props.theme.max('tablet')} {
    width: 48px;
    height: 48px;
  }
  ${(props) => props.theme.max('mobile')} {
    width: 36px;
    height: 36px;
  }
`;

export const Name = styled.span`
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.md};
  text-transform: uppercase;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Line = styled.hr(
  ({ theme }) => css`
    width: 100%;
    border: ${theme.borderHeight.df} solid ${theme.colors.gray[400]};
    margin-left: ${theme.spacing.xs};
  `
);

// Pages
export const Pages = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.lg};
`;

export const PageLink = styled(Link)(
  ({ theme }) => css`
    &:after {
      display: block;
      content: '';
      margin-top: ${theme.spacing.pe};
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

// Social
export const Socials = styled.div(
  ({ theme }) => css`
    display: flex;
    gap: ${theme.spacing.sm};
    margin-left: ${theme.spacing.lg};
    margin-top: ${theme.spacing.pe};
  `
);

export const Icon = styled.span(
  ({ theme }) => css`
    width: ${theme.iconSize.df};
    height: ${theme.iconSize.df};
  `
);

export const SocialLink = styled(Link)`
  transition: all 250ms ease-in-out;

  &:hover ${Icon} {
    transform: ${(props) => (props.$rotateRight ? 'rotate(-7deg)' : 'rotate(7deg)')};
    fill: ${(props) => props.theme.colors.gray[400]};
  }
`;
