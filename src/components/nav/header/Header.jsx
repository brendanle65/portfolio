import * as Styled from './Header.styled';
import { SOCIALS } from '@/constants/socials';

// i guess my plan for the header is to just collapse it to hamburger menu anyways
// with transparent background for feedback

/**
 * The Header component renders the navbar on the top of each page.
 */
const Header = () => (
  <Styled.Container>
    <Styled.Brand>
      <Styled.Memoji />
      <Styled.Name>
        <div>Brendan</div>
        <Styled.Flex>
          <span>Le</span>
          <Styled.Line />
        </Styled.Flex>
      </Styled.Name>
    </Styled.Brand>
    <Styled.Nav>
      <Styled.Pages>
        {['intro', 'about', 'portfolio', 'services', 'contact'].map((link, idx) => (
          <Styled.PageLink key={idx} href={`#${link}`} scroll={true}>
            {link}
          </Styled.PageLink>
        ))}
      </Styled.Pages>
      <Styled.Socials>
        {SOCIALS.map(({ href, icon }, idx) => (
          <Styled.SocialLink key={idx} href={href} external $rotateRight={idx % 2 === 0}>
            <Styled.Icon as={icon} />
          </Styled.SocialLink>
        ))}
      </Styled.Socials>
    </Styled.Nav>
  </Styled.Container>
);

export default Header;
