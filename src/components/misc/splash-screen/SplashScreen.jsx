import * as Styled from './SplashScreen.styled';
import { animate } from 'framer-motion';
import { useState, useEffect } from 'react';

const BIO = ["Hello, I'm Brendan.", 'I design and develop websites and', 'apps that use artificial intelligence.'];

const SplashScreen = ({ setLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3,
      onUpdate(value) {
        setProgress(value.toFixed(0));
      },
      onComplete() {
        setLoadingComplete();
      },
    });

    return () => controls.stop();
  }, []);

  useEffect(() => {
    const letters = BIO.map((sec) => {
      return [...sec.split(''), '<br/>'];
    }).flat();

    const upper = Math.floor(letters.length * progress * 0.01);
    setText(letters.slice(0, upper).join(''));
  }, [progress]);

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.Bio
          dangerouslySetInnerHTML={{ __html: text }}
          exit={{ y: '-200%', transition: { duration: 1, delay: 0.5, ease: 'easeOut' } }}
        ></Styled.Bio>
      </Styled.Wrapper>
      <Styled.A>
        <Styled.Progress style={{ x: progress + '%' }}>
          <Styled.Amount
            initial={{ x: '-100%' }}
            exit={{ x: '-100%', y: '-200%', transition: { duration: 1, delay: 0.5 } }}
          >
            {progress}
            <Styled.Pound>%</Styled.Pound>
          </Styled.Amount>
        </Styled.Progress>
        <Styled.Line
          exit={{
            width: 0,
            transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' },
          }}
        />
      </Styled.A>
      <Styled.Background exit={{ top: '-100%', transition: { duration: 0.75, delay: 1.5, ease: 'easeOut' } }} />
    </Styled.Container>
  );
};

export default SplashScreen;
