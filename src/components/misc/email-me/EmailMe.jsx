import * as Styled from './EmailMe.styled';

/**
 * The EmailMe component renders an email call to action.
 */
const EmailMe = () => (
  <Styled.Block>
    <span>
      Contact me and let’s work together, it’s just easy as <br /> writing an email:{' '}
    </span>
    <Styled.Email href="mailto:brendan.mi.le@outlook.com" external>
      brendan.mi.le@outlook.com
    </Styled.Email>
  </Styled.Block>
);

export default EmailMe;
