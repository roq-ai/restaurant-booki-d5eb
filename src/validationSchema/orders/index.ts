import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  total_price: yup.number().integer().nullable(),
  status: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  menu_id: yup.string().nullable().required(),
});
