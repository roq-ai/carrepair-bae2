import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  status: yup.string().required(),
  mechanic_id: yup.string().nullable().required(),
  appointment_id: yup.string().nullable().required(),
});
