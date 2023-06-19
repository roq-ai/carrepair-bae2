import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  service_id: yup.string().nullable().required(),
  receptionist_id: yup.string().nullable().required(),
});
