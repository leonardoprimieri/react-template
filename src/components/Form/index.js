import { Container } from './styles';
import { Formik, Form } from 'formik';

import Input from '../../components/UI/FormComponents/Input';
import Button from '../../components/UI/FormComponents/Button';

import { loginUserSchema } from '../../utils/FormSchema';

const Login = () => {
  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Container>
      <Formik
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
        initialValues={{
          username: '',
          password: '',
        }}
      >
        {() => (
          <Form style={{ width: '100%' }}>
            <Input type="text" name="username" id="username" label="Usuário" />
            <Input
              type="password"
              name="password"
              id="password"
              label="Senha"
            />
            <Button type="submit">Entrar</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
