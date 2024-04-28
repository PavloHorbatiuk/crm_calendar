import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { LoginType, RegistrationType } from './types';

const passwordRules = /^(?=.*\d)(?=.*[A-Z]).{5,}$/;
const nameRules = /^[A-Za-z ]*$/;

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

export const validationRegistrationSchema: ObjectSchema<
  Omit<RegistrationType, 'isRememberMe'>
> = Yup.object().shape({
  email: Yup.string()
    .email(errorMessages.email.invalid)
    .required(errorMessages.email.required),
  name: Yup.string()
    .required(errorMessages.name.required)
    .min(3)
    .max(40)
    .matches(nameRules, 'Please enter valid name'),
  password: Yup.string()
    .required(errorMessages.password.required)
    .matches(passwordRules, errorMessages.password.weak),
  confirmPassword: Yup.string()
    .required(errorMessages.confirmPassword.required)
    .oneOf([Yup.ref('password')], errorMessages.confirmPassword.mismatch),
});
