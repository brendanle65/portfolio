import Header from '@/components/nav/header';

import Intro from '@/components/sections/intro';
import About from '@/components/sections/about';
import Portfolio from '@/components/sections/portfolio';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';

const HomePage = () => (
  <>
    <Header />
    <main>
      <Intro />
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  </>
);

export default HomePage;
