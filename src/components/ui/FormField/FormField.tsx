import { InputType } from '@/common/const';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type InputProps<T extends FieldValues> = {
  label: string;
  register: UseFormRegister<T>;
  required: boolean;
  error: string | undefined;
  name: Path<T>;
  type?: InputType;
};

function Input<T extends FieldValues>(props: InputProps<T>) {
  const {
    label,
    register,
    required,
    error,
    type = InputType.TEXT,
    name,
  } = props;

  return (
    <>
      {type === InputType.TEXT ? (
        <div className="pt-[2.063rem] flex flex-col ">
          <label className="pl-1.5 capitalize">{label}</label>
          <div className="pt-4">
            <input
              {...register(name, { required })}
              className={`${error ? 'border border-rose' : ''}`}
            />
            <p className="text-rose">{error}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <input
              type={type}
              className="w-5 h-5"
              {...register(name, { required })}
            />
            <label className="ms-2  text-gray dark:text-gray capitalize">
              {label}
            </label>
          </div>
        </>
      )}
    </>
  );
}

export default Input;