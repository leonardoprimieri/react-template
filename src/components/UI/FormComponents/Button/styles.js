import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  button {
    border: 0;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    padding: 1rem 1.5rem;
    margin: 0.5rem 0;
    width: 100%;
    cursor: pointer;
    transition: all 400ms ease;

    background: var(--main-color);
    font-size: 1rem;
    color: #fff;
    font-family: 'Raleway', sans-serif;

    :hover,
    :focus {
      background: transparent;
      border: 1px solid var(--main-color);
      color: var(--main-color);
    }
  }
`;
