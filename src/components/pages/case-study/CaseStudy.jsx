import Header from '@/components/nav/header';
import Footer from '@/components/nav/footer';
import Portfolio from '@/components/misc/portfolio';
import Banner from './banner';
import Brief from './brief';
import Parallax from './parallax';

/**
 * The CaseStudy component is a template for outlining a project's case study.
 */
const CaseStudy = (props) => {
  const { banner, text, gallery, exclude } = props;
  const { brief, approach, summary } = text;

  return (
    <>
      <Header secondary />
      <main>
        <Banner {...banner} />
        <Brief paragraphs={brief} />
        <Parallax summary={summary} approach={approach} images={gallery} />
        <Portfolio secondary exclude={exclude} />
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;
