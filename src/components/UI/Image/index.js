import { useState } from 'react';
import { Container, Skeleton } from './styles';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Container>
      {skeleton && <Skeleton></Skeleton>}

      <img onLoad={handleLoad} alt={alt} {...props} />
    </Container>
  );
};

export default Image;
