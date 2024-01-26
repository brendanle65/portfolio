import * as Styled from './TextBlock.styled';

/**
 * The TextBlock component is a highly used text section.
 */
const TextBlock = ({ className, subtitle, title, paragraphs }) => (
  <div className={className}>
    <Styled.Subtitle>{subtitle}</Styled.Subtitle>
    <Styled.Title>{title}</Styled.Title>
    {paragraphs.map((text, idx) => (
      <Styled.Paragraph key={idx}>{text}</Styled.Paragraph>
    ))}
  </div>
);

export default TextBlock;
