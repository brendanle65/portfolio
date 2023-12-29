import Head from 'next/head';
import { AnimatePresence, motion } from 'framer-motion';

import { ThemeProvider } from 'styled-components';
import { THEME } from '@/constants/theme';

import '../styles/reset.css';
import '../styles/global.css';

/**
 * The App component is NextJS's special wrapper that initializes the site.
 * Here, is a good place import css, and inject state management, amongst other things.
 */
const App = (props) => {
  const { Component, pageProps, router } = props;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="front-end, apps, web developer, software, freelance, website, portfolio" />
        <meta name="author" content="Brendan LE" />
        <meta
          name="description"
          content="The portfolio of Brendan Le, a web developer based in Salt Lake City, Utah."
        />
        <title>Brendan Le - Web Developer</title>
      </Head>
      <ThemeProvider theme={THEME}>
        <AnimatePresence mode="wait">
          <motion.div key={router.route}>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
