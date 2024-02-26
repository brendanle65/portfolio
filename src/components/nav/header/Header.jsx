import * as Styled from './Header.styled';
import { SOCIALS } from '@/constants/socials';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
};

/**
 * The Header component renders the navbar on the top of each page.
 */
const Header = ({ secondary = false }) => {
  const { pathname, asPath } = useRouter();

  useEffect(() => {
    if (asPath.includes('#')) {
      const hash = asPath.substring(asPath.indexOf('#'));
      location.hash = '';
      location.hash = hash;
    }
  }, [pathname]);

  return (
    <Styled.Container $secondary={secondary} initial="initial" animate="animate" variants={variants}>
      <motion.div variants={variants}>
        <Styled.Brand href="/">
          <Styled.Memoji />
          <Styled.Name>
            <div>Brendan</div>
            <Styled.Flex>
              <span>Le</span>
              <Styled.Line />
            </Styled.Flex>
          </Styled.Name>
        </Styled.Brand>
      </motion.div>
      <Styled.Nav>
        <Styled.Pages>
          {['about', 'portfolio', 'services', 'contact'].map((link, idx) => (
            <Styled.PageLink key={idx} href={pathname === '/' ? `#${link}` : `/#${link}`}>
              <motion.span variants={variants}>{link}</motion.span>
            </Styled.PageLink>
          ))}
        </Styled.Pages>
        <Styled.Socials>
          {SOCIALS.map(({ href, icon }, idx) => (
            <Styled.SocialLink key={idx} href={href} external $rotateRight={idx % 2 === 0}>
              <motion.span variants={variants}>
                <Styled.Icon as={icon} />
              </motion.span>
            </Styled.SocialLink>
          ))}
        </Styled.Socials>
      </Styled.Nav>
    </Styled.Container>
  );
};

export default Header;
