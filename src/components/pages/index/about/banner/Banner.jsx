import * as Styled from './Banner.styled';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

const INITIAL_ANIMATION_DELAY = 4000; // delay before the first phrase is typed
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

const TOP_OFFSET = 25; // number of pixels to scroll before fading
const BOTTOM_OFFSET = 200; // number of pixels above container to finish fading

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

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
      <motion.div initial="initial" animate="animate" variants={variants}>
        <Styled.LineOne>
          <motion.span variants={variants}>I'm</motion.span>&nbsp;
          <motion.span variants={variants}>just</motion.span>&nbsp;
          <motion.span variants={variants}>a</motion.span>&nbsp;
          <Styled.Underline variants={variants}> dreamer </Styled.Underline>&nbsp;
          <motion.span variants={variants}>who</motion.span>
        </Styled.LineOne>
        <Styled.LineTwo>
          <motion.span variants={variants}>believes</motion.span>&nbsp;
          <motion.span variants={variants}>in</motion.span>&nbsp;
          <motion.span variants={variants}>the</motion.span>&nbsp;
          <Styled.Underline variants={variants}>possibility</Styled.Underline>&nbsp;
          <motion.span variants={variants}>that</motion.span>
        </Styled.LineTwo>
        <Styled.LineThree>
          <motion.span variants={variants}>Web </motion.span>&nbsp;
          <Styled.Plus variants={variants}>+</Styled.Plus>&nbsp;
          <motion.span variants={variants}>AI</motion.span>&nbsp;
          <motion.span variants={variants}>=</motion.span>&nbsp;
          <Styled.DynamicBox>
            <span>{currentText}</span>
            <Styled.Cursor variants={variants} $hide={hideCursor} />
          </Styled.DynamicBox>
        </Styled.LineThree>
      </motion.div>
      <Styled.Scroll
        $opacity={scrollOpacity}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
            delay: 5,
          },
        }}
      >
        <span>SCROLL</span>
        <Styled.Icon />
      </Styled.Scroll>
    </Styled.Container>
  );
};

export default Banner;
