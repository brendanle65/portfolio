import * as Styled from './Contact.styled';
import EmailMe from '@/components/misc/email-me';

/**
 * The Contact component outlines my current employment status and how to contact me.
 */
const Contact = () => (
  <Styled.Container id="contact">
    <Styled.Title>
      Come say <Styled.Accent>hello!</Styled.Accent>
    </Styled.Title>

    <Styled.Hire>Want to hire me?</Styled.Hire>
    <Styled.Flex>
      <Styled.Paragraph>
        I am currently based in Salt Lake City, Utah
        <br /> and actively seeking opportunities for both <br /> freelance and full-time work. I am open to <br />{' '}
        relocating, if necessary.
      </Styled.Paragraph>
      <EmailMe />
    </Styled.Flex>
  </Styled.Container>
);

export default Contact;
