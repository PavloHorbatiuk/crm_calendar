export enum InputType {
  TEXT = 'text',
  CHECKBOX = 'checkbox',
  PASSWORD = 'password',
  DATE = 'date',
}

export const errorMessages = {
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
  dateTime: {
    required: 'Date and time must be required',
    invalid: 'Date is incorrect',
  },
  price: {
    required: 'Prise and time must be required',
  },
};
