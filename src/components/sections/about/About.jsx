import Banner from './banner';
import Biography from './biography';
import Mantra from './mantra';

/**
 * The AboutPage page component details who I am. It renders my
 * mission statement, the services I offer, and my biography.
 */
const About = () => (
  <>
    <Banner />
    <div id="about">
      <Biography />
    </div>
    <Mantra />
  </>
);

export default About;
