import { useYupValidationResolver } from '@/common/hooks/useYupValidationResolver';
import { eventValidSchema } from './eventValidation';
import { useForm } from 'react-hook-form';
import FormField from '../ui/FormField/FormField';
import { InputType } from '@/common/const';
import { defaultValues } from './initValuesEvent';
import { useEventStore } from '@/store/eventStore';
import { Alert } from '../ui/Alert/Alert';

export interface EventFormTypes {
  name: string;
  dateTime: Date;
  price: number;
}

export interface EventFormProps {
  onSuccess: () => void;
}

function EventForm({ onSuccess }: EventFormProps) {
  const resolver = useYupValidationResolver<EventFormTypes>(eventValidSchema);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<EventFormTypes>({
    mode: 'onChange',
    resolver,
    defaultValues,
  });
  const { createEvent, success, error: responseError } = useEventStore();
  const onSubmit = (data: EventFormTypes) => {
    console.log(data);
    createEvent({ ...data, isDone: false });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField<EventFormTypes>
        name={'name'}
        error={errors?.name?.message}
        type={InputType.TEXT}
        label={'Name'}
        required
        register={register}
      />
      <FormField
        name={'dateTime'}
        error={errors?.dateTime?.message}
        type={InputType.DATE}
        label={'Date and time'}
        required
        register={register}
      />
      <FormField
        name={'price'}
        error={errors?.price?.message}
        type={InputType.NUMBER}
        label={'Price'}
        required
        register={register}
      />

      {responseError && (
        <Alert className={'mt-[2.063rem]'} text={responseError} />
      )}

      <div className="mt-8 gap-4 flex justify-end">
        <button type="submit" className="btn-blue">
          Save
        </button>
        <button
          type="button"
          className="btn-blue-outline"
          onClick={() => onSuccess}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EventForm;
