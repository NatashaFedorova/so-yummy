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
