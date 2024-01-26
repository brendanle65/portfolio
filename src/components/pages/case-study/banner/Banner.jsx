import * as Styled from './Banner.styled';

/**
 * The Banner component renders the introductory information for a case study.
 */
const Banner = ({ name, description, link, industry, timeline, client, services, image }) => (
  <Styled.Container>
    <div>
      <Styled.Title>{name}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Details>
        <div>
          <Styled.Subtitle>Visit</Styled.Subtitle>
          <Styled.Link href={link}>{link}</Styled.Link>
        </div>
        <div>
          <Styled.Subtitle>Industry</Styled.Subtitle>
          <Styled.Content>{industry}</Styled.Content>
        </div>
        <div>
          <Styled.Subtitle>Timeline</Styled.Subtitle>
          <Styled.Content>{timeline}</Styled.Content>
        </div>
        <div>
          <Styled.Subtitle>Client</Styled.Subtitle>
          <Styled.Content>{client}</Styled.Content>
        </div>
        <div>
          <Styled.Subtitle>Services</Styled.Subtitle>
          {services.map((service, idx) => (
            <Styled.Content key={idx}>{service}</Styled.Content>
          ))}
        </div>
      </Styled.Details>
    </div>
    <Styled.Image src={image} />
  </Styled.Container>
);

export default Banner;
