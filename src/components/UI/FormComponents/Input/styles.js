import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  input {
    border: 0;
    border-radius: 0.3rem;
    border: 1px solid #ccc;
    padding: 1rem 1.5rem;
    margin: 0.5rem 0;
    width: 100%;
  }

  .error-message {
    color: red;
  }
`;
