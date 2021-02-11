import React from 'react';
import Text from '../Text';

import { Container } from './styles';

const SectionTitle = ({ title, description }) => {
  return (
    <Container>
      <Text tag="h1" variant="titleText" color="var(--main-color)">
        {title}
      </Text>
      <Text tag="p" variant="paragraphText">
        {description}
      </Text>
    </Container>
  );
};

export default SectionTitle;
