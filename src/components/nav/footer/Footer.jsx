import * as Styled from './Footer.styled';
import { SOCIALS } from '@/constants/socials';
import EmailMe from '@/components/misc/email-me';

/**
 * The Footer component details extra minor information at the end of each page, such as,
 * how to contact me, where to follow me, and legal information.
 */
const Footer = ({ className, secondary = false }) => (
  <Styled.Container className={className}>
    <Styled.Flex>
      {!secondary && (
        <div>
          <Styled.Title>Want to hire me?</Styled.Title>
          <EmailMe />
        </div>
      )}
      <Styled.Socials>
        {SOCIALS.map(({ href, icon }, idx) => (
          <Styled.SocialLink key={idx} href={href} external $rotateRight={idx % 2 === 0}>
            <Styled.Icon as={icon} />
          </Styled.SocialLink>
        ))}
      </Styled.Socials>
    </Styled.Flex>
    <Styled.Line />
    <Styled.Flex>
      <Styled.Legal>@{new Date().getFullYear()} Brendan Le All Rights Reserved</Styled.Legal>
      <Styled.Built>Loosely designed in Figma and coded in Visual Studio Code by yours truly.</Styled.Built>
    </Styled.Flex>
  </Styled.Container>
);

export default Footer;
