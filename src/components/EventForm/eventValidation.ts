import * as Yup from 'yup';
import { ObjectSchema } from 'yup';
import { errorMessages } from '@/common/const';
import { EventType } from './EventForm';

export const eventValidSchema: ObjectSchema<EventType> = Yup.object().shape({
  name: Yup.string()
    .email(errorMessages.name.invalid)
    .required(errorMessages.name.required),
  dateTime: Yup.string().required(errorMessages.dateTime.required),
  price: Yup.number().required(errorMessages.price),
});
