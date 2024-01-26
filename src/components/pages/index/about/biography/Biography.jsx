import * as Styled from './Biography.styled';

const PARA_ONE = `👋 Hi, I'm Brendan, a multi-disciplined developer based in Salt Lake City who loves performing magic tricks 🃏
and eating pho 🍜.`;

const PARA_TWO = `I've always been fascinated by the intersection of art and technology, blending the creative with the technical.
My passion lies in building products that add a sense of awe and meaning to people's lives. It goes beyond
designing buttons and implementing hot-trending features; it's about empathizing with the user and understanding
their needs, so that we can design and build with intention — to really make a difference.`;

const PARA_THREE = `Now, as I enter my final semester studying Mathematics at university, I'm excited for the opportunity to apply
the skills I've acquired over all these years. As a flexible, go-getter who likes a good challenge, I'm willing
to tackle any task, be it in UI/UX design, web development, or emerging technologies like AI.`;

/**
 * The Biography component renders a short biography that details my aspirations and personality.
 */
const Biography = () => (
  <Styled.Container>
    <Styled.Text
      title="I'm Brendan: where code meets creativity & AI fuels the fun."
      subtitle="tldr:"
      paragraphs={[PARA_ONE, PARA_TWO, PARA_THREE]}
    />
  </Styled.Container>
);

export default Biography;
