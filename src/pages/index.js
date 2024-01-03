import withHover from '@/components/hocs/withHover';
import styled from 'styled-components';

const Title = withHover(styled.h1``);

const HomePage = () => {
  return <Title>Hover Over Me!!</Title>;
};

export default HomePage;
