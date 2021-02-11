import { Container, HeaderNav, NavItem, NavLinks, NavLogo } from './styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import navLinks from '../../../utils/NavLinks';

function Header() {
  const [transparentHeader, setTransparentHeader] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  function handleMenuMobileClick() {
    setIsMobile(!isMobile);
  }

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 30) {
        setTransparentHeader(false);
      } else {
        setTransparentHeader(true);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container isMobile={isMobile} transparentHeader={transparentHeader}>
      <HeaderNav className="container">
        <NavLogo>
          <AnchorLink onClick={() => setIsMobile(false)} href="#main">
            <h1>BRA Construtora</h1>
          </AnchorLink>
        </NavLogo>
        <NavItem>
          <button className="mobile__menu" onClick={handleMenuMobileClick}>
            <FiMenu
              color={transparentHeader && !isMobile ? '#fff' : '#000'}
              style={isMobile && { position: 'fixed' }}
              size={32}
            />
          </button>
        </NavItem>
        <NavLinks
          transparentHeader={transparentHeader}
          isMobile={isMobile}
          style={isMobile ? { display: 'flex' } : {}}
        >
          {navLinks.map((item, key) => (
            <NavItem key={key} onClick={() => setIsMobile(false)}>
              <AnchorLink href={item.url}>{item.name}</AnchorLink>
            </NavItem>
          ))}

          <NavItem className="btn__login">
            <Link to="login">Entrar</Link>
          </NavItem>
        </NavLinks>
      </HeaderNav>
    </Container>
  );
}

export default Header;
