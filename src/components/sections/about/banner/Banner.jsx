import * as Styled from './Banner.styled';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const INITIAL_ANIMATION_DELAY = 500; // delay before the first phrase is typed
const TYPING_DELAY = 500; // delay between each phrase being typed
const CLEAR_DELAY = 500; // delay between each phrase being cleared
const LETTER_TYPING_DELAY = 40; // delay between each letter being typed
const LETTER_CLEAR_DELAY = 25; // delay between each letter being deleted
const BLINKING_DELAY = 450; // delay between cursor blinks
const NUM_CURSOR_BLINKS = 3; // number of times the cursor blinks before it disappears
const PHRASES = [
  // phrases to be typed
  'a brighter future',
  'a less lonely world',
  'a greener planet',
  'a healthier world',
  'a fairer society',
];

const TOP_OFFSET = 100; // number of pixels to scroll before fading
const BOTTOM_OFFSET = 200; // number of pixels above container to finish fading

/**
 * The Banner component renders a changing tagline as the opening section for the about section on the home page.
 */
const Banner = () => {
  const [currentText, setCurrentText] = useState('');
  const [hideCursor, setHideCursor] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const typingIntervalRef = useRef(null); // responsible for typing phrase animation
  const blinkingIntervalRef = useRef(null); // responsible for cursor blinking animation
  const { scrollY } = useScroll();

  // handle fading of scroll reminder
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest < TOP_OFFSET) {
      setScrollOpacity(1);
    } else if (latest > window.innerHeight - BOTTOM_OFFSET) {
      setScrollOpacity(0);
    } else {
      const percent = (latest - TOP_OFFSET) / (window.innerHeight - TOP_OFFSET - BOTTOM_OFFSET);
      setScrollOpacity(1 - percent);
    }
  });

  useEffect(() => {
    // start typing animation after initial delay
    const animationLoop = setTimeout(async () => {
      let phraseIdx = 0;
      while (true) {
        const phrase = PHRASES[phraseIdx];
        await type(phrase);
        await blink();
        await new Promise((resolve) => setTimeout(resolve, CLEAR_DELAY));
        await clear(phrase);
        await new Promise((resolve) => setTimeout(resolve, TYPING_DELAY));
        phraseIdx = (phraseIdx + 1) % PHRASES.length;
      }
    }, INITIAL_ANIMATION_DELAY);

    // cleanup before unmount
    return () => {
      clearTimeout(animationLoop);
      clearInterval(typingIntervalRef.current);
      clearInterval(blinkingIntervalRef.current);
    };
  }, []);

  // type phrase letter by letter
  const type = (phrase) =>
    new Promise((resolve) => {
      let letterIdx = 1;
      typingIntervalRef.current = setInterval(() => {
        if (letterIdx <= phrase.length) {
          setCurrentText(phrase.substring(0, letterIdx++));
        } else {
          clearInterval(typingIntervalRef.current);
          resolve();
        }
      }, LETTER_TYPING_DELAY);
    });

  // blinks the cursor
  const blink = () =>
    new Promise((resolve) => {
      let counter = 0; // counts both hide and show action
      blinkingIntervalRef.current = setInterval(() => {
        setHideCursor((prev) => !prev);
        counter++;
        if (counter >= NUM_CURSOR_BLINKS * 2) {
          clearInterval(blinkingIntervalRef.current);
          resolve();
        }
      }, BLINKING_DELAY);
    });

  // delete phrase letter by letter
  const clear = (phrase) =>
    new Promise((resolve) => {
      let letterIdx = phrase.length;
      typingIntervalRef.current = setInterval(() => {
        if (letterIdx >= 0) {
          setCurrentText(phrase.substring(0, letterIdx--));
        } else {
          clearInterval(typingIntervalRef.current);
          resolve();
        }
      }, LETTER_CLEAR_DELAY);
    });

  return (
    <Styled.Container id="intro">
      <div>
        <Styled.LineOne>
          <span>I'm just a&nbsp;</span>
          <Styled.Underline> dreamer </Styled.Underline>
          <span>&nbsp;who</span>
        </Styled.LineOne>
        <Styled.LineTwo>
          <span>believes in the&nbsp;</span>
          <Styled.Underline>possibility</Styled.Underline>
          <span>&nbsp;that</span>
        </Styled.LineTwo>
        <Styled.LineThree>
          <span>Web </span>
          <Styled.Plus>&nbsp;+&nbsp;</Styled.Plus>
          <span>AI =&nbsp;</span>
          <Styled.DynamicBox>
            <span>{currentText}</span>
            <Styled.Cursor $hide={hideCursor} />
          </Styled.DynamicBox>
        </Styled.LineThree>
      </div>
      <Styled.Scroll $opacity={scrollOpacity}>
        <span>SCROLL</span>
        <Styled.Icon />
      </Styled.Scroll>
    </Styled.Container>
  );
};

export default Banner;
