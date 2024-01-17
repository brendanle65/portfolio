import * as Styled from './Services.styled';

// todo: change this design to https://www.ashcamp.co/info

/**
 * The Services component outlines my various value propositions to potential clients/employers.
 */
const Services = () => (
  <Styled.Container id="services">
    <Styled.Title>I can help you with...</Styled.Title>

    <Styled.Grid>
      <Styled.Enumeration>(a)</Styled.Enumeration>
      <div>
        <h3>Web Design</h3>
        <Styled.Paragraph>
          From ideation to wireframing, prototyping, and testing, I can help you build compelling websites and web
          applications that absolutely delight users. I am passionate about crafting responsive, accessible, and
          engaging experiences, and I can find the right design solution to elevate your project and brand.
        </Styled.Paragraph>
      </div>

      <Styled.Enumeration>(b)</Styled.Enumeration>
      <div>
        <h3>Web Development</h3>
        <Styled.Paragraph>
          I can turn your designs into reality using my experience in the latest web technologies and best practices.
          I’m a flexible developer who can build simple websites, ecommerce platforms, chrome extensions, web apps, and
          so much more, using either website builders or custom code, depending on which approach is best.
        </Styled.Paragraph>
      </div>

      <Styled.Enumeration>(c)</Styled.Enumeration>
      <div>
        <h3>UX Research & Strategy</h3>
        <Styled.Paragraph>
          Using my combined background in statistics and UX design, I can help you identify market trends, understand
          your users better, and spot business opportunities. I can guide you with a strategic, data-driven roadmap.
        </Styled.Paragraph>
      </div>

      <Styled.Enumeration>(d)</Styled.Enumeration>
      <div>
        <h3>AI Integration</h3>
        <Styled.Paragraph>
          With a strong understanding of AI, I can help integrate and customize technologies such as chatbots,
          recommendation engines, and image generation, to your specific-customer-and-business-needs, to help elevate
          your user-experiences.
        </Styled.Paragraph>
      </div>
    </Styled.Grid>
  </Styled.Container>
);

export default Services;
