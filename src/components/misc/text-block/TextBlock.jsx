import * as Styled from './TextBlock.styled';
import { motion } from 'framer-motion';

/**
 * The TextBlock component is a highly used text section.
 */
const TextBlock = ({ className, subtitle, title, paragraphs }) => (
  <div className={className}>
    <Styled.Wrapper>
      <Styled.Subtitle
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '100%', opacity: 0 },
        }}
      >
        {subtitle}
      </Styled.Subtitle>
    </Styled.Wrapper>
    <Styled.Wrapper>
      <Styled.Title
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '100%', opacity: 0 },
        }}
      >
        {title}
      </Styled.Title>
    </Styled.Wrapper>
    <Styled.Wrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-20%' }}
        transition={{ duration: 1, ease: 'easeOut' }}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: '10vh', opacity: 0 },
        }}
      >
        {paragraphs.map((text, idx) => (
          <Styled.Paragraph key={idx}>{text}</Styled.Paragraph>
        ))}
      </motion.div>
    </Styled.Wrapper>
  </div>
);

export default TextBlock;
