import styled, { css } from 'styled-components';
import Link from '@/components/core/Link';

export const Container = styled.footer(
  ({ theme }) =>
    css`
      background: ${theme.colors.blue};
      color: white;
      padding: ${theme.spacing.lg} ${theme.layout.laptop.x};
      ${theme.max('tablet')} {
        padding: ${theme.spacing.lg} ${theme.layout.tablet.x};
      }
      ${theme.max('mobile')} {
        padding: ${theme.spacing.lg} ${theme.layout.mobile.x};
      }
    `
);

export const Title = styled.h4(
  ({ theme }) => css`
    font-size: ${theme.fontSize.df};
    font-weight: ${theme.fontWeight.md};
    margin-bottom: ${theme.spacing.sm};
  `
);

export const Flex = styled.div`
  display: flex;
`;

// socials

export const Socials = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  margin-left: auto;
  align-self: flex-end;
`;

export const Icon = styled.span(
  ({ theme }) => css`
    fill: white;
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

// divider

export const Line = styled.hr(
  ({ theme }) => css`
    border: ${theme.borderHeight.df} solid white;
    margin: ${theme.spacing.df} 0;
  `
);

// minor information

export const Legal = styled.div`
  font-size: ${(props) => props.theme.fontSize.xs};
`;

export const Built = styled.div`
  margin-left: auto;
  width: max-content;
  font-size: ${(props) => props.theme.fontSize.xs};
`;
