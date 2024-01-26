import styled, { css } from 'styled-components';
import TextBlock from '@/components/misc/text-block';

export const Text = styled(TextBlock)(
  ({ theme }) => css`
    padding: 0 ${theme.layout.laptop.x};
    max-width: 650px;
    margin: ${theme.spacing.hg} auto;
  `
);
