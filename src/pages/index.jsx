import Header from '@/components/nav/header';
import Footer from '@/components/nav/footer';

import About from '@/components/pages/index/about';
import Portfolio from '@/components/misc/portfolio';
import Services from '@/components/pages/index/services';
import Contact from '@/components/pages/index/contact';

/**
 * The HomePage component is my landing page. It renders information about me,
 * my works, what services I offer, and how to contact me.
 */
const HomePage = () => (
  <>
    <Header />
    <main>
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
    <Footer secondary />
  </>
);

export default HomePage;
