import styled from 'styled-components';
import TextBlock from '@/components/misc/text-block';

export const Container = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: ${(props) => props.theme.spacing.hg} 0;
`;

export const Text = styled(TextBlock)`
  max-width: 550px;
`;
