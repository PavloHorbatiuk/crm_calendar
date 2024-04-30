import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { eventValidSchema } from './eventValidation';
import { useForm } from 'react-hook-form';
import FormField from '../ui/FormField/FormField';
import { InputType } from '@/common/const';

export interface EventType {
  name: string;
  dateTime: string;
  price: number;
}

function EventForm() {
  const resolver = useYupValidationResolver<EventType>(eventValidSchema);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EventType>({
    mode: 'onBlur',
    resolver,
  });
  const onSubmit = (data: EventType) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[25.188rem] w-96">
      <FormField<EventType>
        name={'name'}
        error={errors?.name?.message}
        type={InputType.TEXT}
        label={'Name'}
        required
        register={register}
      />
      <FormField
        name={'dateTime'}
        error={errors?.name?.message}
        type={InputType.DATE}
        label={'Name'}
        required
        register={register}
      />
    </form>
  );
}

export default EventForm;
