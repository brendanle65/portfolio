import * as Styled from './Parallax.styled';
import { useRef } from 'react';
import { useTransform, useScroll, useSpring } from 'framer-motion';

/**
 * The Parallax component displays images for the case-study, the approach taken, and the summary.
 */
const Parallax = ({ images, approach, summary }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });
  const y = useTransform(spring, [0, 1], ['0', '-20vh']);

  const middleIndex = Math.floor(images.length / 2);
  const leftImages = images.slice(0, middleIndex);
  const rightImages = images.slice(middleIndex, images.length - 1);

  return (
    <Styled.Container ref={ref} $offset="-20vh">
      <Styled.Column>
        {leftImages.map((image, idx) => (
          <Styled.Image key={idx} src={image} />
        ))}
        <Styled.Text subtitle="03." title="In Summary" paragraphs={summary} />
      </Styled.Column>
      <Styled.Column style={{ y }}>
        {rightImages.map((image, idx) => (
          <Styled.Image key={idx} src={image} />
        ))}
        <Styled.Text subtitle="02." title="The Approach" paragraphs={approach} />
        <Styled.Image src={images[images.length - 1]} />
      </Styled.Column>
    </Styled.Container>
  );
};

export default Parallax;
