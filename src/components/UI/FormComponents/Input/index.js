import { ErrorMessage, useField } from 'formik';
import { Container } from './styles';

const Input = ({ label, ...props }) => {
  const [inputProps, meta] = useField(props);

  const id = props.id || props.name;

  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} {...props} />
      <div className="error-message">
        {meta.error && meta.touched && <ErrorMessage name={props.name} />}
      </div>
    </Container>
  );
};

export default Input;
