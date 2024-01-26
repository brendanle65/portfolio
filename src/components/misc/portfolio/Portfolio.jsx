import * as Styled from './Portfolio.styled';
import { useState } from 'react';

//todo: add transitions: https://flayks.com/

const WORKS = [
  {
    link: '/case-studies/catalyst',
    date: '2023-2024',
    type: 'finance app',
    name: 'Catalyst',
    image:
      'https://cdn.dribbble.com/userupload/6482165/file/original-2e3823ab88342ba9a010b49dfd213115.png?resize=1504x1128',
  },
  {
    link: '/case-studies/ferrari',
    date: '2024',
    type: 'movie website',
    name: 'Ferrari',
    image: 'https://assets.awwwards.com/awards/sites_of_the_day/2024/01/ferrari-movie-1.jpg',
  },
  {
    link: '/',
    date: '2024',
    type: 'data visualization tool',
    name: 'Capo',
    image:
      'https://cdn.dribbble.com/userupload/11743954/file/original-9095ba50c038e3a143ebbdcf41cc6ead.png?resize=1504x1128',
  },
  {
    link: '/',
    date: '2022 - 2024',
    type: 'real estate website',
    name: 'Homie',
    image:
      'https://cdn.dribbble.com/userupload/7955145/file/original-5349b000ad7869a926c9e92ae9304c15.png?resize=1504x1128',
  },
];

/**
 * The Portfolio component lists some of my best works.
 */
const Portfolio = ({ secondary = false, exclude }) => {
  const [image, setImage] = useState(WORKS[0].image);

  const works = WORKS.filter((work) => work.name !== exclude);

  return (
    <Styled.Container id="portfolio">
      <Styled.Header>
        <Styled.Title>
          {!secondary ? (
            <>
              <Styled.Accent>Selected</Styled.Accent>
              &nbsp;Case Studies
            </>
          ) : (
            'Other Case Studies'
          )}
        </Styled.Title>
        <Styled.Divider />
      </Styled.Header>
      <Styled.Main>
        <Styled.Image src={image} />
        <Styled.Works>
          {works.map((work, idx) => (
            <Styled.Project href={work.link} onMouseEnter={() => setImage(work.image)}>
              <Styled.Details>
                <span>0{idx + 1}</span>
                <Styled.Date>{work.date}</Styled.Date>
                <Styled.Bold>{work.type}</Styled.Bold>
              </Styled.Details>
              <Styled.Name>{work.name}</Styled.Name>
            </Styled.Project>
          ))}
        </Styled.Works>
      </Styled.Main>
    </Styled.Container>
  );
};

export default Portfolio;
