import styled, { css } from 'styled-components';
import Link from '@/components/core/Link';

export const Block = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  line-height: ${(props) => props.theme.fontHeight.md};
`;

export const Email = styled(Link)(
  ({ theme }) => css`
    border-bottom: solid ${theme.borderHeight.lg} ${theme.colors.yellow};
    color: ${theme.colors.yellow};
    font-weight: ${theme.fontWeight.md};
    transition: opacity 250ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  `
);
