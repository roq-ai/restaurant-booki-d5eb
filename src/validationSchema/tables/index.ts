import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  number: yup.number().integer().required(),
  capacity: yup.number().integer().nullable(),
  location_description: yup.string().nullable(),
  status: yup.string().nullable(),
  restaurant_id: yup.string().nullable().required(),
});
