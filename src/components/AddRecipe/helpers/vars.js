import { nanoid } from 'nanoid';

export const quantities = [
  { id: 'gramm', value: 'g' },
  { id: 'kilogram', value: 'kg' },
  { id: 'pound', value: 'lb' },
  { id: 'tbs', value: 'tbs' },
  { id: 'tsp', value: 'tsp' },
];

export const initialIngredients = [
  { id: nanoid(), _id: '', quantity: '' },
  { id: nanoid(), _id: '', quantity: '' },
  { id: nanoid(), _id: '', quantity: '' },
];

export const initialValues = {
  title: '',
  description: '',
  time: '',
  category: '',
};

export const validationMessages = Object.freeze({
  required: { message: 'This field is required' },
  fromLimit: {
    message: 'This field must contain at least 3 characters',
  },
  toLimit: {
    message: 'This field can not contain so much characters',
  },
  wrongExtention: {
    message: 'This field can contain only letters and numbers',
  },
});

export const validationColors = Object.freeze({
  error: '#E74A3B',
  warning: '#F6C23E',
  success: '#3CBC81',
});
