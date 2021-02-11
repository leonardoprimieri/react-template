import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 4rem 0;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
  }

  span {
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--main-color);
  }
`;
