import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().nullable(),
  ingredients: yup.string().nullable(),
  preparation_time: yup.number().integer().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
