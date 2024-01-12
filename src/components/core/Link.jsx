import NextLink from 'next/link';
import withHover from '../hocs/withHover';

/**
 * The Link component determines the type of link tag to render
 * and changes the cursor when hovered over.
 */
const Link = ({ external = false, ...rest }) => {
  const Component = external ? 'a' : NextLink;

  return <Component {...rest} />;
};

export default withHover(Link);
