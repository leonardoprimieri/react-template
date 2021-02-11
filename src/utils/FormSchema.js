import * as Yup from 'yup';
const requiredMessage = 'Por favor, preencha esse campo';

export const loginUserSchema = Yup.object().shape({
  username: Yup.string().required(requiredMessage),
  password: Yup.string()
    .min(3, 'A senha deve ter no mínimo 3 caracteres')
    .required(requiredMessage),
});
