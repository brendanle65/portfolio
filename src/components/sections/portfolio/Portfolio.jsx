import * as Styled from './Portfolio.styled';
import { useState } from 'react';

//todo: add transitions: https://flayks.com/

/**
 * The Portfolio component lists some of my best works.
 */
const Portfolio = () => {
  const [image, setImage] = useState(
    'https://cdn.dribbble.com/userupload/3955922/file/original-cb6afa1b1ce28e2480f73ac4c861c586.jpg?resize=1504x1128'
  );

  return (
    <Styled.Container id="portfolio">
      <Styled.Header>
        <Styled.Title>
          <Styled.Accent>Selected</Styled.Accent>
          &nbsp; Projects
        </Styled.Title>
        <Styled.Divider />
      </Styled.Header>
      <Styled.Main>
        <Styled.Image src={image} />
        <Styled.Works>
          <Styled.Project
            href="/"
            onMouseEnter={() =>
              setImage(
                'https://cdn.dribbble.com/userupload/3955922/file/original-cb6afa1b1ce28e2480f73ac4c861c586.jpg?resize=1504x1128'
              )
            }
          >
            <Styled.Details>
              <span>01</span>
              <Styled.Date>2023-2024</Styled.Date>
              <Styled.Bold>chrome extension</Styled.Bold>
            </Styled.Details>
            <Styled.Name>Blossom</Styled.Name>
          </Styled.Project>
          <Styled.Project
            href="/"
            onMouseEnter={() =>
              setImage(
                'https://cdn.dribbble.com/users/5922214/screenshots/18404881/media/43da230e53e98c0e5f5ab681c748cdaa.png?resize=1200x900&vertical=center'
              )
            }
          >
            <Styled.Details>
              <span>02</span>
              <Styled.Date>2024</Styled.Date>
              <Styled.Bold>social media app</Styled.Bold>
            </Styled.Details>
            <Styled.Name>Avalon</Styled.Name>
          </Styled.Project>
          <Styled.Project
            href="/"
            onMouseEnter={() =>
              setImage(
                'https://cdn.dribbble.com/userupload/11743954/file/original-9095ba50c038e3a143ebbdcf41cc6ead.png?resize=1504x1128'
              )
            }
          >
            <Styled.Details>
              <span>03</span>
              <Styled.Date>2024</Styled.Date>
              <Styled.Bold>data visualization tool</Styled.Bold>
            </Styled.Details>
            <Styled.Name>Capo</Styled.Name>
          </Styled.Project>
        </Styled.Works>
      </Styled.Main>
    </Styled.Container>
  );
};

export default Portfolio;
