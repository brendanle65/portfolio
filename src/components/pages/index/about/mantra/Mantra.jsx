import * as Styled from './Mantra.styled';
import React, { useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const TEXT_FADE_WINDOW = 5; // how many letters subject to animation at once
const STATEMENT = // text to display
  'I believe in leaving the world a better place than I found it. And I believe this is best done not alone, but with a diverse team that embraces different perspectives, fosters a go-getter mindset, and challenges the status quo. That is how positive, lasting change is made.';

/**
 * The Mantra component renders my values with a nice scroll tect-fill effect.
 */
const Mantra = () => {
  const words = STATEMENT.split(/(\s+)/);
  let letterIdx = 0;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // when using - values, how far from the top should the element be
    // when the scroll animation starts and stops: [start, stop]
    offset: ['-60vh', '-20vh'],
  });

  // map the progress to the number of letters the text has
  const transformedY = useTransform(scrollYProgress, [0, 1], [0, STATEMENT.length]);

  // when transformedY updates, it does not trigger a re-render. We can force it here by updating state.
  // we initialize to -10 to make sure no text is highlighted
  const [scrollMappedValue, setScrollMappedValue] = useState(-10);

  useMotionValueEvent(transformedY, 'change', (latest) => {
    // if you scroll up past threshold, makes sure no text is highlighted
    setScrollMappedValue(latest === 0 ? -10 : latest);
  });

  const getOpacity = (letterIdx) => {
    if (letterIdx <= scrollMappedValue) {
      return 1;
    } else if (letterIdx >= scrollMappedValue + TEXT_FADE_WINDOW) {
      return 0.2;
    } else {
      // calculate the how far this letter is inside the window:
      // the lesser, the darker and the more, the lighter.
      const ratio = (scrollMappedValue + TEXT_FADE_WINDOW - letterIdx) / TEXT_FADE_WINDOW;

      return Math.max(ratio, 0.2);
    }
  };

  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.Title>
          Shaping a <br /> better web, a <Styled.Accent>brighter world</Styled.Accent>
        </Styled.Title>
        <Styled.Paragraph ref={ref}>
          {words.map((word, wordIdx) => (
            <Styled.Word key={wordIdx}>
              {word.split('').map((letter) => {
                letterIdx++;
                return (
                  <Styled.Letter key={letterIdx} $opacity={getOpacity(letterIdx)}>
                    {letter}
                  </Styled.Letter>
                );
              })}
            </Styled.Word>
          ))}
        </Styled.Paragraph>
      </Styled.Box>
    </Styled.Container>
  );
};

export default Mantra;
