import styled from 'styled-components';

export const Container = styled.header`
  height: ${({ isMobile }) => (isMobile ? '100vh' : '')};
  background: ${({ transparentHeader, isMobile }) =>
    transparentHeader && !isMobile ? 'transparent' : '#fff'};
  display: ${({ isMobile }) => (isMobile ? 'flex' : '')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  transition: all 400ms ease;
  box-shadow: ${({ transparentHeader }) =>
    transparentHeader ? 'transparent' : '1px 1px 11px rgba(0, 0, 0, 0.5)'};
  z-index: 99999;
`;

export const HeaderNav = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 400ms ease;
`;

export const NavItem = styled.li`
  button.mobile__menu {
    display: none;
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    svg {
      top: 1.5rem;
      right: 3.5rem;
    }

    @media (max-width: 1100px) {
      display: flex;
    }
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    transition: color 400ms ease;

    :hover {
      color: var(--main-color);
    }

    svg {
      margin-right: 0.3rem;
    }
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  transition: all 400ms ease;
  align-items: flex-start;
  color: ${({ transparentHeader, isMobile }) =>
    transparentHeader && !isMobile ? '#fff' : '#000'};
  flex-direction: ${({ isMobile }) => (isMobile ? 'column' : 'row')};
  justify-content: center;

  .btn__login {
    a {
      padding: 0.5rem 1rem;
      border-radius: 0.3rem;
      cursor: pointer;
      border: 1px solid var(--main-color);
      transition: background 400ms ease;

      :hover {
        background: var(--main-color);
        color: #fff;
      }
    }
  }

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const NavLogo = styled.li`
  a {
    h1 {
      color: var(--main-color);
    }
  }
`;
