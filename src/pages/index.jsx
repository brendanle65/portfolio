import Header from '@/components/nav/header';

import About from '@/components/sections/about';
import Portfolio from '@/components/sections/portfolio';
import Services from '@/components/sections/services';
import Contact from '@/components/sections/contact';

/**
 * The HomePage component is my landing page. It renders information about me,
 * my works, what services I offer, and how to contact me.
 */
const HomePage = () => (
  <>
    <Header />
    <main>
      <About />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  </>
);

export default HomePage;
