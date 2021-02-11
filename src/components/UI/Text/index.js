import styled, { css } from 'styled-components';

const TextVariants = {
  paragraphText: css`
    font-size: 1.3rem;
    line-height: 1.3;
  `,

  titleText: css`
    font-size: 2rem;
    line-height: 1.5;
  `,

  smallText: css`
    font-size: 1rem;
    line-height: 1;
  `,
};

const Container = styled.span`
  ${({ variant }) => TextVariants[variant]};
`;

const Text = ({ tag, variant, children, color }) => {
  return (
    <Container variant={variant} as={tag} style={{ color: color }}>
      {children}
    </Container>
  );
};

Text.defaultProps = {
  tag: 'span',
};

export default Text;
