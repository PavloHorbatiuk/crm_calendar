import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { LoginType } from './LoginForm';

export const passwordRules = /^(?=.*\d)(?=.*[A-Z]).{5,}$/;

const errorMessages = {
  email: {
    required: 'Email is required',
    invalid: 'Invalid email',
  },
  password: {
    required: 'Password is required',
    weak: 'Please create a stronger password',
  },
  name: {
    required: 'Name is required',
    invalid: 'To short name',
  },
  confirmPassword: {
    required: 'Confirm password must be required',
    mismatch: 'Your passwords do not match',
  },
};

export const validationLoginSchema: ObjectSchema<
  Omit<LoginType, 'isRememberMe'>
> = Yup.object().shape({
  email: Yup.string()
    .email(errorMessages.email.invalid)
    .required(errorMessages.email.required),
  password: Yup.string().required(errorMessages.password.required),
});
