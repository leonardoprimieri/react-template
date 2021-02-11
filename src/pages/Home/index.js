import Image from '../../components/UI/Image';
import Text from '../../components/UI/Text';
import Form from '../../components/Form';

import { Container, Content } from './styles';

const Home = () => {
  return (
    <Container>
      <Content className="container">
        <Text tag="h1" color="#7159c1" variant="titleText">
          Some title...
        </Text>
        <Image
          alt="some image..."
          src="https://images.unsplash.com/photo-1612832021026-375ae70f24bf?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80"
        />
        <Form />
      </Content>
    </Container>
  );
};

export default Home;
