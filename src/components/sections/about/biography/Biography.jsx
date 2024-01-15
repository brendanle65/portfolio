import * as Styled from './Biography.styled';

/**
 * The Biography component renders a short biography that details my aspirations and personality.
 */
const Biography = () => (
  <Styled.Container>
    <Styled.Box>
      <Styled.Subtitle>tldr:</Styled.Subtitle>
      <Styled.Title>I'm Brendan: where code meets creativity & AI fuels the fun.</Styled.Title>
      <Styled.Paragraph>
        👋 Hi, I'm Brendan, a multi-disciplined developer based in Salt Lake City who loves performing magic tricks 🃏
        and eating pho 🍜.
      </Styled.Paragraph>
      <Styled.Paragraph>
        I've always been fascinated by the intersection of art and technology, blending the creative with the technical.
        My passion lies in building products that add a sense of awe and meaning to people's lives. It goes beyond
        designing buttons and implementing hot-trending features; it's about empathizing with the user and understanding
        their needs, so that we can design and build with intention — to really make a difference.
      </Styled.Paragraph>
      <Styled.Paragraph>
        Now, as I enter my final semester studying Mathematics at university, I'm excited for the opportunity to apply
        the skills I've acquired over all these years. As a flexible, go-getter who likes a good challenge, I'm willing
        to tackle any task, be it in UI/UX design, web development, or emerging technologies like AI.
      </Styled.Paragraph>
    </Styled.Box>
  </Styled.Container>
);

export default Biography;
