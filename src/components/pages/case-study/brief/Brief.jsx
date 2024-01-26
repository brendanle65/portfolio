import * as Styled from './Brief.styled';

/**
 * The Brief component displays the brief for a case study.
 */
const Brief = ({ paragraphs }) => <Styled.Text subtitle="01." title="The Brief" paragraphs={paragraphs}></Styled.Text>;

export default Brief;
